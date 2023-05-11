import { Form, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.coffeeName.value;
    const chef = form.chefName.value;
    const supplier = form.coffeeSupplier.value;
    const taste = form.coffeeTaste.value;
    const category = form.coffeeCategory.value;
    const details = form.coffeeDetails.value;
    const photo = form.photoURL.value;
    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated successfully.",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="mt-10">
      <div className="hero min-h-screen bg-base-200 rounded-2xl">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold text-center">
              Update Coffee Info of {name}
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <Form
            onSubmit={handleUpdateCoffee}
            className="card flex-shrink-0 w-full  shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="flex justify-between gap-4 items-center">
                <div className="form-control w-1/2 ">
                  <label className="label">
                    <span className="label-text font-semibold">Name</span>
                  </label>
                  <input
                    type="text"
                    name="coffeeName"
                    defaultValue={name}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">Chef</span>
                  </label>
                  <input
                    type="text"
                    name="chefName"
                    defaultValue={chef}
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="flex justify-between gap-4 items-center">
                <div className="form-control w-1/2 ">
                  <label className="label">
                    <span className="label-text font-semibold">Supplier</span>
                  </label>
                  <input
                    type="text"
                    name="coffeeSupplier"
                    defaultValue={supplier}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">Taste</span>
                  </label>
                  <input
                    type="text"
                    name="coffeeTaste"
                    defaultValue={taste}
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center gap-4">
                <div className="form-control w-1/2 ">
                  <label className="label">
                    <span className="label-text font-semibold">Category</span>
                  </label>
                  <input
                    type="text"
                    name="coffeeCategory"
                    defaultValue={category}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">Details</span>
                  </label>
                  <input
                    type="text"
                    name="coffeeDetails"
                    defaultValue={details}
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Photo</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  defaultValue={photo}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
