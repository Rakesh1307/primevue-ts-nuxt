<template>
  <div class="layout-sidebar">
    <!-- <nuxt-link to="/">Dashboard</nuxt-link> -->
    <Menu :model="items" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class TheSideBar extends Vue {
  data () {
    return {
      items: [
        {
          label: 'Dashboard',
          icon: 'pi pi-external-link',
          to: '/detailsTable'
        },
        {
          label: 'User Profile',
          icon: 'pi pi-external-link',
          url: 'https://vuejs.org/'
        },
        {
          label: 'Table List',
          icon: 'pi pi-upload',
          to: '/fileupload'
        },
        {
          label: 'About',
          icon: 'pi pi-external-link',
          url: 'https://vuejs.org/'
        }
      ]
    }
  }
};
</script>

<style scoped>
.layout-sidebar {
  position: fixed;
  left: 0;
  top: 60px;
  height: calc(100% - 60px);
  background-color: white;
  width: 200px;
  border-right: 1px solid lightgray;
}
</style>
