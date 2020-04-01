<template>
  <q-card
    square
    class="bg-primary col-xs-12 col-sm-10 col-md-5 cursor-pointer"
    @click="$router.push(post.slug)"
    v-ripple
  >
    <q-img
      :src="post.post_thumbnail ? post.post_thumbnail.URL : ''"
      transition="fade"
      width="100%"
      height="220px"
      placeholder-src="data:image/jpeg;base64,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"
    >
      <template v-slot:loading>
        <q-spinner-gears color="white" />
      </template>
    </q-img>
    <q-card-section class="overflow-hidden">
      <div class="text-h6 text-secondary" v-html="post.title"></div>
      <div class="text-subtitle2 text-accent" v-if="post.author">by {{post.author.name}}</div>
      <div class="text-caption text-grey">{{post.date | date_format}}</div>
    </q-card-section>
    <q-separator dark inset />
    <q-card-section class="text-white overflow-hidden" v-html="post.excerpt"></q-card-section>
  </q-card>
</template>
<script>
import moment from 'moment'
export default {
  name: 'Blog',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  filters: {
    date_format: function (date) {
      if (!date) return ''
      return moment(date).fromNow()
    }
  }
}
</script>
