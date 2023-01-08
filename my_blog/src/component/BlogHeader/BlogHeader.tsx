import React from "react";
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import styles from "./BlogHeader.module.css"
export const BlogHeader = () => {
  const items: MenuProps['items'] = [
    {
      label: '我的作品',
      key: 'mail',
      // icon: <MailOutlined />,
    },
    {
      label: '我的信息',
      key: 'app',
      // icon: <AppstoreOutlined />,
      // disabled: true,
    },
    {
      label: '文章',
      key: 'SubMenu',
      // icon: <SettingOutlined />,
      // children: [
      //   {
      //     type: 'group',
      //     label: 'Item 1',
      //     children: [
      //       {
      //         label: 'Option 1',
      //         key: 'setting:1',
      //       },
      //       {
      //         label: 'Option 2',
      //         key: 'setting:2',
      //       },
      //     ],
      //   },
      //   {
      //     type: 'group',
      //     label: 'Item 2',
      //     children: [
      //       {
      //         label: 'Option 3',
      //         key: 'setting:3',
      //       },
      //       {
      //         label: 'Option 4',
      //         key: 'setting:4',
      //       },
      //     ],
      //   },
      // ],
    },
    // {
    //   label: (
    //     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
    //       Navigation Four - Link
    //     </a>
    //   ),
    //   key: 'alipay',
    // },
  ];

  return (
    <div className={styles.blogHeaderContianer}>
      <Menu mode="horizontal" items={items} />
    </div>
  )
}