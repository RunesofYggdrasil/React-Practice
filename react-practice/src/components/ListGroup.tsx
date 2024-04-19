function ListGroup() {
  const listItems = [
    "Item One",
    "Item Two",
    "Item Three",
    "Item Four",
    "Item Five",
  ];

  return (
    <>
      <h1>a</h1>
      {listItems.length === 0 && <p>Nothing Found</p>}
      <ul className="list-group">
        {listItems.map((listItem) => (
          <li className="list-group-item" key={listItem}>
            {listItem}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
