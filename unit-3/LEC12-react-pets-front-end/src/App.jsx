import { useEffect, useState } from 'react'
import { create, index } from './services/petService.js'
import PetList from './components/PetList/PetList.jsx';
import PetDetail from './components/PetDetail/PetDetail.jsx';
import PetForm from './components/PetForm/PetForm.jsx';
import './App.css'

const App = () => {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSelect = (pet) => {
    setIsFormOpen(false);
    setSelectedPet(pet);
  };

  const handleFormView = (pet) => {
    if (!pet._id) setSelectedPet(null);
    setIsFormOpen((prev) => !prev);
  };

  const handleAddPet = async (formData) => {
    try {
      const createdPet = await create(formData);
      if (createdPet.error) {
        throw new Error(createdPet.error);
      }
      setPets((prev) => [...prev, createdPet]);
      setIsFormOpen(false);
      setSelectedPet(formData);
    } catch (error) {
      console.error(error);
    }
  }

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
      <PetList pets={pets} handleSelect={handleSelect} handleFormView={handleFormView} isFormOpen={isFormOpen} />
      {isFormOpen ?
        <PetForm handleAddPet={handleAddPet} selectedPet={selectedPet} />
        :
        <PetDetail selectedPet={selectedPet} handleFormView={handleFormView} />
      }
    </>
  )
};

export default App;
