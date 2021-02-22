import React from "react";
import {getBeanie,getRandomBeanie} from '../data/utils';


/**
 * This function excutes finding and displaying your Beanie Baby match!
 *
 *  I am a <insert zodiac sign> looking for a <zodiac sign>
 * 
 */

export const BBMatch = ({ birthday = 0 }) => {
  const { loading, error, data } = useQuery(GET_MATCH);
  console.log({ data });
  console.log(getBeanie(1));
  console.log("Random",getRandomBeanie());
  if (loading) return "Loading...";
  if (error) return "Error :(";
  if (data) {
    console.log({ data });
    return <p>{data.hello}</p>;
  }
  return <p> okay</p>;
};
