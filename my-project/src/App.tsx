import type { Component } from 'solid-js';

import Card from './components/Card'; 

const App: Component = () => {
  return (
    <div class="h-screen w-screen flex items-center justify-center"> 
      <Card />
    </div>
  );
};

export default App;
