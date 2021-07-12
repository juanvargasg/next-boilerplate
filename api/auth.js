import Constructor from './constructor';
import errorHandler from './errorsHandler';

/**
 * Endpoint to login
 * @param {string} taeUser System user
 * @param {string} taePass User password
 * @returns Promise
 */
const apiLogin = async (taeUser, taePass) => {
  const API = Constructor(); // Create instance
  try {
    const DATA = { taeUser, taePass };
    return await API.post(`/auth/${process.env.NEXT_PUBLIC_APP_ID}`, DATA);
  } catch (err) {
    errorHandler(err, false);
  }
}

export {
  apiLogin,
};
