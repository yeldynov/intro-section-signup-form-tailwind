import React from 'react';

function TryItButton() {
  return (
    <div>
      <button className='bg-c-blue m-5 mb-1 rounded-lg px-12 py-5 text-white hover:cursor-pointer hover:bg-c-dark-blue desk:w-full shadow-2xl desk:max-w-lg'>
        <span className='font-bold'>Try it free 7 days</span> then $20/mo.
        thereafter
      </button>
    </div>
  );
}

export default TryItButton;
