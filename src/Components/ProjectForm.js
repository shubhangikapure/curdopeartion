import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


const ProjectForm = ({ onSave, editingProject }) => {
  const [project, setProject] = useState(
    editingProject || {
      id: uuidv4(),
      referenceNumber: '',
      name: '',
      type: '',
      status: '',
      customer: ''
    }
  );

  useEffect(() => {
    if (editingProject) {
      setProject(editingProject);
    }
  }, [editingProject]);

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(project);
    setProject({ id: uuidv4(), referenceNumber: '', name: '', type: '', status: '', customer: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="form-group">
      <label>Reference Number</label>
      <input
        name="referenceNumber"
        value={project.referenceNumber}
        onChange={handleChange}
        placeholder="Project Reference Number"
        required
      />
      <label>Project Name</label>
      <input
        name="name"
        value={project.name}
        onChange={handleChange}
        placeholder="Project Name"
        required
      />
      <label>Project Type</label>
      <input
        name="type"
        value={project.type}
        onChange={handleChange}
        placeholder="Project Type"
        required
      />
      <label>Status</label>
      <input
        name="status"
        value={project.status}
        onChange={handleChange}
        placeholder="Status"
        required
      />
      <label>Customer</label>
      <input
        name="customer"
        value={project.customer}
        onChange={handleChange}
        placeholder="Customer"
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default ProjectForm;
