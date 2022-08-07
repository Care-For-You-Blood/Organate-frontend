import React from "react";
import curved from "../assets/curved.png";
import vector from "../assets/vector.png";
import gym from "../assets/gym.jpg";
import { useHistory } from "react-router";
export default function Landing() {
  const history = useHistory();
  return (
    <>
      <div className="landing">
        <img
          className="curved"
          src={curved}
          alt="curved"
          style={{
            height: "55rem",
          }}
        />

        <div className="center">
          <h4 className="text-center">
            Give yourself and those in need an elixir of life by
          </h4>
          <h1 className="text-center">Pledging your organs</h1>
          <button
            type="button"
            className="btn btn-light need-blood-btn"
            onClick={() => {
              history.push("/profile");
            }}
          >
            <span
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              Need Organs?
            </span>
          </button>
        </div>
      </div>
      <div className="features">
        <h2
          style={{
            fontWeight: "bold",
          }}
        >
          Features of this App
        </h2>
        <div className="feature-body">
          <div className="image">
            <img src={vector} alt="vector" />
          </div>
          <div className="points">
            <div className="bullets">
              <h4>
                <i className="fa fa-location-arrow" aria-hidden="true"></i>
                Oragante-Gym
              </h4>
              <p>
                We have a gym in the heart of the application, where you can
                find the best heath care advices and required excercise.
              </p>
            </div>
            <div className="bullets">
              <h4>Geo Search</h4>
              <p>
                With geo-search feature, finding organ donors has become easier
                than ever. Enter your location and you will be shown the donors
                available in the closest proximity
              </p>
            </div>
            <div className="bullets">
              <h4>
                <i className="fa fa-clock-o" aria-hidden="true"></i>Real Time
                Connect
              </h4>
              <p>
                No delays in receiving organs anymore. Connect with donors
                <br /> and recipients in real time
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="gym" id="gym">
        <h2
          style={{
            fontWeight: "bold",
          }}
        >
          How to keep your organs exuberant!
        </h2>
        <div className="gym-body" style={{ display: "flex" }}>
          <div className="image">
            <img src={gym} alt="gym" />
          </div>

          <div className="points">
            <div className="bullets">
              <h4
                style={{
                  color: "#D73D66",
                  fontWeight: "bold",
                }}
              >
                Exercise controls weight
              </h4>
              <hr className="horizontal" />
              <p>
                Exercise can help prevent excess weight gain or help maintain
                weight loss. When you engage in physical activity, you burn
                calories. The more intense the activity, the more calories you
                burn.
              </p>
            </div>
            <div className="bullets">
              <h4
                style={{
                  color: "#D73D66",
                  fontWeight: "bold",
                }}
              >
                Exercise combats diseases
              </h4>
              <hr className="horizontal" />
              <p>
                Worried about heart disease? Hoping to prevent high blood
                pressure? No matter what your current weight is, being active
                boosts high-density lipoprotein (HDL) cholesterol.
              </p>
            </div>
            <div className="bullets">
              <h4
                style={{
                  color: "#D73D66",
                  fontWeight: "bold",
                }}
              >
                Exercise improves mood
              </h4>
              <hr className="horizontal" />
              <p>
                Need an emotional lift? Or need to destress after a stressful
                day? A gym session or brisk walk can help.
              </p>
            </div>
            <div className="bullets">
              <h4
                style={{
                  color: "#D73D66",
                  fontWeight: "bold",
                }}
              >
                Exercise boosts brain power
              </h4>
              <hr className="horizontal" />
              <p>
                Exercise improves Brain by reducing anxiety, depression,
                and negative mood and by improving self-esteem and cognitive
                function.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5rem",
          }}
        >
          <button
            type="button"
            className="btn btn-success need-blood-btn"
            onClick={() => {
              window.open("https://organate-fitness.vercel.app/", "_blank");
            }}
          >
            <span
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              Welcome to Organate-Fitness-Corner !
            </span>
          </button>
        </div>
      </div>
      <div className="tips" id="tips">
        <h2
          style={{
            fontWeight: "bold",
          }}
        >
          {" "}
          Tips
        </h2>
        <p>
          Here are some tips to put your mind at ease during
          <br /> the organs donation process.
        </p>
        <div className="container">
          <div className="tips-info">
            <h4>The day before</h4>
            <hr className="horizontal" />
            <ul>
              <li>
                Have an iron-rich diet such as beans, spinach or meat poultry
              </li>
              <li>Have a proper sleep of atleast 8 hours</li>
              <li>Include more liquids in your diet</li>
            </ul>
          </div>
          <div className="tips-info">
            <h4> On the donation day</h4>
            <hr className="horizontal" />
            <ul>
              <li>
                Do carry your identify indentification forms e.g. Driver's
              </li>
              <li>Drink 2 cups of water before donating organs</li>
              <li> Avoid fast food before donation</li>
            </ul>
          </div>
          <div className="tips-info">
            <h4>After the donation</h4>
            <hr className="horizontal" />
            <ul>
              <li>
                Reward yourself with a snack immediately after donating organs
              </li>
              <li>Drink more liquids over a period of 24 hours</li>
              <li>Remove the bandage after few hours</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
