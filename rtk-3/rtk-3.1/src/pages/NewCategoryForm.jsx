import { useState } from "react";
import { useCreateCategoryMutation } from "../redux/rtkquerySlice";


function NewCategoryForm() {


    const [formData, setFormData] = useState({
        name: ""
    })

    const handleChange = ({ target }) => {
        const { name, value } = target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        createCategory(formData).unwrap().then((payload) => {
            console.log(payload);
        });
    }


    const [createCategory, { isLoading }] = useCreateCategoryMutation();


    return (
        <form onSubmit={handleSubmit}>
            <h2>Add new category:</h2>
            <label>
                Name:
                <input
                    type="text"
                    value={formData.name ?? null}
                    onChange={handleChange}
                    name="name"
                />
            </label>
            <button type="submit" disabled={isLoading}>
                {isLoading ? "Saving..." : "Save"}
            </button>
        </form>
    );
}

export default NewCategoryForm