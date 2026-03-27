import { useEffect, useState } from "react";
import PokeCard from "./components/PokeCard";
// import Card from "./components/Card";

export default function App() {

  const [data, setData] = useState({})

  useEffect(() => {
    console.log("effect");

    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((res) => res.json())
    .then((data) => setData(data))

  }, [])
  console.log("state: ", data);
  
  
  return (
    <div className="App">
      <h1>Items: </h1>

      <PokeCard
      name={data?.name}
      image={data?.sprites?.front_default}
      type={data?.types?.[0]?.type?.name}
      />

      {/* <Card tittle={data.title}
        description={data.description}
        price={data.price}
        categoria={data.category}
        image={data.image}
      />       */}
    </div>
  );
}


