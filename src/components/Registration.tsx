import { Form, Input, Modal } from "antd";
import { useModal } from "../hooks/useModal";

export function Registration(){

    type FieldType = {
        login: string
        email: string
        password: string
    }

    return(
        <Form>
            <Form.Item<FieldType> rules={[{required: true, message: "Введите логин"}]}>
                <Input placeholder="Логин" />
            </Form.Item>

            <Form.Item<FieldType> rules={[{required: true, message: "Ведите e-mail"}]}>
                <Input placeholder="E-mail"/>
            </Form.Item >

            <Form.Item<FieldType> rules={[{required: true, message: "Введите пароль"}]}>
                <Input placeholder="Пароль"/>
            </Form.Item>
        </Form>
    )
}