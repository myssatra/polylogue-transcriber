import { Button, Menu, Modal } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import { useModal } from "../hooks/useModal";
import { RegistrationForm } from "./RegistrationForm";
import { UserOutlined } from "@ant-design/icons";
import { LoginForm } from "./LoginForm";

export function Navigation(){
    
    const [isShowingLog, toggleLog] = useModal() 
    const [isShowingReg, toggleReg] = useModal() 

    const isLogin = false;

    return(
        <nav className="w-full">
            <Menu mode="horizontal" className="bg-zinc-900">
                {isLogin &&
                    <div className="ml-auto px-4">
                        <MenuItem key={"userIcon"}><UserOutlined className="text-white" /></MenuItem>
                    </div> 
                }
                {!isLogin &&
                    <div className="ml-auto px-4">
                        <MenuItem onClick={() => toggleLog()} key={"login"} className="!text-white">Вход</MenuItem>
                        <MenuItem onClick={()=> toggleReg()} key={"registration"} className="!text-white">Регистрация</MenuItem>
                    </div>
                }
            </Menu>

            <Modal
                title="Регистрация"
                open={isShowingReg}
                onCancel={toggleReg}
                footer={[<Button className="w-full" type="primary">Зарегистрироваться</Button>]}
            >
                <RegistrationForm/>
            </Modal>

            <Modal 
                title="Вход"
                open={isShowingLog}
                onCancel={toggleLog}
                footer={[<Button className="w-full" type="primary">Войти</Button>]}
            >
                <LoginForm/>
            </Modal>
        </nav>
    )
}