import React, { useState, useEffect } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

const CreateArea = ({ onAdd, onSave }) => {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  useEffect(() => {
    const savedNote = JSON.parse(localStorage.getItem('tempNote'));
    if (savedNote) setNote(savedNote);
  }, []);

  const [isExpanded, setExpanded] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
    localStorage.setItem('tempNote', JSON.stringify(note));
  };

  const submitNote = (event) => {
    event.preventDefault();
    onAdd(note);
    setNote({
      title: '',
      content: '',
    });
  };

  const expand = () => setExpanded(true);

  return (
    <div className='note'>
      <form className='create-note'>
        {isExpanded && (
          <input
            style={{ border: '0px white', outline: 'none' }}
            name='title'
            placeholder='Title'
            value={note.title}
            onChange={handleChange}
          />
        )}
        <textarea
          style={{
            border: 'none',
            outline: 'none',
            height: '20px',
            resize: 'none',
          }}
          onClick={expand}
          name='content'
          placeholder='Take a note...'
          value={note.content}
          onChange={handleChange}
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddBoxIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
