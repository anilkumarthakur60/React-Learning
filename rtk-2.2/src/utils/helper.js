import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../redux/slice/userSlice";

const Helpers = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.users.formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = {
      ...formData,
      [name]: value,
    };
    dispatch(setFormData(newFormData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />{" "}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />{" "}
    </form>
  );
};

export default Helpers;
