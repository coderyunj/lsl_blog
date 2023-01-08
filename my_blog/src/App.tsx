import React from 'react';
import 'antd/dist/reset.css';
import styles from './App.module.css';
import { BlogHeader } from './component/BlogHeader/BlogHeader';
import { BlogMain } from './component/BlogMain/BlogMain';



function App() {
  
  return (
    <div className={styles.App}>
      <div className={styles.blog_container}>
        <div className={styles.blog_header}>
          <BlogHeader />
        </div>
        <div className={styles.blog_main}>
          <BlogMain />
        </div>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
