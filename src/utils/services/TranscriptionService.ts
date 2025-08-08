import { TreeDataNode } from "antd";
import testApi from "../api/axiosMock";
import { AIchat, Folder, Speaker, Transcription } from "../lib/types";

const getTranscriptions = async (): Promise<Transcription[]> => {
  const resp = await testApi.get("/transcriptions");
  return resp.data;
};

const getFolders = async (): Promise<Folder[]> => {
  const resp = await testApi.get("/folders");
  return resp.data;
};

const getFoldersTree = async (): Promise<TreeDataNode[]> => {
  const resp = await testApi.get("/foldersTree");
  return resp.data;
};

// const getTranscriptionById = async (id: number): Promise<Transcription> => {
//     const resp = await api.get(`/transcription/${id}`);
//     return resp.data;
// }

const getSpeakers = async (): Promise<Speaker[]> => {
  const resp = await testApi.get("/speakers");
  return resp.data;
};

const getEmilysTranscription = async (): Promise<Transcription> => {
  const resp = await testApi.get("/emilysTranscription");
  return resp.data;
};

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

const getAIchat = async (): Promise<AIchat> => {
  const resp = await testApi.get("/ai_chat");
  return resp.data;
}

const TranscriptionService = {
  //getTranscriptionById,
  getTranscriptions,
  getTranscriptionByKey,
  getFolders,
  getFoldersTree,
  getSpeakers,
  getEmilysTranscription,
  getAIchat
};

export default TranscriptionService;
