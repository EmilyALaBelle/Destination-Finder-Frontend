import './App.css';
import { useState} from 'react';
// import {UserContext} from "./UserContext"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import QuizForm from './components/QuizForm';
import Login from './components/Login';
import Favorites from './components/Favorites';
import Home from './components/Home';
import DestinationList from './components/DestinationList'
import Results from './components/Results';
import Profile from './components/Profile';
import AccountEdit from './components/AccountEdit';
import Signup from './components/Signup';



// export const UserContext = createContext(null)


function App() {
  const [user, setUser] = useState()
  const [token, setToken] = useState()
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<QuizForm />} />
        <Route path='/destinationList' element={<DestinationList />} />
        <Route path='/results' element={<Results />} />
        <Route path='/profile' element={<Profile />} />
        {/* <UserContext.Provider value={{user, setUser, isLoggedIn, setIsLoggedIn}}> */}
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/login' element={<Login setUser={setUser} setToken={setToken} user={user} token={token} />} />
          <Route path='/signup' element={<Signup setUser={setUser} setToken={setToken} user={user} token={token}/>} />
          <Route path='/account' element={<AccountEdit user={user} token={token} setUser={setUser} />} />
        {/* </UserContext.Provider> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;






// import './App.css';
// import { useState, createContext } from 'react';
// // import {UserContext} from "./UserContext"
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import QuizForm from './components/QuizForm';
// import Login from './components/Login';
// import Favorites from './components/Favorites';
// import Home from './components/Home';
// import DestinationList from './components/DestinationList'
// import Results from './components/Results';
// import Profile from './components/Profile';
// import AccountEdit from './components/AccountEdit';
// import Signup from './components/Signup';



// export const UserContext = createContext(null)


// function App() {
//   const [user, setUser] = useState(null)
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
  
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/quiz' element={<QuizForm />} />
//         <Route path='/destinationList' element={<DestinationList />} />
//         <Route path='/results' element={<Results />} />
//         <Route path='/profile' element={<Profile />} />
//         <UserContext.Provider value={{user, setUser, isLoggedIn, setIsLoggedIn}}>
//           <Route path='/favorites' element={<Favorites />} />
//           <Route path='/login' element={<Login setUser={setUser} />} />
//           <Route path='/signup' element={<Signup setUser={setUser} />} />
//           <Route path='/account' element={<AccountEdit user={user} setUser={setUser} />} />
//         </UserContext.Provider>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
