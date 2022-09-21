import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children: any}) => {
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