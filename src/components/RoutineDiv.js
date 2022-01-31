import React from 'react';

const RoutineDiv = ({ routine }) => {
  const { name, goal, id, creatorName, activities } = routine;

  return (
    <div key={id} className='routine-card-container'>
      <div className='details-container'>
        <h2>{name}</h2>
        <p>Goal: {goal}</p>
        <p>
          Activities:
          {activities.map(({ id, name }) => {
            return (
              <div key={id}>
                <p>{name}</p>
              </div>
            );
          })}
        </p>
        <p>Created by: {creatorName}</p>
      </div>
    </div>
  );
};

export default RoutineDiv;