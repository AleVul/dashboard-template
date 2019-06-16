import React from "react";
import { Layout as AntdLayout } from "antd";

const { Sider, Header, Content } = AntdLayout;

/**
 * This is the default dashboard layout.
 * It consist of a header and sider component. On mobile
 * the sider component is replaced with a drawer.
 */
const Layout: React.FC = ({ children }) => (
  <div>
    <AntdLayout>
      <Sider>Sider Placeholder</Sider>

      <AntdLayout>
        <Header>Header</Header>
        <Content>{children}</Content>
      </AntdLayout>
    </AntdLayout>
  </div>
);

export default Layout;