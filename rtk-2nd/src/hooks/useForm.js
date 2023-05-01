import { useDispatch } from "react-redux";

function useForm({ formData, setFormData, clearError }) {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = {
      ...formData,
      [name]: value,
    };
    dispatch(setFormData(newFormData));
    dispatch(clearError({ fieldName: name }));
  };

  return {
    handleChange,
  };
}

export default useForm;
