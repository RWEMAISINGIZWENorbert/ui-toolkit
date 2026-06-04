import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { snackbar } from '../Snackbar';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import { useAuth } from '../../context/AuthContext';

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      snackbar.error('Please enter both username and password');
      return;
    }
    setIsLoading(true);
    try {
    // 2. CALL THE SERVICE
    const result = await authService.signIn(formData);
    
    if (result.success) {
      login(result.data, result.accessToken); 
      snackbar.success(`Welcome back!`);
    }
  } catch (err) {
    // Catch the error message we defined in the interceptor
    snackbar.error(err.message || 'Registration failed');
  } finally {
    setIsLoading(false); // 3. STOP THE LOADER
  };

  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4 relative overflow-hidden">

      {/* Premium Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />

      {/* Transparent Sign In Card */}
      <div className="relative w-full max-w-md p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">

        {/* Project Name (Centered) */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-text-high drop-shadow-sm">
            Market<span className="text-primary">Vendor</span>
          </h1>
          <div className="h-1 w-12 bg-primary mx-auto mt-2 rounded-full opacity-50" />
        </div>

        {/* Header Text (Left Aligned) */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-text-high">Sign In</h2>
          <p className="text-sm text-text-low mt-1">Access your account to manage stalls.</p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSignIn} className="space-y-6">
          <Input
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Enter your username"
            className="!bg-transparent"
          />

          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="••••••••"
            className="!bg-transparent"
          />

          <Button
            type="submit"
            text="Sign In"
            className="w-full mt-4 py-3"
            loading={isLoading}
            disabled={isLoading}
          />
        </form>

        <div className="mt-8 text-center border-t border-white/5 pt-6">
          <p className="text-xs text-text-low">
            Don't have an account? <span className="text-primary font-medium cursor-pointer hover:underline" onClick={() => navigate('/signup')}>Register here</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
