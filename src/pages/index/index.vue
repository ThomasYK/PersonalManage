<template>
<div>
    <el-container>
        <el-header>
            <i class="el-icon-video-camera-solid"></i>个人生活管理系统
        </el-header>
        <el-container>
            <el-aside>
                <NavMenu></NavMenu>
            </el-aside>
            <el-main>
                <div>
                    <router-view></router-view>
                </div>
            </el-main>
        </el-container>
    </el-container>
</div>
</template>

<script>
import Vue from 'vue';
import {
    Container,
    Aside,
    Header,
    Main,
} from 'element-ui'
import NavMenu from '../../components/NavMenu'
Vue.use(Container)
Vue.use(Aside);
Vue.use(Header);
Vue.use(Main);

export default {
    name: 'index',
    components: {
        NavMenu
    },
    methods: {
        go(url) {
            this.$router.push(url)
        }
    },
}
</script>

<style scoped>
div>.el-container {
    height: 100vh;
}

.el-header {
    background-color: rgb(64, 68, 72);
    color: white;
    font-size: 30px;
    letter-spacing: 2px;
    text-align: center;
    line-height: 60px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /* line-height: 160px; */
}
</style>
