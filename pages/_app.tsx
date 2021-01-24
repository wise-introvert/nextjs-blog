import "./styles/globals.css";

interface ApplicationProps {
  Component: React.FC;
  pageProps: any;
}
const Application: React.FC<ApplicationProps> = ({
  Component,
  pageProps,
}: ApplicationProps): React.ReactElement<ApplicationProps> => (
  <Component {...pageProps} />
);

export default Application;
