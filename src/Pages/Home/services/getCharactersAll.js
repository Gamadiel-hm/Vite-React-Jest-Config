import { getEnvVariable } from '../../../../env';

export const getCharactersAll = page => {
  const getApi = `${getEnvVariable('VITE_API')}people/?page=${page}`;
  return fetch(getApi).then(res => res.json());
};
