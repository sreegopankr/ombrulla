import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Result from './components/Result';
import Generator from './components/Generator';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mx-4'>
      <h1 className='text-2xl mt-2'>Asset Dashboard</h1>
      <div className='tabs mt-2 border-b-2 border-gray-300 pb-4'>
        <ul className='text-gray-500 flex gap-5'>
          <li>Operation</li>
          <li className='font-semibold underline decoration-blue-500 decoration-from-font text-blue-500'>Sustainability</li>
          <li>AI Insights</li>
          <li>My custom Dashboard</li>
        </ul>
      </div>
      <div className='grid grid-cols-12 gap-5'> 
        <div className='col-span-6'>
          <Result/>
        </div>
        <div className='col-span-6'>
          <Generator/>
        </div>
      </div>
    </div>
  )
}

export default App
