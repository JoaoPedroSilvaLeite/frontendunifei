import React, { useEffect, useState } from 'react'

export default function App() {

  const [contador, setContador] = useState(0);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://localhost:9082/usuarios")
      .then((respFetch) => respFetch.json())
      .then((respJson) => setUsuarios(respJson))
      .catch((erro) => console.log("erro na promessa", erro))
  }, []);

  useEffect(() => {
    console.log("Texto disparado no useEffect atualizacao.")
  }, [contador])

  return (
    <div>
      <p>Paragrafo qualquer </p>
      <p>Contador: {contador}</p>
      <button
      onClick={() => setContador(contador + 1)}>
        Incrementa
      </button>

      {usuarios.map((item) => {
        return (
          <p key= {item.id}>{item.name}</p>
        )
      })}

    </div>
  )
}
