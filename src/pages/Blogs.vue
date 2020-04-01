<template>
  <q-page class="flex flex-center bg-background">
    <div class="q-pa-md row q-gutter-md justify-around">
      <blog v-for="post in store.posts" :key="post.ID" :post="post" />
      <h3 class="text-white text-center full-width" v-if="store.posts.length === 0">No Posts Found</h3>
    </div>
  </q-page>
</template>
<script>
import appService from '../service/app.service'
import blog from '../components/blog'

export default {
  name: 'Blogs',
  components: {
    blog
  },
  data () {
    return {
      store: appService.store
    }
  },
  mounted () {
    appService.fetchPosts()
  }
}
</script>
