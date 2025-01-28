import { Form, Input, Button, FormProps } from "antd";
import { useState } from "react";
import { User } from "../../utils/lib/types";
import UserService from "../../utils/services/UserService";
import { useNavigate } from "react-router-dom";
import useAuth from "../../utils/hooks/useAuth";

interface LoginProps {
    setLoading?: (loading: boolean) => void;
}

export function Login({ setLoading = () => {} }: LoginProps ){
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [loginErrorMessage, setLoginErrorMessage] = useState('');

    const { login } = useAuth();

    const onFinish: FormProps<User>['onFinish'] = async (values) => {
        
        const loginResponse = UserService.loginUser(values.username, values.password).then( resp => {console.log("respData:",resp)
        }); 
        
        await loginResponse.then(() => navigate('/workspace')).catch(function(error) {
            if(error.status != 200)
            {
                setLoginErrorMessage('Не удалось войти. Проверьте введенные данные и попробуйте еще раз.');
            }
        });
    };

    const onFinishFailed: FormProps<User>['onFinishFailed'] = (errorInfo) => {
        console.log("errorInfo", errorInfo)
    }

    return(
        <>
            <Form
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="min-w-[400px]"
            >
                <Form.Item<User> name="username" rules={[{required: true, message: "Ведите имя"}]}>
                    <Input placeholder="Имя пользователя" type="string"/>
                </Form.Item >

                <Form.Item<User> name="password" rules={[{required: true, message: "Введите пароль"}]}>
                    <Input.Password placeholder="Пароль" type="password"/>
                </Form.Item>

                {loginErrorMessage && 
                    (<Form.Item className="text-red-900">
                        {loginErrorMessage}
                    </Form.Item>)
                }
                
                <Form.Item label={null}>
                    <Button className="w-full" type="primary" htmlType="submit" onClick={login}>Войти</Button>
                </Form.Item>
            </Form>
        </>
    )
}