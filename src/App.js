import "./App.css";
import Blog from "./components/Blog";
import Comments from "./components/Comments";
import Post from "./components/Post";
import UserInfoContext from "./context/UserInfoConext";

function App() {
  const userObj = {
    userName: "Adminddsd",
    isAdmin: true,
  };
  return (
    <UserInfoContext.Provider value={userObj}>
      <div className="app">
        <div className="container">
          <Blog />
        </div>
      </div>
    </UserInfoContext.Provider>
  );
}

export default App;
