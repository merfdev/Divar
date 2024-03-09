import api from "../configs/api";

const addCategory = (data) => api.post("category", data);
const getCategory = () => api.get("category");
// const deleteCategory = (Id) =>
//   fetch(`http://localhost:3400/category/${Id}`, {
//     method: "DELETE",
//   });
const deleteCategory = (Id) => api.delete(`category/${Id}`);

export { addCategory, getCategory, deleteCategory };
