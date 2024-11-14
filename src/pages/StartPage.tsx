import { Button, Card } from "antd"
import { CreateTranscriptionForm } from "../components/CreateTranscriptionForm"

export function StartPage (){


    return(
        <div className="flex justify-center content-center"> 
            <Card className="m-10 w-1/3">
                <CreateTranscriptionForm />
                <Button type="primary" className="w-full">Расшифровать</Button>
            </Card>
        </div>
    )
}

export{}