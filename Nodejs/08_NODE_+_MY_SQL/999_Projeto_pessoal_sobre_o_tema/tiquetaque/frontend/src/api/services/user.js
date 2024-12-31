import api from '@/api/api'

/**
 * Faz o registro do usuário.
 * @param {options} param - Dados do usuário. 
 * @returns 
 */
const registerUser = async ({ name, email, password }) => {
  return api
    .post('/register', { name, email, password })
    .then((response) => (response.data))
    .catch((err) => {
      if (err.status === 400) {
        throw err?.response?.data;
      }
      throw { message: 'Ops! Houve algum problema na requisição, tente novamente mais tarde.' }
    });
};

/**
 * Faz o login do usuário.
 * @param {options} param - Dados do usuário. 
 * @returns
 */
const loginUser = async ({ email, password }) => {
  return api
    .post('/login', { email, password })
    .then((response) => (response.data))
    .catch((err) => {
      if (err.status === 400) {
        throw err?.response?.data;
      }
      throw { message: 'Ops! Houve algum problema na requisição, tente novamente mais tarde.' }
    });
};

export {
  registerUser,
  loginUser
};