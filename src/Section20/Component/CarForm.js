import InputLabel from "../../Component/InputLabel";
import TextInput from "../../Component/TextInput";
import {useState} from "react";
import useFormData from "../../Hooks/useFormData";
import Button from "../../Component/Button";
import {useDispatch} from "react-redux";
import {nanoid} from "@reduxjs/toolkit";
import {addCars,store,addFormData} from "../../store";
function CarForm() {

    const  dispatch = useDispatch();

    const {formData,setFormData} = useFormData({
        data: {
            name: null,
            cost: null,
            id: nanoid()

        }
    })


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
        dispatch(addFormData(formData));
    }

    const submitFormData = () => {
        dispatch(addCars(formData));
    }

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
                    placeholder="Cost"
                    emit={handleChange}
                />
            </div>
            <Button primary onClick={submitFormData}>Submit</Button>


        </div>

    )
}

export default CarForm;