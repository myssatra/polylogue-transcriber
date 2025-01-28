import { TreeDataNode } from 'antd';
import testApi from '../api/axiosMock';
import { Folder, Speaker, Transcription } from '../lib/types'

const getTranscriptions = async (): Promise<Transcription[]> => {
    const resp = await testApi.get('/transcriptions');
    return resp.data;
}

const getFolders = async (): Promise<Folder[]> => {
    const resp = await testApi.get('/folders');
    return resp.data;
}

const getFoldersTree = async (): Promise<TreeDataNode[]> => {
    const resp = await testApi.get('/foldersTree');
    return resp.data;
}

// const getTranscriptionById = async (id: number): Promise<Transcription> => {
//     const resp = await api.get(`/transcription/${id}`);
//     return resp.data;
// }

const getSpeakers = async(): Promise<Speaker[]> => {
    const resp = await testApi.get('/speakers');
    return resp.data;
}

 const getEmilysTranscription = async (): Promise<Transcription> => {
    const resp = await testApi.get('/emilysTranscription');
    return resp.data;
 }

const TranscriptionService = {
    //getTranscriptionById,
    getTranscriptions,
    getFolders,
    getFoldersTree,
    getSpeakers,
    getEmilysTranscription
}

export default TranscriptionService;
