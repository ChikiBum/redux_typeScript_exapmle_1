import React from 'react';
import UserList from './components/UserList';
import TodosList from './components/TodosList';

const App = () => {
  return (
    <div>
      <UserList />
      <TodosList />
    </div>
  )
};

export default App;