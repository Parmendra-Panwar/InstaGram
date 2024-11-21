import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Sidebar from "./components/SideBar";
import Story from "./components/storys";
import Postlist from "./components/Post_list";
import Right_side from "./components/right_side";
import Create from "./components/Create";

function App() {
  return (
    <>
      <div className="fullApp">
        <Sidebar />
        <div className="genral">
          <Story></Story>
          <Postlist></Postlist>
          <Create></Create>
        </div>
        <Right_side></Right_side>
      </div>
    </>
  );
}

export default App;
