export const apiEndpoints = {
  BASE_URL: 'https://api.potterdb.com',
  GET_CHARACTERS: `/v1/characters`,
  characterDetails: (id: string | undefined) => `/v1/characters/${id}`,
};
