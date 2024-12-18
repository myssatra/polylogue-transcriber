import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'
import transcriptions from '../JSON/transcriptions';

const testApi = axios.create({
    baseURL: 'http://localhost:3000'
})
const mock = new MockAdapter(testApi);

// mock.onGet('/transcription/1').reply(200, [
//     {   
//         title: 'Title',
//         description: string,
//         isSegmented: boolean,
//         speakersQuantity: number,
//         speakers: Speaker[],
//         lines: Line[],
//         language: string,},
// ])

const userId = 1;
const data = JSON.stringify(transcriptions) ;
const datatest = transcriptions;

mock.onGet('/transcriptions').reply(200, datatest);

//mock.onGet(`/transcriptions/user/${userId}`).reply(200, [data])

export default testApi;