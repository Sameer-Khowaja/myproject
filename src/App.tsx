import React, { useState } from 'react';

import './App.css';
import TopBar from './components/TopBar';
import HeroSection from './components/HeroSection';
import CheckInModal from "./components/CheckInModal";
import CheckInCard from "./components/CheckInCard";

interface CheckIn {
  title: string;
  img: string;
}

function App() {
  const [checkIns, setCheckIns] = useState<CheckIn[]>([
    { title: 'Check-In 1', img: require("./components/1.png") },
    { title: 'Check-In 2', img: require("./components/2.png") },
    { title: 'Check-In 3', img: require("./components/3.png") },
    { title: 'Check-In 4', img: require("./components/4.png") },
  ]);

  const addCheckIn = (title: string, image: string) => {
    setCheckIns([...checkIns, { title, img: image }]);
  };

  return (
    <div style={{maxWidth:"1440px", height: "1024px", padding: '35px'}}>
      <TopBar />
      <HeroSection />
      <div>
      <CheckInModal addCheckIn={addCheckIn} />
      <CheckInCard checkIns={checkIns} />
    </div>

     
    </div>
  );
}

export default App;
