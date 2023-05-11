import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const coffees = useLoaderData();
  return (
    <div className="mt-20">
      <h2 className="text-center text-3xl font-semibold mb-6">
        Coffee List | Total Coffee item: {coffees.length}
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
