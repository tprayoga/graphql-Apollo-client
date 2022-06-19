import { gql, useQuery } from "@apollo/client";

const GET_CHARACTERS = gql`
  query GetCharacters($id: ID!) {
    character(id: $id) {
      id
      name
      image
      episode {
        id
        name
        episode
      }
    }
  }
`;
export const useCharacter = (id) => {
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { id },
  });
  return {
    loading,
    error,
    data,
  };
};
