import React, { Fragment,memo } from "react";
import styled from "styled-components";
const Contenido = styled.div`
  padding-top: 0px;
`;

export default memo(function Body(props) {
  return (
    <Fragment>
      <Contenido>{props.children}</Contenido>
    </Fragment>
  );
})