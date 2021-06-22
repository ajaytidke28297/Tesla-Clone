import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Section from "./section/Section";

function Home() {
  const sectionData = useSelector((state) => state.car.items);
  return (
    <Container>
      {sectionData &&
        sectionData.map((item) => (
          <Section
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            backgroundImg={item.backgroundImg}
            leftBtnText={item.leftBtnText}
            rightBtnText={item.rightBtnText}
          />
        ))}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
