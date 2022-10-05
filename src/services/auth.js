import { del, get, post } from './request.js';

const URL = '/api/v1/auth';

export async function signUpUser(credentials) {
  const response = await post(`${URL}/signin`, credentials);
  response.user = response.data;
  return response;
}
