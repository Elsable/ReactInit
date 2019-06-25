import React from "react";
import { Radio,Input } from "antd";
export default function Answers(props) {
  return (
    <>
      {console.log(props)}
      {props ? <Respuestas {...props} /> : null}
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
      ":hover": {
        background: "red",
        cursor: "pointer"
      }
    };
    return (
      <>
      {/* {console.log()} */}
        {this.props[0]?
            <Radio.Group onChange={this.onChange} value={this.state.value}>
            {this.props[0].a === "" ||this.props[0].a === undefined? null : (
              <Radio style={radioStyle} value={1}>
                {this.props[0].a}
              </Radio>
            )}
            {this.props[1].b === "" ||this.props[1].b === undefined? null : (
              <Radio style={radioStyle} value={2}>
                {this.props[1].b}
              </Radio>
            )}
            {/* {console.log(this.props)} */}
            {this.props[2].c === "" ||this.props[2].c === undefined ? null : (
              <Radio style={radioStyle} value={3}>
                {this.props[2].c}
              </Radio>
            )}
            {this.props[3].d === ""||this.props[3].d === undefined ? null : (
              <Radio style={radioStyle} value={4}>
                {this.props[3].d}
              </Radio>
            )}
            {this.props[4].e === "" ||this.props[4].e ? null : (
              <Radio style={radioStyle} value={5}>
                {this.props[4].e}
              </Radio>
            )}
          </Radio.Group>
            :this.props.respuesta===""?
            <><Input placeholder="Ingrese su respuesta" /></>
            :null}
            {/* {console.log(this.props)} */}
      </>
    );
  }
}
