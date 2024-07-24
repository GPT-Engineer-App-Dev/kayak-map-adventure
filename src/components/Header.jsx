import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Kayaking Trip Planner</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
            <li><NavLink to="/plan" className="hover:underline">Plan Trip</NavLink></li>
            <li><NavLink to="/about" className="hover:underline">About</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;