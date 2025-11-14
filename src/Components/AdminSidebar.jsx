import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./index.css";

const LINKS = [
  { to: "/admin/dashboard", label: "Tableau de bord", key: "dashboard" },
  { to: "/admin/classes", label: "Classes", key: "classes" },
  { to: "/admin/disciplines", label: "Disciplines", key: "disciplines" },
  { to: "/admin/modules", label: "Modules", key: "modules" },
  { to: "/admin/periodes", label: "Périodes", key: "periodes" },
  { to: "/admin/evaluations", label: "Évaluations", key: "evaluations" },
  { to: "/admin/enseignants", label: "Enseignants", key: "enseignants" },
  { to: "/admin/eleves", label: "Élèves", key: "eleves" },
  { to: "/admin/maquettes", label: "Maquettes", key: "maquettes" },
  { to: "/admin/users", label: "Utilisateurs", key: "users" },
  { to: "/admin/settings", label: "Paramètres", key: "settings" },
];

export default function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(() => {
    try {
      const v = localStorage.getItem("admin_sidebar_open");
      return v === null ? true : v === "true";
    } catch {
      return true;
    }
  });

  const [displayName, setDisplayName] = useState("Admin");
  useEffect(() => {
    try {
      const raw = localStorage.getItem("user");
      if (raw) {
        const u = JSON.parse(raw);
        setDisplayName(u.nom || u.email || "Admin");
      }
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("admin_sidebar_open", open ? "true" : "false");
  }, [open]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    localStorage.removeItem("user");
    navigate(0);
  };

  return (
    <aside className={`adm-sidebar ${open ? "open" : "closed"}`} aria-expanded={open}>
      <div className="adm-sidebar-top">
        <div onClick={() => setOpen((s) => !s)} className="adm-brand">
          {open && <div className="adm-brand-text">&nbsp;EDUMYOS / Admin&nbsp;&nbsp;&nbsp;&nbsp;</div>}
        </div>

        <button
          className="husidf"
          onClick={() => setOpen((s) => !s)}
          aria-label={open ? "Réduire la barre latérale" : "Ouvrir la barre latérale"}
          aria-pressed={open}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#f06407" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#f06407" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
          )}
        </button>
      </div>
 

      <nav className="adm-nav" role="navigation" aria-label="Navigation administration">
        <ul>
          {LINKS.map((link) => {
            const active = location.pathname === link.to;
            return (
              <li key={link.key} className={active ? "active" : ""}>
                <Link to={link.to} className="adm-link" title={!open ? link.label : undefined}>
                  <span className="adm-link-icon" aria-hidden>
                  {
                    link.key === "dashboard" ? <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-column-icon lucide-chart-no-axes-column"><path d="M5 21v-6"/><path d="M12 21V3"/><path d="M19 21V9"/></svg> :
                    link.key === "classes" ? <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-presentation-icon lucide-presentation"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg> :
                    link.key === "disciplines" ? <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scroll-text-icon lucide-scroll-text"><path d="M15 12h-5"/><path d="M15 8h-5"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/></svg> :
                    link.key === "modules" ? <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-icon lucide-book-open"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg> :
                    link.key === "periodes" ? <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-gantt-icon lucide-chart-gantt"><path d="M10 6h8"/><path d="M12 16h6"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M8 11h7"/></svg> :
                    link.key === "evaluations" ? <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-check-icon lucide-list-check"><path d="M16 5H3"/><path d="M16 12H3"/><path d="M11 19H3"/><path d="m15 18 2 2 4-4"/></svg>:
                    link.key === "enseignants" ? <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> :
                    link.key === "eleves" ? <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg> :
                    link.key === "maquettes" ? <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-blocks-icon lucide-blocks"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"/><rect x="14" y="2" width="8" height="8" rx="1"/></svg> :
                    link.key === "users" ? <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-round-icon lucide-users-round"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></svg>:
                    link.key === "settings" && <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings2-icon lucide-settings-2"><path d="M14 17H5"/><path d="M19 7h-9"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>  
                  }
                  </span>
                  {open && <span className="adm-link-text">{link.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="adm-sidebar-footer">
        
        {open && 
          <div className="adm-footer-actions">
            <button className="adm-logout-btn" onClick={handleLogout}>
              <span className="adm-link-icon" aria-hidden>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out-icon lucide-log-out"><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>
              </span>
              <span>Déconnexion</span>
            </button>
          </div>
        }
      </div>
    </aside>
  );
}
