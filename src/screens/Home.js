// BREAK INTO SMALLER COMPONENTS

import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import tick from "../assets/tick.png";
import cross from "../assets/cross.png";
import Timekeeper from "../components/Timekeeper";
import CurrentLevel from "../components/CurrentLevel";
import GameTitle from "../components/GameTitle";

// import { render } from "react-dom";



const Home = (props) => {
  console.log(props.location.state.user_name);

 
  const [redirectToForm, setRedirectToForm] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [active, setActive] = useState(0);
  const [ans, setAns] = useState();
  // const [score, setScore] = useState(0);

 


  useEffect(() => {
    if (!props.location.state) setRedirectToForm(true);

// AMOUNT OF CARDS PER VIEW
    for (let i = 0; i < 6; i++) {
      questions.push({
        a: Math.floor(Math.random() * (10 - 0) + 0),
        b: Math.floor(Math.random() * (10 - 0) + 0),
        ans: "",
      });
    }
    setQuestions([...questions]);
  }, []);
  

  const changeHandler = (e) => {
    switch (e.target.name) {
      case "ans":
        setAns(e.target.value);
        break;

      default:
        break;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("submitting");
    console.log(questions[active]);
    questions[active].ans = ans;
    setActive(active + 1);
    // move to next card
  };



  const redirectMe = () => {
    return <Redirect to="/" />;
  };
  return (
    <div className="home">
      {redirectToForm && redirectMe()}
      <div className="game__title">
        <div><GameTitle /></div>
      </div>

      <div className="home__game-details">
        <div> <Timekeeper /></div>

        <div className="home__game-details__user">
          <div className="row">
            <h3>Player: </h3>
            <span> {props.location.state.user_name}</span>
          </div>

          <div className="row">
            <CurrentLevel />
          </div>
        </div>
      </div>
      
      <div className="home__questions-outer">
        <i class="fas fa-angle-left" id="graph-btn-prev"></i>
        {questions.map((item, key) => (
          <div
            className="home__questions-single"
            className={
              key === active
                ? "home__questions-single bigger"
                : "home__questions-single"
            }
          >
            <span>{item.a}</span>
            <span style={{ marginLeft: "-1rem" }}>+{item.b}</span>
            <div className="line"></div>

            {key === active ? (
              <form onSubmit={submitHandler}>
                <input
                  type="number"
                  onChange={changeHandler}
                  name="ans"
                  autoFocus
                  //move to next question by pressing enter :D 
                />
              </form>
            ) : (
              item.ans.length > 0 && (
                <div className="answer-container">
                  {item.a + item.b == item.ans ? (
                    <img src={tick} alt="" />
                  ) : (
                    <img src={cross} />
                  )}
                  <span>{item.ans}</span>
                </div>
              )
            )}
          </div>
        ))}
        {/* <div className="home__questions-single"></div>
        <div className="home__questions-single bigger"></div>
        <div className="home__questions-single"></div>
        <div className="home__questions-single"></div> */}
        <i class="fas fa-angle-right" id="graph-btn-prev"></i>
      </div>
    </div>
  );
};

export default Home;
