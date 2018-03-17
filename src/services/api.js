import { mockApiUrl } from '../utils/app-config';

const getUsers = () => fetch(`${mockApiUrl}/users`).then((res) => res.json());

const getSchools = () => fetch(`${mockApiUrl}/schools`).then((res) => res.json());

const getSchoolDetail = (nameSlug) => fetch(`${mockApiUrl}/schools?name=${nameSlug}`).then((res) => res.json());

export {
  getUsers,
  getSchools,
  getSchoolDetail
};
