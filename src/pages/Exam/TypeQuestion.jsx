import React from "react";
import Answers from "./Answers";

export default function TypeQuestion(props) {
  return (
    <>
      {/* {console.log(props)} */}

      {props.image === undefined ? (
        <div class="card col-md-12 jumbotron">
          <h2 className=""> {props.Pregunta}</h2>
          <hr />
          <Answers {...props.respuestas} respuesta={props.respuesta} />
          <a href={`#${props.index + 1 + 1}`} class="btn btn-primary">
                Siguiente
              </a>
        </div>
      ) : (
        <>
          <div class="card col-md-6">
            <img src={props.image} class="card-img-top" alt="..." />
          </div>
          <div class="card col-md-6">
            <div class="card-body">
              <h1 class="card-title">
                {props.index + 1}. {props.Pregunta} <br /> {props.Pregunta1}
              </h1>
              <p class="card-text">
              {/* {JSON.stringify(props.respuestas)} */}
                <Answers {...props.respuestas} respuesta={props.respuesta} />
                {/* {" "}{dato.respuestas===undefined?null:<Respuestas {...dato} {...index} />} */}
              </p>
              <a href={`#${props.index + 1 + 1}`} class="btn btn-primary">
                Siguiente
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
