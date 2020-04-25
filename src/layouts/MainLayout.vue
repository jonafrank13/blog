<template>
  <q-layout view="hHh Lpr lFR" class="bg-background">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          :class="$q.screen.lt.md ? '' : 'hide-visible'"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title class="flex justify-center">
          <div class="logo"/>
        </q-toolbar-title>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="rightDrawerOpen = !rightDrawerOpen"
          :style="{visibility: !hide_navigation ? 'visible' : 'hidden'}"
        />
      </q-toolbar>
      <q-toolbar class="flex justify-center">
        <q-breadcrumbs active-color="white">
          <q-breadcrumbs-el label="Home" to="/" exact active-class="text-bold" icon="home" />
          <q-breadcrumbs-el v-if="hide_navigation" :label="$route.params.slug" :to="$route.params.slug" exact active-class="text-bold" icon="amp_stories" />
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
          <q-item clickable tag="a" :key="link.title" :href="link.link" exact active-class="active-menu-link text-bold" class="text-white" :class="link.title === 'Blog' ? 'active-menu-link text-bold' : ''" v-ripple>
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
        <router-view v-if="config.app_site_id" />
      </transition>
    </q-page-container>

    <q-drawer
      v-if="!hide_navigation"
      v-model="rightDrawerOpen"
      show-if-above
      :width="240"
      :breakpoint="1200"
      content-class="bg-primary"
      side="right"
    >
      <q-scroll-area class="fit">
        <list-selector v-model="store.category" :items="store.categories" @input="updateCategory" label="Categories" />
        <list-selector v-model="store.tag" :items="store.tags" @input="updatePosts" label="Tags" />
      </q-scroll-area>
    </q-drawer>

    <q-footer v-if="!hide_navigation">
      <q-toolbar class="flex justify-center">
        <q-pagination
          v-model="store.page"
          :max="store.total_pages"
          input
          @input="updatePosts"
          color="secondary"
          input-class="text-white"
        >
        </q-pagination>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import config from '../config/config'
import footerLink from '../components/footer-link'
import listSelector from '../components/list-selector'
import appService from '../service/app.service'

export default {
  name: 'MainLayout',
  components: {
    footerLink,
    listSelector
  },
  data () {
    return {
      leftDrawerOpen: false,
      rightDrawerOpen: false,
      links: config.app_links,
      store: appService.store,
      hide_navigation: false,
      config: config
    }
  },
  methods: {
    updatePosts () {
      this.$nextTick(() => {
        appService.fetchPosts()
      })
    },
    updateCategory (value) {
      this.store.category = value
      this.store.page = 1
      this.updatePosts()
    },
    updateTag (value) {
      this.store.tag = value
      this.store.page = 1
      this.updatePosts()
    },
    setNavigation () {
      this.hide_navigation = (this.$route.name !== 'Blogs')
    },
    startup () {
      this.setNavigation()
      appService.fetchCategories()
      appService.fetchTags()
    }
  },
  mounted () {
    if (!config.app_site_id) {
      this.$q.dialog({
        title: 'Site ID Required',
        message: 'What is the site ID of the wordpress blog you want to view? (e.g: 3584907)',
        dark: true,
        prompt: {
          model: '3584907',
          type: 'number',
          outlined: true,
          isValid: val => Boolean(val)
        },
        cancel: false,
        persistent: true
      }).onOk(data => {
        this.config.app_site_id = data
        this.startup()
      })
    }
  },
  watch: {
    $route: function () {
      this.setNavigation()
    }
  }
}
</script>
<style lang="stylus" scoped>
.logo
  background url('../statics/wordpress.png') no-repeat
  background-size contain
  background-position center
  height 50px
  width 200px
.active-menu-link
  background rgba(140,140,140,0.3)
</style>
