<template>
    <Page
    />
</template>

<script>
import Vue from 'vue'
import nprogress from 'nprogress'
import Home from './Home.vue'
import Navbar from './Navbar.vue'
import Page from './Page.vue'
import Sidebar from './Sidebar.vue'
import SWUpdatePopup from './SWUpdatePopup.vue'
import { resolveSidebarItems } from './util'

export default {
  components: {Home, Page, Sidebar, Navbar, SWUpdatePopup},
}
</script>

<style src="prismjs/themes/prism.css"></style>
<style src="./styles/theme.styl" lang="stylus"></style>
