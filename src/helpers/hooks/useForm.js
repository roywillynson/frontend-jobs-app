import { useState } from 'react';

// Definir tipo
/**
 * @typedef {Object} UseForm
 * @property {Object} values - Values of inputs
 * @property {Function} handleInputChange - Handle Input Change
 * @property {Function} resetValues - Reset All Values in Form
 */

/**
 * Use Form
 * @param {Object} initialState
 * @returns {UseForm}
 */
const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const resetValues = (newState = initialstate) => setValues(newState);

  const handleInputChange = ({ target } = {}) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return { values, handleInputChange, resetValues };
};

export default useForm;
