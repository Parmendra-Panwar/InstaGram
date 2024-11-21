import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Sidebar from "./components/SideBar";
import Story from "./components/storys";
import Postlist from "./components/Post_list";
import Right_side from "./components/right_side";
import Create from "./components/Create";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTeb, setSelectedTeb] = useState("Home");
  return (
    <PostListProvider>
      <div className="fullApp">
        <Sidebar selectedTeb={selectedTeb} setSelectedTeb={setSelectedTeb} />
        <div className="genral">
          <Story></Story>
          {selectedTeb === "Home" && <Postlist></Postlist>}
          {selectedTeb === "Create" && <Create></Create>}
        </div>
        <Right_side></Right_side>
      </div>
    </PostListProvider>
  );
}

export default App;
