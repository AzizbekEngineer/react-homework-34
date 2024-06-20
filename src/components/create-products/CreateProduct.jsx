import React, { useState } from "react";
import { useCreateProductsMutation } from "../../context/api/productApi";
import { useGetValue } from "../../hooks/useGetValue";
import LocalImges from "../localImgs/LocalImges";
import "./createProduct.scss";
import { useNavigate } from "react-router-dom";

const initialState = {
  title: "",
  price: "",
  oldPrice: "",
  category: "",
  units: "",
  description: "",
  info: "",
};

const CreateProduct = () => {
  const navigate = useNavigate();
  const { formData, handleChange } = useGetValue(initialState);
  const [files, setFiles] = useState("");
  const [createProduct, { data, isLoading }] = useCreateProductsMutation();
  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };
  const handleCreateProduct = (e) => {
    e.preventDefault();
    let form = new FormData();
    form.append("title", formData.title);
    form.append("price", formData.price);
    form.append("oldPrice", formData.oldPrice);
    form.append("category", formData.category);
    form.append("units", formData.units);
    form.append("description", formData.description);
    form.append("info", JSON.stringify([formData.info]));

    Array.from(files).forEach((img) => {
      form.append("files", img, img.name);
    });
    createProduct(form);
    e.target.remove();
  };

  return (
    <div className="container createProduct">
      <h2>CreateProduct</h2>
      <form
        onSubmit={handleCreateProduct}
        action=""
        className="createProduct__form"
      >
        <div className="createProduct__form__input">
          <input
            required
            type="text" //1
            value={formData.title}
            onChange={handleChange}
            placeholder="title"
            name="title"
          />
          <input
            required
            type="number" //2
            value={formData.price}
            onChange={handleChange}
            placeholder="price"
            name="price"
          />
          <input
            required
            type="text" //3
            value={formData.oldPrice}
            onChange={handleChange}
            placeholder="oldPrice"
            name="oldPrice"
          />
          <input
            required
            type="text" //4
            value={formData.category}
            onChange={handleChange}
            placeholder="category"
            name="category"
          />
          <input
            required
            type="text" //5
            value={formData.units}
            onChange={handleChange}
            placeholder="units"
            name="units"
          />
        </div>

        <div className="createProduct__form__textarea">
          <textarea
            type="text"
            value={formData.description}
            onChange={handleChange}
            placeholder="description"
            name="description"
          ></textarea>
          <textarea
            type="text"
            value={formData.info}
            onChange={handleChange}
            placeholder="info"
            name="info"
          ></textarea>
        </div>
        <div>
          <input
            required
            onChange={(e) => setFiles(e.target.files)}
            multiple
            accept="image/*"
            type="file"
          />
          <br />
          <LocalImges files={files} />
        </div>
        <button>Create</button>
      </form>
      <button className="logout" onClick={logOut}>
        LogOut
      </button>
    </div>
  );
};

export default CreateProduct;
