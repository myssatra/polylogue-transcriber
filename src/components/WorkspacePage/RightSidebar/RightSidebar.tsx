import {
  Button,
  Card,
  ConfigProvider,
  Flex,
  Input,
  Space,
  Tabs,
  Typography,
  theme,
  Layout
} from "antd";
import TabPane from "antd/es/tabs/TabPane";
import { useEffect, useState } from "react";
import { darkSideTheme, darkTheme, lightSideTheme, lightTheme } from "../../../utils/theme";
import TranscriptionService from "../../../utils/services/TranscriptionService";
import { Speaker } from "../../../utils/lib/types";
import { observer } from "mobx-react-lite";
import { useAppStore } from "../../../utils/contexts/AppStoreProvider";
import { CheckCircleFilled } from "@ant-design/icons";

const { Paragraph } = Typography;

type RightSidebarProps = {
  descriptions?: string[];
};

export const  RightSidebar = observer(({ descriptions }: RightSidebarProps) =>   {
  const [clickTriggerStr, setClickTriggerStr] = useState("Добавить описание...");
  const appStore = useAppStore();
  const [speakers, setSpeakers] = useState<Speaker[]>([]);

  useEffect(() => {
    (async () => {
      const speakers = await TranscriptionService.getSpeakers();
      setSpeakers(speakers);
    })()
  },[])

  return (
    <ConfigProvider theme={appStore.THEME === true ? darkSideTheme : lightSideTheme}>
      <Layout className="justify-between flex flex-col items-center text-center w-full p-4" style={{minWidth: '300px', width: '100%', maxWidth: '300px'}}>
        <Layout style={{display: 'flex', flexDirection: 'column'}} className="w-full" >
          <Flex vertical className="pb-1">
            {/* <Typography.Text strong className="pb-2">Описание</Typography.Text> */}
            <Card title='Описание' className="min-h-fit w-full p-3" size="small">
              <Paragraph style={{marginBottom: '0px', opacity: '70%'}}
                  key="ph1"
                  editable={{ onChange: setClickTriggerStr, triggerType: ["text"]}}
              >
                  {clickTriggerStr ==='' ? 'Добавить описание...' : clickTriggerStr}
              </Paragraph>
            </Card>
          </Flex>

          <Flex vertical className="py-5" wrap gap='small'>
            {/* <Typography.Text strong className="pb-2">Спикеры</Typography.Text> */}
            <Card className="w-full" size='small' title="Спикеры">
              <Flex vertical gap='small'>
              {
                speakers.map( speaker =>
                    <Input allowClear defaultValue={speaker.name} key={speaker.id}
                    suffix={<CheckCircleFilled style={{color:  '#8bc43b', fontSize: '12px', opacity: '80%'}} size={5} onClick={() => console.log('checked')} />} />
              )}
              </Flex>
              {/* <Input  suffix={[<CheckOutlined />, <CloseOutlined/>]}></Input>
              {speakers.map( s => s.name).length} */}
            </Card>
          </Flex>
        </Layout>

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
      </Layout>
    </ConfigProvider>
  );
})
