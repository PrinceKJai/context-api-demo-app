// import { useContext } from "react";
import "./App.css";
import BookDetails from "./components/BookDetails";
import Books from "./components/Books";
import NotFound from "./components/NotFound";
import SecretComponent from "./components/SecretComponent";
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
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  // const userObj = {
  //   userName: "Adminddsd",
  //   isAdmin: true,
  // };

  return (
    <BooksProvider>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/books" element={<Navigate to="/" />} />
            <Route path="/books/:bookId" element={<BookDetails />} />
            <Route
              path="/secret"
              element={<PrivateRoute Component={<SecretComponent />} />}
            />
            <Route path="*" element={<NotFound />} />
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
