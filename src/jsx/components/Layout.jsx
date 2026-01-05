import Sidebar from './Sidebar';
import PostSidebar from './postSidebar';

const Layout = ({ children, showSidebar = true }) => {
  return (
    <div className="Site-wrapper">
      {showSidebar && <Sidebar />}
      {!(showSidebar) && <PostSidebar />}
      <div className="Page-Content">
        {children}
      </div>
    </div>
  );
};

export default Layout;

