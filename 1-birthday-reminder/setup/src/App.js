import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [peopleState, setPeopleState] = useState(data);
  return (
    <main>
      <secton className='container'>
        <h3>{peopleState.length} birthdays today</h3>
        <List peopleProps={peopleState} />
        <button onClick={()=> setPeopleState([])}>clear all</button>
      </secton>
    </main>
  );
}

export default App;