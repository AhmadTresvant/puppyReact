const PuppyDetails = ({setShowDetails, selectedPuppy}) => {

return (
  <>
   <button onClick={() => setShowDetails(false)}> Back </button>
   <div className="puppyCard">
   <h1>{selectedPuppy.name}</h1>
   <p>breed:{selectedPuppy.breed}</p>
   <p>status:{selectedPuppy.status}</p>
   <img src={selectedPuppy.imageUrl} height = '300px' width ='300px' alt="" />
   </div>
  </>
);

}

export default PuppyDetails;