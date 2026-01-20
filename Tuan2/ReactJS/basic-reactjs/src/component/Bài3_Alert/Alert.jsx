import React from 'react';
import './Alert.css';

const alertTypes = [
  {
    id: 1,
    type: 'success',
    title: 'Success',
    message: 'Thành công',
  },
  {
    id: 2,
    type: 'warning',
    title: 'Warning',
    message: 'Cảnh báo',
  },
  {
    id: 3,
    type: 'danger',
    title: 'Error',
    message: 'Thất bại',
  },
];

const Alert = ({ type, onClose }) => {
  const selectedType = alertTypes.filter((item) => {
    return item.type === type;
  })[0];
  console.log('input ' + type);

  console.log(selectedType);
  const className = `alert-backdrop ${type}`;

  return (
    <div className={className}>
      <div className='alert-box'>
        <h2 className='alert-title'>{selectedType.title}</h2>
        <p className='alert-message'>{selectedType.message}</p>
        <button className='alert-btn' onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Alert;
