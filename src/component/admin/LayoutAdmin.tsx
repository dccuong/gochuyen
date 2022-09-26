import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;
type Props = {};

const LayoutAdmin = (props: Props) => {
  return (
    <div>
      {" "}
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <Outlet />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutAdmin;
