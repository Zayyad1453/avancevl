import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Side = () => {
  const percentage = 75;
  return (
    <div className="container p-5">
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
      <div className="row">
        <h6 className="bold my-3">
          COMPLETED
          <span className='d-block'>
            <span className="mega">100</span>
            <span className="grey-text ml-1">PROBLEMS</span>
          </span>
        </h6>

        <h6 className="bold my-3">
          CORRECT
          <span className='d-block'>
            <span className="mega">75</span>
            <span className="grey-text ml-1">PROBLEMS</span>
          </span>
        </h6>
      </div>
    </div>
  );
}


export default Side;
