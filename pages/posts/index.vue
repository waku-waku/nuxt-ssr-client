<template>
  <section class="post">
    <div class="container">
      <h1>Food作成</h1>
      <form v-if="!$store.state.authUser">


        <p>Title: <input type="text" v-model="food.title"></p>
        <p>Money: <input type="number" v-model="food.money"></p>
        <p>Store: <input type="text" v-model="food.store"></p>
        <p>Image: <input type="file"  @change="onFileChange"></p>
        <p>ひとこと: <textarea row="10" v-model="food.text"></textarea></p>

        <a class="create-btn" @click="create">作成</a>
      </form>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'post',
  layout: 'default',
  computed: {
    ...mapGetters(['getFoodList'])
  },
  data () {
    return {
      food: {
        image_url: 'https://'
      }
    }
  },
  created () {
    // this.loadFoodList()
  },
  methods: {
    ...mapActions(['createFood']),
    async create () {
      console.log(this.food)
      let vm = this
      try {
        await this.createFood(vm.food)
          .then(function (result) {
            vm.$nuxt.$router.replace({ path: '/' })
          })
        // this.formUsername = ''
        // this.formPassword = ''
        // this.formError = null
      } catch (e) {
        this.formError = e.message
      }
    },
    async logout () {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>

<style scoped lang="scss">
.post {
  .container {
    margin-top: 1rem;
  }
  h1 {
    font-size: 2.1rem;
  }
  form {
    font-size: 1.0rem;
    letter-spacing: 2px;
    font-weight: 900;
    margin: 1rem 0 0 0;
    background: #fff;
    padding: 1rem 2rem;
    p {
      margin: 2rem 0 0 3rem;
    }
    input[type="text"],
    input[type="number"],
    textarea {
      width: 61%;
      float: right;
      margin: 0 0 0 .5rem;
      padding: .5rem .3rem;
      border-radius: 5px;
      appearance: none;
      -webkit-appearance: none;
    }
    textarea {

    }
    .create-btn {
      display: block;
      width: 200px;
      background: #fff;
      color: #33dd81;
      margin: 4rem auto 0;
      text-align: center;
      padding: .5rem;
      border: 1px solid #33dd81;
      border-radius: 3px;
    }
  }
}
</style>
