import React, { useState } from 'react';
import axios from 'axios';

const UpdateVMForm = ({ token, vmId }) => {
  const [cores, setCores] = useState('');
  const [ram, setRam] = useState('');
  const [disk, setDisk] = useState('');
  const [os, setOs] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `http://www.swmaquinas.somee.com/SWMAQUINA/api/v1/ActualizarMaquinaVirtual`,
        {
          id: vmId,
          cores: parseInt(cores),
          ram: parseInt(ram),
          disco: parseInt(disk),
          sistemaOperativo: os,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error('Error al actualizar la máquina virtual', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Cores:</label>
        <input
          type="number"
          value={cores}
          onChange={(e) => setCores(e.target.value)}
          required
        />
      </div>
      <div>
        <label>RAM:</label>
        <input
          type="number"
          value={ram}
          onChange={(e) => setRam(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Disk:</label>
        <input
          type="number"
          value={disk}
          onChange={(e) => setDisk(e.target.value)}
          required
        />
      </div>
      <div>
        <label>OS:</label>
        <input
          type="text"
          value={os}
          onChange={(e) => setOs(e.target.value)}
          required
        />
      </div>
      <button type="submit">Actualizar</button>
    </form>
  );
};

export default UpdateVMForm;
