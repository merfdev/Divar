import { useQuery } from "@tanstack/react-query";
import Main from "../components/templates/Main";
import SideBar from "../components/templates/SideBar";
import { getAllPost } from "../services/user";
import Loader from "../components/module/Loader";

function HomePage() {
  const { data, isLoading } = useQuery(["post-list"], getAllPost);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={{ display: "flex" }}>
          <SideBar />
          <Main posts={data.data.posts} />
        </div>
      )}
    </>
  );
}

export default HomePage;
