<template>
<div>
    <el-button type="primary" icon="el-icon-edit" @click="centerDialogVisible=true">添加目标</el-button>
    <el-row :gutter=10>
        <el-col :span="4">
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
                <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=860041809,2072646956&fm=26&gp=0.jpg" class="image">
                <div style="padding: 14px;">
                    <span>读完中华史纲</span>
                    <div class="bottom clearfix">
                        <div class="time">执行情况：未开始</div>
                        <el-button type="text" class="button">详情</el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
    <el-dialog
    title="提示"
    :visible.sync="centerDialogVisible"
    width="30%"
    center>
    <span>需要注意的是内容是默认不居中的</span>
    <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
    </span>
    </el-dialog>
</div>
</template>

<script>
import Vue from 'vue';
import {
    Card,
    Row,
    Col,
    Button,
    Dialog
} from 'element-ui';
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
Vue.use(Button);
Vue.use(Dialog);

export default {
    data() {
        return {
           centerDialogVisible:false
        };
    }
}
</script>

<style scoped>
.time {
    font-size: 13px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 100%;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>
