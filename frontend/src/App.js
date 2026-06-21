import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Course from './pages/course/course';
import Courses from './pages/course/Courses';
import Profile from './pages/profile/profile';
import Learnings from './pages/learning/learnings';
import Home from './pages/landing/Home';
import DUsers from './pages/dashBoard/DUsers';
import DCourses from './pages/dashBoard/DCourses';
import Assessment from './pages/assessment/Assessment';
import ErrorPage from './pages/error/ErrorPage';
import AddQuestions from './pages/dashBoard/AddQuestions';
import Performance from './pages/profile/Performance';
import Certificate from './pages/assessment/certificate';
import Forum from './pages/course/forum';
import AdminDashboard from './pages/dashBoard/AdminDashboard';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import { authService } from './api/auth.service';

function GuestRoute({ element }) {
  return authService.isUserAuthenticated() ? <Navigate to="/courses" /> : element;
}

function ProtectedRoute({ element }) {
  return authService.isUserAuthenticated() ? element : <Navigate to="/login" />;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<GuestRoute element={<Login />} />} />
          <Route path="/register" element={<GuestRoute element={<Register />} />} />
          <Route path="/forgot-password" element={<GuestRoute element={<ForgotPassword />} />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<ProtectedRoute element={<Course />} />} />
          <Route path="/discussion/:id" element={<ProtectedRoute element={<Forum />} />} />
          <Route path="/certificate/:courseId" element={<ProtectedRoute element={<Certificate />} />} />
          <Route path="/assessment/:id" element={<ProtectedRoute element={<Assessment />} />} />
          <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
          <Route path="/Learnings" element={<ProtectedRoute element={<Learnings />} />} />
          <Route path="/admin" element={<ProtectedRoute element={<AdminDashboard />} />} />
          <Route path="/Dcourses" element={<ProtectedRoute element={<DCourses />} />} />
          <Route path="/Dusers" element={<ProtectedRoute element={<DUsers />} />} />
          <Route path="/Performance" element={<ProtectedRoute element={<Performance />} />} />
          <Route path="/addquestions/:id" element={<ProtectedRoute element={<AddQuestions />} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;