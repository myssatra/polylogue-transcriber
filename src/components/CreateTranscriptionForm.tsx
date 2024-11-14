import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Select, TreeSelect } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import Dragger from "antd/es/upload/Dragger";

export function CreateTranscriptionForm(){

    type Transcription = {
        title: string
        description: string,
        speakersNumber: number
    }

    return(
        <Form className="min-w-full min-h-full">
            <FormItem>
                <Dragger>
                    <p className="m-2" style={{ fontSize: '24px', color: 'blue' }}>
                        <InboxOutlined />
                    </p>
                    <p className="m-2">
                        <Button icon={<UploadOutlined />} className="w-1/2">Выберите файл</Button>
                    </p>
                    <p className="text-xs">Для наилучших результатов рекомендуется использовать аудиофайлы с высоким качеством звука. Форматы WAV и FLAC обеспечивают наилучшее качество, но занимают больше места.</p>
                </Dragger>
            </FormItem>

            <Form.Item<Transcription> rules={[{required: true, message: "Введите название"}]}>
                Название
                <Input placeholder="Название" />
            </Form.Item>

            <Form.Item>
                Папка
                <TreeSelect
                    treeData={[
                    { title: 'Папка1', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
                    ]}
                />
            </Form.Item>


            <Form.Item<Transcription> >
                Описание
                <TextArea placeholder="Описание" />
            </Form.Item>


            <Form.Item>
                <p className="flex justify-center font-semibold" style={{ fontSize: '18px'}} >
                    Дополнительные настройки
                </p>
            </Form.Item>

            <Form.Item>
                 Язык оригинала
                <Select />
            </Form.Item>
        </Form>
    )
    
}