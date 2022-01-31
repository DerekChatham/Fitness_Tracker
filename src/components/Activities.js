import React from 'react';

const Activities = ({ activities }) => {
  return (
    <div>
      {activities.length
        ? activities.map((activity) => <div key={activity.id}>Activities: {activity.name}</div>)
        : ''}
    </div>
  );
};

export default Activities;