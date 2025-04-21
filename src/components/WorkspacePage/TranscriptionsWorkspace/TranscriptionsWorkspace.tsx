import React from 'react'
import {Affix, Flex, Layout, Splitter } from 'antd'
import tl from './TranscriptionsWorkspace.module.scss'
import { observer } from 'mobx-react-lite'
import { TranscriptionList } from './TranscriptionList'
import { Transcription } from '../../../utils/lib/types'

type TranscriptionsListProps = {
    transcriptions?: Transcription[] | null
}

export const TranscriptionsList = observer(({ transcriptions }: TranscriptionsListProps ) => {
    return(
            <Flex className='w-full h-full'>
                <Layout className={`${tl.container}`}>
                    <Splitter >
                        <Splitter.Panel collapsible min="35%" style={{padding: '15px'}}>
                            <Flex vertical className='h-[100%]'>
                                {/* <Affix offsetTop={0} target={() => window} > */}
                                    <TranscriptionList/>
                                {/* </Affix>
                                <Affix offsetBottom={10}  className='h-[8%]'>
                                    <CustomPlayer url=''></CustomPlayer>
                                </Affix> */}
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
