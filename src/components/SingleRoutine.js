import React from 'react';
import { useParams, useHistory } from 'react-router-dom';


const SingleRoutine = ({ routines, token, setRoutines, userData }) => {
  const { routineId } = useParams();
  const history = useHistory();

  const routine = routines.find((routine) => routineId === routine.id);
  console.log('SINGLE ROUTINE: ', routine);

  const isUser = userData.username === routine.creatorName;

  return (
    <>
      {routine ? (
        <div>
          <div>
            <h3>{routine.name}</h3>
            <p>Posted By: {routine.creatorName}</p>
            </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default SingleRoutine;