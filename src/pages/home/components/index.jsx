import React, { useState } from "react";
import { Button } from 'antd';

import DatosUsuario from "./DatosUsuario";
import OptionsUsers from "./OptionsUsers";

export default function HomeIndex(props) {
  const [value, SetValue] = useState(false);
  return (
    <>
      <div>
        <h1 className="display-4">Examen</h1>
      </div>
      {!value ? (
        <>
          <DatosUsuario {...props} >
          <Button type="primary" onClick={()=>SetValue(!value)} style={{ marginBottom: '1rem' }}>Entrar</Button>
          </DatosUsuario>
        </>
      ) : (
        <>
          <OptionsUsers {...props}  />
        </>
      )}
    </>
  );
}
