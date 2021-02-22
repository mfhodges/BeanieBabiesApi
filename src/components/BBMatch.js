import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_MATCH = gql`
  query {
    hello
  }
`;
/**
 * This function excutes finding and displaying your Beanie Baby match!
 *
 */

export const BBMatch = ({ birthday = 0 }) => {
  const { loading, error, match } = useQuery(GET_MATCH);
  console.log({ match });
  if (loading) return "Loading...";
  if (error) return "Error :(";
  return <p> okay</p>;
};
