// src/components/ConfirmModal.jsx
import React from 'react';
import "../styles/ConfirmModal.css"; // Optional: Create a CSS file for styling

const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Confirm Deletion</h2>
        <p>Are you sure you want to delete this blog?</p>
        <button onClick={onConfirm} className="btn-danger">Delete</button>
        <button onClick={onClose} className="btn-secondary">Cancel</button>
      </div>
    </div>
  );
};

export default ConfirmModal;
