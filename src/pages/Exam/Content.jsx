import React, { useState, useEffect } from "react";
import Preguntas from "Util/Preguntas";
import { useLocalStorage } from "./../../Util/variables.js";
import Swal from "sweetalert2";
import { Card } from "zent";
import { Radio, Input, Progress } from "antd";
import { Badge } from "reactstrap";


export default function Content(props) {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [Name] = useLocalStorage("FullName", "");

  useEffect(() => {
    let interval = null;
    if (seconds === 5) {
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
        {Name}</h1>
        <div class="fixed-bottom">
          <Progress percent={(seconds * 100) / 5} className="fixed-top" />
        </div>

        {Preguntas.Programacion.map((dato, index = 1) => {
          return (
            <>
              <Card
                className="col-md-12"
                title={
                  <>
                    {" "}
                    
                    <Badge color="info">{`Pregunta ` + (index + 1)}</Badge>
                    <Badge color="info">{`Total de preguntas: ` + (Preguntas.Programacion.length)}</Badge>
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
                        {" "}
                        <Respuestas {...dato} />
                      </p>
                      <a id={`${(index+1+1)}`} href={`#${(index+1+1)}`} class="btn btn-primary">
                        Siguiente
                      </a>
                    </div>
                  </div>
                </div>

                <hr />
              </Card>
            </>
          );
        })}
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
    console.log("radio checked", e.target.value);
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
      <Radio.Group onChange={this.onChange} value={this.state.value}>
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
        <Radio
          style={radioStyle}

          value={6}
        >
          Escriba la respuesta...
          {this.state.value === 6 ? (
            <Input style={{ width: 100, marginLeft: 10 }} />
          ) : null}
        </Radio>
      </Radio.Group>
    );
  }
}
