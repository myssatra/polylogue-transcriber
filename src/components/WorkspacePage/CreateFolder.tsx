import { Button, Form, Input } from "antd";
import TranscriptionService from "../../utils/services/TranscriptionService";
import { observer } from "mobx-react-lite";
import { useAppStore } from "../../utils/contexts/AppStoreProvider";

interface CreateFolderProps {
    onSuccess?: () => void;
}

export const CreateFolder = observer( ({onSuccess}: CreateFolderProps) => {
    const [form] = Form.useForm();
    const { user } = useAppStore();

    // useEffect(() => {
    //     (async() => {
    //         console.log('appStoreUser', appStore.user);
    //         const ddd: User = await UserService.getAuthUser();
    //         console.log('huita',ddd.username);
    //     })()

    // }, [])

    const handleCreate = async(values : {name: string, owner_id: number  }) => {
        console.log('zalupa', values.name)
        console.log('appStoreUser', user.id)
        await TranscriptionService.createUserDirectory(user.id, values.name);
        onSuccess?.();
    }

    return(
        <Form form={form} onFinish={handleCreate}>
            <Form.Item name='name'>
                <Input placeholder="Название папки" />
            </Form.Item>
            <Form.Item>
                <Button className="w-full" type="primary" htmlType="submit">
                    Создать
                </Button>
            </Form.Item>
        </Form>
    )
})