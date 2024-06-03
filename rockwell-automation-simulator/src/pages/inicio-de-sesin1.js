import React, { useState } from 'react';
import styles from "./inicio-de-sesin1.module.css";
import RegistrationForm from './RegistrationForm';

const InicioDeSesin1 = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        location: '',
        company: ''
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFormSubmit = async () => {
      try {
          const response = await fetch('/api/register', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData) // Ensure formData contains all required fields
          });
  
          if (response.ok) {
              console.log('Registration successful');
              // Handle successful registration
          } else {
              console.error('Registration failed:', response.statusText);
              // Handle registration failure
          }
      } catch (error) {
          console.error('Registration failed:', error);
          // Handle error
      }
    };

    return (
      <div className={styles.inicioDeSesin}>
        <img className={styles.bg2Icon} alt="" src="/bg2@2x.png" />
        <div className={styles.frameParent}>
          <div className={styles.completeYourProfileWrapper}>
            <h1 className={styles.completeYourProfile}>COMPLETE YOUR PROFILE</h1>
          </div>
          <div className={styles.emailField}>
            <div className={styles.nameFields}>
              <h2 className={styles.enterYourInformation}>
                Enter your information to get personalized recommendations and contact you
              </h2>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.emailWrapper}>
                <div className={styles.email}>
                  <div className={styles.nameWrapper}>
                    <h3 className={styles.name}>First Name</h3>
                  </div>
                  <div className={styles.emailInner}>
                    <input
                      className={styles.frameChild}
                      placeholder="Enter your first name"
                      type="text"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className={styles.space}></div> {/* Space between first name and last name */}
                <div className={styles.email}>
                  <div className={styles.nameWrapper}>
                    <h3 className={styles.name}>Last Name</h3>
                  </div>
                  <div className={styles.emailInner}>
                    <input
                      className={styles.frameChild}
                      placeholder="Enter your last name"
                      type="text"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.emailWrapper}>
                <div className={styles.email}>
                  <div className={styles.nameWrapper}>
                    <h3 className={styles.name}>Username</h3>
                  </div>
                  <div className={styles.emailInner}>
                    <input
                      className={styles.frameChild}
                      placeholder="Enter your username"
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className={styles.space}></div> {/* Space between username and email */}
                <div className={styles.email}>
                  <div className={styles.nameWrapper}>
                    <h3 className={styles.name}>Email</h3>
                  </div>
                  <div className={styles.emailInner}>
                    <input
                      className={styles.frameChild}
                      placeholder="Enter your email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.emailWrapper}>
                <div className={styles.email}>
                  <div className={styles.nameWrapper}>
                    <h3 className={styles.name}>Password</h3>
                  </div>
                  <div className={styles.emailInner}>
                    <input
                      className={styles.frameChild}
                      placeholder="Enter your password"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.emailWrapper}>
                <div className={styles.email}>
                  <div className={styles.nameWrapper}>
                    <h3 className={styles.name}>Company</h3>
                  </div>
                  <div className={styles.emailInner}>
                    <input
                      className={styles.frameChild}
                      placeholder="Enter your company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.emailWrapper}>
                <div className={styles.email}>
                  <div className={styles.nameWrapper}>
                    <h3 className={styles.name}>Location</h3>
                  </div>
                  <div className={styles.emailInner}>
                    <input
                      className={styles.frameChild}
                      placeholder="Enter your location"
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.primaryButton}>
              <div className={styles.primaryButton1}>
                {/* Use a button element to handle form submission */}
                <button
                  className={`${styles.createAccountButton} ${formSubmitted && styles.disabled}`}
                  onClick={handleFormSubmit} // No need to pass formData to onFormSubmit
                  disabled={formSubmitted} // Disable button if form has already been submitted
              >
                  {formSubmitted ? 'Submitting...' : 'Create Account'}
              </button>

              </div>
            </div>
          </div>
        </div>
        {/* Pass onFormSubmit as a prop to the RegistrationForm component */}
        <RegistrationForm onFormSubmit={handleFormSubmit} />
      </div>
    );
};

export default InicioDeSesin1;
