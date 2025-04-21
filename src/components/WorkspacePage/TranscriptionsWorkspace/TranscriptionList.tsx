import { Affix, Button, Card, Flex, Input, Layout, notification, Space } from 'antd'
import { observer } from 'mobx-react-lite'
import { useEffect, useRef, useState } from 'react'
import TranscriptionService from '../../../utils/services/TranscriptionService'
import { Line, Speaker, Transcription } from '../../../utils/lib/types'
import { Bubble } from '@ant-design/x'
import { CopyOutlined, ExclamationCircleFilled, ExclamationCircleOutlined } from '@ant-design/icons'
import { CustomPlayer } from './CustomPlayer'


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
        <Layout id='container' className='w-full h-[100%]' style={{position: 'relative'}}>
            {contextHolder}
            <Flex vertical className='border border-gray-300 rounded-lg px-[20px] py-[10px]' style={{height: '95vh', overflowY: 'scroll'}} >
                {transcription != null &&
                    lines.map(line =>
                    <Bubble className='py-[5px]' key={line.speakerId}
                        header={speakers
                        .filter(speaker => speaker.id === line.speakerId)
                        .map(speaker => speaker.name)}

                        content={
                            <Flex vertical>
                                {line.content}
                                <Flex>
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
                
                
            <Affix offsetBottom={0} target={() => document.getElementById('container')}
                className='mt-[10px]'>
                    <Flex className='border border-gray-300 rounded-lg '>
                <CustomPlayer url={"tupayablyad.mp3"} />
                </Flex>
            </Affix>

        </Layout>
    )
})
