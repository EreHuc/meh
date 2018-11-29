export const setOauthTokenCookie = ({ expires_in, access_token }) => {
  const expires = new Date(Date.now() + (expires_in * 1000)).toUTCString();
  setCookie({ key: 'expires_in', value: access_token, expires })
};

export const setCookie = ({ key, value, expires }) => {
  document.cookie = `${key}=${value}; expires=${expires}`;
};

export const getAccessToken = () => document.cookie.replace(/.*access_token=(.*);.*/, '$1');
