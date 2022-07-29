import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Issues from "./pages/Issues";
function App() {
  return (
    <Box w={"100%"} backgroundColor={"#000"}>
      <Navbar />
      <Box mt={"64px"}>
        <Routes>
          <Route path="/issues" element={<Issues />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
