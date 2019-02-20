<template>
    <aside class="main-sidebar">
        <section class="sidebar">
            <div class="user-panel">
            </div>
            <ul class="sidebar-menu" data-widget="tree">
                <li class="treeview">
                    <router-link to="">
                        <i class="fa fa-edit"></i>
                        <i class="fa fa-angle-left pull-right"></i>
                        <span>数据接入</span>
                    </router-link>
                    <ul class="treeview-menu">
                        <li class="treeview-menu-child">
                            <router-link to="/des/access-data">
                                <i class="fa fa-edit"></i>
                                <span>拖拽成图</span>
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    </aside>
</template>

<script>
export default {
  'name': 'b7Sidebar',
  data () {
    return {
      activeIndex: ''
    }
  }
}
</script>

<style scoped>
    .treeview-menu-child{
        padding-left:0;
    }
    .treeview-menu > li.active > a {
        background-color: #3c8dbc !important;
    }
</style>
