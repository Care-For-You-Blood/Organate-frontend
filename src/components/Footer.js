import React from "react";

export default function Footer() {
  return (
    <div>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">
                Organate is an effort to make donation of Organs easier. The
                team has made consistent efforts to bring the project live. Each
                and every teammate has provided their valuable contribution.
              </p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Tech Stack</h6>
              <ul class="footer-links">
                <li>REST API</li>
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>React.js</li>
                <li>Bootstrap</li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>About Us</h6>
              <ul class="footer-links">
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/Care-For-You-Blood/Organate-frontend"
                  >
                    Github Link for Frontend
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/Care-For-You-Blood/Organate-backend"
                  >
                    Github Link for Backend
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Made With ❤ By Team(Abhishek, Akriti, Navnit, Raushan)
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
