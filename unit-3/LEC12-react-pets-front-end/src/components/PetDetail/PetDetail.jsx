const PetDetail = (props) => {
    
    return (
        <div>
            <h1>{props.selectedPet?.name}</h1>
            <h2>Breed: {props.selectedPet?.breed}</h2>
            <h2>Age: {props.selectedPet?.age}</h2>
        </div>
    );
};

export default PetDetail;