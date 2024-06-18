// import { useContext } from "react";
import "./App.css";
import Books from "./components/Books";
// import Blog from "./components/Blog";
// import Comments from "./components/Comments";
// import Post from "./components/Post";
// import UserInfoContext from "./context/UserInfoConext";
import { BooksProvider } from "./context/BooksContext";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

function App() {
  // const userObj = {
  //   userName: "Adminddsd",
  //   isAdmin: true,
  // };

  return (
    <BooksProvider>
      <div className="app">
        <h1>All Books</h1>
        <Router>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/books" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </div>
    </BooksProvider>
  );
}

export default App;

{
  /* <UserInfoContext.Provider value={userObj}>
  <div className="app">
  <div className="container">
  <Blog />
  </div>
  </div> */
}
