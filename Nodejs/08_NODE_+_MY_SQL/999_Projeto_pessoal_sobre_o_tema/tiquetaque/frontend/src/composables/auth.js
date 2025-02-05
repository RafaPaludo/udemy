import { jwtDecode } from "jwt-decode";
// import { ref, watchEffect, toValue } from 'vue'

function useUser () {
  const token = localStorage.getItem('authToken'); // Recupere o token armazenado
  if (token) {
    const decoded = jwtDecode(token); // Decodifica o payload do token
    console.log(decoded); // Dados do usuário presentes no token
  }
}

function useLogout () {
  localStorage.removeItem('authToken'); // Remove o token
  this.$router.push('/login'); // Redireciona para a página de login
}

export {
  useUser,
  useLogout
}
