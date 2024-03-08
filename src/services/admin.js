import api from "../configs/api";

const addCategory = (data) => api.post("category", data);
const getCategory = () => api.get("category");
const deleteCategory = (Id) =>
  fetch(`http://localhost:3400/category/${Id}`, {
    method: "DELETE",
  });

export { addCategory, getCategory, deleteCategory };
