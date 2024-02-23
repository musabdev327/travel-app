import React from 'react';
import './App.css';
import Header from './components/shared/Header';
import TravelingDetails from './views/traveling-details';

const App: React.FC = () => {
  return (
    <div className="travel-app">
      <Header />
      <TravelingDetails />
    </div>
  );
}

export default App;
