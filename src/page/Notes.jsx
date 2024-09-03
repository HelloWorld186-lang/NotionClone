import React, { useEffect, useState } from 'react';
import { IoSearch, IoAdd } from 'react-icons/io5';
import CodePreview from '../component/CodePreview';
import Modal from '../component/Modal';
import { ACCESS_TOKEN } from '../constant';
import toast from 'react-hot-toast';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [updatedNote, setUpdatedNote] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const token = localStorage.getItem(ACCESS_TOKEN);

  const getAllNotes = async () => {
    try {
      const response = await fetch('https://backendforbrainflow.onrender.com/api/notes/', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setNotes(data.data);
        if (data.data.length > 0) {
          setActiveNote(data.data[0]); // Set the first note as active on load
        }
      } else {
        const errorData = await response.json();
        throw new Error(errorData.detail);
      }
    } catch (error) {
      console.error('Failed to fetch notes:', error);
    }
  };

  useEffect(() => {
    getAllNotes(); // Fetch notes when the component loads
  }, []);

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleUpdateNote = async () => {
    if (!updatedNote) return;
    try {
      const response = await fetch(`https://backendforbrainflow.onrender.com/api/notes/${updatedNote.id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(updatedNote),
      });

      if (response.ok) {
        await getAllNotes(); // Refresh notes after update
        setUpdatedNote(null);
        toast.success("Note updated successfully!");
      } else {
        const errorData = await response.json();
        toast.error("Failed to update note.");
        throw new Error(errorData.detail);
      }
    } catch (error) {
      console.error('Failed to update note:', error);
    }
  };

  const handleDeleteNote = async () => {
    if (!activeNote) return;

    try {
      const response = await fetch(`https://backendforbrainflow.onrender.com/api/notes/${activeNote.id}/`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        await getAllNotes(); // Refresh notes after deletion
        setActiveNote(null);
        toast.success("Note deleted successfully!");
      } else {
        const errorData = await response.json();
        toast.error("Failed to delete note.");
        throw new Error(errorData.detail);
      }
    } catch (error) {
      console.error('Failed to delete note:', error);
    }
  };

  const handleAddNote = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = async () => {
    setIsModalOpen(false);
    await getAllNotes(); // Refresh notes after adding a new note
  };

  const handleEditNote = () => {
    setUpdatedNote(activeNote);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex-grow flex flex-col lg:flex-row p-4 space-y-4 lg:space-y-0 lg:space-x-4">
        <aside className="w-full lg:w-1/4 xl:w-1/5 bg-white rounded-lg shadow-lg p-4">
          <div className="mb-4 flex items-center bg-gray-100 rounded-md">
            <IoSearch className="ml-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search notes..."
              className="w-full p-2 bg-transparent rounded-md focus:outline-none"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <button
            onClick={handleAddNote}
            className="w-full mb-4 flex items-center justify-center space-x-2 bg-gradient-to-r from-[#FC6D2E] to-[#E83D65] text-white p-2 rounded-md hover:opacity-90 transition duration-300"
          >
            <IoAdd size={20} />
            <span>Add New Note</span>
          </button>
          <nav className="overflow-y-auto max-h-[calc(100vh-250px)]">
            <ul className="space-y-2">
              {filteredNotes.map((note) => (
                <li key={note.id}>
                  <button
                    onClick={() => setActiveNote(note)}
                    className={`w-full text-left p-2 rounded-md transition-colors duration-200 ${
                      activeNote && activeNote.id === note.id
                        ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                        : 'text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {note.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="w-full lg:w-3/4 xl:w-4/5 bg-white rounded-lg shadow-lg p-6 overflow-auto">
          {activeNote ? (
            <div>
              <div className="flex flex-wrap items-center space-x-4 mb-6">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#FC6D2E] to-[#E83D65] bg-clip-text text-transparent">
                  {activeNote.title}
                </h1>
                <p className="text-gray-500 text-sm">
                  <strong>Created:</strong> {new Date(activeNote.created_at).toLocaleDateString()}
                </p>
                <div className="flex space-x-2">
                  <button
                    className="bg-gradient-to-r from-[#FC6D2E] to-[#E83D65] text-white px-3 py-1 font-medium rounded hover:opacity-90 transition duration-300"
                    onClick={updatedNote ? handleUpdateNote : handleEditNote}
                  >
                    {updatedNote ? "Save" : "Edit"}
                  </button>
                  <button
                    className="bg-gradient-to-r from-[#FC6D2E] to-[#E83D65] text-white px-3 py-1 font-medium rounded hover:opacity-90 transition duration-300"
                    onClick={handleDeleteNote}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="w-full flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                <div className={`w-full ${updatedNote ? 'lg:w-1/2' : ''}`}>
                  <CodePreview content={updatedNote ? updatedNote.content : activeNote.content} />
                </div>
                {updatedNote && (
                  <div className="w-full lg:w-1/2 rounded bg-gray-100">
                    <div className='bg-gray-100 text-gray-800 text-2xl font-bold pl-3 pt-3'>Notes</div>
                    <textarea
                      value={updatedNote.content}
                      onChange={(e) =>
                        setUpdatedNote((prev) => ({ ...prev, content: e.target.value }))
                      }
                      className="bg-gray-100 w-full h-full min-h-[300px] p-4 focus:border-none focus:outline-none transition duration-300 ease-in-out shadow-md placeholder-gray-500 text-gray-800"
                      placeholder="Write your note here..."
                    />
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="w-full max-w-4xl mx-auto px-4 space-y-8 text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#FC6D2E] to-[#E83D65] bg-clip-text text-transparent">
                Welcome to Brainflow!
              </h2>
              <p className="text-xl text-gray-700">
                Brainflow helps you save and manage code snippets effortlessly. Start by adding a new
                note or searching through your existing notes.
              </p>
              <div className="flex justify-center">
                <button
                  className="bg-gradient-to-r from-[#FC6D2E] to-[#E83D65] text-white px-5 py-2 font-semibold rounded hover:opacity-90 transition duration-300"
                  onClick={handleAddNote}
                >
                  Add New Note
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleModalClose} onNoteAdded={getAllNotes} />
      )}
      </div>
    );
  };
  
  export default Notes;
