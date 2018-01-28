<template>
  <section class="food">
    <div class="container">
      <!-- <logo/> -->
      <h1 class="title">
        {{ food.title }}
      </h1>
      <p>
        {{ food.money }}
      </p>
      <p>
        {{ food.store }}
      </p>
      <p>
        {{ food.text }}
      </p>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'food',
  layout: 'default',
  components: {
    Logo
  },
  computed: {
    ...mapGetters(['getFoodList', 'getFood'])
  },
  data () {
    return {
      food: {}
    }
  },
  created () {
    this.loadFood()
  },
  methods: {
    ...mapActions(['loadFood']),
    loadFood: function () {
      let vm = this
      // if (localStorage.getItem('_food')) {
      //   // localstorageにあるとそれを格納.
      // } else {
      this.$store.dispatch('loadFood', vm.$route.params.id)
        .then(function (result) {
          vm.food = vm.getFood
        })
      // }
    }
  }
}
</script>

<style scoped lang="scss">
.food {
  margin: 7rem 0 0;
  .container {
    text-align: center;
  }
  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
}
</style>
