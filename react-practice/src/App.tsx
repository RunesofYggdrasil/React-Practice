import ListGroup from "./components/ListGroup";

function App() {
  const listItems = [
    "Item One",
    "Item Two",
    "Item Three",
    "Item Four",
    "Item Five",
  ];
  return (
    <div>
      <ListGroup listItems={listItems} heading="A" />
    </div>
  );
}

export default App;
