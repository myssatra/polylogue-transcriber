import React from 'react'
import { Transcription } from '../lib/types'

type TranscriptionsListProps = {
    transcriptions?: Transcription[] | null
}

export default function TranscriptionsList({ transcriptions }: TranscriptionsListProps ) {
    return(
        <div className='m-20 w-[900px] bg-gray-900 text-gray-300'>
            {/* {transcriptions?.map(transcription => transcription.)} */}
        </div>
    )
}
