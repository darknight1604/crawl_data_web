import logo from './logo.svg';
import './App.css';
import { useGetDataCollectionQuery, } from './services/crawlData';
import ShopeeCollection from './components/ShopeeCollection';
import ShopeeSearchCollection from './components/ShopeeSearchCollection';
import ShopeeSoldOutCollection from './components/ShopeeSoldOutCollection';

function App() {
  const { data, _error, isLoading } = useGetDataCollectionQuery();
  
  if(isLoading){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span>Loading...</span>
        </header>
      </div>
    );
  }
  return (
    <div className="App">
      <ShopeeCollection products={data}/>
      <ShopeeSearchCollection />
      <ShopeeSoldOutCollection />
      <br/>
    </div>
  );
}

export default App;
