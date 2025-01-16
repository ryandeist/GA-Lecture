const PetDetail = (props) => {

    if (!props.selectedPet) {
        return (
            <h2>No Pet Selected</h2>
        )
    };

    return (
        <div>
            <h1>{props.selectedPet?.name}</h1>
            <h2>Breed: {props.selectedPet?.breed}</h2>
            <h2>Age: {props.selectedPet?.age}</h2>
            <button onClick={() => props.handleFormView(props.selectedPet)}>Edit Pet</button>
        </div>
    );
};

export default PetDetail;