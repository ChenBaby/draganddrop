<template>
    <div class="wrapper">
        <Header></Header>
        <Sidebar></Sidebar>
        <Workspace></Workspace>
        <Footer></Footer>
    </div>
</template>

<script>

import Header from './Header'
import Sidebar from './Sidebar'
import Workspace from './Workspace'
import Footer from './Footer'

export default {
  name: 'platform',
  components: {
    Header,
    Sidebar,
    Workspace,
    Footer
  },
  data () {
    return {

    }
  },
  methods: {

  },
  mounted: function () {

  }
}
</script>

<style scoped>

</style>
