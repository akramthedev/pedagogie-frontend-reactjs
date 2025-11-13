import React, { useState } from "react";
import axios from "axios";
import ENDPOINT from "../Environments/index"
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const seConnecter = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${ENDPOINT}/auth/login`, { email, password });

      const { token, role, userId } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("userId", userId);

      setLoading(false);

      switch (role) {
        case "admin":
          navigate("/admin/dashboard");
          break;
        case "enseignant":
          navigate("/prof/planning");
          break;
        case "eleve":
          navigate("/student/planning");
          break;
        default:
          navigate("/");  
      }

    } catch (err) {
      setLoading(false);
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Erreur serveur");
      }
      console.error("Login error:", err);
    }
  };

  return (
    <div className="containerLogin">
      <form className="insiderContainer" onSubmit={seConnecter}>
        <p className="sfjwdfip1">
          Bienvenue sur <span className="EDUMYOS">EDUMYOS</span>
        </p>
        <p className="sfjwdfip2">
          Connectez-vous pour accéder à votre espace.
        </p>
        <div className="containerOfInput">
          <label>Adresse email :</label>
          <input
            type="text"
            placeholder="Veuillez saisir votre adresse email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="containerOfInput containerOfInput2">
          <label>Mot de passe :</label>
          <input
            type="password"
            placeholder="Veuillez saisir votre mot de passe..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}
        <button type="submit" className="Connexionbtn" disabled={loading}>
          {loading ? "Connexion en cours..." : "Se connecter"}
        </button>
        <div className="usfwodfuushwdfo">
          Problèmes techniques ? <Link to="/contact">Contactez-nous</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
