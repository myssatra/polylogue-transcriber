export{};

export interface IUser{
    id: number,
    login: string,
    email: string,
    password: string
}

export interface ITranscription{
    title: string,
    description: string,
    speakersNumber: number
}