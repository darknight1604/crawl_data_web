import logo from './logo.svg';
import './App.css';
import { useGetDataCollectionQuery, } from './services/crawlData';
import ShopeeCollection from './components/ShopeeCollection';
import ShopeeSearchCollection from './components/ShopeeSearchCollection';
import ShopeeSoldOutCollection from './components/ShopeeSoldOutCollection';
import { createTheme, Grid, responsiveFontSizes } from '@mui/material';
import ErrorData from './components/ErrorData';

let theme = createTheme();

theme = responsiveFontSizes(theme);

function App() {
  const { data, error, isLoading } = useGetDataCollectionQuery();
  
  if(isLoading){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span>Loading...</span>
        </header>
      </div>
    );
  }else if(error){
    return <ErrorData nameArea="Top search"/>
  }
  return (
    <div className="App">
      <Grid container>
          <Grid item lg={2} xs={3}>
              <div></div>
          </Grid>
          <Grid item xs={6} md={12} sm={12} lg={8}> 
            <ShopeeCollection products={data} titleTheme={theme}/>
            <ShopeeSearchCollection titleTheme={theme}/>
            <ShopeeSoldOutCollection titleTheme={theme}/>
          </Grid>
          <Grid item lg={2} xs={3}>
              <div></div>
          </Grid>
      </Grid>
      
      <br/>
    </div>
  );
}

export default App;
