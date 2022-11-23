import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import LoanApplicationForm from './Components/LoanApplicationForm';

import LoanCalculator from './Components/Loancalculator/LoanCalculator';
import LoanTracker from './Components/LoanTracker';
import Login from './Components/Login';
import MainDashboard from './Components/MainDashboard';
import Registration from './Components/Registration';


function App() {
  return (
    <div>
      {/* <Login /> */}
      {/* <Registration /> */}
      {/* <LoanApplicationForm /> */}
      {/* <MainDashboard /> */}
      {/* <Home /> */}
      {/* <LoanTracker /> */}

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registartion' element={<Registration />} />
        <Route path='/maindashboard' element={<MainDashboard />} />
        <Route path='/loancalculator' element={<LoanCalculator />} />
        <Route path='/loanapplicationform' element={<LoanApplicationForm />} />
        <Route path ='/loantracker' element={<LoanTracker />} />


        {/* To do */}
        {/* <Route path='/forgotpassword' element={<ForgotPwd />} /> */}
        {/* <Route path='/Unauthorised' element={<Unauthorised />} /> */}
        {/* <Route path='*' element={<ErrorPage />} /> */}

      </Routes>

    </div>
  );
}

export default App;
