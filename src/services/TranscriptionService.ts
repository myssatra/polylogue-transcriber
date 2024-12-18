import testApi from '../api/axiosMock';
import { Transcription } from '../lib/types'

type TranscriptionResponce = {

}

const getTranscriptions = async (): Promise<Transcription[]> => {
    const resp = await testApi.get('/transcriptions');
    return resp.data;
}

// const getTranscriptionsByUserId = async (userId: number): Promise<Transcription[]> => {
//     //const resp = await api.get(`/transcriptions/user/${userId}`);
// }

// const getTranscriptionById = async (id: number): Promise<Transcription> => {
//     const resp = await api.get(`/transcription/${id}`);
//     return resp.data;
// }

const TranscriptionService = {
    //getTranscriptionById,
    getTranscriptions
}

export default TranscriptionService;
