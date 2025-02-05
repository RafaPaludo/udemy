import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { jwtDecode } from "jwt-decode";

export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const token = ref(null)

  const isAuthenticated = computed(() => !!token.value);
  const userName = computed(() => user.value?.name || 'Usuário');

  const setUserFromToken = (token) => {
    try {
      token.value = token;
      user.value = jwtDecode(token);
    } catch (error) {
      console.warn('Erro ao decodificar o token', error)
    }
  }

  const clearUser = () => {
    token.value = null;
    user.value = null;
    localStorage.removeItem('authToken'); // Remove o token localmente
  }

  return {
    isAuthenticated,
    userName,
    setUserFromToken,
    clearUser
  }
})
