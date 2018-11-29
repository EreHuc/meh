export const request = {
  post: (url, init) => fetch(url, { ...init, method: 'POST'}),
  get: (url, init) => fetch(url, { ...init, method: 'GET' }),
};
