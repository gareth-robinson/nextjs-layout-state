import ApplicationLayout from '../layouts/application-layout';
import '../node_modules/@foresee/component-library/lib/component-library.css'

export default function Application({ Component, pageProps }) {
  return (
    <ApplicationLayout>
      <Component {...pageProps} />
    </ApplicationLayout>
  );
}