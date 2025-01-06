<template>
  <VaLayout
    :left="{ order: orders.left }"
    :top="{ order: orders.top }"
  >
    <template #top>
      <VaNavbar color="primary" class="py-2 h-14">
        <template v-if="!showLeftSidebar" #left>
          <VaButton icon="menu" @click="showLeftSidebar = !showLeftSidebar" />
        </template>
        <template #center>
          <VaNavbarItem class="font-bold text-lg">
            Tique Toque
          </VaNavbarItem>
        </template>
        <template #right>
          <div>Rafael Paludo</div>
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
        <VaSidebarItem>
          <VaSidebarItemContent>
            <VaIcon name="home" />
            <VaSidebarItemTitle>
              Home
            </VaSidebarItemTitle>
          </VaSidebarItemContent>
        </VaSidebarItem>
        <VaSidebarItem>
          <VaSidebarItemContent>
            <VaIcon name="phone" />
            <VaSidebarItemTitle>
              About
            </VaSidebarItemTitle>
          </VaSidebarItemContent>
        </VaSidebarItem>

        <VaSpacer />

        <VaSidebarItem
          :active="'Settings' === activeElement"
          @click="activeElement = 'Settings'"
        >
          <VaSidebarItemContent>
            <VaIcon name="settings" />
            <VaSidebarItemTitle>Settings</VaSidebarItemTitle>
          </VaSidebarItemContent>
        </VaSidebarItem>
      </VaSidebar>
    </template>

    <template #content>
      <main class="p-4">
        <h3 class="va-h3">
          Page content
        </h3>
        <p>Page content must be wrapped in main tag. You must do it manually. Here you can place any blocks you need in your application.</p>

        <p>For example, you can place here your router view, add sidebar with navigation in #left slot.</p>
        <p>If you're using VaSidebar for page navigation don't forget to wrap it in nav tag.</p>
      </main>
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