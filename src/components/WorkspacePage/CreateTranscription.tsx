import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, Radio, Select, Switch, UploadFile } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import Dragger from "antd/es/upload/Dragger";
import { Directory, Transcription } from "../../utils/lib/types";
import { useEffect, useRef, useState } from "react";
import TranscriptionService from "../../utils/services/TranscriptionService";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import DirectoryService from "../../utils/services/DirectoryService";

type Folder = {
    id: number,
    title: string
}

interface TranscriptionFormValues {
  title: string;
  folderId: number;
  language: string;
  splitSpeakers: boolean;
  speakerCount: number;
}


export function CreateTranscription(){
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [audioURL, setAudiURL] = useState<string | null>(null);
    const [isRecordingStopped, setIsRecordingStopped] = useState<boolean>(false);
    
    const[folders, setFolders] = useState<Folder[]>([]);
    const[directories, setDirectories] = useState<Directory[]>([]);

    const recorderControls = useAudioRecorder()

    const handleRecordingComplete = (blob: Blob) => {
        // const audioFile: File = new File([blob], `залупа-${Date.now()}.webm`, {type: 'audio/webm'});
        // const url: string = URL.createObjectURL(audioFile);
        // // Создаем ссылку для скачивания (нихуя не понятно)
        // const link: HTMLAnchorElement = document.createElement('a');
        // link.href = url;
        // link.download = audioFile.name; // Имя файла для скачивания
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
        
        // // Освобождаем URL
        // URL.revokeObjectURL(url);
        // message.success('Запись сохранена блять');

        const url = URL.createObjectURL(blob);
        setAudiURL(url);
        setIsRecordingStopped(true);
    }

    const handleAudioSave = () => {

    }

    // useEffect(() => {
    //     (async() => {
    //         const folders = await TranscriptionService.getUserDirectories(); 
    //         setFolders(folders);
    //         //console.log(options);
    //     })()
    // }, [])

    const options = folders.map(folder => ({
        value: folder.id,
        label: folder.title
    }))
    
    useEffect(() => {
        (async() => {
            const directories = await DirectoryService.getUserDirectories(); 
            setDirectories(directories);
            console.log('directories',directories);
        })()
    }, [])

    
    return(
        <Form className="min-w-full min-h-full">
            <FormItem>
                <Dragger>
                    <p className="m-2" style={{ fontSize: '24px', color: 'blue' }}>
                        <InboxOutlined style={{color: '#8bc43b'}} />
                    </p>
                    <p className="m-2">
                        <Button icon={<UploadOutlined  />} className="w-1/2">Выберите файл</Button>
                    </p>
                    <p className="text-xs">Для наилучших результатов рекомендуется использовать аудиофайлы с высоким качеством звука. Форматы WAV и FLAC обеспечивают наилучшее качество, но занимают больше места.</p>
                </Dragger>
            </FormItem>

            <FormItem>
                <AudioRecorder onRecordingComplete={handleRecordingComplete} showVisualizer={true}/>
            </FormItem>

            <Form.Item<Transcription> rules={[{required: true}]}>
                Название
                <Input placeholder="Название аудиофайла" defaultValue={"Название аудиофайла"} />
            </Form.Item>

            <Form.Item>
                Папка
                <Select options={options} />
            </Form.Item>


            <Form.Item<Transcription>>
                 Описание 
                <TextArea className="max-h-[300px]" placeholder="Описание" maxLength={250} />
            </Form.Item>


            <Form.Item>
                <p className="flex justify-center font-semibold" style={{ fontSize: '18px'}} >
                    Дополнительные настройки
                </p>
            </Form.Item>

            <Form.Item<Transcription>>
                 Язык оригинала
                 <Select defaultValue='rus' options={[{value: 'rus', label: 'Русский'}, {value: 'eng', label: 'English'}]}/>
            </Form.Item>

            <Form.Item<Transcription> label='Разбиение на спикеров'>
                <Switch defaultChecked />
            </Form.Item>

            <Form.Item<Transcription> label='Количество спикеров'>
                <Radio.Group size='small' optionType="button" options={[1, 2, 3, 4, 5, 6]} />
            </Form.Item>
        </Form>
    )
    
}