import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Contact from "./Pages/Contact";
import StudentPlanning from "./Pages/Student/Planning";
import ProfPlanning from "./Pages/Prof/Planning";
import AdminDashboard from "./Pages/Admin/Dashboard";
import PrivateRoute from "./PrivateRoute";  
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        <Route 
          path="/login" 
          element={
            localStorage.getItem("token") ? (
              localStorage.getItem("role") === "admin" ? (
                <Navigate to="/admin/dashboard" />
              ) : localStorage.getItem("role") === "enseignant" ? (
                <Navigate to="/prof/planning" />
              ) : (
                <Navigate to="/student/planning" />
              )
            ) : (
              <Login />
            )
          } 
        />
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute roleAllowed="admin">
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/prof/planning"
          element={
            <PrivateRoute roleAllowed="enseignant">
              <ProfPlanning />
            </PrivateRoute>
          }
        />
        <Route
          path="/student/planning"
          element={
            <PrivateRoute roleAllowed="eleve">
              <StudentPlanning />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
