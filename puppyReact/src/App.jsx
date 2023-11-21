import { useState } from "react";
import PuppyList from "./components/PuppyList";
import PuppyDetails from "./components/Puppy.Details";
import './App.css'



function App() {
  const [showDetails, setShowDetails] = useState(null);
  const [selectedPuppy, setSelectedPuppy] = useState(null);

  return (
    <>
      {showDetails ? (
        <PuppyDetails
          setShowDetails={setShowDetails}
          setSelectedPuppy={setSelectedPuppy}
          selectedPuppy={selectedPuppy}
        />
      ) : (
        <PuppyList
          setShowDetails={setShowDetails}
          setSelectedPuppy={setSelectedPuppy}
          selectedPuppy={selectedPuppy}
        />
      )}
    </>
  );
}

export default App;
