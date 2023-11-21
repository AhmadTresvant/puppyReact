import { useEffect, useState } from "react";

const PuppyList = ({ setShowDetails, setSelectedPuppy }) => {
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
        console.log(fetchedPuppies);
      } catch (error) {
        console.error("Error fetching puppies:", error);
      }
    };
    fetchPuppy();
  }, []);

  const handlePuppyClick = (puppy) => {
    setShowDetails(true);
    setSelectedPuppy(puppy);
  };

  return (
    <>
      <h1>Puppy List</h1>
     <div className="bigContainer">
      {allPuppies.map((puppy) => (
        <div
          className="container"
          onClick={() => handlePuppyClick(puppy)}
          key={puppy.id}
        >
          <div>
            <h3>{puppy.name}</h3>
            <img src={puppy.imageUrl} height="100px" width="100px" alt="" />
          </div>
        </div>
      ))}</div>
    </>
  );
};
export default PuppyList;
