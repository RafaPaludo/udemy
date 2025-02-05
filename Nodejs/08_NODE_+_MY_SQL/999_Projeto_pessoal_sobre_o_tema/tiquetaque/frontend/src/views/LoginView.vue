<template>
  <component :is="layout">
    <VaForm
      ref="myForm"
      class="flex flex-col gap-2"
      @submit.prevent="handleSubmit"
      tag="form"
    >
      <VaInput stateful label="E-mail" :rules="[(v) => !!v || 'Obrigatório']" v-model="email" />
  
      <VaInput stateful label="Senha" :rules="[(v) => !!v || 'Obrigatório']" v-model="password" />
  
      <div>
        <VaButton preset="plain" :to="'/register'">Registrar-se</VaButton>
      </div>
  
      <VaButton :loading="isLoading" :disabled="isLoading || !isValid" type="submit">
        Login
      </VaButton>
    </VaForm>
  </component>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useForm, useToast } from 'vuestic-ui'
import { loginUser } from '@/api/services/user.js'
import { useUserStore } from '@/stores/user'

const { isLoading, isValid } = useForm('myForm')
const { init } = useToast()
const router = useRouter()
const userStore = useUserStore();

const layout = 'login-layout'
const email = ref('');
const password = ref('');

const handleSubmit = async () => {
  try {
    const { message, token } = await loginUser({ email: email.value, password: password.value });

    // Armazena o token jwt no localStorage
    localStorage.setItem('authToken', token);
    userStore.setUserFromToken(token);
    
    if (message) {
      init({
        message: message,
        color: 'success',
        position: 'bottom-right'
      })
      router.push('/')
    }
  } catch (error) {
    init({
      message: error.message,
      color: 'danger',
      position: 'bottom-right'
    })
  }
}

</script>

<style lang="scss" scoped>
</style>
