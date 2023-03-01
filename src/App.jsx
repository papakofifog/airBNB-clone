import { useState } from 'react'
import NavBar from './components/navbar';
import Hero from './components/hero';
import Card from './components/cards';
import Data from './assets/data'
function App() {
  let pictures= Data.map((pictureDetails)=>{


    return (<Card 
    key={pictureDetails.id}
    {...pictureDetails}
    />)
  })
  
  return (
    <div>
      <NavBar />
      <Hero />
      <section className='imageAlbum'>
      {pictures}
      </section>
      
    </div>
    
  );
}

export default App
