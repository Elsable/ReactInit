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
          <Answers h1={props.respuestas} respuesta={props.respuesta} />
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

               {/* {console.log(props.respuestas)}  */}
                <Answers h1={props.respuestas}   respuesta={props.respuesta} >
                    {props.image1===""||props.image1===undefined?null:<img src={props.image1} class="card-img-top" alt="..." />}
                
                </Answers>
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
