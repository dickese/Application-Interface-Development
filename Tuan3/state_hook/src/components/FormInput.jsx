import React, { useState, memo } from 'react';

const FormInput = ({handleAdd}) => {
  const [info, setInfor] = useState({name : "", email: ""})
  console.log("Input")
  return (
    <div className='flex flex-col bg-amber-100 p-10 rounded-2xl w-100 mx-auto'>
      <div className='flex flex-col gap-4'>
        <input
          type='text'
          className='bg-white py-2 rounded-lg border pl-3'
          placeholder='Name'
          value={info.name}
          onChange={(e) => setInfor({ ...info, name: e.target.value })}
        />
        <input
          type='text'
          className='bg-white py-2 rounded-lg border pl-3'
          placeholder='Email'
          value={info.email}
          onChange={(e) => setInfor({ ...info, email: e.target.value })}
        />
      </div>
      <div className='self-center mt-5'>
        <button className='bg-green-700 text-white font-bold rounded-lg border border-black px-4 py-2 text-center'
          onClick={() => {
            handleAdd(info);
            setInfor({name: "", email: ""})
          }}
        
        >
          Thêm
        </button>
      </div>
    </div>
  );
};

export default memo(FormInput);
