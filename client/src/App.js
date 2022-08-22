import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import IssueForm from "./components/IssueForm";
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";
import "./index.css";
import Dashbord from "./pages/Dashbord";
import Issues from "./pages/Issues";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import UserProfileEdit from "./pages/userProfile/Userprofile";
import { checkUser } from "./redux/auth/action";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUser());
  }, []);
  return (
    <Box w={"100%"} backgroundColor={"#000"}>
      <Box mt={"64px"}>
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/issues"
            element={
              <>
                <Navbar />
                <RequireAuth>
                  <Issues />
                </RequireAuth>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <RequireAuth>
                  <Dashbord />
                </RequireAuth>
              </>
            }
          />
          <Route
            path="/create-issue"
            element={
              <>
                <Navbar />
                <RequireAuth>
                  <IssueForm />
                </RequireAuth>
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Navbar />
                <RequireAuth>
                  <UserProfileEdit />
                </RequireAuth>
              </>
            }
          />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
