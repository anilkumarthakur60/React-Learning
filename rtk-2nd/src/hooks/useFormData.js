import { useState } from "react";

function useFormData(initalForm) {
  const [form, setForm] = useState(initalForm);

  const handleChanges = ({ target }) => {
    const { name, value } = target;
    setForm((pre) => ({
      ...pre,
      [name]: value,
    }));
  };
  return {
    form,
    setForm,
    handleChanges,
  };
}

export default useFormData;
