import { Button, Flex, Input, Layout, notification, Space } from 'antd'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import TranscriptionService from '../../../utils/services/TranscriptionService'
import { Line, Speaker, Transcription } from '../../../utils/lib/types'
import { Bubble } from '@ant-design/x'
import { CopyOutlined, ExclamationCircleFilled, ExclamationCircleOutlined } from '@ant-design/icons'


{/* <Flex>
    {speakers
    .filter(speaker => speaker.id === line.speakerId)
    .map(speaker => (
        // <Input key={speaker.id} defaultValue={speaker.name}></Input>
    ))}
</Flex> */}



export const TranscriptionList = observer (() => {
const [transcription, setTranscription] = useState<Transcription | null>(null);
const [lines, setLines] = useState<Line[]>([]);
const [speakers, setSpeakers] = useState<Speaker[]>([]);
const [api, contextHolder] = notification.useNotification();

    const openNotification = () => {
        api.info({
            message: 'Тект скопирован в буфер обмена',
            placement: 'bottomRight',
            icon: <ExclamationCircleFilled style={{color: '#8bc43b', fontSize: '70%'}}/>
        }) 
    }

    useEffect(() => {
        (async() => {
            const transcription = await TranscriptionService.getEmilysTranscription();
            setTranscription(transcription);
            setLines(transcription? transcription.lines : []);
            setSpeakers(transcription.speakers);
            console.log('lines: : ',transcription.lines)
        })()
    },[])

    return(
        <Layout>
            {contextHolder}
            <Flex vertical>
                {transcription != null &&
                    lines.map( line =>
                    <Bubble className='p-3' key={line.speakerId}
                        header={speakers
                        .filter(speaker => speaker.id === line.speakerId)
                        .map(speaker => speaker.name)}

                        content={
                            <Flex vertical>
                                {line.content}
                                <Flex className='place-content-end'>
                                    <Button className='justify-self-end'
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
        </Layout>
    )
})
