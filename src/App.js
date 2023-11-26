import React from 'react';
import './App.css';

function App() {
  const handleGitHubClick = () => {
    const GithubURL = 'https://github.com/suuu0719';
    window.location.href = GithubURL;
  };

  const handleTistoryClick = () => {
    const tistoryURL = 'https://suuubdev.tistory.com/';
    window.location.href = tistoryURL;
  };
  
  return (
    <div className="App">
      <header>
        <img src='/profile.png' id='profile' width='150dp'/>
        <h1>최수빈</h1>
      </header>

      <section className="bio">
        <h2>About Me</h2>
        <p>숭실대학교 컴퓨터학부에 재학중인 22학번 최수빈입니다.</p>
        <img
          id='github'
          src='/github-mark.svg'
          alt=''
          width='30dp'
          onClick={handleGitHubClick} // 클릭 이벤트 핸들러 등록
          style={{ cursor: 'pointer' }} // 커서를 포인터로 변경
        />
        <img
        id='tistory'
        src='/tistory.png'
        alt=''
          width='30dp'
          onClick={handleTistoryClick} // 클릭 이벤트 핸들러 등록
          style={{ cursor: 'pointer'}} // 커서를 포인터로 변경
        />
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Java</li>
          <li>Android</li>
          <li>C</li>
          <li>C++</li>
          {/* Add more skills as needed */}
        </ul>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        <p>Email: suuu0719@gmail.com</p>
        {/* Add more contact information as needed */}
      </section>

      <footer>
        <p>&copy; 2023 Subin Choi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
