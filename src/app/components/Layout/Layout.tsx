import { FunctionComponent } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { persistor, store } from "app/store";
import { ILayoutInterface } from "./Layout.interface";
import "./Layout.scss";
import { PersistGate } from "redux-persist/integration/react";

export const Layout = ({ children, ...props }: ILayoutInterface) => {
  return (
    <>
      {/* header */}
      <main {...props}>{children}</main>
      {/* footer */}
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Layout>
              <Component {...props} />
            </Layout>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    );
  };
};
