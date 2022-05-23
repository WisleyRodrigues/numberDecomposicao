import { useState } from 'react'
import './App.css'
import api from "./services/api";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function App() {
  const [dado, setDado] = useState({numeroPrimos: [], divisores: []});
  const [number, setNumber] = useState('');


  function getNumeroDecomposto() {
    api
      .get(`/utils/number/${number}/decomposition`)
      .then((response) => setDado(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  return (
    <div className="App">
      <section className='content'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 d-grid mx-auto">
              <h2 className='text-center mb-5'>Decomposição em fatores primos</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="number" placeholder="Digite o numero a ser decomposto" onChange={e => setNumber(e.target.value)}/>
                </Form.Group>
                <div className="d-grid mx-auto col-12">
                  <Button variant="primary" type="button" className='mx-auto' onClick={getNumeroDecomposto}>
                    Decompor
                  </Button>
                </div>
              </Form>
              <div className="text-center mt-5">
                <p>Divisores primos: {dado ? dado.numeroPrimos.join(', ') : ''}</p>
                <p>Divisores: {dado ? dado.divisores.join(', ') : ''}</p>
              </div>
            </div>
          </div>
        </div>
        <h6 className='info'>Developed by: Wisley Rodrigues</h6>
      </section>
    </div>
  )
}

export default App
