import ListGroup from "./components/ListGroup";

function App() {
  const listItems = [
    "Item One",
    "Item Two",
    "Item Three",
    "Item Four",
    "Item Five",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        listItems={listItems}
        heading="A"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
