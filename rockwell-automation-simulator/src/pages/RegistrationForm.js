import React, { useState } from 'react';

function RegistrationForm({ onFormSubmit }) {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        location: '',
        company: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok) {
                console.log('Registration successful', data);
                // Handle successful registration, like redirecting to a login page or clearing the form
            } else {
                throw new Error(data.message || 'Failed to register');
            }
        } catch (error) {
            console.error('Registration failed:', error);
            // Handle the error in the UI
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="First Name" required />
            <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Last Name" required />
            <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
            <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />
            <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company" required />
            <button type="submit">Create Account</button>
        </form>
    );
}

export default RegistrationForm;


