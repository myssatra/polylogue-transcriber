import { Bubble, Sender } from "@ant-design/x"
import { Affix, Button, Flex, Layout, notification } from "antd"
import { observer } from "mobx-react-lite"
import { useAppStore } from "../../../../utils/contexts/AppStoreProvider";
import { useEffect, useState } from "react";
import { AIchat, ChatMessage } from "../../../../utils/lib/types";
import TranscriptionService from "../../../../utils/services/TranscriptionService";
import { ExclamationCircleFilled } from "@ant-design/icons";

export const Chat = observer(() => {
    const[AI_chat, setAIchat] = useState<AIchat | null>(null)
    const[chatMessages, setChatMessages] = useState<ChatMessage[]>([])

    const [bubbleLoading, setBubbleLoading] = useState<boolean>(false);
    const [senderLoading, setSenderLoading] = useState<boolean>(false);

    const [userMessageValue, setUserMessageValue] = useState<string>('');

    const appStore = useAppStore();
    const [flexStyle, setFlexStyle] = useState({});

    useEffect(() => {
        setFlexStyle(appStore.THEME === true ? {borderWidth: "1px", borderColor: "#767676"} : {borderWidth: "1px", borderColor: "#bcbcbc"})
    },[appStore.THEME]) 

    useEffect(() => {
        (async() => {
            const ai_chat = await TranscriptionService.getAIchat();
            setAIchat(ai_chat);
            setChatMessages(ai_chat.messages);
        })()
    },[])

    const [api, contextHolder] = notification.useNotification();
    const openNotification = () => {
        api.info({
            message: 'Тект скопирован в буфер обмена',
            placement: 'bottomRight',
            icon: <ExclamationCircleFilled style={{color: '#8bc43b', fontSize: '70%'}}/>
        }) 
    }

    return(        
        <Layout id='container' className='relative w-full min-h-full'>
            {contextHolder}
            <Flex vertical className='rounded-lg px-[15px] py-[10px] h-full overflow-y-auto flex-col-reverse' style={flexStyle}>
                <Flex vertical className="h-fit pb-[60px]">
                    {AI_chat != null &&
                        chatMessages.map(message => 
                            <Bubble placement={message.sender === 'User' ? 'end' : 'start'}
                                loading={message.sender === 'User' ? false : bubbleLoading}
                                className="py-[5px]"
                                key={message.id}
                                content={
                                    <Flex vertical className="max-w-[550px]">
                                        {message.content}
                                    </Flex>
                                }
                            />
                        )
                    }
                </Flex>
                <Flex className="absolute bottom-3 inset-x-0 w-full px-[15px] pr-[30px] self-center">
                    <Sender value={userMessageValue} placeholder="Чем я могу помочь?" loading={senderLoading}
                        onChange={(v) => {setUserMessageValue(v)}}
                        onSubmit={() => {
                            setUserMessageValue('')
                            setSenderLoading(true);
                            }}
                        onCancel={() => {setSenderLoading(false)}}  />
                </Flex>
            </Flex>
        </Layout>     
    )
})

