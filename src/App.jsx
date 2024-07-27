import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/log.jsx';
import { BrowserRouter ,Route , Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard.jsx';
import Home from './Components/Home.jsx';
import Employee from './Components/Employee.jsx';
import Profile from './Components/Profile.jsx';
import AddEmployee from './Components/AddEmployee.jsx';
import EditEmployee from './Components/EditEmployee.jsx';
import AddCategory from './Components/AddCategory.jsx';
import Category from './Components/Category.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route index element={<Login />}></Route>
      <Route path='/adminlogin' element={<Login />}></Route>
      <Route path='/dashboard' element={<Dashboard />}>
        <Route path='' element={<Home />}></Route>
        <Route path='/dashboard/employee' element={<Employee />}></Route>
        <Route path='/dashboard/category' element={<Category />}></Route>
        <Route path='/dashboard/add_category' element={<AddCategory/>}></Route>
        <Route path='/dashboard/add_employee' element={<AddEmployee/>}></Route>
        <Route path='/dashboard/edit_employee/:id' element={<EditEmployee/>}></Route>
      </Route>
    </Routes>
     </BrowserRouter>
    </>
  );
};

export default App
