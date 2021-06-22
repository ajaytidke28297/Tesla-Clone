import React from "react";
import styled from "styled-components";
import classes from "./Section.module.css";
import Button from "../ui/Button";

function Section(props) {
  return (
    <Wrap bgImage={props.backgroundImg} id={props.id}>
      <div className={classes.heading}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>

      <Buttons>
        <div className={classes["button-group"]}>
          {props.leftBtnText && <Button text={props.leftBtnText} />}
          {props.rightBtnText && (
            <RightButton>{props.rightBtnText}</RightButton>
          )}
        </div>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
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

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
