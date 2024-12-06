import React, { useState, useEffect } from 'react';
import ProjectForm from './ProjectForm';


const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setProjects(storedProjects);
  }, []);

  const saveProject = (newProject) => {
    const updatedProjects = editingProject
      ? projects.map((proj) => (proj.id === newProject.id ? newProject : proj))
      : [...projects, newProject];

    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    setEditingProject(null);
  };

  const handleEdit = (project) => {
    setEditingProject(project);
  };

  const handleDelete = (id) => {
    const filteredProjects = projects.filter((proj) => proj.id !== id);
    setProjects(filteredProjects);
    localStorage.setItem('projects', JSON.stringify(filteredProjects));
  };

  return (
    <div>
      <h1>Project Management System</h1>
      <ProjectForm onSave={saveProject} editingProject={editingProject} />
      {projects.length > 0 && (
        <div className="project-table">
          <h2>Projects List</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Reference Number</th>
                <th>Project Name</th>
                <th>Type</th>
                <th>Status</th>
                <th>Customer</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id}>
                  <td>{project.referenceNumber}</td>
                  <td>{project.name}</td>
                  <td>{project.type}</td>
                  <td>{project.status}</td>
                  <td>{project.customer}</td>
                  <td>
                    <button className="edit" onClick={() => handleEdit(project)}>Edit</button>
                    <button className="delete" onClick={() => handleDelete(project.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
