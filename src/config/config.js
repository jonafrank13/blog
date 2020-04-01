const config = {
  app_name: 'Truecaller',
  app_links: [
    {
      title: 'Truecaller Premium',
      link: 'https://www.truecaller.com/premium',
      break_section: true
    },
    {
      title: 'About Truecaller',
      link: 'https://www.truecaller.com/about'
    },
    {
      title: 'Board & Management',
      link: 'https://www.truecaller.com/board-and-management'
    },
    {
      title: 'Media Kit',
      link: 'https://www.truecaller.com/media-kit'
    },
    {
      title: 'Careers',
      link: 'https://www.truecaller.com/careers'
    },
    {
      title: 'Blog',
      link: '/'
    },
    {
      title: 'Privacy',
      link: 'https://www.truecaller.com/privacy'
    },
    {
      title: 'Support',
      link: 'https://support.truecaller.com/hc/en-us',
      break_section: true
    },
    {
      title: 'For Advertisers',
      link: 'https://advertisers.truecaller.com/'
    },
    {
      title: 'For Business',
      link: 'https://business.truecaller.com/'
    },
    {
      title: 'For Developers',
      link: 'https://developer.truecaller.com/',
      break_section: true
    }
  ],
  // app_base_api_url: 'http://localhost:3000',
  app_base_api_url: 'https://public-api.wordpress.com/rest/v1.1',
  app_site_id: 107403796,
  app_posts_per_page: 25,
  app_max_related_posts: 3,
  app_max_tags: 10,
  get categories_url () { return `${this.app_base_api_url}/sites/${this.app_site_id}/categories` },
  get tags_url () { return `${this.app_base_api_url}/sites/${this.app_site_id}/tags` },
  get posts_url () { return `${this.app_base_api_url}/sites/${this.app_site_id}/posts/` },
  get related_posts_url () { return `${this.app_base_api_url}/sites/${this.app_site_id}/posts/$post$/related/` },
  get post_slug_url () { return `${this.app_base_api_url}/sites/${this.app_site_id}/posts/slug:$post_slug$` }
}

export default config
