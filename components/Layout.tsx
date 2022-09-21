import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
  return (
    <div>
      <div className="content">
        <Navbar />
        {children}
        <Footer/>
      </div>
    </div>
  );
}

export default Layout;