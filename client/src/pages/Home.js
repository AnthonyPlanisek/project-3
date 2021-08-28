import React from 'react';
import { useQuery } from '@apollo/client';
import UserList from '../components/UserList';
import { QUERY_USER } from '../utils/queries';

const Home = () => {
  const { data } = useQuery(QUERY_USER);
  const users = data?.users || [];

  return (
    <main>
      <div className="flex-row justify-center">
        new home page
        <UserList
        users={users}
        title="list of users"
        />
      </div>
    </main>
  );
};

export default Home;
