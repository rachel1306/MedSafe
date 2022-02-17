import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Landing, Login, Register, Cart, Profile } from './components'
import { Home, Orders } from './pages'
import PrivateRoute from "./utils/PrivateRoute"


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="home" 
              element={
                <PrivateRoute>
                  <Home/>
                </PrivateRoute>
              }
            />
              {/* <Route path="book" 
              element={
                <PrivateRoute>
                  <Book />
                </PrivateRoute>
              }
            /> */}
            <Route path="cart" 
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />

            <Route path="orders" 
              element={
                <PrivateRoute>
                  <Orders />
                </PrivateRoute>
              }
            />
            
            <Route path="profile" 
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;