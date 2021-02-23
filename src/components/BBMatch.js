import React, { useState } from "react";
import { getMatch } from "../data/utils";
import { ASTROLOGY_SIGNS } from "../data/constants";
import { BBCard } from "../components/BBCard";
/**
 * This function excutes finding and displaying your Beanie Baby match!
 *  I am a <insert zodiac sign> looking for a <zodiac sign>
 */

export const BBMatch = ({ birthday = 0 }) => {
  const [match, setMatch] = useState("");
  const [sign, setSign] = useState(ASTROLOGY_SIGNS[0]);

  const queryMatch = () => {
    console.log({ sign });
    const myMatch = getMatch(sign);
    console.log({ myMatch });
    setMatch(myMatch);
  };

  console.log({ match });

  if (match) {
    return (
      <>
        <h1> Your Perfect Match is:</h1>
        <h2>{match.title}</h2>
        <BBCard beaniebaby={match} />
      </>
    );
  }

  // form to fill out
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        queryMatch();
      }}
    >
      <p>
        I am a{" "}
        <select value={sign} onChange={(e) => setSign(e.target.value)}>
          {ASTROLOGY_SIGNS.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </p>
      <button>Find my match!</button>
    </form>
  );
};
