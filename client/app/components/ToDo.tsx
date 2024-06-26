import React from "react";
import {RxCross1 } from "react-icons/rx"
import axios from "axios";
import { baseURL } from "../utils/constant";

interface propsType{
    id: number;
    text: string;
    setUpdateUI: any;
}

const ToDo = ({id,text,setUpdateUI}: propsType) => {
    const deleteToDo = () => {
        axios.delete(`${baseURL}/delete/${id}`).then(res => {
            console.log(res.data);
            setUpdateUI((prevState: any)=>!prevState);
        }).catch((err)=> console.log(err));
    };
    return <div className="bg-accentLight p-4 text-gray-400 relative group">
        {text}
        <div className="hidden absolute top-[50%] translate-y-[-50%] right-0 mx-4 group-hover:block cursor-pointer">
            <RxCross1 onClick={deleteToDo}/>
        </div>
        </div>;
};

export default ToDo;