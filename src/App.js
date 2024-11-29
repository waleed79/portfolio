import './App.css';

function App(){
  return (
    <div className = "App">
      <div className="name"> 
        Waleed A.
      </div>
      <div className="navigation">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <a href="#random">Random</a>
            </div>
      <div className="profile-container">
          <img src="./assets/profile.jpg" alt="Your Name" className="profile-picture" />
      </div>
      <div className="introduction">
          <div className="big-letter">I</div>
          <div className="specialties-container">
              <ul className="specialties">
                  <li>transform data into actionable insights using <span className="highlight">Data Science</span>.</li>
                  <li>craft seamless digital experiences with <span className="highlight">UI/UX Design</span>.</li>
                  <li>build robust and scalable systems through <span className="highlight">Software Engineering</span>.</li>
              </ul>
          </div>
      </div>

      <div className="info-section">
        <h3>Recent News</h3>
            <ul className="news-list">
                <li>
                    <time className="news-date">September 2024</time> - 
                    I joined <span className="highlight2">UW-Madison</span> for <span className="highlight2">MS CS</span>.
                </li>
                <li>
                    <time className="news-date">August 2024</time> - 
                    I’m have started a position as teaching assistant for <span className="highlight2">Human-Computer Interaction CS570</span>.
                </li>
                <li>
                    <time className="news-date">August 14, 2024</time> - 
                    I presented my paper at <span className="highlight2">USENIX Security Symposium</span> in Philadelphia.
                </li>
                <li>
                    <time className="news-date">August 2024</time> - 
                    Paper Links: 
                    <a href="https://www.usenix.org/conference/usenixsecurity24/presentation/gr%C3%B6ber-content-creators" target="_blank" rel="noopener noreferrer">Read</a>, 
                    <a href="https://www.youtube.com/watch?v=LwDibvsu_cc" target="_blank" rel="noopener noreferrer">Watch</a>
                </li>
            </ul>
      </div>
    </div>
    
  );

}

export default App