import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { LeftSideBar } from "../components/LeftSideBar";
import { Content } from "antd/es/layout/layout";
import { RightSideBar } from "../components/RightSideBar";
import UserService from "../services/UserService";
import { Transcription, User } from "../lib/types";
import { useEffect, useState } from "react";
import TranscriptionService from "../services/TranscriptionService";
import TranscriptionsList from "../components/TranscriptionsList";

export function Workspace(){
    const [authUser, setAuthUser] = useState <User | null>(null);
    const [transcriptions, setTranscriptions] = useState <Transcription[] | null>(null);
    const [isFirstUseEffect, setIsFirstUseEffect] = useState(false);
    //const authUser = UserService.getAuthUser().then((res: User) => console.log('userrr', res));
    //alert('authUser:' + authUser)
    
    useEffect(() => {
        (async() => {
            try{
                const authUser: User = await UserService.getAuthUser();
                console.log('userId',authUser.id);
                setAuthUser(authUser);
                setIsFirstUseEffect(true);
            }
            catch(error){
                console.log('auth error:', error)
            }
        })();
    },[] )

    useEffect(() => {
        if(isFirstUseEffect)
            {
                (async () => {
                    try {
                        //await TranscriptionService.getTranscriptions().then((resp) => console.log(resp));
                        const transcriptions: Transcription[] | null = (await TranscriptionService.getTranscriptions()).filter(t => t.creatorId == authUser?.id);
                        setTranscriptions(transcriptions);
                        console.log('emilys transcriptions',transcriptions)
                    }
                    catch(error) {
                        console.log(error);
                    }
                })()
            }

    }, [isFirstUseEffect])
    


    return(       
        <Layout className="max-h-fit w-full">
            <Sider className="bg-zinc-700 top-0 bottom-0 right-0" width="300">
                <LeftSideBar authUser={authUser} titles={transcriptions?.map(transcriptions => transcriptions.title)}/>
            </Sider>
            
            <Content className="flex-1 bg-zinc-800 p-10">
                <TranscriptionsList transcriptions={transcriptions} />               
            </Content>

            <Sider className="bg-zinc-700 top-0 bottom-0 right-0" width="300">
                <RightSideBar  />
            </Sider>
        </Layout>
    )
}