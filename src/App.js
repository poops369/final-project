import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import { FooterContainer } from "./containers/footer";
import FormPage from "./components/Form/Form";
import HelpForDev from "./components/profil/Profil";
import EventCard from "./components/eventCard/EventCard.js";
// import EventCard fr
function App() {
    return (
        <div className="App">
            <Navbar />
            <HomePage />
            <FooterContainer />
            <HelpForDev />
            <FormPage />
            <EventCard />
        </div>
    );
}

export default App;
