"use client"
function GenerateRandomCars({ randomCars }) {
    return (
      <button onClick={() => randomCars()}>Générer</button>
    );
  }
  
  export default GenerateRandomCars;
  