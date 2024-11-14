import { Button, Card, Menu, Space, Tabs, Typography } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import { useState } from "react";

const { Paragraph } = Typography;

export function RightSideBar(){

    const [clickTriggerStr, setClickTriggerStr] = useState('werwer'); 

    return(
        <div className="bg-transparent my-7 justify-center" >

            <div className="my-5">
                <p className="text-center text-white">Описание</p>
                <Card className="mx-5 my-3 border-white bg-transparent max-h-fit">
                    <Paragraph key="ph1" editable={{ onChange: setClickTriggerStr, triggerType: ['text'] }} className="text-white py-1">
                        {clickTriggerStr}
                    </Paragraph>
                </Card>
            </div>
            
            <div className="my-5">
                <p className="text-center text-white">Спикеры</p>
                <Card className="mx-5 my-3 border-white bg-transparent max-h-fit">
                    <Paragraph key="ph2" editable={{ onChange: setClickTriggerStr, triggerType: ['text'] }} className="text-white py-1">
                        {clickTriggerStr}
                    </Paragraph>
                </Card> 
            </div>

            <div className="absolute bottom-4 w-full ">
                <Card className="w-4/5 m-3" size="small">
                    <Tabs>
                        <TabPane tab="TXT" key="1"><Button type="primary" className="w-full">Скачать</Button></TabPane>
                        <TabPane tab="DOC" key="2"><Button type="primary" className="w-full">Скачать</Button></TabPane>
                        <TabPane tab="JSON" key="3"><Button type="primary" className="w-full">Скачать</Button></TabPane>
                        <TabPane tab="PDF" key="4"><Button type="primary" className="w-full">Скачать</Button></TabPane>
                    </Tabs>
                </Card>  
            </div>
   
        </div>
    )
}   