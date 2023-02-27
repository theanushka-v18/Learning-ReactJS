import './App.css';

function App() {
  let name = "Anushka";
  return (
    <div className="App-header">
      App Component
      My name is {name}
      <Demo />
    </div>
  );
}

function Demo() {
  let learning = "ReactJS";
  return (
    <div className="App-header">
      Demo Component
      I am learning {learning}
    </div>
  );
}

export default App;
