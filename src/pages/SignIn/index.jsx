import React from 'react'
import { Form, Icon, Input, Button } from 'antd';


  
export default  class SignIn extends React.Component {
   
    render() {
    
      return (
          <div className="container jumbotron "><center>
            <div className="col-md-3"></div>
            <div className="col-md-6">
        <h2 className="display-3 " >Iniciar sesión</h2>

          <Form.Item >

              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />
          </Form.Item>
          <Form.Item>
            
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />
            
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>

            </div>
            <div className="col-md-3"></div>
        </center>
        </div>
      );
    }
  }