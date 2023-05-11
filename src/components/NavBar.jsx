import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex ">
      <div className="flex-1">
        <Link to="/">CoffeHouse</Link>
      </div>
      <div className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/addCoffee">Add Coffee</Link>
      </div>
    </div>
  );
};

export default NavBar;
