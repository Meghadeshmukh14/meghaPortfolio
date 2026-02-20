import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import Navbar from "../v1/components/layout/Navbar";
import Footer from "../v1/components/layout/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
