import "./application.css";

const Application = () => {
  return (
    <section className="application">
      <div className="about-app">

        <div className="mobile">
          <img src="/image/application/mobile.svg" alt="mobile"/>
          <img src="/image/application/illustration.svg" alt="illustration"/>
        </div>

        <div className="app-download">

          <h1 className="app-title">Premium <span>Quality</span> <br/> For Your Health</h1>

          <ul className="app-info">
            <li>Premium quality food is made with ingredients that <br/> are packed with essential vitamins, minerals.
            </li>
            <li>These foods promote overall wellness by support <br/> healthy digestion and boosting immunity</li>
          </ul>

          <button className="download-button">
            Download
            <img src="/image/application/buttonArrow.svg" alt="arrow"/>
          </button>
          <img src="/image/application/vector.svg" alt="vector" className="vector"/>
        </div>
      </div>


      <hr/>
    </section>
  )
}

export default Application;