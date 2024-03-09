import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteCategory, getCategory } from "../../services/admin";
import Loader from "../module/Loader";

import styles from "./CategoryList.module.css";
import toast from "react-hot-toast";

function CategoryList() {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery(["get-categories"], getCategory);
  const { mutate } = useMutation(deleteCategory, {
    onSuccess: () =>
      queryClient.invalidateQueries(
        "get-categoires" && toast.success("با موفقیت حذف شد")
      ),
  });

  return (
    <div className={styles.list}>
      {isLoading ? (
        <Loader />
      ) : (
        data.data.map((i) => (
          <div key={i._id}>
            <img src={`${i.icon}.svg`} />
            <h5>{i.name}</h5>
            <p>slug :{i.slug}</p>
            <button onClick={() => mutate(i._id)} disabled={isLoading}>
              delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
