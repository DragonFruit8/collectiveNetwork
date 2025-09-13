import React, { useState } from 'react';

const OrganizationForm = ({orgForm}) => {
  const [formData, setFormData] = useState({
    org_id: 0,
    org_name: '',
    org_type: '',
    capacity: 0,
    op_status: '',
    // Finish fields...
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
      if (orgForm.onSubmit) {
        await orgForm.onSubmit(formData);
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
          Organization Signup Form
        </h2>
        <div className="mb-4">
          <label htmlFor="org_id" className="label">
            org_id
          </label>
          <input
            type="number"
            id="org_id"
            name="org_id"
            value={formData.org_id}
            onChange={handleInputChange}
            placeholder="id"
            className="input"
            required={false}
          />
          {errors.org_id && (
            <p className="error">
              {errors.org_id}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="org_name" className="label">
            org_name
          </label>
          <input
            type="text"
            id="org_name"
            name="org_name"
            value={formData.org_name}
            onChange={handleInputChange}
            placeholder="Organization Name"
            className="input"
            required={false}
          />
          {errors.org_name && (
            <p className="error">
              {errors.org_name}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="org_type" className="label">
            Organization Type
          </label>
          <select
            id="org_type"
            name="org_type"
            value={formData.org_type}
            onChange={handleInputChange}
            className="input"
            required={false}
          >
            <option value="">Choose Org Type</option>
            <option value="kitchen">Kitchen</option>
            <option value="organization">Organization</option>
            <option value="medical">Medical</option>
          </select>
          {errors.org_type && (
            <p className="error">
              {errors.org_type}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="capacity" className="label">
            capacity
          </label>
          <input
            type="number"
            id="capacity"
            name="capacity"
            value={formData.capacity}
            onChange={handleInputChange}
            placeholder="Meal Capacity"
            className="input"
            required={false}
          />
          {errors.capacity && (
            <p className="error">
              {errors.capacity}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="op_status" className="label">
            op_status
          </label>
          <select
            id="op_status"
            name="op_status"
            value={formData.op_status}
            onChange={handleInputChange}
            className="input"
            required={false}
          >
            <option value="">Choose an option</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
          </select>
          {errors.op_status && (
            <p className="error">
              {errors.op_status}
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

export default OrganizationForm;