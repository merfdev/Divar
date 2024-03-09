import { useState } from "react";

import styles from "./CategoryForm.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCategory } from "../../services/admin";

function CategoryForm() {
  const queryClient = useQueryClient();
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });

  const { mutate, isLoading, error, data, onSuccess } = useMutation(
    addCategory,
    {
      onSuccess: () => queryClient.invalidateQueries("get-categories"),
    }
  );

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!form.name || !form.icon || !form.slug) return;
    mutate(form);
    {
      setForm({ name: "", slug: "", icon: "" });
    }
  };

  return (
    <form
      onChange={changeHandler}
      onSubmit={submitHandler}
      className={styles.form}
    >
      <h3>دسته بندی جدید</h3>
      {!!error && <p>خطا: {error.message}</p>}
      {data?.status === 201 && <p>دسته بندی با موفقیت اضافه شد</p>}
      <label htmlFor="name">اسم دسته بندی</label>
      <input type="text" id="name" name="name" value={form.name} />
      <label htmlFor="slug">اسلاگ</label>
      <input type="text" id="slug" name="slug" value={form.slug} />
      <label htmlFor="icon">آیکون</label>
      <input type="text" id="icon" name="icon" value={form.icon} />
      <button type="submit" disabled={isLoading}>
        ایجاد
      </button>
    </form>
  );
}

export default CategoryForm;
