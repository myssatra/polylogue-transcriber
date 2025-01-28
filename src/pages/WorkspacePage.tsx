import { Layout } from "antd";
import UserService from "../utils/services/UserService";
import { Transcription, User } from "../utils/lib/types";
import { useEffect, useState } from "react";
import TranscriptionService from "../utils/services/TranscriptionService";
import { RightSidebar } from "../components/WorkspacePage/RightSidebar/RightSidebar";
import { LeftSidebar } from "../components/WorkspacePage/LeftSidebar/LeftSidebar";
import { observer } from "mobx-react-lite";
import { TranscriptionsList } from "../components/WorkspacePage/TranscriptionsWorkspace/TranscriptionsWorkspace";
import { useAppStore } from "../utils/contexts/AppStoreProvider";

export const Workspace = observer(() => {

  const [authUser, setAuthUser] = useState<User | null>(null);
  const [transcriptions, setTranscriptions] = useState<Transcription[] | null>(
    null
  );
  const [isFirstUseEffect, setIsFirstUseEffect] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const authUser: User = await UserService.getAuthUser();
        console.log("userId", authUser.id);
        setAuthUser(authUser);
        setIsFirstUseEffect(true);
      } catch (error) {
        console.log("auth error:", error);
      }
    })();
  }, []);

  useEffect(() => {
    if (isFirstUseEffect) {
      (async () => {
        try {
          const transcriptions: Transcription[] | null = (
            await TranscriptionService.getTranscriptions()
          ).filter((t) => t.creatorId == authUser?.id);
          setTranscriptions(transcriptions);
          console.log("users transcriptions", transcriptions);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [isFirstUseEffect]);

  const appStore = useAppStore();

  //@ts-ignore
  return (
      <Layout style={{display: 'flex', flexDirection: 'row', height: '100%', width: '100%', justifyContent: 'space-between', flexGrow: '1'}}>
        <LeftSidebar
          authUser={authUser}
          transriptions={transcriptions?.map((transcriptions) => transcriptions)}
        />
        <Layout className="w-full">
          <TranscriptionsList transcriptions={transcriptions} />
        </Layout>
        <RightSidebar />
      </Layout>
  );
})
