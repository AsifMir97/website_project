import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css'; // Make sure Tailwind CSS is imported

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-red-500 text-white p-4 rounded">
      Tailwind is working ✅
    </div>
  );
}

export default App;
