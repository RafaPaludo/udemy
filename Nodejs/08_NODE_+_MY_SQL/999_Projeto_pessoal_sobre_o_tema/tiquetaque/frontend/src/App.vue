<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import { useUser } from '@/composables/auth'

useUser();
</script>

<style scoped>
</style>
