import React, { useState, useEffect } from "react";
import Preguntas from "Util/Preguntas";
import { useLocalStorage } from "./../../Util/variables.js";
import Swal from "sweetalert2";
import { Card } from "zent";
import { Radio, Progress } from "antd";
import { Badge } from "reactstrap";


export default function Content(props) {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const[Datos,setDatos]=useLocalStorage({ExamenPrueba:[

  ]})   

  useEffect(() => {
    let interval = null;
    if (seconds === 500) {
      Swal.fire("Tiempo Terminado!", "Buena Suerte!", "info");
    } else {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isActive, seconds]);

  return (
    <>
      <div className="container jumbotron">
        <h1 >
        {Datos.FullName}</h1>
        {Datos.Examen==='Programación'?Preguntas.Programacion.map((dato, index = 1) => {
          return (
            <>
              <Card
                className="col-md-12"
                title={
                  <>
                    <div className="row col-md-12">
                      <div className="col-md-10">
                      <Badge color="success">{`Pregunta ` + (index + 1)}</Badge>
                      </div>
                      <div className="col-md-2">
                      <Badge  color="secondary">{`Total de preguntas: ` + (Preguntas.Programacion.length)}</Badge>

                      </div>
                    </div>
                    
                  </>
                }
              >
                <div className="row">
                  <div class="card col-md-6">
                    <img src={dato.image} class="card-img-top" alt="..." />
                  </div>

                  <div class="card col-md-6">
                    <div class="card-body">
                      <h1 class="card-title">
                        {index + 1}. {dato.Pregunta} <br /> {dato.Pregunta1}
                      </h1>
                      <p class="card-text">
                        {" "}{dato.respuestas===undefined?null:<Respuestas {...dato} {...index} />}
                      </p>
                      <a  href={`#${(index+1+1)}`} class="btn btn-primary">
                        Siguiente
                      </a>
                    </div>
                  </div>
                </div>
{/* // {console.log(dato)} */}
                <hr id={`${(index+1+1)}`}/>
              </Card>
            </>
          );
        }):Datos.Examen==='Base de datos'?<>BDA</>:null}
        <div class="fixed-bottom">
          <Progress percent={(seconds * 100) / 500} className="fixed-top" />
        </div>
        
        {}
      </div>
    </>
  );
}

class Respuestas extends React.Component {
  state = {
    value: 1
  };

  onChange = e => {
    // console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
    });
  };

  render(props) {
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px",
      ':hover': {
        background: "red",
        // cursor: "pointer"
      }
    };
    return (
      <Radio.Group key={this.props.index} onChange={this.onChange} value={this.state.value}>
                  {this.props.respuestas[0].a}

        <Radio style={radioStyle} value={1}>
          {this.props.respuestas[0].a}
        </Radio>
        <Radio style={radioStyle} value={2}>
          {this.props.respuestas[1].b}
        </Radio>
        <Radio style={radioStyle} value={3}>
          {this.props.respuestas[2].c}
        </Radio>
        <Radio style={radioStyle} value={4}>
          {this.props.respuestas[3].d}
        </Radio>
        <Radio style={radioStyle} value={5}>
          {this.props.respuestas[4].e}
        </Radio>
      </Radio.Group>
    );
  }
}
