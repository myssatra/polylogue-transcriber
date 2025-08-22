import { TreeDataNode } from "antd";
import testApi from "../api/axiosMock";
import { AIchat, Directory, Speaker, Transcription, Treeview } from "../lib/types";
import { Axios, AxiosAdapter, AxiosResponse } from "axios";
import http from "../api/http-common";
import { Folder } from "../../components/WorkspacePage/LeftSidebar/LeftSidebar";

// const getTranscriptions = async (): Promise<Transcription[]> => {
//   const resp = await testApi.get("/transcriptions");
//   return resp.data;
// };

const getTranscriptions = async (): Promise<Transcription[]> => {
  const resp = await http.get("/transcripts");
  return resp.data;
};

const getTranscriptionById = async (transcript_id: number): Promise<Transcription> => {
  const resp = await http.get(`/transcripts/views/${transcript_id}`);
  return resp.data;
};

const deleteTranscription = async(transcript_id: number): Promise<Transcription> => {
  const resp = await http.delete<any>(`/transcripts/${transcript_id}`);
  return resp.data;  
}

const updateTranscription = async(transcript_id: number, updates: Partial<{name: string, description: string | null, directory_id: number}>): Promise<Transcription> => {
try {
    console.log('Sending updates:', updates); // Логируем тело запроса
    const resp = await http.patch<any>(`/transcripts/${transcript_id}`, updates);
    return resp.data;
  } catch (error: any) {
    console.error('Server error details:', error.response?.data); // Логируем ответ сервера
    throw error;
  }
}

const getSpeakers = async (): Promise<Speaker[]> => {
  const resp = await http.get('/speakers');
  // const resp = await testApi.get("/speakers");
  return resp.data;
};

const getUserTranscriptions = async (): Promise<Transcription[]> => {
  const resp: AxiosResponse<Transcription[]> = await http.get('/transcripts');
  return resp.data
} 

// const getTranscriptionByKey = async (key: React.Key[]): Promise<Transcription> => {
//   // const resp = await testApi.get("/transcriptions");
//   const transcriptionList = await getTranscriptions();

//   const transcription = transcriptionList.find(t => t.key === key.toString());

//   if(!transcription)
//   {
//     alert("нет такой транскрипции")
//   }

//   return transcription!;
// };

// const getTranscriptionById = async (transcriptId: number): Promise<Transcription> => {
//   const resp: AxiosResponse<Transcription> = await http.get(`transcripts/views/${transcriptId}`);
//   return resp.data;
// }

const getAIchat = async (): Promise<AIchat> => {
  const resp = await testApi.get("/ai_chat");
  return resp.data;
}

const TranscriptionService = {
  //getTranscriptionById,
  getTranscriptions,
  getTranscriptionById,
  deleteTranscription,
  updateTranscription,
  // getTranscriptionByKey,
  // getTranscriptionById,
  // getFolders,
  //getFoldersTree,
  getSpeakers,
  getUserTranscriptions,
  getAIchat
};

export default TranscriptionService;
