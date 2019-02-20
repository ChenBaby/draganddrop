<template>
    <!-- Main Header -->
    <header class="main-header">
        <!-- Logo -->
        <a href="/" class="logo" style="background-color:transparent;"> <span class="logo-mini"><b>大蜂</b></span> <!-- logo for regular state and mobile devices --> <span class="logo-lg"><img src="/static/img/logo.png" class="img-circle" alt="User Image" style="border-radius: 0px; width:30%; margin-right:18px;"><b>大蜂</b></span>
        </a>

        <!-- Header Navbar -->
        <nav class="navbar navbar-static-top" role="navigation">
            <!-- Sidebar toggle button-->
            <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button"> <span class="sr-only"></span>
            </a>
            <!-- Navbar Right Menu -->
            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">

                    <!-- Notifications Menu -->
                    <li><a href="javascript:;" style="font-size:18px;"><i class="fa fa-user text-info"></i> &nbsp;水莲</a></li>
                    <li><a href="javascript:;">登出</a></li>
                    <!-- Tasks Menu -->
                    <li>
                       <router-link to="/user/desGuide" >使用指引</router-link>
                    </li>

                    <!-- User Account Menu -->
                    <li>
                        <router-link to="/user/reset-pwd" >
                            <i class="fa fa-edit"></i>
                            <span class="hidden-xs">修改密码</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>

export default {
  name: 'Head',
  data () {
    return {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
