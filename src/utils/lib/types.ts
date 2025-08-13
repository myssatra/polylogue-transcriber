import transcriptions from "../JSON/transcriptions"

export type Transcription = {
    id: number,
    key: string,
    name: string,
    description: string,
    isSegmented: boolean,
    speakersQuantity: number,
    speakers: Speaker[],
    lines: Line[],
    language: string,
    owner_id: number
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
    // owner_id: number,
    // is_deleted: boolean,
    // lines?: Line[]
}

export type User = {
    id: number,
    username: string,
    email: string,
    password: string,
    //transriptionIds?: number[]
}

export type UserRole = {
    user_id: number,
    role_id: number,
    id: number,
    is_deleted: boolean
}

export type Directory = {
    id: number,
    name: string,
    transcripts: Transcription[]
}

export type ChatMessage = {
    id: number,
    sender: string,
    content: string
}

export type AIchat = {
    id: string,
    title: string,
    transcription_id: number,
    messages: ChatMessage[]
}

export type Treeview = {
    directories: Directory[]
}

// get api/Directorys
// DirectoryList
// id
// name
// transcriptionList: TranscriptionPreview


// TranscriptionPreview
// id
// name


// TranscriptionDetail

