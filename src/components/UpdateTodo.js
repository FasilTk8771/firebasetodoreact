import React, {useState} from 'react';

function UpdateTodo(props) {
  const data = props.data;
  const [updatedTodo, setUpdatedTodo] = useState(""); 
   
  function handleUpdate(){//Pass data to praent
    props.onUpdate(updatedTodo);
  }

  return (
  <div>
      <div style={{marginTop:"100px"}}>
        {/* Text box for update todo */}
        <input
          type="text"
          onChange={(evt) => {
            setUpdatedTodo(evt.target.value);
          }}
          placeholder={data.item.title}
          className="txt_todo"
        />
      {/* Update to do */}
      <button
          variant='contained'
          color="secondary"
          className='save_button'
          onClick={handleUpdate}
        >
          Update todo
        </button>
        {/* Cancel update */}
        <button
          variant='contained'
          color="primary"
          className='save_button'
          onClick={props.onCancel}
        >
          Cancel
        </button>
    </div>
  </div>
  );
}

export default UpdateTodo;


