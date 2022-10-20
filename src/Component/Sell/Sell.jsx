import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormValue } from "../../Redux/reducers/sell-reducer";
import { Header } from "../Header/Header";
import {
  FormSell,
  FormTitle,
  InputText,
  SelectSell,
  SellWrapper,
  SubmitSell,
} from "./Sell.styled-components";

export const Sell = () => {
  const { formValue } = useSelector((state) => state.sellPage);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    let namePayload = event.target.name;
    let valuePayload = event.target.value;
    dispatch(setFormValue({ namePayload, valuePayload }));
  };

  const handleSubmit = async () => {
    const loginFormData = new FormData();
    loginFormData.append("title", formValue.title);
    loginFormData.append("price", formValue.price);
    loginFormData.append("description", formValue.description);
    loginFormData.append("image", formValue.image);
    loginFormData.append("category", formValue.category);

    try {
      const response = await axios({
        method: "post",
        url: "https://fakestoreapi.com/products",
        data: loginFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SellWrapper>
      <Header />
      <FormSell onSubmit={handleSubmit}>
        <FormTitle>Add New Product</FormTitle>
        <InputText
          type="text"
          placeholder="Enter Title"
          value={formValue.title}
          onChange={handleChange}
          name="title"
        />
        <InputText
          type="text"
          placeholder="Enter Price"
          value={formValue.price}
          onChange={handleChange}
          name="price"
        />
        <InputText
          type="url"
          placeholder="Enter Image Url"
          value={formValue.description}
          onChange={handleChange}
          name="description"
        />
        <InputText
          type="text"
          placeholder="Enter Discription "
          value={formValue.image}
          onChange={handleChange}
          name="image"
        />
        <SelectSell
          value={formValue.category}
          onChange={handleChange}
          name="category"
        >
          <option value="">Select value</option>
          <option value="electronic">electronic</option>
          <option value="men's clothing">men's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="women's clothing">women's clothing</option>
        </SelectSell>
        <SubmitSell type="submit">Submit</SubmitSell>
      </FormSell>
    </SellWrapper>
  );
};
