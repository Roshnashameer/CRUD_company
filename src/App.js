
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Company from './Component/Company';
import { Provider } from 'react-redux';
import compstore from './Redux/Store';
import { ToastContainer } from 'react-toastify';
import Header from './Component/Header';

function App() {
  return (
    <Provider store={compstore}>
      
   
      <Header></Header>
      <Routes>
       <Route path='/' element={<Company></Company>}></Route>
      </Routes>
    
    <ToastContainer position='top-right'></ToastContainer>
    </Provider>
  );
}

export default App;
