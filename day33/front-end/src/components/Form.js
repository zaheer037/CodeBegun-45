import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted:\nName: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <label>
        Name: <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      </label>
      <br />
      <label>
        Email: <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
