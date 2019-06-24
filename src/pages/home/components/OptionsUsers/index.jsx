import React from "react";
import { useLocalStorage } from "./../../../../Util/variables.js";
import { Card } from "zent";
import Values from "./util.js";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function OptionsUsers(props) {
  const[Datos,setDatos]=useLocalStorage({FullName:'',Examen:''})   

  return (
    <>
      <h3>Elige Tu examen: {Datos.FullName} 🚀</h3>
      <div className="row mx-auto">
        {Values.Type.map(examen => {
          return (
           
              <Card key={examen.title}
                className={`col-md-6 border border-${examen.borde} rounded-top`}
                style={{ background: examen.color, padding: 10 }}
              >
                
                   {/* <Link to={`/v1/${examen.title}`} {...examen.title}>  */}
                   <Link to={`/Examen`} onClick={(e)=>{  setDatos({...Datos,Examen:examen.title})}} >  
                   
                  <div className="row">
                    <div className="col-md-5">
                      <img src={examen.image} alt="Logo" />
                    </div>
                    <div className="col-md-7" style={{ padding: "10%" }}>
                      <h2 className="h3">{examen.title}</h2>
                    </div>
                  </div>
                </Link>
              </Card>
        
          );
        })}
      </div>
    </>
  );
}
