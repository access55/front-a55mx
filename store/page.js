export const state = () => ({
  loaded: false,
  posts: [],
  options: {
    email: '',
    blogger: '',
    twitter: '',
    address: '',
    credits: '',
    linkedin: '',
    attendance: '',
  },
  newsletter: {
    title: '',
    button: '',
    success: {
      title: '',
      text: ''
    },
    error: {
      title: '',
      text: ''
    }
  },
  blog: {
    title: '',
    button: ''
  },
  home: {
    yoast_title: '',
    yoast_meta: [],
    yoast_head: '',
    acf: {
      hero: {
        title: '',
        images: {
          image: {},
          image_webp: {}
        }
      },
      fuel: {
        title: '',
        numbers: {
          before: '',
          after: '',
          numbers: {
            before: '',
            after: '',
            number: 0
          },
          text: '',
          companies: []
        }
      },
      bureaucracy: {
        title: '',
        sub_title: '',
        text: '',
        sub_text: '',
        image: ''
      },
      button_lines: '',
      testimonials: {
        title: '',
        list: []
      },
      others: {
        title: '',
        list: []
      },
      support: {
        title: '',
        list: []
      },
      allies: {
        title: '',
        text: '',
        button_ally: '',
        list: []
      },
      invest: {
        title: '',
        text: '',
        button_know: ''
      }
    }
  },
})
export const getters = {
  home: state => state.home,
  posts: state => state.posts,
  loaded: state => state.loaded,
  options: state => state.options,
  newsletter: state => state.newsletter
}
export const mutations = {
  updateHome (state, home) { state.home = home },
  updateBlog (state, blog) { state.blog = blog },
  updatePosts (state, posts) { state.posts = posts },
  updateLoaded (state, loaded) { state.loaded = loaded },
  updateOptions (state, options) { state.options = options },
  updateNewsletter (state, newsletter) { state.newsletter = newsletter }
}
export const actions = {
  loadPage ({ commit, state }, baseAPI) { 
    if (!state.loaded) {
      Promise.all([
        fetch(baseAPI + '/api/home', { mode: 'cors' })
      ]).then(async ([pageResource]) => {
        const page = await pageResource.json()
        return { page }
      }).then((response) => {
        commit('updateHome', response.page.data.home)
        commit('updatePosts', response.page.data.posts || [])
        commit('updateOptions', response.page.data.options)
        commit('updateBlog', response.page.data.blog)
        commit('updateNewsletter', response.page.data.newsletter)
        commit('updateLoaded', true)
      })
    }
  }
}