<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="menu-btn"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>
          <div class="logo"/>
        </q-toolbar-title>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="rightDrawerOpen = !rightDrawerOpen"
        />
      </q-toolbar>
      <q-toolbar inset>
        <q-breadcrumbs active-color="white">
          <q-breadcrumbs-el label="Home" to="/" exact active-class="breadcrumb-active" icon="home" />
          <q-breadcrumbs-el label="Blogs" to="/" exact active-class="breadcrumb-active" icon="amp_stories" />
        </q-breadcrumbs>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="240"
      :breakpoint="500"
      content-class="bg-primary"
    >
      <q-list>
        <template v-for="link in links">
          <q-item clickable :key="link.title" :to="link.link" exact active-class="active-menu-link" class="text-white" v-ripple>
            <q-item-section style="font-size: 12px">{{link.title}}</q-item-section>
          </q-item>
          <q-separator :key="link.title+'_sep'" v-if="link.break_section" color="border"  />
        </template>
        <footer-link />
      </q-list>
    </q-drawer>

    <q-page-container>
      <transition
        name="transitions"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        mode="out-in"
      >
        <router-view />
      </transition>
    </q-page-container>

    <q-drawer
      v-model="rightDrawerOpen"
      show-if-above
      :width="240"
      :breakpoint="500"
      content-class="bg-primary"
      side="right"
    >
      <q-list>
      </q-list>
    </q-drawer>
  </q-layout>
</template>

<script>
import config from '../config/config'
import footerLink from '../components/footer-link'

export default {
  name: 'MainLayout',

  components: {
    footerLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      links: config.app_links,
      rightDrawerOpen: false
    }
  }
}
</script>
<style lang="stylus" scoped>
.logo
  background url('../statics/truecaller.png') no-repeat
  background-size contain
  height 36px
  width 200px
.breadcrumb-active
  font-weight bold
.active-menu-link
  background rgba(140,140,140,0.3)
</style>
