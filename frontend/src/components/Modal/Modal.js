import React from 'react';

// Style
import './Modal.css';

const modal = (props) => {
  return (
    <div className='modal'>
      <header className='modal__header'>
        <span>{props.title}</span>
      </header>

      <section className='modal__content'>{props.children}</section>

      <section className='modal__actions'>
        {props.canCancel && (
          <button className='btn' onClick={props.onCancel}>
            Cancel
          </button>
        )}

        {props.canConfirm && (
          <button className='btn' onClick={props.onConfirm}>
            {props.confirmText}
          </button>
        )}
      </section>
    </div>
  );
};

export default modal;
