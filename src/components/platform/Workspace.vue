<template>
  <div class="content-wrapper">
    <transition name="fade" mode="out-in">
        <router-view name="workspace"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'workspace',
  data () {
    return {

    }
  },
  mounted: function () {
    // 手工刷新下高度
    $('.content-wrapper').css('min-height', $(window).height() - 102)
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
