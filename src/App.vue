<template>
  <div>
    <!-- <img class="logo" src="./assets/logo.png"> -->
    <!-- <hello></hello> -->
    <!-- <div class="header">I am header</div> -->
    <v-header v-bind:seller = "seller" ></v-header>
    <div class="tab border-1px">
      <!-- 使用指令 v-link 进行导航 -->
      <div class="tab-item">
        <a v-link="{ path: '/goods'}">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{ path: '/ratings'}">评论</a>
      </div>
      <div class="tab-item">
        <a v-link="{ path: '/seller'}">商家</a>
      </div>
    </div>
    
    <!-- 路由外链，利用 router-view 指令刷新content -->
    <router-view></router-view>
    <!-- <div class="content">I am content</div> -->
    
    <!-- <p>
      Welcome to your Vue.js1.0.26 app!
    </p>
    <p>
      To get a better understanding of how this boilerplate works, check out
      <a href="http://vuejs-templates.github.io/webpack" target="_blank">its documentation</a>.
      It is also recommended to go through the docs for
      <a href="http://webpack.github.io/" target="_blank">Webpack</a> and
      <a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a>.
      If you have any issues with the setup, please file an issue at this boilerplate's
      <a href="https://github.com/vuejs-templates/webpack" target="_blank">repository</a>.
    </p>
    <p>
      You may also want to checkout
      <a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and
      <a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.
    </p> -->
  </div>
</template>

<script>
import Hello from './components/Hello';
import header from './components/header/header.vue';

const ERR_OK = 0;

export default {
  data() {
    return {
      seller: {}
    };
  },
  created() {
    this.$http.get('/api/seller').then((response) => {
        // response = response.json();
        // console.log(response);
        response = response.body;
        if(response.errno === ERR_OK) {
          this.seller =response.data;
          console.log(this.seller);
        }
    });
  },
  components: {
    Hello,
    'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./common/stylus/mixin.styl"

    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      // border-bottom: 1px solid rgba(7,17,27,0.1)
      border-1px(rgba(7,17,27,0.1))
      .tab-item
        flex: 1
        text-align: center
        & > a
          display: block
          text-decoration: none
          font-size: 14px
          color: rgb(77,85,93)
          &.active
            color: rgb(240,20,20)


/*html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}*/
</style>
