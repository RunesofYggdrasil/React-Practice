import { useState } from "react";

interface ListGroupProps {
  listItems: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ listItems, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
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
              onSelectItem(listItem);
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
