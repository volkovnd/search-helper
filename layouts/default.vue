<template>
  <q-layout
    view="hHh lpR fFf"
  >
    <q-header
      elevated
      class="q-px-md bg-primary text-white"
      height-hint="98"
    >
      <q-toolbar>
        <q-toolbar-title
          class="cursor-pointer"
          shrink
          @click="navigateTo('/')"
        >
          Job helper
        </q-toolbar-title>

        <q-tabs
          stretch
        >
          <q-route-tab
            :to="{ name: 'vacancies' }"
            label="Vacancies"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <slot />
    </q-page-container>
  </q-layout>
</template>
