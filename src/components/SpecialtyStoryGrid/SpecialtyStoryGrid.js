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

  const movementAmount = 50;
  const moveSliderToLeft = () => {
    console.log('moving to the left');
    setTranslateX((prev) => prev - movementAmount);
  }
  const moveSliderToRight = () => {
    console.log('moving to the right');
    setTranslateX((prev) => prev + movementAmount);
  }

  if(sportsStoriesRef.current) {
    sportsStoriesRef.current.style.transform = `translateX(${translateX}px)`;
    console.log(sportsStoriesRef.current.style);
  }

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
        <SportsStories ref={sportsStoriesRef}>
          <LeftWrapper onClick={moveSliderToLeft}>
            <ChevronLeft />
          </LeftWrapper>
          <RightWrapper onClick={moveSliderToRight}>
            <ChevronRight />
          </RightWrapper>
          {SPORTS_STORIES.map((data) => (
            <SportStoryWrapper key={data.id}>
              <MiniStory {...data} />
            </SportStoryWrapper>
          ))}
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
`;

const SportsStories = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(188px, 1fr));
  gap: 16px;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    grid-template-columns: revert;
    overflow: auto;
  }

`;

const SportStoryWrapper = styled.div`
  @media ${QUERIES.tabletAndUp} {
    min-width: 220px;
  }
`;

const LeftWrapper = styled.div`
  background-color: var(--color-gray-300);
  border-radius: 50%;
  position: absolute;
  left: 20px;
  top: 35%;
  cursor: pointer;
  `;
  
  const RightWrapper = styled.div`
  background-color: var(--color-gray-300);
  border-radius: 50%;
  position: absolute;
  right: 20px;
  top: 35%;
  cursor: pointer;
`;

export default SpecialtyStoryGrid;
