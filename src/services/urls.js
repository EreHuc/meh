export const BASE_URI = 'https://eu.battle.net';

export const urls = {
  auth: () => `${BASE_URI}/oauth/token`,
  character: ({ realm, characterName, access_token, locale = 'fr_FR' }) => `${BASE_URI}/wow/character/${realm}/${characterName}?access_token=${access_token}&locale=${locale}`,
  bosses: ({ locale = 'fr_FR', access_token }) => `${BASE_URI}/wow/boss?locale=${locale}&access_token=${access_token}`
};
