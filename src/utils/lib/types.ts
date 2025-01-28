import transcriptions from "../JSON/transcriptions"

export type Transcription = {
    id: number,
    title: string,
    description: string,
    isSegmented: boolean,
    speakersQuantity: number,
    speakers: Speaker[],
    lines: Line[],
    language: string,
    creatorId: number
}

export type Line = {
    id: number,
    speakerId: number, //(идентификаторы или объекты целиком?)
    transcriptionId: number,
    content: string,
    //timestamp: AudioTimestamp
}

export type Speaker = {
    id: number,
    name: string,
    // lines?: Line[]
}

export type User = {
    id: number,
    username: string,
    email: string,
    password: string,
    //transriptionIds?: number[]
}

export type Folder = {
    id: number,
    title: string,
    transcriptionsIds?: number[]
}

// get api/folders
// FolderList
// id
// name
// transcriptionList: TranscriptionPreview


// TranscriptionPreview
// id
// name


// TranscriptionDetail

