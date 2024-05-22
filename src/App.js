
import './App.css';
import Pagination from './components/Pagination';

function App() {
  const itemsPerPage = 10;
  return (
    <div className="App">
      <h1>Employee Data Table</h1>
      <Pagination itemsPerPage={itemsPerPage} />
    </div>
  );
}

export default App;
