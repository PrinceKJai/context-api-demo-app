// import { useContext } from "react";
import "./App.css";
import Books from "./components/Books";
// import Blog from "./components/Blog";
// import Comments from "./components/Comments";
// import Post from "./components/Post";
// import UserInfoContext from "./context/UserInfoConext";
import { BooksProvider } from "./context/BooksContext";

function App() {
  // const userObj = {
  //   userName: "Adminddsd",
  //   isAdmin: true,
  // };
  
  return (
    <BooksProvider>
      <div className="app">
        <h1>Hello</h1>
        <Books />
      </div>
    </BooksProvider>
  );
  }
  
  export default App;
  
  {/* <UserInfoContext.Provider value={userObj}>
  <div className="app">
  <div className="container">
  <Blog />
  </div>
  </div> */}