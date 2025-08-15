import { Transcription } from "../lib/types"

export const emilysTranscription: Transcription = {
    id: 1,
    //key: '0-0',
    name: "Sample Transcription",
    description: "This is a sample transcription with multiple lines and speakers.",
    isSegmented: true,
    speakersQuantity: 3,
    speakers: [
        { id: 1, name: "Speaker 1" },
        { id: 2, name: "Speaker 2" },
        { id: 3, name: "Speaker 3" }
    ],
    comments: [
        { id: 1, speaker_id: 1, transcript_id: 1, source_content: "This is the first line of the transcription. It contains a brief introduction to the topic being discussed." },
        { id: 2, speaker_id: 2, transcript_id: 1, source_content: "The second line continues the discussion, providing more details and insights into the main points." },
        { id: 3, speaker_id: 3, transcript_id: 1, source_content: "In this third line, another speaker joins the conversation, adding their perspective and opinions." },
        { id: 4, speaker_id: 1, transcript_id: 1, source_content: "The fourth line sees the first speaker responding to the previous comments, clarifying some points and introducing new ideas." },
        { id: 5, speaker_id: 2, transcript_id: 1, source_content: "Here, the second speaker elaborates on their earlier statements, providing examples and evidence to support their arguments." },
        { id: 6, speaker_id: 3, transcript_id: 1, source_content: "The third speaker interjects with a question, seeking clarification on a specific point made by the other speakers." },
        { id: 7, speaker_id: 1, transcript_id: 1, source_content: "The first speaker answers the question, offering a detailed explanation and additional context to help understand the topic better." },
        { id: 8, speaker_id: 2, transcript_id: 1, source_content: "The second speaker agrees with the explanation and adds their own thoughts, further enriching the discussion." },
        { id: 9, speaker_id: 3, transcript_id: 1, source_content: "In this line, the third speaker summarizes the key points discussed so far, highlighting the main takeaways." },
        { id: 10, speaker_id: 1, transcript_id: 1, source_content: "The final line wraps up the transcription, with the first speaker concluding the discussion and thanking the participants for their contributions." }
    ],
    language: "en",
    owner_id: 1
}
