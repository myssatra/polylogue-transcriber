import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'
import transcriptions from '../JSON/transcriptions';
import folders from '../JSON/folders';
import ai_chat from '../JSON/ai_chat';
import { foldersTree } from '../JSON/foldersTree';
import { speakers } from '../JSON/speakers'
import { emilysTranscription } from '../JSON/transcription';

const testApi = axios.create({
    baseURL: 'http://localhost:3000'
})
const mock = new MockAdapter(testApi);

const transcriptionsMockData = transcriptions;
const foldersMockData = folders;
const foldersTreeMockData = foldersTree;
const speakersMockData = speakers;
const emilysTranscriptionMockData = emilysTranscription;
const AIchatsMockData = ai_chat; 

mock.onGet('/transcriptions').reply(200, transcriptionsMockData);
mock.onGet('/folders').reply(200, foldersMockData);
mock.onGet('/foldersTree').reply(200, foldersTreeMockData)
mock.onGet('/speakers').reply(200, speakersMockData)
mock.onGet('emilysTranscription').reply(200,emilysTranscriptionMockData)
mock.onGet('/ai_chat').reply(200, AIchatsMockData)

//mock.onGet(`/transcriptions/user/${authUser.id}`).reply(200, transcriptionsMockData.filter(t => t.creatorId))

export default testApi;