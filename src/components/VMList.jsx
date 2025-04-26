import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';

const VMList = ({ token }) => {
  const [vms, setVms] = useState([]);

  useEffect(() => {
    const socket = io('http://www.swmaquinas.somee.com'); // Reemplaza con la URL del servidor de Socket.IO

    socket.on('vm-updated', (updatedVm) => {
      setVms((prevVms) =>
        prevVms.map((vm) => (vm.Id === updatedVm.Id ? updatedVm : vm))
      );
    });

    const fetchVms = async () => {
      try {
        const response = await axios.post(
          'http://www.swmaquinas.somee.com/SWMAQUINA/api/v1/ObtenerMaquinasVirtuales',
          {
            interactionId: 'string',
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setVms(response.data.response);
      } catch (error) {
        console.error('Error al obtener máquinas virtuales', error);
      }
    };

    fetchVms();

    return () => socket.disconnect();
  }, [token]);

  return (
    <ul>
      {vms.map((vm) => (
        <li key={vm.Id}>
          {vm.Nombre} - {vm.Estado}
        </li>
      ))}
    </ul>
  );
};

export default VMList;
