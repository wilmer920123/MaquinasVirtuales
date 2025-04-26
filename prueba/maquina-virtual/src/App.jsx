import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import CreateVMForm from './components/CreateVMForm';
import VMList from './components/VMList';
import UpdateVMForm from './components/UpdateVMForm';

function App() {
  const [token, setToken] = useState('');

  return (
    <div>
      {!token ? (
        <LoginForm setToken={setToken} />
      ) : (
        <>
          <h1>Bienvenido</h1>
          <VMList token={token} />
          <CreateVMForm token={token} />
          {/* Poner el ID de la máquina para actualizar */}
          <UpdateVMForm token={token} vmId={1} />
        </>
      )}
    </div>
  );
}

export default App;
