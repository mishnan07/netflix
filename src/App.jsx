

import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import {action,Orginals,comedy,horror,romantic,documentary} from './urls'
import './App.css'
import Banner from './Components/Banner.jsx/Banner'
import RowPost from './Components/RowPost/RowPost'

function App() {

  return (
   <div className='App'>
      <Navbar />
      <Banner />
      <RowPost url={Orginals} title='Netflix Orginals'/>
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={comedy} title='Comedy Movies' isSmall />
      <RowPost url={horror} title='Horror Movies' isSmall />
      <RowPost url={romantic} title='Romantic Movies' isSmall />
      <RowPost url={documentary} title='Documentaries' isSmall />

   </div>
  )
}

export default App
