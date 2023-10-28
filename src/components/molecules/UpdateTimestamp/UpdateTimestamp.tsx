'use client';

import Moment from 'react-moment';

export interface UpdateTimestampProps {
  updatedAt: Date;
}

const UpdateTimestamp = ({ updatedAt }: UpdateTimestampProps) => {
  return (
    <div className='mt-4 flex justify-end flex-wrap'>
      <strong>Last update:</strong>
      &nbsp;
      <Moment format='ddd Do MMMM YYYY, HH:mm'>{updatedAt}</Moment>
      &nbsp;(CEST)
    </div>
  );
};

export default UpdateTimestamp;
