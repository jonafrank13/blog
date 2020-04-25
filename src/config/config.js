var config = {
  app_name: 'Wordpress Blog',
  app_links: [
    {
      title: 'Developer\'s Website',
      link: 'https://jonafrank13.github.io/',
      break_section: true
    }
  ],
  app_base_api_url: 'https://public-api.wordpress.com/rest/v1.1',
  app_site_id: null,
  app_posts_per_page: 25,
  app_max_related_posts: 3,
  app_max_tags: 10,
  get categories_url () { return `${this.app_base_api_url}/sites/${this.app_site_id}/categories` },
  get tags_url () { return `${this.app_base_api_url}/sites/${this.app_site_id}/tags` },
  get posts_url () { return `${this.app_base_api_url}/sites/${this.app_site_id}/posts/` },
  get related_posts_url () { return `${this.app_base_api_url}` },
  get post_slug_url () { return `${this.app_base_api_url}/sites/${this.app_site_id}/posts/slug:$post_slug$` },
  get post_id_url () { return `${this.app_base_api_url}/sites/${this.app_site_id}/posts/$post_id$` }
}

export default config
