import InputLabel from "../../Component/InputLabel";
import TextInput from "../../Component/TextInput";
import {useState} from "react";
import useFormData from "../../Hooks/useFormData";

function CarForm() {


    const {formData,setFormData,handleChange} = useFormData({
        data: {
            email: '',
            name: '',
        }
    })

    return (

        <div>

            <div className="w-full ">
                <InputLabel for="email" value="Email"/>
                <TextInput
                    modelValue={formData.email}
                    type="email"
                    className="mt-1 block w-full"
                    required
                    autofocus
                    value="email"
                    emit={handleChange}
                    autocomplete="email"
                />
            </div>
            <div>

                <InputLabel for="email" value="Email"/>
                <TextInput
                    modelValue={formData.name}
                    type="text"
                    className="mt-1 block w-full"
                    required
                    autofocus
                    value="name"
                    emit={handleChange}
                    autocomplete="name"
                />
            </div>


        </div>

    )
}

export default CarForm;