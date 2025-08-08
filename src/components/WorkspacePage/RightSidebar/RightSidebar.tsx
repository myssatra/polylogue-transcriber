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
import { useState } from "react";
import { darkSideTheme, lightSideTheme } from "../../../utils/theme";
import { Speaker, Transcription } from "../../../utils/lib/types";
import { observer } from "mobx-react-lite";
import { useAppStore } from "../../../utils/contexts/AppStoreProvider";
import { CheckCircleFilled, CopyOutlined, EditFilled } from "@ant-design/icons";

type RightSidebarProps = {
  descriptions?: string[];
};

export const  RightSidebar = observer(() =>   {
  const [clickTriggerStr, setClickTriggerStr] = useState("Добавить описание...");
  const appStore = useAppStore();
  const [speakers, setSpeakers] = useState<Speaker[]>([]);

  const [rows, setRows] = useState(2);
  const [expanded, setExpanded] = useState(false);

  const transcription: Transcription | null = appStore.selectedTranscription;

  // useEffect(() => {
  //   (async () => {
  //     const speakers = await TranscriptionService.getSpeakers();
  //     setSpeakers(speakers);
  //   })()
  // },[])

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
                  copyable={ transcription?.description?.trim() ? { icon: <CopyOutlined style={{ color: '#8bc43b' }} /> } : false} 
                  editable={{ onChange: setClickTriggerStr, triggerType: ["text"]}}
              >
                  {transcription?.description.trim() ?? "Добавьте описание..."}
              </Typography.Paragraph>
            </Card>
          </Flex>

          <Flex vertical className="py-2" wrap gap='small'>
            {/* <Typography.Text strong className="pb-2">Спикеры</Typography.Text> */}
            <Card className="w-full" size='small' title="Спикеры">
              <Flex vertical gap='small'>
              { transcription != null && transcription.speakers != null &&
                transcription.speakers.map( (speaker: Speaker) =>
                    <Input allowClear value={speaker.name} key={speaker.id}
                    suffix={<EditFilled style={{color: '#8bc43b', fontSize: '12px', opacity: '80%'}} size={5} onClick={() => console.log('checked')} />} />
              )}
              </Flex>
            </Card>
          </Flex>
        </Layout>

        <Affix offsetBottom={10}>
        <Card className="msin-w-fit flex flex-col justify-center items-center">
          <Tabs>
            <TabPane tab="TXT" key="1">
              <Button type="primary" className="w-full">
                Скачать
              </Button>
            </TabPane>
            <TabPane tab="DOC" key="2">
              <Button type="primary" className="w-full">
                Скачать
              </Button>
            </TabPane>
            <TabPane tab="JSON" key="3">
              <Button type="primary" className="w-full">
                Скачать
              </Button>
            </TabPane>
            <TabPane tab="PDF" key="4">
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
