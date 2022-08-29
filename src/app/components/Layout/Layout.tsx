import { FunctionComponent } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "app/store/store";
import { ILayoutInterface } from "./Layout.interface";
import "./Layout.scss";

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
          <Layout>
            <Component {...props} />
          </Layout>
        </Provider>
      </BrowserRouter>
    );
  };
};
