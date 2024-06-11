import React from 'react';
import RegistrationForm from './RegistrationForm';

function RegisterPage() {
    const handleRegister = async (formData) => {
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
        <div>
            <h1>Registration</h1>
            <RegistrationForm onRegister={handleRegister} />
        </div>
    );
}

export default RegisterPage;
