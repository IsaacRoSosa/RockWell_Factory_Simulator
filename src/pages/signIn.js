import { useCallback,useState } from "react";
import { useRouter } from "next/router";
import styles from "./signIn.module.css";

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

  const router = useRouter();


  const handleLoginRedirect = useCallback(() => {
    router.push("/logIn");
  }, [router]);



  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Registration successful');
        setSuccessMessage('Registration successful');
        // Handle successful registration
      } else {
        const errorData = await response.json();
        console.error('Registration failed:', errorData.message);
        setErrorMessage(errorData.message);
      }
    } catch (error) {
      console.error('Registration failed:', error);
      setErrorMessage('An error occurred while processing your request');
    }
    setFormSubmitted(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.formLeft}></div>
        <div className={styles.formRight}>

          
        <button onClick={handleLoginRedirect} className={styles.buttonArrow}>
          <img src="/arrowLeft.png" alt="Go Back" className={styles.arrowIcon} />
          </button> {/* Nuevo botón para redirigir al inicio de sesión */}
          <h1 className={styles.title}>Complete Your Profile</h1>
          <p className={styles.description}>
            Enter your information so we are able to recommend you personalized options and contact you
          </p>
          {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
          {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
          <form className={styles.form} onSubmit={handleFormSubmit}>
            <div className={styles.formGroup}>
              <div className={styles.nameContainer}>
                <h2 className={styles.InputTitle}>First Name</h2>
                <input
                  type="text"
                  name="firstname"
                  placeholder="Enter your First Name"
                  className={styles.input}
                  value={formData.firstname}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.nameContainer}>
                <h2 className={styles.InputTitle}>Last Name</h2>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Enter your Last Name"
                  className={styles.input}
                  value={formData.lastname}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <h2 className={styles.InputTitle}>Email</h2>
            <input
              type="email"
              name="email"
              placeholder="Enter your contact email"
              className={styles.inputFull}
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <h2 className={styles.InputTitle}>Username</h2>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              className={styles.inputFull}
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <h2 className={styles.InputTitle}>Password</h2>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className={styles.inputFull}
              value={formData.password}
              onChange={handleInputChange}
              required
            />
      <h2 className={styles.InputTitle}>Experience Center</h2>
<select
  name="location"
  className={styles.inputFull}
  value={formData.location}
  onChange={handleInputChange}
  required
>
  <option value="">From where are you joining us?</option>
  <option value="HQ CXC">HQ CXC, Milwaukee, WI</option>
  <option value="San Jose EVIC">San Jose EVIC, San Jose, CA</option>
  <option value="Americas Innovation Center">Americas Innovation Center, Monterrey, MX</option>
  <option value="Mexico HQ">Mexico HQ, Mexico City, MX</option>
  <option value="Colombia CXC ">Colombia CXC, Bogota, Colombia</option>
  <option value="EMEA CXC">EMEA CXC, Karlsruhe, Germany</option>
  <option value="APAC HQ CEC">APAC HQ CEC,Singapore</option>
  <option value="Digital Transformation CXC">Digital Transformation CXC @ Pune, India  </option>
 
</select>
            <h2 className={styles.InputTitle}>Company</h2>
            <input
              type="text"
              name="company"
              placeholder="Enter your Company"
              className={styles.inputFull}
              value={formData.company}
              onChange={handleInputChange}
            />
       <h2 className={styles.InputTitle}>Industry</h2>
          <select
            name="industry"
            className={styles.inputFull}
            value={formData.company}
            onChange={handleInputChange}
          >
            <option value="">Select your industry</option>
            <option value="Automotive & Tire">Automotive & Tire</option>
            <option value="Cement">Cement</option>
            <option value="Chemical">Chemical</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Fiber & Textiles">Fiber & Textiles</option>
            <option value="Food & Beverage">Food & Beverage</option>
            <option value="Household & Personal Care">Household & Personal Care</option>
            <option value="Hydrogen">Hydrogen</option>
            <option value="Infrastructure">Infrastructure</option>
            <option value="Life Sciences">Life Sciences</option>
            <option value="Marine">Marine</option>
            <option value="Metals">Metals</option>
            <option value="Mining">Mining</option>
            <option value="Oil & Gas">Oil & Gas</option>
            <option value="Power Generation">Power Generation</option>
            <option value="Print & Publishingr">Print & Publishing</option>
            <option value="Pulp & Paper">Pulp & Paper</option>
            <option value="Water Wastewater">Water Wastewater</option>
            <option value="Warehouse & Fulfillment">Warehouse & Fulfillment</option>
          
          </select>
            <button type="submit" className={styles.button} disabled={formSubmitted}>
              {formSubmitted ? 'Submitting...' : 'Create Account'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InicioDeSesin1;
