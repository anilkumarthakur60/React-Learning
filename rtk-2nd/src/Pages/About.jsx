import { useSelector } from "react-redux";
import useForm from "../hooks/useForm";

import { setFormData, clearError } from "../redux/slice/postsSlice";

function About() {

    const { formData } = useSelector((state) => state.posts)
    const { handleChange } = useForm({ formData, setFormData, clearError });
    return (
        <div className={'container-fluid'}>
            <pre>
                {JSON.stringify(formData, null, 2)}
            </pre>

            <form >
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email || ""} onChange={handleChange} />

                <input type="email" id="email" name="phone" value={formData.phone || ""} onChange={handleChange} />
                <label htmlFor="password">Password:</label>
                <input type="text" id="password" name="password" value={formData.password || ""} onChange={handleChange} />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default About;