import React from "react";
import {Link} from "react-router-dom";
import {useAuth} from "../../auth/AuthProvider";

interface ChooseButtonProps{
    color : string
    text : string
    destination : string
}

export default function ChooseButton({color,text,destination}:ChooseButtonProps){

    const auth = useAuth()

    return(
        auth.username!=="Droggelbecher92"&&destination==="/add"
            ?
            <div></div>
            :
            <Link to={destination}>
                <button type="button" className={`nes-btn is-${color}`}>{text}</button>
            </Link>
    )
}