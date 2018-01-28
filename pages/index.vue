<template>
  <section class="top">
    <div class="container">
      <div class="top-menu">
        <a  class="active" @click="trend">トレンド</a>
        <a href="#">いいねランキング</a>
        <a href="#">グルメスコアランキング</a>
      </div>

      <section v-if="foods.length" class="food-list">
        <article v-for="food in foods">
          <nuxt-link :to="'/foods/'+food._id">
            <div class="title-head">
              <p class="title">{{ food.title }}</p>
              <span v-if="food.tag" class="tag">{{ food.tag.name }}</span>
            </div>
            <div class="discription">
              <div class="overview">
                <div class="feature">
                  <ul>
                    <li><p class="money"><span>Money</span>{{ food.money }}</p></li>
                    <li v-if="food.store"><p class="store"><span>Store</span>{{ food.store }}</p></li>
                    <li v-else><p class="store"><span>Store</span>なし</p></li>
                  </ul>
                </div>
                <div class="text">
                  <p>{{ food.text }}</p>
                </div>
                <section class="share">
                  <a href="#"><span>♡</span></a>
                  <a href="#"><span>◎</span></a>
                  <a href="#"><span>✆</span></a>
                </section>
              </div>
              <div class="image">
                <div class="thumb">
                  <img :src="food.image_url" alt="">
                </div>
              </div>

              <!-- <div class="location-btn">
                <a href="#"><span>🌏</span><p v-if="foods.store">{{ foods.restaurant.name }}</p></a>
              </div> -->
              <!-- <div class="location">
                <p v-if="food.location"><span>Area：</span>{{ food.location.name }}<span>></span></p>
                <p v-else><span>Area：</span>場所が設定されていません</p>
              </div> -->
              <!-- <div class="tag">
                <p v-if="food.tag"><span>Tag：</span>{{ food.tag.name }}<span>></span></p>
                <p v-else><span>Tag：</span>タグが設定されていません</p>
              </div> -->
              <!-- <section class="share">
                <a href="#"><span>♡</span></a>
                <a href="#"><span>◎</span></a>
                <a href="#"><span>✆</span></a>
              </section> -->

              <div class="location">

              </div>
            </div>
          </nuxt-link>
        </article>
      </section>

      <div class="side-menu">
        <div class="tag-rankings">
          <p class="title">タグ ランキング</p>
          <ul>
            <li><a href="#">
              dsds
            </a></li>
            <li><a href="#"></a>dsds</li>
            <li><a href="#"></a>dsds</li>
            <li><a href="#"></a>dsds</li>
            <li><a href="#"></a>dsds</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'top',
  layout: 'default',
  components: {
    Logo
  },
  computed: {
    ...mapGetters(['getFoodList'])
  },
  data () {
    return {
      foods: []
    }
  },
  created () {
    this.loadFoodList()
  },
  methods: {
    ...mapActions(['loadFoodList']),
    loadFoodList: function () {
      let vm = this
      this.$store.dispatch('loadFoodList')
        .then(function (result) {
          vm.foods = vm.getFoodList
        })
    }
  }
}
</script>

<style scoped lang="scss">

.container {
  margin: 1.5rem auto;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  max-width: 100%;
}

.top {
  max-width: 100%;
  .top-menu {
    width: 180px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 16px;
    margin-top: .01rem;
    a {
      width: 100%;
      display: block;
      // margin-right: auto;
      border-radius: 2px;
      display: block;
      padding: .7rem 1rem;
      color: #111;
    }
  }
  .food-list {
    display: block;
    flex-grow: 1;
    article {
      background: #fefefe;
      margin: 0 0 1rem;
      border: 1px solid #fff;
      // box-shadow: 0 0 1px 0 #ccc;
      border-radius: 2px;
      .title-head {
        padding: .8rem .8rem 0rem;
        .title {
          font-weight: 900;
          font-size: 1rem;
          color: #333;
        }
      }
      .discription {
        position: relative;
        display: flex;
        flex-flow: row wrap;
        align-items: flex-start;
        width: 100%;
        padding: .5rem .8rem .5rem;
        .overview {
          width: 100%;
          display: block;
          flex-grow: 1;
          padding: 0.3rem;
          .feature {
            span {
              color: #e2a52d;
              font-weight: 900;
              font-size: .85rem;
              padding: 0 .5rem 0 0;
            }
            ul {
              li {
                margin: 0 .5rem 0 0;
                padding: 0 .5rem 0 0;
                display: inline-block;
                // border-right: 1px solid #111;
              }
            }
          }
          dl {
            font-size: .7rem;
            display: block;
            color: #555;
            // width: 120px;
            dt {
              float: left;
              clear: left;
              margin-right: 0.5em;
              width: 55px;
              padding: .1rem 0;
            }
            dd {
              float: left;
              margin-left: 1rem;
              padding: .1rem 0;
            }
          }
          .text {
            margin: 1rem 0 0 0;
            width: 100%;
            p {
              word-wrap: break-all;
              width: 100%;
            }
          }
          .share {
            display: block;
            text-align: right;
            float: right;
            a {
              margin: 0 0.3rem;
              span {
                font-size: 1.5rem;
              }
            }
          }
        }
        .image {
          display: block;
          float: right;
          position: relative;
          width: 12vw;
          height: 12vw;
        }
        .location-btn {
          display: inline-block;
          padding: 0 .1rem;
          color: #7e7e7e;
          a {
            span {
              font-weight: 900;
              font-size: 1.5rem;
              padding: 0 .2rem 0 0;
            }
          }
        }
        .location {
          display: block;

        }
      }
      &:hover {
        opacity: 0.9;
      }
    }
  }
  .side-menu {
    width: 250px;
    margin-left: 16px;
    .tag-rankings {
      background: #fff;
      width: 100%;
      border-radius: 2px;
      .title {
        padding: .3rem;
        font-size: .5rem;
        border-bottom: 1px solid #c1c1c1;
      }
      ul {
        li {
          width: 100%;
          padding: .7rem;
          a {
            color: #111;
          }
        }
      }
    }
  }
}
</style>
