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

const getSpeakers = async (): Promise<Speaker[]> => {
  const resp: AxiosResponse<Speaker[]> = await http.get('/speakers');
  // const resp = await testApi.get("/speakers");
  return resp.data;
};

const getEmilysTranscription = async (): Promise<Transcription> => {
  const resp = await testApi.get("/emilysTranscription");
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
  // getTranscriptionByKey,
  // getTranscriptionById,
  // getFolders,
  //getFoldersTree,
  getSpeakers,
  getEmilysTranscription,
  getUserTranscriptions,
  getAIchat
};

export default TranscriptionService;
