import React from 'react';
import Student from "./Student";

const StudentCard = ({name, age, homeTown})=>{
    return(
        <div className="st-card">
            <img src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/student-male.png" alt={`Student Image_${name}`} className="student-image"/>
            <Student name={name} age={age} homeTown={homeTown}/>
        </div>
    )
}

export const test = 10;

export default StudentCard;




































