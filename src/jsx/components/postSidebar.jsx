

import { Link } from 'react-router-dom';

const PostSidebar = () => {
  // Define menu items as an array of objects
  const menuItems = [
    { id: 1, label: 'back to blog', href: '/blog' },
  ];

  return (
    <div className="Post-sidebar">
      <nav className="Sidebar-nav">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            to={item.href}
            className="Sidebar-menu-item"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default PostSidebar;