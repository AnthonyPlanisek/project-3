import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';

const Home = () => {
  const { data } = useQuery(QUERY_USERS);
  const users = data?.users || [];
  console.log('!!!!', users)
  // const username = users[0].username
  console.log('????', JSON.stringify(users[0]))
  let allUsers = []
  for (let i = 0; i < users.length; i++) {
    allUsers.push(users[i].username + ' ')
    
  }

  return (
    <main>
      <div className="flex-row justify-center">
        user page: 
        <ol>
        <li>{allUsers}</li>
        </ol>
      </div>
    </main>
  );
};

export default Home;
