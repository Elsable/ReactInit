import React from "react";
import { Card } from "zent";
import TypeQuestion from "./TypeQuestion";
export default function Questions(props) {
  return (
    <>
      <Card className="col-md-12" title={<>{props.children}</>}>
        <div className="row">
          <TypeQuestion {...props} />
        </div>
        <hr id={`${props.index + 1 + 1}`} />
      </Card>
    </>
  );
}
