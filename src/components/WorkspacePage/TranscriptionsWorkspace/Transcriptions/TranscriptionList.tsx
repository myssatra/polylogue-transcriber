import { Affix, Button, Flex, Layout, notification } from 'antd'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { Line, Speaker, Transcription } from '../../../../utils/lib/types'
import { Bubble } from '@ant-design/x'
import { CopyOutlined, ExclamationCircleFilled } from '@ant-design/icons'
import { CustomPlayer } from './CustomPlayer'
import { useAppStore } from '../../../../utils/contexts/AppStoreProvider'
import Animate from 'rc-animate';
import { NULL } from 'sass'
import TranscriptionService from '../../../../utils/services/TranscriptionService'


export const TranscriptionList = observer (() => {
    const [api, contextHolder] = notification.useNotification();

    const appStore = useAppStore();
    const [flexStyle, setFlexStyle] = useState({});

    const transcription: Transcription | null = appStore.selectedTranscription;

    useEffect(() => {
        setFlexStyle(appStore.THEME === true ? {borderWidth: "1px", borderColor: "#767676"} : {borderWidth: "1px", borderColor: "#bcbcbc"})
    },[appStore.THEME]) 

    const openNotification = () => {    
        api.info({
            message: 'Текст скопирован в буфер обмена',
            placement: 'bottomRight',
            icon: <ExclamationCircleFilled style={{color: '#8bc43b', fontSize: '70%'}}/>
        }) 
    }

    return(
        <Layout id='container' className='relative w-full h-[100%]'>
            {contextHolder}
                    <Flex vertical className='border rounded-lg px-[15px] py-[10px] h-full overflow-y-auto' style={flexStyle}>
                        {transcription != null && transcription.lines != null &&
                            transcription.lines.map((line: Line) =>
                            <Bubble className='py-[5px]' key={line.id}
                                header={ transcription.speakers
                                .filter((speaker: Speaker) => speaker.id === line.speakerId)
                                .map((speaker: Speaker) => speaker.name)}

                                content={
                                    <Flex vertical>
                                        {line.content}
                                        <Flex justify='end'>
                                            <Button
                                                color="default" variant="text" size="small"
                                                icon={<CopyOutlined style={{color: '#8bc43b'}}/>}
                                                onClick={() => {
                                                    navigator.clipboard.writeText(line.content)
                                                    openNotification();
                                                    }}/>
                                        </Flex>
                                    </Flex>                                    
                                }
                            /> 
                        )}
                    </Flex>
                
            
            {transcription != null && 
                <Affix offsetBottom={0} target={() => document.getElementById('container')}
                    className='mt-[10px]'>
                        <Flex className='rounded-lg ' style={flexStyle}>
                    <CustomPlayer url={"tupayablyad.mp3"} />
                    </Flex>
                </Affix>
            }            

        </Layout>
    )
})
