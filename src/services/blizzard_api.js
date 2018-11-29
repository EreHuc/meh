import { request } from './fetch';
import { urls } from './urls';
import { getAccessToken } from '../utils';

export const api = {
  auth: () => {
    const username = "014106371271415f96edf50d6f5698eb";
    const password = "ztUHi9uG7onOfvsN9cSewr2hlQ7jNJu8";

    const headers = {
      Authorization: `Basic ${btoa(`${username}:${password}`)}`,
    };

    const body = new FormData();
    body.append('grant_type', 'client_credentials');

    return request.post(urls.auth(), { body, headers }).then(res => res.json());
  },
  character: (charInfo) => {
    const access_token = getAccessToken();
    const headers = new Headers();
    headers.append('accept', 'application/json');

    return request.get(urls.character({ ...charInfo, access_token }), {
      mode: 'no-cors',
      headers,
    }).then(res => res.json());
  },
  bosses: () => {
    const access_token = getAccessToken();
    const headers = new Headers();
    headers.append('accept', 'application/json');

    return request.get(urls.bosses({ access_token }), { mode: 'no-cors', headers }).then(res => res.json())
  },
};
