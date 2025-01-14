import { useEffect, useState } from 'react'
import { index } from './services/petService.js'
import PetList from './components/PetList/PetList.jsx';
import PetDetail from './components/PetDetail/PetDetail.jsx';
import './App.css'

const App = () => {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState();

  const handleSelect = (pet) => {
    setSelectedPet(pet);
  };

  const getPets = async () => {
    try {
      const foundPets = await index();
      if (foundPets.error) {
        throw new Error(foundPets.error);
      }
      setPets(foundPets);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPets();
  }, []);

  return (
    <>
      <PetList pets={pets} handleSelect={handleSelect} />
      <PetDetail selectedPet={selectedPet} />
    </>
  ) 
};

export default App;
