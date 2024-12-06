const FounderListItem = ({ founder }) => {
    return (
      <li>
        <h3>Hello, I'm { founder.name }, the {founder.title}</h3>
        <p>{ founder.credential }</p>
      </li>
    );
  };
  
  export default FounderListItem;