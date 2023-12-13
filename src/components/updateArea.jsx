import React from 'react';
import Fab from '@mui/material/Fab';
import AddBoxIcon from '@mui/icons-material/AddBox';

const UpdateArea = ({
  saveEditing,
  titleUpdate,
  contentUpdate,
  title,
  content,
}) => {
  return (
    <div className='note'>
      <form className='create-note'>
        <input
          style={{ border: '0px white', outline: 'none' }}
          type='text'
          value={title}
          onChange={(e) => titleUpdate(e.target.value)}
          placeholder='Update title'
        />
        <textarea
          style={{
            border: 'none',
            outline: 'none',
            height: '20px',
            resize: 'none',
          }}
          placeholder='Update note...'
          value={content}
          onChange={(e) => contentUpdate(e.target.value)}
        />
        <Fab onClick={saveEditing}>
          <AddBoxIcon />
        </Fab>
      </form>
    </div>
  );
};

export default UpdateArea;
