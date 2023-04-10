import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import FormData from './components/FormData';
import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
  // Outlet
} from 'react-router-dom';
import TestForm from './components/TestForm';




function App() {
  return (


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/form" element={<FormData />} />
        <Route path="/tf" element={<TestForm />} />

 

        
      </Routes>
    </BrowserRouter>


  );
}

export default App;
