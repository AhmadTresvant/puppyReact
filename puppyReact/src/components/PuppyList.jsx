import { useEffect, useState } from "react";

const PuppyList = () => {
  const [allPuppies, setAllPuppies] = useState([]);
  useEffect(() => {
    const fetchPuppy = async () => {
      try {
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players"
        );
        const result = await response.json();
        const fetchedPuppies = result.data.players;
        setAllPuppies(fetchedPuppies);
      } catch (error) {
        console.error("Error fetching puppies:", error);
      }
    };
    fetchPuppy();
  }, []);

  return (
    <>
      <h1>Puppy List</h1>
      {allPuppies.map((puppy) => (
        <div key={puppy.id}>{puppy.name}</div>
      ))}
    </>
  );
};
export default PuppyList;
