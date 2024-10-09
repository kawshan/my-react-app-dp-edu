import React from 'react';
import StudentCard from "./components/StudentCard";
import './App.css';

function App() {
    return (
        <div>
            <h1>My React App</h1>
            <StudentCard name="Amal" age={20} homeTown="gampaha"/>
            <StudentCard name="Kamal" age={25} homeTown="colombo"/>
            <StudentCard name="Nimal" age={18} homeTown="Negombo"/>
        </div>
    );
}

export default App;
