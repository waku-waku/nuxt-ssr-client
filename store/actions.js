import axios from 'axios'
import config from '../config'

axios.defaults.headers.common = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'X-Requested-With': 'XMLHttpRequest',
  'Access-Control-Allow-Origin': 'https://determined-saha-480380.netlify.com',
  'Access-Control-Allow-Credentials': 'true'
}

// ここを../apiでもっとモジュール化

export default {
  // signIn ({ commit, state }, { username, password, grantType }) {
  //   return new Promise((resolve, reject) => {
  //     if (!state.user.loggedIn) {
  //       axios.post('http://localhost:3000/api/v1/auth/token', {
  //         client_id: config.CLIENT_ID,
  //         client_secret: config.CLIENT_SECRET,
  //         username: username,
  //         password: password,
  //         grant_type: grantType
  //       }).then(function (response) {
  //         let token = response.data.access_token
  //         commit('setToken', { token })
  //         resolve(response)
  //       }).catch(reject)
  //     } else {
  //       reject(new Error('something bad happened'))
  //     }
  //   })
  // },

  loadFoodList ({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: 'https://cute-pansy.glitch.me/foods',
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${state.user.token}`
        }
      }).then(function (response) {
        let foods = response.data
        commit('setFoods', { foods })
        resolve(foods)
      }).catch(reject)
    })
  }

  // createFood ({ commit, state }, body) {
  //   console.log(body)
  //   return new Promise((resolve, reject) => {
  //     axios({
  //       method: 'post',
  //       url: 'http://localhost:3000/api/v1/foods',
  //       withCredentials: true,
  //       data: {
  //         title: body.title,
  //         money: body.money,
  //         store: body.store,
  //         image_url: body.image_url,
  //         text: body.text
  //       },
  //       headers: {
  //         'Authorization': `Bearer ${state.user.token}`
  //       }
  //     }).then(function (response) {
  //       resolve(response)
  //     }).catch(reject)
  //   })
  // },

  // loadFood ({ commit, state }, foodId) {
  //   return new Promise((resolve, reject) => {
  //     console.log(foodId)
  //     axios({
  //       method: 'get',
  //       url: `http://localhost:3000/api/v1/foods/${foodId}`,
  //       withCredentials: true,
  //       headers: {
  //         'Authorization': `Bearer ${state.user.token}`
  //       }
  //     }).then(function (response) {
  //       let food = response.data
  //       commit('setFood', { food })
  //       resolve(food)
  //     }).catch(reject)
  //   })
  // }
}
