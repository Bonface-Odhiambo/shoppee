import './App.css';
import { ThemeProvider } from '@emotion/react';
import customeTheme from './Theme/customeTheme';
import { Button } from '@mui/material';
import Navbar from './customer/components/Navbar/Navbar';
import Home from './customer/pages/Home/Home';
import Footer from './customer/components/Footer/Footer';
import Products from './customer/pages/Products/Products';
import { Route, Routes, useNavigate } from 'react-router-dom';
import WhatsAppButton from './WhatsApp/whatsapp';

import SellerDashboard from './seller/pages/SellerDashboard/SellerDashboard';
import CustomerRoutes from './routes/CustomerRoutes';
import AdminDashboard from './admin/pages/Dashboard/Dashboard';
import SellerAccountForm from './customer/pages/BecomeSeller/SellerAccountForm';
import SellerAccountVerification from './seller/pages/SellerAccountVerification';
import SellerAccountVerified from './seller/pages/SellerAccountVerified';
import { useAppDispatch, useAppSelector } from './Redux Toolkit/Store';
import { useEffect } from 'react';
import { fetchSellerProfile } from './Redux Toolkit/Seller/sellerSlice';
import BecomeSeller from './customer/pages/BecomeSeller/BecomeSeller';
import AdminLoginForm from './admin/pages/Auth/AdminLogin';
import AdminAuth from './admin/pages/Auth/AdminAuth';
import { fetchUserProfile } from './Redux Toolkit/Customer/UserSlice';
import { createHomeCategories, fetchHomePageData } from './Redux Toolkit/Customer/Customer/AsyncThunk';
import { homeCategories } from './data/homeCategories';
import Mobile from './data/Products/mobile';

// Floating WhatsApp Component
const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-9 right-32 z-40">
      <WhatsAppButton />
    </div>
  );
};

function App() {
  const dispatch = useAppDispatch();
  const { auth, sellerAuth, sellers, user } = useAppSelector(store => store);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      dispatch(fetchUserProfile({
        jwt: localStorage.getItem("jwt") || auth.jwt || "",
        navigate
      }));
      dispatch(fetchSellerProfile(localStorage.getItem("jwt") || sellerAuth.jwt));
    }
  }, [auth.jwt, sellerAuth.jwt]);

  useEffect(() => {
    dispatch(createHomeCategories(homeCategories));
    // dispatch(fetchHomePageData())
  }, [dispatch]);

  // Function to check if current route is a customer route
  const isCustomerRoute = () => {
    const path = window.location.pathname;
    return !path.includes('/admin') && !path.includes('/seller');
  };

  return (
    <ThemeProvider theme={customeTheme}>
      <div className='App'>
        <Routes>
          {sellers.profile && (
            <Route path='/seller/*' element={<SellerDashboard />} />
          )}
          
          {user.user?.role === "ROLE_ADMIN" && (
            <Route path='/admin/*' element={<AdminDashboard />} />
          )}
          
          <Route path='/verify-seller/:otp' element={<SellerAccountVerification />} />
          <Route path='/seller-account-verified' element={<SellerAccountVerified />} />
          <Route path='/become-seller' element={<BecomeSeller />} />
          <Route path='/admin-login' element={<AdminAuth />} />
          <Route path='/dummy' element={<Mobile />} />
          <Route path='*' element={<CustomerRoutes />} />
        </Routes>

        {/* Conditionally render WhatsApp button only on customer routes */}
        {isCustomerRoute() && <FloatingWhatsApp />}
      </div>
    </ThemeProvider>
  );
}

export default App;