import { useCallback, useMemo } from 'react';

import { Col, Row, Space } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { Link, useSearchParams } from 'react-router-dom';

import { DownOutlined, PlusOutlined, ExportOutlined } from '@ant-design/icons';
import { Artwork, getArtworks } from '@app/api/artworkBasic.api';
import { Button } from '@app/components/common/buttons/Button/Button';
import { Dropdown } from '@app/components/common/Dropdown/Dropdown';
import { SearchInput } from '@app/components/common/inputs/SearchInput/SearchInput.styles';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { Select } from '@app/components/common/selects/Select/Select';
import { Table } from '@app/components/common/Table/Table';
import { H1 } from '@app/components/common/typography/H1/H1';
import { useQuery } from '@tanstack/react-query';

const columns: ColumnsType<Artwork> = [
  {
    title: '動作',
    key: 'operation',
    width: 100,
    render: () => <a href="https://www.google.com">action</a>,
  },
  {
    title: '作品尺寸',
    key: 'size',
    dataIndex: 'Size',
    render: (size: number[]) => `${size.filter(Boolean).join(' x ')} cm`,
    width: 150,
  },
  {
    title: '圖片',
    key: 'image',
    dataIndex: 'Image',
    width: 300,
  },
  {
    title: '進貨日期',
    key: 'purchase_date',
    dataIndex: 'invoice',
    width: 150,
    render: (invoice: Artwork['invoice']) => {
      const { year, month, day } = invoice[0]?.Date ?? {};
      return `${year}/${month}/${day}`;
    },
    sorter: true,
  },
  {
    title: '客戶名稱',
    key: 'clientName',
    dataIndex: 'invoice',
    width: 150,
    render: (invoice: Artwork['invoice']) => invoice.at(-1)?.Contact_Name,
  },
];

const columnOptions = columns
  .filter((col) => col.key !== 'operation')
  .map((col) => ({ label: col.title, value: col.key }));

const defaultPagination = {
  current: 1,
  pageSize: 10,
};

const artworkTypeMenuProps = {
  items: [
    {
      key: 1,
      label: '繪畫',
    },
    {
      key: 2,
      label: '版畫',
    },
    {
      key: 3,
      label: '雕塑',
    },
    {
      key: 4,
      label: '攝影',
    },
    {
      key: 5,
      label: '錄像',
    },
    {
      key: 6,
      label: '其他',
    },
  ],
};

const ArtworkListPage = () => {
  const [searchPrams, setSearchParams] = useSearchParams();
  const apiQueryParams = useMemo(
    () => Object.fromEntries(searchPrams.entries()),
    [searchPrams]
  );
  const handlePageChange = useCallback(
    (page: number, pageSize: number) =>
      setSearchParams({
        ...apiQueryParams,
        page: page.toString(),
        limit: pageSize.toString(),
      }),
    [apiQueryParams, setSearchParams]
  );

  const { isLoading, data } = useQuery({
    queryKey: ['artworks', apiQueryParams],
    queryFn: () => {
      apiQueryParams['page'] =
        apiQueryParams['page'] ?? defaultPagination.current;
      apiQueryParams['limit'] =
        apiQueryParams['limit'] ?? defaultPagination.pageSize;
      return getArtworks(apiQueryParams);
    },
    keepPreviousData: true,
  });

  return (
    <>
      <PageTitle>藝術品列表</PageTitle>
      <H1>藝術品列表</H1>
      <Space
        style={{
          marginTop: 10,
          marginBottom: 10,
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Link to="/forms/advanced-forms">
          <Button type="primary" size="large">
            <PlusOutlined />
            新增
          </Button>
        </Link>
        <Button type="primary" size="large">
          <ExportOutlined />
          匯出
        </Button>
      </Space>
      <br />
      欄位顯示
      <br />
      <Row gutter={[10, 10]} style={{ marginTop: 10 }}>
        <Col xs={24} md={18}>
          <Select
            mode="multiple"
            options={columnOptions}
            width="100%"
            size="middle"
          ></Select>
        </Col>
        <Col span={24}>過濾條件</Col>
        <Col xs={24} md={18} lg={12}>
          <SearchInput size="small" placeholder="請輸入關鍵字" />
        </Col>
        <Col span={24}>
          <Space size="small" wrap={true}>
            <Dropdown
              menu={artworkTypeMenuProps}
              getPopupContainer={() => document.body}
            >
              <Button type="primary">
                <Space size="small">
                  作品類型
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Dropdown
              menu={artworkTypeMenuProps}
              getPopupContainer={() => document.body}
            >
              <Button type="primary">
                <Space size="small">
                  作品類型
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Dropdown
              menu={artworkTypeMenuProps}
              getPopupContainer={() => document.body}
            >
              <Button type="primary">
                <Space size="small">
                  作品類型
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Dropdown
              menu={artworkTypeMenuProps}
              getPopupContainer={() => document.body}
            >
              <Button type="primary">
                <Space size="small">
                  作品類型
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Dropdown
              menu={artworkTypeMenuProps}
              getPopupContainer={() => document.body}
            >
              <Button type="primary">
                <Space size="small">
                  作品類型
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Dropdown
              menu={artworkTypeMenuProps}
              getPopupContainer={() => document.body}
            >
              <Button type="primary">
                <Space size="small">
                  作品類型
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Dropdown
              menu={artworkTypeMenuProps}
              getPopupContainer={() => document.body}
            >
              <Button type="primary">
                <Space size="small">
                  作品類型
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </Space>
        </Col>
      </Row>
      <Table
        loading={isLoading}
        rowKey={'_id'}
        columns={columns}
        dataSource={data?.value}
        pagination={{
          current: +(searchPrams.get('page') ?? defaultPagination.current),
          pageSize: +(searchPrams.get('limit') ?? defaultPagination.pageSize),
          total: data?.totalRawData ?? 0,
          position: ['topRight', 'bottomRight'],
          responsive: true,
          onChange: handlePageChange,
        }}
        scroll={{ x: '100%' }}
      />
    </>
  );
};

export default ArtworkListPage;
