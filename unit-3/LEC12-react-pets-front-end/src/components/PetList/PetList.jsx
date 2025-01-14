const PetList = (props) => {
    // console.log(props);
    return (
        <>
            <h1>Pet List</h1>
            <div>
                {!props.pets ? (
                    <h2>No Pets Yet</h2>
                ) : (
                    <ul>
                        {props.pets.map((pet) => (
                            <li 
                                key={pet._id}
                                onClick={() => props.handleSelect(pet)}
                            >
                                {pet.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <button onClick={props.handleFormView}>
                {props.isFormOpen ? 'Close Form' : 'Add Pet'}
            </button>
        </>
    )
};

export default PetList;