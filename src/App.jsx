import Home from "./components/Home";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";
import ListingPage from "./components/ListingPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const store = createStore(reducer);
  const navigate = useNavigate();
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home navigate={navigate} />} />
        <Route
          path="/listings"
          element={<ListingPage navigate={navigate} />}
          id="listings"
        />
        <Route
          path="/login"
          element={<LoginPage navigate={navigate} />}
          id="login"
        />
        <Route
          path="/signup"
          element={<SignupPage navigate={navigate} />}
          id="signup"
        />
      </Routes>
    </Provider>
  );
}

export default App;
