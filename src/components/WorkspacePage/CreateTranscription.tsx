import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Dropdown, Form, Input, Radio, Select, Switch } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import Dragger from "antd/es/upload/Dragger";
import { Transcription } from "../../utils/lib/types";
import { useEffect, useState } from "react";
import TranscriptionService from "../../utils/services/TranscriptionService";

type Folder = {
    id: number,
    title: string
}


export function CreateTranscription(){
    
    const[folders, setFolders] = useState<Folder[]>([]);

    useEffect(() => {
        (async() => {
            const folders = await TranscriptionService.getFolders(); 
            setFolders(folders);
            //console.log(options);
        })()
    }, [])

    const options = folders.map(folder => ({
        value: folder.id,
        label: folder.title
    }))
    
    
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

            <Form.Item<Transcription> rules={[{required: true, message: "Введите название"}]}>
                Название
                <Input placeholder="Название аудиофайла" defaultValue={"Название аудиофайла"} />
            </Form.Item>

            <Form.Item>
                Папка
                <Select options={options} />
            </Form.Item>


            <Form.Item<Transcription>>
                 Описание 
                <TextArea className="max-h-[300px]" placeholder="Описание" />
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