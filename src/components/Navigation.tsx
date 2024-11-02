import { Menu, Modal } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import { useModal } from "../hooks/useModal";
import { useState } from "react";
import { Registration } from "./Registration";

export function Navigation(){
    
    const [isShowingLog, toggleLog] = useModal() 
    const [isShowingReg, toggleReg] = useModal() 

    return(
        <nav>
            <Menu mode="horizontal">
                <MenuItem onClick={() => toggleLog()}>Вход</MenuItem>
                <MenuItem onClick={()=> toggleReg()}>Регистрация</MenuItem>
            </Menu>

            <Modal  title="Регистрация" open={isShowingReg} onCancel={toggleReg}>
                <Registration/>
            </Modal>

            <Modal  title="Вход" open={isShowingLog} onCancel={toggleLog}>
                <Registration/>
            </Modal>
        </nav>
    )
}