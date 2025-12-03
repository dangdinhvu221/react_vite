import Headers from "./layouts/header.jsx";
import Footer from "./layouts/footer.jsx";
import { Outlet } from "react-router-dom";
const App = () => {

  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
