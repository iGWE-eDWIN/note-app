import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import UpdateArea from './updateArea';

const Note = ({ title, content, id, onDelete, onEdit }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  const handleClick = (event) => {
    event.preventDefault();
    onDelete(id);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEditing(true);
  };

  const titleSate = (input) => {
    setEditedTitle(input);
  };

  const contentState = (input) => {
    setEditedContent(input);
  };

  const saveEditing = (e) => {
    e.preventDefault();
    onEdit(id, editedTitle, editedContent);
    setEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <UpdateArea
          titleUpdate={titleSate}
          contentUpdate={contentState}
          saveEditing={saveEditing}
          title={editedTitle}
          content={editedContent}
        />
      ) : (
        <div className='note note-button' style={{ height: '80px' }}>
          <h1>{title}</h1>
          <p>{content}</p>
          <button
            tyle={{
              marginBottom: '20px',
              height: '60',
            }}
            onClick={handleClick}
          >
            <DeleteIcon />
          </button>
          <button
            style={{
              marginBottom: '20px',
              // border: '1px solid black',
              height: '25px',
            }}
            onClick={handleEdit}
          >
            <EditIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default Note;
