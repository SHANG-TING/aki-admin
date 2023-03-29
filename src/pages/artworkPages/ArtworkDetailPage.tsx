import React from 'react';

import { Form } from 'antd';
import { TabsProps } from 'antd/lib/tabs';

import { Select } from '@app/components/common/selects/Select/Select';
import { Tabs } from '@app/components/common/Tabs/Tabs';
import { Button } from '@app/components/common/buttons/Button/Button';

const artworkTypeOptions = [
  {
    value: 1,
    label: '繪畫',
  },
  {
    value: 2,
    label: '版畫',
  },
  {
    value: 3,
    label: '雕塑',
  },
  {
    value: 4,
    label: '攝影',
  },
  {
    value: 5,
    label: '錄像',
  },
  {
    value: 6,
    label: '其他',
  },
];

const ArtworkDetailPage = () => {
  const tabItems: TabsProps['items'] = [
    {
      label: '基本資訊',
      key: 'item-1',
      children: (
        <>
          <Form.Item
            label="作品類型"
            name="type"
            rules={[{ required: true, message: 'Please input your type!' }]}
          >
            <Select options={artworkTypeOptions}></Select>
          </Form.Item>
          <Form.Item
            label="代理藝廊"
            name="agentGallery"
            rules={[
              { required: true, message: 'Please input your agent-gallery!' },
            ]}
          >
            <Select options={artworkTypeOptions}></Select>
          </Form.Item>
          <Form.Item
            label="藝術家"
            name="artists"
            rules={[
              { required: true, message: 'Please input your agent-gallery!' },
            ]}
          >
            <Select mode="multiple" options={artworkTypeOptions}></Select>
          </Form.Item>
        </>
      ),
    },
    {
      label: '價格資訊',
      key: 'item-2',
      children: (
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      ),
    },
  ];

  const handleValuesChange = (values: any) => {
    console.log('values', values);
  };

  const handleFinish = (values: any) => {
    console.log('Success:', values);
  };

  const handleFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      layout="vertical"
      initialValues={{ type: null }}
      onFinish={handleFinish}
      onFinishFailed={handleFinishFailed}
      onValuesChange={handleValuesChange}
    >
      <Tabs items={tabItems}></Tabs>
    </Form>
  );
};

export default ArtworkDetailPage;
