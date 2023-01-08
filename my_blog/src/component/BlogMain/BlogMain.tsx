import { Button } from 'antd'
import React, { useEffect, useReducer, useState } from 'react'
import styles from './BlogMain.module.css'

const reducer = (
  state: any,
  action: {
    type: string;
    data: any;
  }
) => {
  switch (action.type) {
    case "change":
      return {
        ...state,
        pagination: action.data,
      };
    case "date":
      return {
        ...state,
        start: action.data.start,
        end: action.data.end,
        pagination: action.data.pagination,
      };
    default:
      return state;
  }
}
const initState = {
  
}

export const BlogMain = () => {
  const [textVisible, setTextVisible] = useState('测试一下函数组件中的state')
  const [listState, dispatch] = useReducer(reducer, initState)
  // 副作用钩子
  useEffect(() => {
    // 发送请求

  })
  const handleStateClick = () => {
    setTextVisible("修改成功")
  }
  return (
    <div className={styles.blogMainContainer}>
      <div className={styles.topContanier}>
        <div className={styles.stateContainer}>
          useState():{textVisible}
          <div>
            <Button onClick={handleStateClick}>点击更改state内容</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
