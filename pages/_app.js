import '../public/css/styles.scss';
import {GlobalProvider} from '../context/GlobalContext';

function MyApp({Component, pageProps}) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
};

export default MyApp;
