import { render } from "@testing-library/react";
import { ConfigProvider } from "antd";
import { MemoryRouter } from "react-router-dom";
import ModalManager from "../context/Modal";
import RootContextProvider from "../context/Root";

const AllTheProviders = ({ children }) => {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
      <RootContextProvider>
        <MemoryRouter>
          <ModalManager>{children}</ModalManager>
        </MemoryRouter>
      </RootContextProvider>
    </ConfigProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export { customRender };
