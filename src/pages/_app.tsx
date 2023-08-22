/* eslint-disable @typescript-eslint/no-explicit-any */
import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import {memo} from 'react';

const MyApp = memo(({Component, pageProps}: any): JSX.Element => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;
