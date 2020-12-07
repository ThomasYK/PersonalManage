<template>
<div style="height:100%">
    <el-menu default-active="/index/dashboard" router class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff">
        <el-menu-item index="/index/dashboard">
            <i class="el-icon-s-data"></i>
            <span slot="title">数据统计</span>
        </el-menu-item>
        <el-submenu index>
            <template slot="title">
                <i class="el-icon-s-order"></i>
                <span>计划表</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/index/plan1">
                    <template slot="title">
                        <i class="el-icon-date"></i>
                        <span>周一</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/index/plan2">
                    <template slot="title">
                        <i class="el-icon-date"></i>
                        <span>周二</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/index/plan3">
                    <template slot="title">
                        <i class="el-icon-date"></i>
                        <span>周三</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/index/plan4">
                    <template slot="title">
                        <i class="el-icon-date"></i>
                        <span>周四</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/index/plan5">
                    <template slot="title">
                        <i class="el-icon-date"></i>
                        <span>周五</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/index/plan6">
                    <template slot="title">
                        <i class="el-icon-date"></i>
                        <span>周六</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/index/plan7">
                    <template slot="title">
                        <i class="el-icon-date"></i>
                        <span>周日</span>
                    </template>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/index/aimwall">
            <i class="el-icon-edit"></i>
            <span slot="title">目标墙</span>
        </el-menu-item>
        <el-menu-item index="/index/future">
            <i class="el-icon-guide"></i>
            <span slot="title">展望</span>
        </el-menu-item>
    </el-menu>
</div>
</template>

<script>
import Vue from 'vue';
import {
    Menu,
    MenuItem,
    Submenu,
    MenuItemGroup
} from 'element-ui';
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
export default {
    name: 'navmenu'
}
</script>

<style scoped>
.el-menu {
    height: 100%;
}

.el-menu-item.is-active {
    color: #ffd04b;
}
</style>
