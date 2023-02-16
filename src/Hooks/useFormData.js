import {useState} from "react";


function useFormData({data}) {
    const [formData, setFormData] = useState(data)

    const  handleChange = (e) => {
        console.log('---------data logging--------',e.target.name);
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