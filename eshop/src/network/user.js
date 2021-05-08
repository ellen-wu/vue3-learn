import { request } from './request';

export function login(data) {
  return request({
    url: '/api/auth/login',
    method: 'post',
    data: data,
  });
}
