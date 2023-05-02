import { useState } from "react";
import { useDispatch } from "react-redux";

function useFormData(props) {
  const dispatch = useDispatch();
  const { initalForm, clearError } = props;
  const [form, setForm] = useState(initalForm);
  const handleChanges = ({ target }) => {
    const { name, value } = target;
    setForm((pre) => ({
      ...pre,
      [name]: value,
    }));

    dispatch(clearError({ fieldName: name }));
  };

  return {
    form,
    setForm,
    handleChanges,
  };
}

export default useFormData;
