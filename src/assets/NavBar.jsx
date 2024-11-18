import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <ul className="flex space-x-6 text-white text-lg">
        <li>
          <Link to="/" className="hover:text-gray-400 transition duration-300">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-400 transition duration-300">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
