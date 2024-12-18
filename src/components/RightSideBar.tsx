import { Button, Card, Menu, Space, Tabs, Typography } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import { useState } from "react";

const { Paragraph } = Typography;

type RightSideProps = {
    descriptions?: string[]
}

export function RightSideBar({ descriptions }: RightSideProps){

    const [clickTriggerStr, setClickTriggerStr] = useState('werwer'); 

    return(
        <div className="bg-transparent justify-center flex flex-col items-center text-center w-full p-4" >

            <p className="text-white">Описание</p>
            <Card className="my-2 border-white min-h-fit w-full">
                <Paragraph key="ph1" editable={{ onChange: setClickTriggerStr, triggerType: ['text'] }} className="text-gray-800 ">
                    {clickTriggerStr}
                </Paragraph>
            </Card>

            <p className="text-white">Спикеры</p>
             <Card className="my-2 border-white min-h-fit w-full"> 
                <Paragraph key="ph2" editable={{ onChange: setClickTriggerStr, triggerType: ['text'] }} className="text-gray-800">
                    {clickTriggerStr}
                </Paragraph>
             </Card>  

            <Card className="max-w-full absolute bottom-4 flex flex-col justify-center items-center" size="small">
                <Tabs>
                    <TabPane tab="TXT" key="1"><Button type="primary" className="w-full">Скачать</Button></TabPane>
                    <TabPane tab="DOC" key="2"><Button type="primary" className="w-full">Скачать</Button></TabPane>
                    <TabPane tab="JSON" key="3"><Button type="primary" className="w-full">Скачать</Button></TabPane>
                    <TabPane tab="PDF" key="4"><Button type="primary" className="w-full">Скачать</Button></TabPane>
                </Tabs>
            </Card>
   
        </div>
    )
}   