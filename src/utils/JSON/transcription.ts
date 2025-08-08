import { Transcription } from "../lib/types"

export const emilysTranscription: Transcription = {
    id: 1,
    key: '0-0',
    title: "Sample Transcription",
    description: "This is a sample transcription with multiple lines and speakers.",
    isSegmented: true,
    speakersQuantity: 3,
    speakers: [
        { id: 1, name: "Speaker 1" },
        { id: 2, name: "Speaker 2" },
        { id: 3, name: "Speaker 3" }
    ],
    lines: [
        { id: 1, speakerId: 1, transcriptionId: 1, content: "This is the first line of the transcription. It contains a brief introduction to the topic being discussed." },
        { id: 2, speakerId: 2, transcriptionId: 1, content: "The second line continues the discussion, providing more details and insights into the main points." },
        { id: 3, speakerId: 3, transcriptionId: 1, content: "In this third line, another speaker joins the conversation, adding their perspective and opinions." },
        { id: 4, speakerId: 1, transcriptionId: 1, content: "The fourth line sees the first speaker responding to the previous comments, clarifying some points and introducing new ideas." },
        { id: 5, speakerId: 2, transcriptionId: 1, content: "Here, the second speaker elaborates on their earlier statements, providing examples and evidence to support their arguments." },
        { id: 6, speakerId: 3, transcriptionId: 1, content: "The third speaker interjects with a question, seeking clarification on a specific point made by the other speakers." },
        { id: 7, speakerId: 1, transcriptionId: 1, content: "The first speaker answers the question, offering a detailed explanation and additional context to help understand the topic better." },
        { id: 8, speakerId: 2, transcriptionId: 1, content: "The second speaker agrees with the explanation and adds their own thoughts, further enriching the discussion." },
        { id: 9, speakerId: 3, transcriptionId: 1, content: "In this line, the third speaker summarizes the key points discussed so far, highlighting the main takeaways." },
        { id: 10, speakerId: 1, transcriptionId: 1, content: "The final line wraps up the transcription, with the first speaker concluding the discussion and thanking the participants for their contributions." }
    ],
    language: "en",
    owner_id: 1
}
