import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { LeftSideBar } from "../components/LeftSideBar";
import { Content } from "antd/es/layout/layout";
import { RightSideBar } from "../components/RightSideBar";

export function Workspace(){
    return(       
        <Layout className="max-h-fit w-full">
            <Sider className="bg-zinc-700 top-0 bottom-0 right-0 text-white" width={"15vw"}>
                <LeftSideBar />
            </Sider>
            
            <Content className="flex-1 bg-zinc-800 p-10">                
            </Content>

            <Sider className="bg-zinc-700 top-0 bottom-0 right-0" width={"15vw"}>
                <RightSideBar />
            </Sider>
        </Layout>
    )
}