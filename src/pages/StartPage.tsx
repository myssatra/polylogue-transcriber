import { Button, Card } from "antd"
import { CreateTranscription } from "../components/CreateTranscription"

export function StartPage (){
    return(
        <div className="flex justify-center content-center"> 
            <Card className="m-10 w-1/3 h-fit">
                <CreateTranscription />
                <Button type="primary" className="w-full">Расшифровать</Button>
            </Card>
        </div>
    )
}

export{}