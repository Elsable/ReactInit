import React,{useState} from "react";
import { Radio,Input } from "antd";
import { useLocalStorage } from "./../../Util/variables.js";

export default function Answers(props) {
  return (
    <>
  
      {props ? <Respuestas {...props} /> : null}
      {/* {props.children.map(s=>{
        alert(s)
      })}   */}
    </>
  );
}
 function Respuestas (props){
  const[Datos,setDatos]=useLocalStorage({ExamenPrueba:[

  ]})   
  
  const [value] = useState(1);



    return (
      <>
        {(props.h1===undefined?null:<>
          {props.h1.map((dato,index)=>
    <Radio.Group onChange={(e)=>setDatos({...Datos,ExamenPrueba:[...Datos.ExamenPrueba,{index:e.target.value}]})} value={Datos.ExamenPrueba[index]} >
    {props.h1[0].a === "" ||props.h1[0].a === undefined? null : (
      <Radio  value={index}>
        {props.h1[index].a?props.h1[index].a:null}
        {props.h1[index].b?props.h1[index].b:null}
        {props.h1[index].c?props.h1[index].c:null}
        {props.h1[index].d?props.h1[index].d:null}
        {props.h1[index].e?props.h1[index].e:null}
        
      </Radio>
    )}
  </Radio.Group>
    
    )}
          </>
          )}
  {/* {(props.h1===undefined?null:
     
        props.h1[0]?
        // setDatos({...Datos,Examen:examen.title}
            <Radio.Group onChange={(e)=>setDatos({...Datos,ExamenPrueba:{1:e.target.value}})} value={Datos.ExamenPrueba[1]} >
            {props.h1[0].a === "" ||props.h1[0].a === undefined? null : (
              <Radio  value={1}>
                {props.h1[0].a}
                
              </Radio>
            )}
            {props.h1[1].b === "" ||props.h1[1].b === undefined? null : (
              <Radio  value={2}>
                {props.h1[1].b}
              </Radio>
            )}
            {/* {console.log(props)} 
            {props.h1[2].c === "" ||props.h1[2].c === undefined ? null : (
              <Radio  value={3}>
                {props.h1[2].c}
              </Radio>
            )}
            {props.h1[3].d === ""||props.h1[3].d === undefined ? null : (
              <Radio  value={4}>
                {props.h1[3].d}
              </Radio>
            )}
            {props.h1[4].e === "" ||props.h1[4].e ? null : (
              <Radio  value={5}>
                {props.h1[4].e}
              </Radio>
            )}
          </Radio.Group>
            :props.respuesta===""?
            <><Input placeholder="Ingrese su respuesta" /></>
            :null)} */}
        
            </>
    )}
            