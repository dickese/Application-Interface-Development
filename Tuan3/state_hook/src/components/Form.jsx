import React, { useCallback, useState } from 'react';
import FormInput from './FormInput.jsx';
import FormItem from './FormItem.jsx';

const Form = () => {
  const [list, setList] = useState([]);
  console.log(list)

  const handleAdd = useCallback(({ name, email }) => {
    setList((prev) => [...prev, { name: name, email: email }]);
  }, []);

  const handleDelete = useCallback((email) => {
    setList((prev) => prev.filter((item) => item.email !== email));
  }, []);

  return (
    <div className='mx-auto w-350 mt-20 '>
      <FormInput handleAdd={handleAdd} />
      <div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'
      >
        {list.map((item,index) => {
          return (
            <FormItem
              key={index}
              name={item.name}
              email={item.email}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Form;
