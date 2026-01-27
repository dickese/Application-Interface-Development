import { useState } from 'react';
import ToDoInput from './ToDoInput.jsx';
import ToDoItem from './ToDoItem.jsx';

const ToDoList = () => {
  const [list, setList] = useState([]);
  const [currentId, setCurrentId] = useState(0);
  

  console.log(list)
  const handleDelete = (id) => {
    const newList = list.filter((item) => {
      return item.id !== id;
    });

    setList(newList);
  };

  const handleAdd = (todo) => {
    setList((prev) => [...prev, { id: currentId, content: todo }]);
    setCurrentId((prev) => prev + 1);
  };

  return (
    <div className='bg-amber-100 mx-auto w-84 rounded-2xl'>
      <ToDoInput handleAdd={handleAdd} />
      <div className='flex flex-col bg-red-400'>
        {list.map((item) => {
          return (
            <ToDoItem
              content={item.content}
              id={item.id}
              key={item.id}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ToDoList;
