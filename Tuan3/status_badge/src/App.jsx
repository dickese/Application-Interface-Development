import { useState } from 'react';
import StatusBadge from './components/StatusBadge.jsx';

const App = () => {
  const [status, setStatus] = useState('online');

  return (
    <div style={{ padding: 20 }}>
      <StatusBadge status={status} />

      <div>
        <button onClick={() => setStatus('online')}>Online</button>
        <button onClick={() => setStatus('offline')}>Offline</button>
        <button onClick={() => setStatus('busy')}>Busy</button>
      </div>
    </div>
  );
};

export default App;
