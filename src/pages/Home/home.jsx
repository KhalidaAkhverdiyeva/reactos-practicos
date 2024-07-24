import React from 'react';
import MyTable from '../../component/Table/MyTable';

const Home = ({ data }) => {
  return (
    <div>
    
      <MyTable data={data} />
    </div>
  );
};

export default Home;