import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './layouts/HomePage.tsx';
import Users from './layouts/Users.tsx';
import AddUser from './pages/AddUser/index.tsx';
import EditUser from './pages/EditUser/index.tsx';
import ListUsers from './pages/ListUsers/index.tsx';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}>
          <Route path='/users' element={<Users />} >
            <Route index element={<ListUsers />} />
            <Route path='add' element={<AddUser />} />
            <Route path='edit/:id' element={<EditUser />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
