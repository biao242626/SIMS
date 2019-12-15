import React, { ReactNode, SFC } from "react";
import Header from "./Header";
import Sider from "./SiderBar";

import { Layout } from "antd";

const { Content, Footer } = Layout;

interface Props {
  children: ReactNode;
}

const AppLayout: SFC<Props> = ({ children }) => {
  return (
    <Layout>
      <Header></Header>
      <Content style={{ padding: "0 50px" }}>
        <Layout
          style={{ padding: "24px 0", background: "#fff", marginTop: "40px" }}
        >
          <Sider></Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>©2018 Design By taleyoung</Footer>
    </Layout>
  );
};

export default AppLayout;
