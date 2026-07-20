import logo from './logo.svg';
import './App.css';
import Todolist from '../src/components/ToDoList.js'; // Import the ToDoList component
import CityList from '../src/components/CityList.js';

const cities=["New York","London","Dubai","Beirut","Paris",'Tokyo'];
function App() {
  return (
    //rap them by empty div or react fragment
    <>
  
    <div className="App">
      <h1>To Do List</h1>

      <CityList cities={cities} />
    </div>
    </>
  );
};

export default App;
