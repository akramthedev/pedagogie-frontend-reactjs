import AdminSidebar from "../../Components/AdminSidebar"; 
import "./index.css"



export default function Dashboard() { 
  return ( 
    <div style={{ display: "flex", minHeight: "100vh" }}> 
      <AdminSidebar /> 
      <main style={{ flex: 1, padding: 20 }}> 
        <div className="titlePageContainerFirst">
          <div className="titlePage1">
            Tableau de bord
          </div>
          <div className="titlePage2">
            <div className="datePicker">
              <div className="textDate">
                03/12/2025
              </div>
              <div className="iconDate">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f06407" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
              </div>
            </div>

            <div className="datePicker datePicker22">
              <div className="textDate">
                Période académique
              </div>
              <div className="iconDate iconDate2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f06407" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>

            <div className="datePicker datePicker2">
              <div className="textDate">
                Niveau scolaire
              </div>
              <div className="iconDate iconDate2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f06407" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>

            <div className="datePicker datePicker3">
              <div className="textDate">
                Classe
              </div>
              <div className="iconDate iconDate2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f06407" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
            <div className="datePicker datePickerShort">
              <div className="iconDate iconDate2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f06407" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sliders-horizontal-icon lucide-sliders-horizontal"><path d="M10 5H3"/><path d="M12 19H3"/><path d="M14 3v4"/><path d="M16 17v4"/><path d="M21 12h-9"/><path d="M21 19h-5"/><path d="M21 5h-7"/><path d="M8 10v4"/><path d="M8 12H3"/></svg>
              </div>
            </div>

          </div>
        </div>
      </main> 
    </div> 
  ); 
}