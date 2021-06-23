import React from "react";
import styled from "styled-components";
import classes from "./Section.module.css";
import Button from "../UI/Button";
import Header from "../UI/Header";

function Section(props) {
  return (
    <Wrap bgImage={props.backgroundImg} id={props.id}>
      <Header title={props.title} description={props.description} />
      <div className={classes["section-bottom"]}>
        <div className={classes["button-group"]}>
          {props.leftBtnText && (
            <Button className={classes.leftButton} text={props.leftBtnText} />
          )}
          {props.rightBtnText && (
            <Button className={classes.rightButton} text={props.rightBtnText} />
          )}
        </div>
        <img
          className={classes.downArrow}
          src="/images/down-arrow.svg"
          alt="Down arrow"
        />
      </div>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  z-index: 1;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url('/images/${props.bgImage}')`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
