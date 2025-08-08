import { TreeDataNode } from "antd";
import testApi from "../api/axiosMock";
import { AIchat, Directory, Speaker, Transcription, Treeview } from "../lib/types";
import { Axios, AxiosAdapter, AxiosResponse } from "axios";
import http from "../api/http-common";

const getTranscriptions = async (): Promise<Transcription[]> => {
  const resp = await testApi.get("/transcriptions");
  return resp.data;
};

// const getFolders = async (): Promise<Folder[]> => {
//   const resp = await testApi.get("/folders");
//   return resp.data;
// };

const getUserDirectories = async (): Promise<Directory[]> => {
  const resp = await http.get('/directories');
  return resp.data;
}

const getUserTreeview = async (): Promise<Treeview> => {
  const resp = await http.get('/directories/treeview');
  return resp.data;
}

const getFoldersTree = async (): Promise<TreeDataNode[]> => {
  const resp = await testApi.get("/foldersTree");
  return resp.data;
};

// const getTranscriptionById = async (id: number): Promise<Transcription> => {
//     const resp = await api.get(`/transcription/${id}`);
//     return resp.data;
// }

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

const getTranscriptionByKey = async (key: React.Key[]): Promise<Transcription> => {
  const resp = await testApi.get("/transcriptions");
  const transcriptionList: Transcription[] = resp.data;

  const transcription = transcriptionList.find(t => t.key === key.toString());

  if(!transcription)
  {
    alert("нет такой транскрипции")
  }

  return transcription!;
};

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
  getTranscriptionByKey,
  // getTranscriptionById,
  // getFolders,
  getUserTreeview,
  getUserDirectories,
  getFoldersTree,
  getSpeakers,
  getEmilysTranscription,
  getUserTranscriptions,
  getAIchat
};

export default TranscriptionService;
