import Vue from 'vue'

export default {
  SET_ACTIVE_TYPE: (state, { type }) => {
    state.activeType = type
  },

  SET_LIST: (state, { type, ids }) => {
    state.lists[type] = ids
  },

  SET_ITEMS: (state, { items }) => {
    items.forEach(item => {
      if (item) {
        Vue.set(state.items, item.id, item)
      }
    })
  },

  setUser: (state, { tokens, username }) => {
    Vue.set(state.user, true, tokens.token) /* false means user not found */
  },

  setToken: (state, { token }) => {
    console.log(token)
    state.user.token = token
    localStorage.setItem('access_token', token)
    if (state.user.token) state.user.loggedIn = true
    // Vue.set(state.user.token, token)
  },

  setFriends: (state, { friends }) => {
    state.friends = friends
  },

  setFoods: (state, { foods }) => {
    state.foods = foods
    localStorage.setItem('_food', JSON.stringify(foods))
  },

  setFood: (state, { food }) => {
    state.food = food
  }
}
