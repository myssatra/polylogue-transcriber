import { Transcription } from "../lib/types";

const transcriptions: Transcription[] = [
  {
    id: 1,
    title: "Interview with John Doe",
    description: "An interview with John Doe about his latest book.",
    isSegmented: true,
    speakersQuantity: 2,
    speakers: [
      { id: 1, name: "Interviewer" },
      { id: 2, name: "John Doe" }
    ],
    lines: [
      { id: 1, speakerId: 1, transcriptionId: 1, content: "Welcome to the show, John." },
      { id: 2, speakerId: 2, transcriptionId: 1, content: "Thank you for having me." }
    ],
    language: "English",
    creatorId: 5
  },
  {
    id: 2,
    title: "Tech Conference Keynote",
    description: "Keynote speech from the annual tech conference.",
    isSegmented: true,
    speakersQuantity: 1,
    speakers: [
      { id: 1, name: "Keynote Speaker" }
    ],
    lines: [
      { id: 1, speakerId: 1, transcriptionId: 2, content: "Good morning everyone, welcome to the conference." }
    ],
    language: "English",
    creatorId: 1
  },
  {
    id: 3,
    title: "Panel Discussion on AI",
    description: "A panel discussion on the future of artificial intelligence.",
    isSegmented: true,
    speakersQuantity: 4,
    speakers: [
      { id: 1, name: "Moderator" },
      { id: 2, name: "AI Expert 1" },
      { id: 3, name: "AI Expert 2" },
      { id: 4, name: "AI Expert 3" }
    ],
    lines: [
      { id: 1, speakerId: 1, transcriptionId: 3, content: "Let's start the discussion." },
      { id: 2, speakerId: 2, transcriptionId: 3, content: "AI is the future." }
    ],
    language: "English",
    creatorId: 17
  },
  {
    id: 4,
    title: "Podcast Episode 1",
    description: "First episode of the tech podcast.",
    isSegmented: true,
    speakersQuantity: 3,
    speakers: [
      { id: 1, name: "Host" },
      { id: 2, name: "Guest 1" },
      { id: 3, name: "Guest 2" }
    ],
    lines: [
      { id: 1, speakerId: 1, transcriptionId: 4, content: "Welcome to the podcast." },
      { id: 2, speakerId: 2, transcriptionId: 4, content: "Thanks for having us." }
    ],
    language: "English",
    creatorId: 8
  },
  {
    id: 5,
    title: "University Lecture",
    description: "Lecture on quantum physics.",
    isSegmented: true,
    speakersQuantity: 1,
    speakers: [
      { id: 1, name: "Professor" }
    ],
    lines: [
      { id: 1, speakerId: 1, transcriptionId: 5, content: "Today we will discuss quantum mechanics." }
    ],
    language: "English",
    creatorId: 3
  },
  {
    id: 6,
    title: "Business Meeting",
    description: "Quarterly business meeting transcription.",
    isSegmented: true,
    speakersQuantity: 5,
    speakers: [
      { id: 1, name: "CEO" },
      { id: 2, name: "CFO" },
      { id: 3, name: "CTO" },
      { id: 4, name: "HR Manager" },
      { id: 5, name: "Marketing Director" }
    ],
    lines: [
      { id: 1, speakerId: 1, transcriptionId: 6, content: "Let's start the meeting." },
      { id: 2, speakerId: 2, transcriptionId: 6, content: "Here are the financial reports." }
    ],
    language: "English",
    creatorId: 19
  },
  {
    id: 7,
    title: "Documentary Narration",
    description: "Narration for a documentary on climate change.",
    isSegmented: false,
    speakersQuantity: 0,
    speakers: [],
    lines: [
      { id: 1, speakerId: 1, transcriptionId: 7, content: "Climate change is a global issue." }
    ],
    language: "English",
    creatorId: 14
  },
  {
    id: 8,
    title: "TED Talk",
    description: "Inspirational TED talk on innovation.",
    isSegmented: false,
    speakersQuantity: 0,
    speakers: [],
    lines: [
      { id: 1, speakerId: 1, transcriptionId: 8, content: "Innovation drives progress." }
    ],
    language: "English",
    creatorId: 9
  },
  {
    id: 9,
    title: "News Broadcast",
    description: "Daily news broadcast transcription.",
    isSegmented: true,
    speakersQuantity: 3,
    speakers: [
      { id: 1, name: "Anchor" },
      { id: 2, name: "Reporter 1" },
      { id: 3, name: "Reporter 2" }
    ],
    lines: [
      { id: 1, speakerId: 1, transcriptionId: 9, content: "Good evening, here are the top stories." },
      { id: 2, speakerId: 2, transcriptionId: 9, content: "Reporting live from the scene." }
    ],
    language: "English",
    creatorId: 11
  },
  {
    id: 10,
    title: "Movie Dialogue",
    description: "Transcription of a dialogue from a movie.",
    isSegmented: true,
    speakersQuantity: 2,
    speakers: [
      { id: 1, name: "Character 1" },
      { id: 2, name: "Character 2" }
    ],
    lines: [
      { id: 1, speakerId: 1, transcriptionId: 10, content: "I have a bad feeling about this." },
      { id: 2, speakerId: 2, transcriptionId: 10, content: "We need to stick together." }
    ],
    language: "English",
    creatorId: 7
  }
];

export default transcriptions;
