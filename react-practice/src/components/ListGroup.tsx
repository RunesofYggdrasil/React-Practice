import { useState } from "react";

interface ListGroupProps {
  listItems: string[];
  heading: string;
}

function ListGroup({ listItems, heading }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    console.log(selectedIndex);
  };

  return (
    <>
      <h1>{heading}</h1>
      {listItems.length === 0 && <p>Nothing Found</p>}
      <ul className="list-group">
        {listItems.map((listItem, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={listItem}
            onClick={() => {
              handleClick(index);
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
