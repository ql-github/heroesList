<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄列表</h2>
    <a class="btn btn-success" href="add.html">Add</a>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>名称</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in list" :key="item.id">
            <td>{{index+1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>
              <a href="edit.html">edit</a>
              &nbsp;&nbsp;
              <a href="javascript:window.confirm('Are you sure?')">delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// 导入axios
import axios from "axios";

export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getData();
  },
  // 发送axios请求数据渲染页面
  methods: {
    getData() {
      axios
        .get("http://localhost:3000/heroes")
        .then(res => {
          if (res.status == 200) {
            this.list = res.data;
          }
        })
        .catch(() => {
          // console.log(err)
        });
    }
  }
};
</script>

<style>
</style>
