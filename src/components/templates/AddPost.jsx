import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../services/admin";
import Loader from "../module/Loader";
import { useState } from "react";

function AddPost() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    city: "",
    amount: null,
    image: null,
  });
  const { data, isLoading } = useQuery(["get-categories"], getCategory);

  if (isLoading) return <Loader />;

  const changeHandler = (event) => {
    const name = event.target.name;
    if (event.target.name !== "image") {
      setForm({ ...form, [name]: event.target.value });
    } else {
      setForm({ ...form, [name]: event.target.files[0] });
    }
  };

  const addHandler = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <form onChange={changeHandler}>
      <h3>افزودن آگهی</h3>
      <label htmlFor="title">عنوان</label>
      <input type="text" name="title" id="title" />
      <label htmlFor="description">توضیحات</label>
      <textarea name="description" id="description" />
      <label htmlFor="amount">قمیت</label>
      <input type="number" name="amount" id="amount" />
      <label htmlFor="city">شهر</label>
      <input type="text" name="city" id="city" />
      <label htmlFor="category">دسته بندی</label>
      <select name="category" id="category">
        {data.data.map((i) => (
          <option key={i._id} value={i._id}>
            {i.name}
          </option>
        ))}
      </select>
      <label htmlFor="image">تصویر</label>
      <input type="file" name="image" id="image" />
      <button onClick={addHandler}>ثبت</button>
    </form>
  );
}

export default AddPost;
