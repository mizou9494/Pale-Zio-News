import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';

import {ChevronRight, ChevronLeft} from 'react-feather';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

const SpecialtyStoryGrid = () => {

  const sportsStoriesRef = React.useRef();
  const [translateX, setTranslateX] = React.useState(0);

  const movementAmount = 80;

  const moveSliderToLeft = () => {
    console.log('moving to the left');
    setTranslateX((prev) => prev - movementAmount);
  }
  const moveSliderToRight = () => {
    console.log('moving to the right');
    setTranslateX((prev) => prev + movementAmount);
  }

  if(sportsStoriesRef.current) {
    sportsStoriesRef.current.style.transform = `translateX(${translateX}%)`;
    console.log(sportsStoriesRef.current.style);
  }
  // React.useEffect(() => {
  // }, translateX)

  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          <LeftWrapper onClick={moveSliderToLeft}>
            <ChevronLeft strokeWidth={5} />
          </LeftWrapper>
          <RightWrapper onClick={moveSliderToRight}>
            <ChevronRight strokeWidth={5} />
          </RightWrapper>
          <SportSubWrapper ref={sportsStoriesRef}>
            {SPORTS_STORIES.map((data) => (
              <SportStoryWrapper key={data.id}>
                <MiniStory {...data} />
              </SportStoryWrapper>
            ))}
          </SportSubWrapper>
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  @media ${QUERIES.tabletAndUp} {
    gap: 64px;
    grid-template-columns: minmax(0px, 1fr);
  }
    
  @media ${QUERIES.laptopAndUp} {
    gap: 0px;
    grid-template-columns: 1fr minmax(0, 1fr);
  }
`;

const MarketsSection = styled.section`
  @media ${QUERIES.laptopAndUp} {
    margin-right: 16px;
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(188px, 1fr));
  gap: 16px;
`;

const SportsSection = styled.section`
  isolate: isolate;
`;

const SportsStories = styled.div`
  overflow: hidden;
  position: relative;
`;

const SportSubWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(188px, 1fr));
  gap: 16px;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    grid-template-columns: revert;
    // overflow: auto;
  }
`;

const SportStoryWrapper = styled.div`
  @media ${QUERIES.tabletAndUp} {
    min-width: 220px;
  }
`;

const LeftWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  background-color: hsl(0 0% 50% / 20%);
  cursor: pointer;
  display: grid;
  place-content: center;
  height: 100%;
  width: 35px;
  `;
  
  const RightWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  background-color: hsl(0 0% 50% / 20%);
  cursor: pointer;
  display: grid;
  place-content: center;
  height: 100%;
  width: 35px;

`;

export default SpecialtyStoryGrid;
