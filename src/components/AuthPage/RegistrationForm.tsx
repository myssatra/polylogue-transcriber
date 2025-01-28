import { Button, Form, Input } from "antd";

export function Registration(){

    type TFieldType = {
        login: string
        email: string
        password: string
    }
    
    return(
        <Form className="min-w-[400px]" >
            <Form.Item<TFieldType> rules={[{required: true, message: "Введите имя пользователя"}]}>
                <Input placeholder="Имя пользователя" />
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
