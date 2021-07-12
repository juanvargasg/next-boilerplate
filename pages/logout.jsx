const logout = () => <div>Adios</div>;

export async function getServerSideProps({ req, res }) {
  try {
    const Cookies = require('cookies');
    const cookies = new Cookies(req, res);

    // Delete the cookie by not setting a value
    cookies.set('auth-token');

    // res.statusCode = 302
    // res.setHeader('Location', `/login`)
    // return {props: {}};
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  } catch (err) {
    console.log('err: ', err);
    return {props: {}};
  }
}

export default logout;
