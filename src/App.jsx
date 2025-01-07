import React from 'react';

import Home from './components/Main/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
// Removed duplicate ShimmerUI import, since it's already imported once
// import Response from './components/Main/Home/SimerUi'; 
import ShimmerUI from './components/Main/Home/SimerUi';

function App() {
  return (

    <div className="max-h-screen w-full bg-zinc-800 text-white flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Home />
    </div>

  );
}

export default App;
