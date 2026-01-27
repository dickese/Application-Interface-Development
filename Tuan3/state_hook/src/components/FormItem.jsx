import React from 'react';

const FormItem = ({name, email, handleDelete}) => {
  return (
    <div className='bg-amber-100 flex p-3 justify-between items-center rounded-lg w-80'>
      <div className='flex flex-col'>
        <span className=''>{name}</span>
        <span className=''>{email}</span>
      </div>
      <div className=''>
        <span className='bg-red-400 font-bold px-4 py-2 text-white rounded-lg ml-2'
          onClick={() => handleDelete(email)}
        >
          Xóa
        </span>
      </div>
    </div>
  );
};

export default FormItem;
