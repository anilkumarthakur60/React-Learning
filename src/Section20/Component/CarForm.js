import useFormData from "../../Hooks/useFormData";
import Button from "../../Component/Button";
import {useDispatch, useSelector} from "react-redux";
import {nanoid} from "@reduxjs/toolkit";
import {addCars, addFormData, clearFormData} from "../../store";

function CarForm() {

    const storeData = useSelector((state) => {
        return state?.forms?.carForm;
    });

    const dispatch = useDispatch();

    const {formData, setFormData,clearFormDatas} = useFormData({data: storeData});


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
        dispatch(addFormData(formData));
    }

    const submitFormData = () => {
        if (!formData.name || !formData.cost || !formData.id) return
        dispatch(addCars(formData));
        dispatch(clearFormData());
        clearFormDatas();
    }

    return (

        <div>

            <div className="flex flex-col space-y-2">
                <label htmlFor="name">Name</label>
                <input type="text"
                       className="px-2 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                       placeholder="Enter your full name..."
                       value={formData.name}
                       name="name"
                       onChange={handleChange}


                />
            </div>
            <div className="flex flex-col space-y-2 my-5">
                <label htmlFor="cost">Cost</label>
                <input type="number"
                       className="px-2 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                       placeholder="Enter Cost..."
                       value={formData.cost}
                       name="cost"
                       onChange={handleChange}


                />
            </div>
            <Button primary onClick={submitFormData}>Submit</Button>


        </div>

    )
}

export default CarForm;