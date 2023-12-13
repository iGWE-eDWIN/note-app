import React, { useState, useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import Note from './note';
// import Card from './card';
// import notesA from '../note';
import CreateArea from './createArea';

const App = () => {
  const [notes, setNotes] = useState([]);
  // console.log(notes);
  // const [isEditing, setEditing] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('Notes'));
    if (data) setNotes(data);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('Notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  // console.log(notes);

  const editNote = (id, title, content) => {
    setNotes((prevNotes) =>
      prevNotes.map((note, index) =>
        index === id ? { ...note, title, content } : note
      )
    );
  };
  // console.log(isEditing);

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note, index) => index !== id));
  };

  return (
    <div className='container'>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
          onEdit={editNote}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;
