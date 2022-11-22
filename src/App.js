import { Routes, Route } from "react-router-dom"
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Callback } from "./services/oauth2-service";
import { Toast } from "bootstrap";
import { useEffect } from "react";
import { Banks } from './components/BankPage'

const config = {
     signInRedirectURL: "http://localhost:3000/dashboard",
     signOutRedirectURL: "https://localhost:3000/login",
     clientID: "6TgsdFvzGEwf86p_L9qjnQdXshYa",
     baseUrl: "https://api.asgardeo.io/t/sachinisiriwardene",
     scope: [ "profile" ]
};
function App() {

  useEffect (() => {
    // initialize bootstrap toasts
    const toastElList = document.querySelectorAll('.toast');
    const toastList = [...toastElList].map(toastEl => new Toast(toastEl));
    toastList.map(toast => toast.show());
  });

  return (
    <div className="App" style={{background:'#d7e2de'}}>
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="/banks" element={ <Banks/> } />
        <Route path="/oauth2/callback" element={ <Callback/> } />
      </Routes>
    </div>
  );
}

export default App;
