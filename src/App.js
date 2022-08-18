import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import * as React from 'react';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Filter from './components/Filter';
import Result from './components/Result';


function App() {

  const [filters, setFilters] = React.useState({
    loc: "all",
    when: "move-in",
    price: 0,
    type: 0
  });

  const [update, setUpdate] = React.useState(false);

  
  return (
    <ChakraProvider>
      <div className="App">
        <div className='navbar'><Navbar/></div>
          <div className='App-inner'>
            <div className='title'><Title/></div>
            <div className='filters'><Filter filters = {filters} setFilters = {setFilters} setUpdate = {setUpdate}/></div>
            <div className='result'><Result update = {update} filters = {filters} /></div>
          </div>
      </div>
    </ChakraProvider>

  )
}

export default App;


