import React, { useEffect, useState } from 'react';
import { checkHealth } from '../lib/utils';

const HealthCheck = () => {
  const [status, setStatus] = useState('Checking...');

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const result = await checkHealth();
        setStatus(result.message || 'Healthy');
      } catch (error) {
        setStatus('Failed to connect to the server');
      }
    };

    fetchHealth();
  }, []);

  return <div>Server Status: {status}</div>;
};

export default HealthCheck;