interface ListGroupProps {
  listItems: string[];
  heading: string;
}

function ListGroup({ listItems, heading }: ListGroupProps) {
  const handleClick = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <h1>{heading}</h1>
      {listItems.length === 0 && <p>Nothing Found</p>}
      <ul className="list-group">
        {listItems.map((listItem) => (
          <li
            className="list-group-item"
            key={listItem}
            onClick={() => {
              handleClick(listItem);
            }}
          >
            {listItem}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
