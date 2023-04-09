import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Messages from "./pages/Messages";
import Officers from "./pages/Officers";
import Register from "./pages/Register";
import Steal from "./pages/Steal";
import "./scss/style.scss";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" index element={<Main />} />
      <Route
        path="/messages"
        element={
          <ProtectedRoute>
            <Messages />
          </ProtectedRoute>
        }
      />
      <Route
        path="/officers"
        element={
          <ProtectedRoute>
            <Officers />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/steal" element={<Steal />} />

      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
