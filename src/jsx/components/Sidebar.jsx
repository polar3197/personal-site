import { Link } from 'react-router-dom';

const Sidebar = () => {
  // Define menu items as an array of objects
  const menuItems = [
    { id: 1, label: 'Home', href: '/' },
    // { id: 2, label: 'Projects', href: '/projects' },
    // { id: 3, label: 'Blog', href: '/blog' },
    // { id: 4, label: 'Gallery', href: '/gallery' },
    { id: 5, label: 'Books', href: '/books' },
    { id: 6, label: 'Resume', href: '/resume' },
  ];

  return (
    <div className="Sidebar">
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

export default Sidebar;

