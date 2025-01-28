import { useState } from "react"

export const useModal = () : [boolean, VoidFunction] => {
    const[isShowing, setIsShowing] = useState(false)

    function toggle() : void{
        setIsShowing(!isShowing)
    }

    return [
        isShowing, toggle
    ]
}