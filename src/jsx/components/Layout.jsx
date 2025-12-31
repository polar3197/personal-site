import Sidebar from './Sidebar';

const Layout = ({ children, showSidebar = true }) => {
  return (
    <div className="Site-wrapper">
      {showSidebar && <Sidebar />}
      <div className="Page-Content">
        {children}
      </div>
    </div>
  );
};

export default Layout;

