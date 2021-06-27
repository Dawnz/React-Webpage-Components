import { useState } from 'react';
import styled from 'styled-components';
import Star from './StarState';

const DivRating = styled.div`
  .star {
    cursor: pointer;
    height: 25px;
    width: 25px;
    margin: 2px;
    float: left;
    background-color: grey;
    clip-path: polygon(
      50% 0%,
      63% 38%,
      100% 38%,
      69% 59%,
      82% 100%,
      50% 75%,
      18% 100%,
      31% 59%,
      0% 38%,
      37% 38%
    );
  }

  .star.selected {
    background-color: red;
  }
`;
export default function StarRating({ starCount }) {
  // const[selected, setSelected]= useState(false);
  const [stars, setStars] = useState(0);

  return (
    <DivRating className="star-rating">
      {[...Array(starCount)].map((n, i) => (
        <Star key={i} selected={i < stars} onClick={() => setStars(i + 1)} />
      ))}

      <div>
        <p>
          {stars} of {starCount} stars
        </p>
      </div>
    </DivRating>
  );
}
