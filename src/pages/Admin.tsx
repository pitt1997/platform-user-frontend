import React from 'react';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Card, Typography, Alert } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const Admin: React.FC = ({children}) => {
  return (
    <PageHeaderWrapper>
      {children}
    </PageHeaderWrapper>
  );
};

export default Admin;
