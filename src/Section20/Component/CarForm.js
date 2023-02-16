import InputLabel from "../../Component/InputLabel";
import TextInput from "../../Component/TextInput";
import {useState} from "react";
import useFormData from "../../Hooks/useFormData";

function CarForm() {


    const {formData,setFormData,handleChange} = useFormData({
        data: {
            name: null,
            cost: null,
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

                <InputLabel for="value" >Cost</InputLabel>
                <TextInput
                    modelValue={formData.cost}
                    type="number"
                    className="w-full"
                    required
                    autoFocus
                    value="cost"
                    emit={handleChange}
                />
            </div>


        </div>

    )
}

export default CarForm;