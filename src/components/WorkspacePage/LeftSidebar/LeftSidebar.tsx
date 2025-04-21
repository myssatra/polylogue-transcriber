import {
  FileAddOutlined,
  FolderAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Flex,
  Modal,
  Space,
  Switch,
  Typography,
  Layout,
} from "antd";
import { useModal } from "../../../utils/hooks/useModal";
import { CreateTranscription } from "../CreateTranscription";
import { CreateFolder } from "../CreateFolder";
import { useNavigate } from "react-router-dom";
import { User } from "../../../utils/lib/types";
import UserService from "../../../utils/services/UserService";
import { useEffect, useState, useRef } from "react";
import { FoldersTree } from "../FoldersTree";
import lsb from './LeftSideBar.module.scss'
import {ConfigProvider} from 'antd'
import { darkSideTheme, lightSideTheme } from "../../../utils/theme";
import { useAppStore } from "../../../utils/contexts/AppStoreProvider";
import { observer } from 'mobx-react-lite';

type Transcription = {
  id: number;
  title: string;
};

export type Folder = {
  id: number;
  title: string;
  transcriptionsIds?: number[];
};

type LeftSidebarProps = {
  authUser?: User | null;
  transriptions?: Transcription[];
  folders?: Folder[];
};

export const LeftSidebar = observer( ({ authUser, transriptions }: LeftSidebarProps) => {
  const [isShowingAddTrans, toggleAddTrans] = useModal();
  const [isShowingAddFordel, toggleAddFolder] = useModal();

  const navigate = useNavigate(); 
  const appStore = useAppStore();
  const contextRef = useRef<HTMLInputElement>(null);

  const handleClickOutsideContextMenu = (event: any) => {
    if (contextRef.current && !contextRef.current.contains(event.target))
      setIsOpenContextMenu(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideContextMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideContextMenu);
    };
  }, []);


  const [isOpenContextMenu, setIsOpenContextMenu] = useState(false);

  return (
    <ConfigProvider theme={appStore.THEME === true ? darkSideTheme : lightSideTheme}>
      <Layout style={{display: 'flex', flexDirection: 'column', minWidth: '300px', width: '100%', maxWidth: '300px' }}>
        <Layout
          className={'flex flex-col justify-center items-center w-fulpt-6 py-4'}
        >
          <Space direction="vertical" size={"small"} >
            <Button
              className="min-w-[210px] py-4"
              color="default"
              onClick={() => toggleAddTrans()}
              key={"addTranscription"}
            >
              <FileAddOutlined />
              Добавить расшифровку
            </Button>
            <Button
              className="min-w-[210px] py-4"
              color="default"
              onClick={() => toggleAddFolder()}
              key={"addFolder"}
            >
              <FolderAddOutlined />
              Добавить папку
            </Button>
          </Space>
          <Flex className="w-full p-4 h-full">
            <FoldersTree />
          </Flex>
          <Layout style={{display: 'flex', flexDirection: 'column'}} className="relative w-full p-4">
            <Layout
              ref={contextRef}
              className={lsb.contextMenu}
              style={{
                  display: isOpenContextMenu ? "flex" : "none",
                  border: '1px solid gray',
                  borderRadius: 8,
                  gap: 8
              }}
            >
              <Layout className={lsb.contextItem}
                onClick={() => {
                  navigate("/edit");
                }}
              >
                <Typography.Text>Редактировать профиль</Typography.Text>
              </Layout>
              <Layout style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} className={lsb.contextItem}>
                <Typography.Text>Темная тема: </Typography.Text>
                <Switch
                  value={appStore.theme}
                  size="small"
                  onChange={() => {
                    appStore.toggleTheme();}}
                />
              </Layout>
              <Layout
              style={{
                display: 'flex',
                flexDirection: 'column'
              }}
              className={lsb.contextItem}
                onClick={() => {
                  UserService.logoutUser();
                  navigate("/login");
                }}
              >
                <Typography.Text>Выйти</Typography.Text>
              </Layout>
            </Layout>
            <Card
              onClick={() => {
                setIsOpenContextMenu(true)
              }}
              size="small"
            >
              <Flex className="flex items-center space-x-4">
                <Avatar icon={<UserOutlined />} size="default" className="" />
                <Flex vertical className="overflow-hidden overflow-ellipsis max-w-[170px]">
                  <Typography.Text data-tooltip-target="" className="font-bold text-sm">
                    {authUser?.username}
                  </Typography.Text>
                  <Typography.Text className="text-xs">{authUser?.email}</Typography.Text>
                </Flex>
              </Flex>
            </Card>
          </Layout>
        </Layout>

        <Modal
          title="Создание расшифровки"
          open={isShowingAddTrans}
          onCancel={toggleAddTrans}
          footer={[
            <Button className="w-full" type="primary">
              Расшифровать
            </Button>
          ]}
        >
          <CreateTranscription />
        </Modal>

        <Modal
          title="Создание папки"
          open={isShowingAddFordel}
          onCancel={toggleAddFolder}
          footer={[
            <Button className="w-full" type="primary">
              Создать
            </Button>
          ]}
        >
          <CreateFolder />
        </Modal>
      </Layout>
    </ConfigProvider>
  );
})
