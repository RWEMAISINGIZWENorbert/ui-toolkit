import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // 1. Added Router imports
import { SnackbarProvider } from './components/Snackbar';
import LandingPage from './ui/LandingPage/LandingPage';
import Signin from './ui/auth/SignIn';
import Signup from './ui/auth/SignUp';
import DashboardLayout from './ui/Dashboard/DashboardLayout';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute, PublicRoute } from './components/routing/RouteGuards';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <SnackbarProvider />
        <Routes>
          {/* GUEST ROUTES (Redirect to Dashboard if already logged in) */}
          <Route element={<PublicRoute />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          {/* PRIVATE ROUTES (Redirect to Login if not authenticated) */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard/*" element={<DashboardLayout />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
