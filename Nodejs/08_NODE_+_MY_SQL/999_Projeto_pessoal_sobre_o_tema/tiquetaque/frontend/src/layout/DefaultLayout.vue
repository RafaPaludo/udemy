<template>
  <VaLayout
    :left="{ order: orders.left }"
    :top="{ order: orders.top }"
  >
    <template #top>
      <VaNavbar color="primary" class="pa-2 h-14">
        <template v-if="!showLeftSidebar" #left>
          <VaButton icon="menu" @click="showLeftSidebar = !showLeftSidebar" />
        </template>
        <template #center>
          <VaNavbarItem class="font-bold text-lg">
            Tique Toque
          </VaNavbarItem>
        </template>
        <template #right>
          <VaAvatar
            src="https://i.pinimg.com/280x280_RS/08/e9/ba/08e9ba9cbd24db8de0c250570af460a4.jpg"
          />
        </template>
      </VaNavbar>
    </template>

    <template #left>
      <VaSidebar
        v-model="showLeftSidebar"
        :minimized="breakpoints.smDown"
        style="height: 100vh"
      >
        <div class="p-2">
          <VaButton preset="secondary" icon="menu_open" @click="showLeftSidebar = !showLeftSidebar" />
        </div>
        <RouterLink to="/">
          <VaSidebarItem>
            <VaSidebarItemContent>
              <VaIcon name="home" />
              <VaSidebarItemTitle>
                Home
              </VaSidebarItemTitle>
            </VaSidebarItemContent>
          </VaSidebarItem>
        </RouterLink>

        <RouterLink to="/about">
          <VaSidebarItem>
            <VaSidebarItemContent>
              <VaIcon name="phone" />
              <VaSidebarItemTitle>
                About
              </VaSidebarItemTitle>
            </VaSidebarItemContent>
          </VaSidebarItem>
        </RouterLink>

        <VaSpacer />

        <VaSidebarItem>
          <VaSidebarItemContent>
            <VaIcon name="exit" />
            <VaSidebarItemTitle>Sair</VaSidebarItemTitle>
          </VaSidebarItemContent>
        </VaSidebarItem>
      </VaSidebar>
    </template>

    <template #content>
      <slot></slot>
    </template>
  </VaLayout>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useBreakpoint } from 'vuestic-ui';

const showLeftSidebar = ref(true)

const orders = reactive({
  left: 2,
  top: 1
})

const breakpoints = useBreakpoint()
</script>