import { Button, Form, Input, Modal } from "antd";

export function Registration(){

    type TFieldType = {
        login: string
        email: string
        password: string
    }
    
    return(
        <Form >
            <Form.Item<TFieldType> rules={[{required: true, message: "Введите логин"}]}>
                <Input placeholder="Логин" />
            </Form.Item>

            <Form.Item<TFieldType> rules={[{required: true, message: "Ведите e-mail"}]}>
                <Input placeholder="E-mail"/>
            </Form.Item >

            <Form.Item<TFieldType> rules={[{required: true, message: "Введите пароль"}]}>
                <Input placeholder="Пароль"/>
            </Form.Item>

            <Form.Item>
                <Button className="w-full" type="primary">Зарегистрироваться</Button>
            </Form.Item>
        </Form>
    )
}
