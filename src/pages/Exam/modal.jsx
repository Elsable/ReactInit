import React, { useState } from "react";
import { Modal } from "antd";
import { Input } from "zent";
import Swal from "sweetalert2";
import { Redirect } from 'react-router-dom'

import { useLocalStorage } from "./../../Util/variables.js";

export default function Verification(props) {
    const[examenKey,SetExamenKey]=useLocalStorage('ExamenKey','')   

  const [visible, setVisible] = useState(true);
  const [Name] = useLocalStorage("FullName", "");
  const [Key, setKey] = useLocalStorage("key","");

  function Verify() {
    if (Key === "1") {
        setVisible(false)
      Swal.fire("Key Encontrada!", "Preparate para tu Examen!", "success");
    } else {
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: " Key no encontra!"
      });
    }
  }
  function RedirectHome(){
// console.log(props.history.push('/'))
props.history.push('/')
  }
  return (
    <>
      {visible ? (
        <Modal
          title="Credifiel"
          visible={visible}
          onOk={Verify}
          onCancel={RedirectHome}
        >
          <p>Ingresa Tu Key</p>
          
          <Input
            addonBefore={Name}
            value={Key}
            onChange={e => setKey(e.target.value)}
          />
        </Modal>
      ) :       <Redirect to="/Examen" />
    }
    </>
  );
}
