import React,{useState}from 'react'
import { DatePicker,Form, Icon, Input} from 'antd';


import {useLocalStorage} from './../../../../Util/variables.js'

export default function DatosUsuario(props){
    const[Datos,setDatos]=useLocalStorage({FullName:'',Birthday:''})   
    
function onChange(date, dateString) {
  setDatos({...Datos,Birthday:dateString})
  
}

    return(<> 
    <div className="col-md-12 row">
    <div className="col-md-6">
    
    <Form className="jumbotron" layout="inline">
        <Form.Item >

         <label >Ingresa tu nombre completo</label>
            <Input
            onChange={e=>setDatos({...Datos,FullName:e.target.value})}
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Jose Antonio'
              // value={Datos.FullName}
            />
             <label >Ingresa tu fecha de nacimiento</label><br/>

        <DatePicker placeholder="Fecha de nacimiento"onChange={onChange} />
        </Form.Item>
       
       <br/>
        <Form.Item>
          {/* {console.log(props.match.url)} */}
          {props.children}
        </Form.Item>
      </Form>
    </div>
    
      <div className="col-md-6">
      <img className="img-fluid" src="http://soporte.credifiel.com.mx/otrs-web/skins/Agent/default/img/logo.jpg"  alt="Logo"/>
      </div>
      </div>
    </>)
}