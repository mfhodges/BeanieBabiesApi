import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_MATCH = gql`
  {
    hello
  }
`;
/**
 * This function excutes finding and displaying your Beanie Baby match!
 *
 */

export const BBMatch = ({ birthday = 0 }) => {
  const { loading, error, match } = useQuery(GET_MATCH);
  
  if (loading) return "Loading...";
  if (error) return "Error :(";
  console.log({ match });
  return <p> {match}</p>;
};
