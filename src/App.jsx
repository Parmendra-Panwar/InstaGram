import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Sidebar from "./components/SideBar";
import Postlist from "./components/Post_list";
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
          {selectedTeb === "Home" && <Postlist></Postlist>}
          {selectedTeb === "Create" && <Create></Create>}
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
