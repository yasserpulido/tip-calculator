import { Calculator } from "./components/calculator/Calculator";
import { Card } from "./components/ui/Card";
import Logo from "./assets/images/logo.svg";
import React from "react";

function App() {
  // Use following code to make images works on GitHub Pages.
  // const logo = "./static/media/logo.3cc0528bd46321d63d85702006069614.svg";

  return (
    <React.Fragment>
      <div className="m-auto">
        <img src={Logo} alt="Logo" />
      </div>
      <Card>
        <Calculator />
      </Card>
      <footer>
        <div className="attribution">
          Challenge by&nbsp;
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by&nbsp;
          <a href="https://www.frontendmentor.io/profile/yasserpulido">
            Yasser Pulido
          </a>
          .
        </div>
      </footer>
    </React.Fragment>
  );
}

export default App;
