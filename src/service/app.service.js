import { axios } from '../boot/axios'
import config from '../config/config'
import {
  Loading,
  QSpinnerGears
} from 'quasar'

const appService = {
  store: {
    posts: [],
    page: 1,
    total_pages: 1,
    categories: [],
    tags: [],
    category: null,
    tag: null
  },
  getPosts () {
    const params = {
      number: config.app_posts_per_page,
      page: this.store.page,
      category: this.store.category,
      tag: this.store.tag
    }
    return axios.get(config.posts_url, { params })
  },
  fetchPosts () {
    Loading.show({
      spinner: QSpinnerGears
    })
    this.getPosts().then((response) => {
      const totalPagesCalc = Math.ceil(response.data.found / config.app_posts_per_page)
      this.store.total_pages = totalPagesCalc || 1
      this.store.posts = response.data.posts
    }).finally(() => {
      Loading.hide()
    })
  },
  getRelatedPosts (id) {
    const url = config.related_posts_url.replace('$post$', id)
    const params = {
      size: config.app_max_related_posts
    }
    return axios.post(url, params)
  },
  getCategories () {
    return axios.get(config.categories_url)
  },
  fetchCategories () {
    Loading.show({
      spinner: QSpinnerGears
    })
    this.getCategories().then((response) => {
      this.store.categories.splice(0, this.store.categories.length)
      this.store.categories.push(...response.data.categories)
    }).finally(() => {
      Loading.hide()
    })
  },
  getTags () {
    return axios.get(config.tags_url)
  },
  fetchTags () {
    Loading.show({
      spinner: QSpinnerGears
    })
    this.getTags().then((response) => {
      this.store.tags.splice(0, this.store.tags.length)
      const tags = response.data.tags.sort((a, b) => b.post_count - a.post_count).slice(0, config.app_max_tags)
      this.store.tags.push(...tags)
    }).finally(() => {
      Loading.hide()
    })
  },
  getPost (slug) {
    const url = config.post_slug_url.replace('$post_slug$', slug)
    return axios.get(url)
  }
}

export default appService
