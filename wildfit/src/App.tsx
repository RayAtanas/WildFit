import React, { useState } from 'react';
import logo from './logo.svg';
import Navbar from './Layout/Navbar';
import "./Types/Enum"
import { SelectedPage } from './Types/Enum';
function App() {
  const [selectedPage,setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  return (
    <div className="app">
     <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </div>
  );
}

export default App;
