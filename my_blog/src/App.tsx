import React from 'react';
import 'antd/dist/reset.css';
import styles from './App.module.css';


function App() {
  return (
    <div className={styles.App}>
      <div className={styles.blog_container}>
        <div className={styles.blog_header}></div>
        
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