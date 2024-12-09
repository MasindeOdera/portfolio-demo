import { useState } from 'react';

export default function AddProjectPage() {
  const [project, setProject] = useState({ name: '', description: '', image: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://mockapi.io/api/v1/portfolio', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(project),
    });
    const result = await response.json();
    console.log('Project added:', result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add New Project</h1>
      <input
        type="text"
        placeholder="Project Name"
        value={project.name}
        onChange={(e) => setProject({ ...project, name: e.target.value })}
      />
      <textarea
        placeholder="Project Description"
        value={project.description}
        onChange={(e) => setProject({ ...project, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={project.image}
        onChange={(e) => setProject({ ...project, image: e.target.value })}
      />
      <button type="submit">Add Project</button>
    </form>
  );
}
