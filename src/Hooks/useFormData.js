import {useState} from "react";


function useFormData({data}) {
    const [formData, setFormData] = useState(data)

    const  handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    return {
        formData,
        setFormData,
        handleChange
    }
}

export  default useFormData;