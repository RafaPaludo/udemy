<template>
  <VaForm
    ref="myForm"
    class="flex flex-col gap-2"
    tag="form"
    @submit.prevent="handleRegister"
  >
    <VaInput stateful label="Nome" :rules="[(v) => !!v || 'Necessário']" v-model="name" />

    <VaInput stateful label="E-mail" :rules="[(v) => !!v || 'Necessário']" v-model="email" />

    <VaInput stateful label="Senha" :rules="[(v) => !!v || 'Necessário']" v-model="password" />

    <div>
      <VaButton preset="plain" :to="'/login'">Login</VaButton>
    </div>

    <VaButton :loading="isLoading" :disabled="isLoading || !isValid" type="submit">
      Registrar
    </VaButton>
  </VaForm>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { useForm, useToast } from 'vuestic-ui'
import { registerUser } from '@/api/services/user.js'

const { isLoading, isValid } = useForm('myForm')
const { init } = useToast()
const router = useRouter()

const name = ref('');
const email = ref('');
const password = ref('');

/**
 * Envia os dados do formulário para a criação do usuário.
 * Em caso de sucesso envia para a páigina login.
 * Em caso de falha, pede revisão.
 */
const handleRegister = async () => {
  try {
    const { message } = await registerUser({ name: name.value, email: email.value, password: password.value });
    if (message) {
      init({
        message: message,
        color: 'success',
        position: 'bottom-right'
      })
      router.push('/login')
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
