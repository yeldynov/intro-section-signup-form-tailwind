import { useState } from 'react';
import SignUpForm from './components/SignUpForm';
import Title from './components/Title';
import TryItButton from './components/TryItButton';

function App() {
  return (
    <main className='bg-mobile bg-c-red min-h-screen flex  flex-col desk:flex-row justify-center items-center py-24 gap-5 overflow-hidden'>
      <div className='flex-1'>
        <Title />
      </div>
      <div className='flex-1'>
        <TryItButton />
        <SignUpForm />
      </div>
    </main>
  );
}

export default App;
