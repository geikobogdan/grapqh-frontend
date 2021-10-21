import { useLazyQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";

const queryUsers = loader("./gql/queryUsers.graphql");

export const useQueryUsers = () => {
  const [getUsers, { loading, error, data }] = useLazyQuery(queryUsers);
  const users = data ? data.users : null;
  return { getUsers, loading, error, users };
};
