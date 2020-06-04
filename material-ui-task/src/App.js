import React from 'react'

import Navbar from './components/layouts/Navbar';
import Search from './components/layouts/Search';
import Images from './components/pages/Images';

import ResultState from './context/results/ResultState';

const App = () => {
  return (
    <ResultState>
      <>
        <Navbar/>
        <Search/>
        <Images/>
      </>
    </ResultState>
  )
}

export default App
