const ToDoItem = ({id , content , handleDelete}) => {
  return (
    <div className='bg-orange-100 w-full h-15 flex items-center gap-2 p-2'>
          <span className='flex-1'>{content}</span>
          <button
            className='bg-red-600 text-white font-bold rounded-xl px-4 py-2'
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
    </div>
  );
};

export default ToDoItem;
