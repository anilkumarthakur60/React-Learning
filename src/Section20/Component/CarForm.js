import InputLabel from "../../Component/InputLabel";
import TextInput from "../../Component/TextInput";
import {useState} from "react";
import useFormData from "../../Hooks/useFormData";

function CarForm() {


    const {formData,setFormData,handleChange} = useFormData({
        data: {
            name: null,
            value: null,
        }
    })

    return (

        <div>
            <pre>
                {JSON.stringify(formData, null, 2)}
            </pre>
            <div >

                <InputLabel for="name" >Name</InputLabel>
                <TextInput
                    modelValue={formData.name}
                    type="text"
                    className="w-full"
                    required
                    autoFocus
                    value="name"
                    emit={handleChange}
                    placeholder="Name"
                    autoComplete="name"
                />
            </div>
            <div className="my-5">

                <InputLabel for="value" >Value</InputLabel>
                <TextInput
                    modelValue={formData.value}
                    type="number"
                    className="w-full"
                    required
                    autoFocus
                    value="value"
                    emit={handleChange}
                />
            </div>


        </div>

    )
}

export default CarForm;