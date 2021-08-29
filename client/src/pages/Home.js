import React from 'react';
import { useQuery } from '@apollo/client';
// import UserList from '../components/UserList';
import { QUERY_USERS } from '../utils/queries';

const Home = () => {
  const { data } = useQuery(QUERY_USERS);
  const users = data?.users || [];
  console.log('!!!!', users)
  console.log('????', JSON.stringify(users[0]))
  return (
    <main>
      <div className="flex-row justify-center">
        new home page: 
        <ol>
        <li>{JSON.stringify(users[0])}</li>
        </ol>
      </div>
    </main>
  );
};

export default Home;
