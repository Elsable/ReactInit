import React, { useState, useEffect } from "react";
import Preguntas from "Util/Preguntas";
import { useLocalStorage } from "./../../Util/variables.js";
import Swal from "sweetalert2";
import { Card } from "zent";
import { Radio, Input, Progress, Card as Card2, Icon } from "antd";
import { Badge } from "reactstrap";

const { Meta } = Card2;

export default function Content(props) {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

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
        {/* <Tooltip title="3 done / 3 in progress / 4 to do">
      <Progress percent='40000'  successPercent={seconds} />
    </Tooltip> */}
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
                  </>
                }
              >
                <Card
                  className="col-md-12"
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <Icon type="setting" />,
                    <Icon type="edit" />,
                    <Icon type="ellipsis" />
                  ]}
                >
                  <Meta
                    avatar={<img src={dato.image} alt="image" />}
                    title={
                      <>
                        {" "}
                        <h2>
                          {index + 1}. {dato.Pregunta}
                          <br />
                        </h2>
                      </>
                    }
                    description={
                      <>
                        {" "}
                        <h2>
                          <br /> {dato.Pregunta1}
                        </h2>
                        <h2>
                          <br />
                          <br />

                          <Respuestas {...dato} />
                        </h2>
                      </>
                    }
                  />
                </Card>
                ,
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
      lineHeight: "30px"
    };
    return (
      <Radio.Group onChange={this.onChange} value={this.state.value}>
        {/* {console.log(this.props.respuestas[0].a)} */}
        {/* {this.props.respuestas.map((respuesta, index) => {
                            return (
                              <div key={index}>
                                
                                <div>{respuesta.a}
                                xxx
                                </div>

                                <div>{respuesta.b} </div>
                                <div>{respuesta.c} </div>
                                <div>{respuesta.d} </div>
                              </div>
                            );
                          })} */}

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
        <Radio style={radioStyle} value={6}>
          Escriba la respuesta...
          {this.state.value === 6 ? (
            <Input style={{ width: 100, marginLeft: 10 }} />
          ) : null}
        </Radio>
      </Radio.Group>
    );
  }
}
