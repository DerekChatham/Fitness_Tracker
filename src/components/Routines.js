import React, { useState } from 'react';
import RoutineDiv from './RoutineDiv';

const styles = {
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
    alignItems: 'center',
  },
  searchInput: {
    margin: '0 16px',
  },
};

const routineMatches = (routine, searchTerm) => {
  const searchTermLower = searchTerm.toLowerCase();
  const { name, goal, creatorName } = routine;

  const toMatch = [name, goal, creatorName];

  for (const field of toMatch) {
    if (field.toLowerCase().includes(searchTermLower)) {
      return true;
    }
  }
};

const Routines = ({ routines }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const routinesToDisplay = routines.filter((routine) => routineMatches(routine, searchTerm));
  return (
    <>
      <div className='outer-container'>
        <div className='search-bar-container'>
          <h2>Routines</h2>
          <input
            className='search-bar'
            type='text'
            placeholder='search for routines'
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          ></input>
        </div>
        {routinesToDisplay.length
          ? routinesToDisplay.map((routine) => <RoutineDiv key={routine.id} routine={routine} />)
          : ''}
      </div>
    </>
  );
};

export default Routines;