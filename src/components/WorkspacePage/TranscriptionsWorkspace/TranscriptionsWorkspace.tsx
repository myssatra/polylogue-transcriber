import React from 'react'
import { Transcription } from '../../../utils/lib/types'
import {Flex, Layout, Splitter } from 'antd'
import tl from './TranscriptionsWorkspace.module.scss'
import { observer } from 'mobx-react-lite'
import { TranscriptionList } from './TranscriptionList'

type TranscriptionsListProps = {
    transcriptions?: Transcription[] | null
}

export const TranscriptionsList = observer(({ transcriptions }: TranscriptionsListProps ) => {

    
    return(
            <Flex className='w-full h-full'>
                <Layout className={`${tl.container}`}>
                    <Splitter>
                        <Splitter.Panel collapsible min="20%">
                            <Flex vertical className='p-4'>
                                <TranscriptionList />
                            </Flex>
                        </Splitter.Panel>
                        <Splitter.Panel collapsible>
                            <Flex vertical className='p-4'>
                                чат
                            </Flex>
                        </Splitter.Panel>
                    </Splitter>
                </Layout>
            </Flex>
    )
})
