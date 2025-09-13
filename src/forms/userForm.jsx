import React, { useState } from 'react';

const UserForm = ({userForm}) => {
  const [formData, setFormData] = useState({
    user_id: "",
    family_id: "",
    username: '',
    email: '',
    is_family_head: false,
    socialURL: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      // Handle form submission
      if (userForm.onSubmit) {
        await userForm.onSubmit(formData);
      }
      console.log('Form submitted successfully:', formData);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="">
        <h2 className="heading">
          Contact Form
        </h2>
        <div className="mb-4">
          <label htmlFor="user_id" className="label">
            user_id
          </label>
          <input
            type="number"
            id="user_id"
            name="user_id"
            value={formData.user_id}
            onChange={handleInputChange}

            className="input"
            required={false}
          />
          {errors.user_id && (
            <p className="error">
              {errors.user_id}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="family_id" className="label">
            family_id
          </label>
          <input
            type="number"
            id="family_id"
            name="family_id"
            value={formData.family_id}
            onChange={handleInputChange}

            className="input"
            required={false}
          />
          {errors.family_id && (
            <p className="error">
              {errors.family_id}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="label">
            username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="username"
            className="input"
            required={false}
          />
          {errors.username && (
            <p className="error">
              {errors.username}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="label">
            email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="email"
            className="input"
            required={false}
          />
          {errors.email && (
            <p className="error">
              {errors.email}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="is_family_head" className="label">
            is_family_head
          </label>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="is_family_head"
              name="is_family_head"
              checked={formData.is_family_head}
              onChange={handleInputChange}
              className="mr-2"
            />
            <span>is_family_head</span>
          </div>
          {errors.is_family_head && (
            <p className="error">
              {errors.is_family_head}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="socialURL" className="label">
            socialURL
          </label>
          <input
            type="url"
            id="socialURL"
            name="socialURL"
            value={formData.socialURL}
            onChange={handleInputChange}
            placeholder="Social URL"
            className="input"
            required={false}
          />
          {errors.socialURL && (
            <p className="error">
              {errors.socialURL}
            </p>
          )}
        </div>
        <div className="mt-6">
          <button type="submit" disabled={isSubmitting} className="button">
            {isSubmitting ? 'Submitting...' : 'Submit Form'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;