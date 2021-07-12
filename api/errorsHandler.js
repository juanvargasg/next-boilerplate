import Router from 'next/router';

// TODO: refactor
const callError = (err, logged = true) => {
  let message = 'Ocurrio un error';
  let status = 400;
  let data = {};

  if (err.response) {
    const { response } = err;
    console.log('ErrorHandler:', response);
    status = response.status;
    if (response.status === 400) {
      message = 'Error en el formulario.';
      data = response.data;
      if (response.data.error) {
        message = response.data.error;
      }
    } else if (response.status === 401) {
      Router.push('/login');
    } else {
      message = response.data.message;
    }
  } else if (err.message && err.message === 'Network Error') {
    message = 'No tiene conexion a internet.';
    status = 408;
    if (logged) {
      Router.push('/error');
    }
  } else if (err.message) {
    message = err.message;
  }
  console.log('ErrorHandler2:', message);
  const error = { message, status, data };
  throw error;
};

export default callError;
