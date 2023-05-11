/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { FaEye, FaPen, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire("Deleted!", "Your file has been deleted.", "success");

        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = coffees.filter(
                (newCoffee) => newCoffee._id !== _id
              );
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="card flex items-center card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Coffee image" />
      </figure>
      <div className=" flex justify-between items-center w-full px-4">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <p>Chef: {chef}</p>
          <p>Supplier: {supplier}</p>
          <p>Taste: {taste}</p>
          <p>Category: {category}</p>
          <p>Details: {details}</p>
        </div>
        <div className="card-actions ">
          <div className="btn-group btn-group-vertical space-y-2">
            <button className="btn">
              <FaEye />
            </button>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn">
                <FaPen />
              </button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn">
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
