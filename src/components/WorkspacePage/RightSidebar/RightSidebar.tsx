import {
  Button,
  Card,
  ConfigProvider,
  Flex,
  Input,
  Tabs,
  Typography,
  Layout,
  Affix
} from "antd";
import TabPane from "antd/es/tabs/TabPane";
import { useEffect, useState } from "react";
import { darkSideTheme, lightSideTheme } from "../../../utils/theme";
import { Speaker, Transcription } from "../../../utils/lib/types";
import { observer } from "mobx-react-lite";
import { useAppStore } from "../../../utils/contexts/AppStoreProvider";
import { CopyOutlined, EditFilled } from "@ant-design/icons";
import TranscriptionService from "../../../utils/services/TranscriptionService";

type RightSidebarProps = {
  descriptions?: string[];
};

export const  RightSidebar = observer(() =>   {
  //const [handleDescriptionEdit, setHandleDescriptionEdit] = useState("Добавить описание...");
  const appStore = useAppStore();
  const [newDescription, setNewDescription] = useState<string | null>('');
  
  // const [speakers, setSpeakers] = useState<Speaker[]>([]);

  // const [rows, setRows] = useState(2);
  // const [expanded, setExpanded] = useState(false);

  const selectedTranscription: Transcription | null = appStore.selectedTranscription;

  // useEffect(() => {
  //   (async () => {
      
  //   })()
  // },[selectedTranscription]);

  const handleDescriptionEdit = async(value: string | null) => {
    if(!selectedTranscription){
      return
    }
    else{
      await TranscriptionService.updateTranscription(selectedTranscription!.id, {description: value});
      appStore.setSelectedTranscription(selectedTranscription.id, {
        ...selectedTranscription,
        description: value
      })
    }
  }

  return (
    <ConfigProvider theme={appStore.THEME === true ? darkSideTheme : lightSideTheme}>
      <Layout className="justify-between flex flex-col items-center text-center w-full p-4" style={{minWidth: '300px', width: '100%', maxWidth: '300px'}}>
        <Layout style={{display: 'flex', flexDirection: 'column'}} className="w-full" >
          <Flex vertical className="pb-1">
            <Card title='Описание' className="min-h-fit w-full px-2 overflow-hidden" size="small">
              <Typography.Paragraph className="overflow-hidden m-0 opacity-70"
                  key="ph1"
                  // ellipsis={{
                  //   rows: 4,
                  //   expandable: 'collapsible',
                  //   expanded,
                  //   onExpand: (_, info) => setExpanded(info.expanded),
                  //   symbol: (expanded) => (expanded ? "Свернуть" : "Развернуть")
                  // }}
                  copyable={ selectedTranscription?.description ? { icon: <CopyOutlined style={{ color: '#8bc43b' }} /> } : false} 
                  editable={{ onChange: handleDescriptionEdit, triggerType: ["text"]}}
              >
                  {selectedTranscription?.description ?? "Добавьте описание..."}
              </Typography.Paragraph>
            </Card>
          </Flex>

          <Flex vertical className="py-2" wrap gap='small'>
            {/* <Typography.Text strong className="pb-2">Спикеры</Typography.Text> */}
            <Card className="w-full" size='small' title="Спикеры">
              <Flex vertical gap='small'>
              { selectedTranscription != null && selectedTranscription.speakers != null &&
                selectedTranscription.speakers.map( (speaker: Speaker) =>
                    <Input allowClear value={speaker.name} key={speaker.id}
                    suffix={<EditFilled style={{color: '#8bc43b', fontSize: '12px', opacity: '80%'}} size={5} onClick={() => console.log('checked')} />} />
              )}
              </Flex>
            </Card>
          </Flex>
        </Layout>

        <Affix offsetBottom={10} className="w-full">
          <Card className="w-full flex-col justify-center items-center">
            <Tabs tabBarStyle={{display: 'flex', justifyContent: 'center'}} className="w-full">
              <TabPane tab="txt" key="1">
                <Button type="primary" className="w-full">
                  Скачать
                </Button>
              </TabPane>
              <TabPane tab="docx" key="2">
                <Button type="primary" className="w-full">
                  Скачать
                </Button>
              </TabPane>
              <TabPane tab="json" key="3">
                <Button type="primary" className="w-full">
                  Скачать
                </Button>
              </TabPane>
              <TabPane tab="pdf" key="4">
                <Button type="primary" className="w-full">
                  Скачать
                </Button>
              </TabPane>
            </Tabs>
          </Card>
        </Affix>


      </Layout>
    </ConfigProvider>
  );
})
