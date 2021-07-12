/**
 * Function to update the state object
 * @param {string} name Name of state to update
 * @param {*} value Value of state to update
 * @param {object} dataObject Object of state
 * @returns Updated object
 */
const updateForm = (name, value, dataObject) => {
  const data = {
    ...dataObject,
    [name]: value,
  };
  console.log('data: ', data);
  return data;
};

export default updateForm;
