import { Button, Card, Flex } from "antd"
import { CreateTranscription } from "../components/WorkspacePage/CreateTranscription"
import { observer } from "mobx-react-lite"

export const StartPage = observer(() => {
    return(
        <Flex style={{width: '100%', justifyContent: 'space-between', flexGrow: '1'}}> 
            <Card className="m-10 w-1/3 h-fit">
                <CreateTranscription />
                <Button type="primary" className="w-full">Расшифровать</Button>
            </Card>
        </Flex>
    )
})