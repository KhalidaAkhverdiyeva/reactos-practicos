import React from 'react'
import useSWR from 'swr';
import { useNavigate } from 'react-router-dom';

const MyTable = ({ data }) => {

  const navigate = useNavigate();

  const changePage = () => {
    navigate('/blog');
  };
    
  return (
    <div className="container mx-auto p-4">
    <table className="min-w-full bg-white border-collapse rounded-md ">
      <thead>
        <tr>
          <th className="py-4 px-6 border-b text-left">Name</th>
          <th className="py-4 px-6 border-b text-left">Function</th>
          <th className="py-4 px-6 border-b text-left">Review</th>
          <th className="py-4 px-6 border-b text-left">Email</th>
          <th className="py-4 px-6 border-b text-left">Employed</th>
        </tr>
      </thead>
      <tbody>
          {data.map((item) => (
            <tr   key={item.id}>
              <td className="py-4 px-6 flex items-center space-x-2">
                <img
                  src={item.image}
                  alt="profile"
                  className="w-10 h-10 rounded-lg"
                />
                <p className="m-0">{item.name}</p>
              </td>
              <td className="py-4 px-6 text-left">{item.function}</td>
              <td className="py-4 px-6 text-left flex items-center space-x-2">
              <div className="flex items-center justify-center gap-2 space-x-1">
                  <span className={`w-4 flex items-center justify-center h-4 rounded-full ${item.review === 'positive' ? 'bg-green-500' : item.review === 'negative' ? 'bg-red-500' : 'bg-gray-200'}`}></span>
                  <span className="mr-2">{item.review}</span>
                </div>
                
               
              </td>
              <td className="py-4 px-6 text-left bg-white">{item.email}</td>
              <td className="py-4 px-6 text-left bg-white rounded-r-lg">{item.date}</td>
            </tr>
          ))}
        </tbody>
    </table>
    <div className="flex justify-end mt-4">
      <button onClick={changePage} className="bg-blue-500 text-white py-2 px-4 rounded">
        Add New
      </button>
    </div>
  </div>
  )
}

export default MyTable