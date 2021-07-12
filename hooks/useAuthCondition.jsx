import Cookies from 'cookies';

const useAuthCondition = (
  sessionCondition = true, // whether the user should be logged in or not
  redirect = '/login' // where to redirect if the condition is not met
) => {

  return async function ({ req, res }) {
    try {
      const cookies = new Cookies(req, res);
      const authToken = cookies.get('auth-token') || '';

      if (sessionCondition === (authToken.length > 0)) {
        return {props: {}};
      } else {
        return {
          redirect: {
            destination: redirect,
            permanent: false,
          },
        };
      }
    } catch (err) {
      console.log('err: ', err);
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
  };
};

export default useAuthCondition;
