import {useState} from "react";
import {nanoid} from "@reduxjs/toolkit";


function useFormData({data}) {
    const [formData, setFormData] = useState(data)

    const  handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const clearFormDatas = () => {
        setFormData({
            name: null,
            cost: null,
            id:nanoid(),
        })
    }
    return {
        formData,
        setFormData,
        handleChange,
        clearFormDatas
    }
}

export  default useFormData;