import React, { useState } from 'react';
import { ACCESS_TOKEN } from '../constant';
import toast from 'react-hot-toast';

const Modal = ({ isOpen, onClose, onNoteAdded }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem(ACCESS_TOKEN);

  const handleSaveNote = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://backendforbrainflow.onrender.com/api/notes/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ title, content })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData);
        toast.error("Failed to create note.")
      }
      else{
        toast.success("Note created successfully!")
      }

      setTitle('');
      setContent('');
      onNoteAdded();
      onClose();
    } catch (error) {
      console.error('Failed to add note:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-11/12 max-w-xl p-6 shadow-lg">
        <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          Add New Note
        </h3>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-4 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
        <textarea
          placeholder="Your note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 mb-4 border rounded-lg h-40 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
        <div className="flex justify-between items-center">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveNote}
            disabled={loading}
            className="px-4 py-2 bg-gradient-to-r from-[#FC6D2E] to-[#E83D65] text-white rounded-lg hover:opacity-90 transition duration-300"
          >
            {loading ? 'Saving...' : 'Save Note'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
