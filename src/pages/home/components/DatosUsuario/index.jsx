import React,{useState}from 'react'
import { Form, Icon, Input} from 'antd';
import {useLocalStorage} from './../../../../Util/variables.js'
export default function DatosUsuario(props){
    const[name,setName]=useLocalStorage('FullName','')   
    
    return(<> 
    <div className="col-md-12 row">
    <div className="col-md-6">
    
    <Form className="jumbotron"  layout="inline">
        <Form.Item >

         <label >Ingresa Tu nombre completo</label>
            <Input
            onChange={e=>setName(e.target.value)}
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder={name}
              value={name}
            />
        </Form.Item>
       
       <br/>
        <Form.Item>
          {/* {console.log(props.match.url)} */}
          {props.children}
        </Form.Item>
      </Form>
    </div>
    
      <div className="col-md-6">
      <img src="http://soporte.credifiel.com.mx/otrs-web/skins/Agent/default/img/logo.jpg"  alt="Logo"/>
      </div>
      </div>
    </>)
}