import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { login as reduxLogin, logout as reduxLogout } from '../auth/authSlice'; // Import authSlice actions
import { RootState } from '@/store/store';

const useAuth = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  ); // Accessing isAuthenticated state from authSlice
  // const router = useRouter();

  const login = () => {
    // Perform login action using the authSlice action
    dispatch(reduxLogin());
    //router.push('/dashboard'); // Redirect to dashboard after successful login
  };

  const logout = () => {
    // Perform logout action using the authSlice action
    dispatch(reduxLogout());
    //router.push('/login'); // Redirect to login page after logout
  };

  // Simulated check for authentication on component mount
  useEffect(() => {
    if (!isAuthenticated) {
      //router.push('/login'); // Redirect to login page if not authenticated
    }
  }, [isAuthenticated]);

  return { isAuthenticated, login, logout };
};

export default useAuth;
