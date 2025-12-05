import '../layouts/styles/styleHeader.css';
import { NavLink } from 'react-router-dom'; 

const headerStyle = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/register"
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Register
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/books"
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Books
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/users"
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Users
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default headerStyle;
