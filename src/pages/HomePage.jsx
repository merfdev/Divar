import Main from "../components/templates/Main";
import SideBar from "../components/templates/SideBar";

function HomePage() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <Main />
    </div>
  );
}

export default HomePage;
