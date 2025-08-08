import React from 'react'
import { Flex, Layout, Splitter } from 'antd'
import tl from './TranscriptionsWorkspace.module.scss'
import { observer } from 'mobx-react-lite'
import { TranscriptionList } from './Transcriptions/TranscriptionList'
import { Transcription } from '../../../utils/lib/types'
import { Chat } from './Chat/Chat'

type TranscriptionsListProps = {
    transcriptions?: Transcription[] | null
}

export const TranscriptionsList = observer(({ transcriptions }: TranscriptionsListProps ) => {
    return(
            <Flex className='w-full h-full'>
                <Layout className={`${tl.container}`}>
                    <Splitter>
                        <Splitter.Panel collapsible min="35%" className='!overflow-hidden'>
                            <Flex vertical className='h-[100%] p-3'>
                                <TranscriptionList/>
                            </Flex>
                        </Splitter.Panel>
                        <Splitter.Panel collapsible className='!overflow-hidden'>
                            <Flex vertical className='h-[100%] p-3'>
                                <Chat />
                            </Flex>
                        </Splitter.Panel>
                    </Splitter>
                </Layout>
            </Flex>
    )
})
