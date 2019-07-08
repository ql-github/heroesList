<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄列表</h2>
    <!-- <a class="btn btn-success" href="add.html">Add</a> -->
    <router-link to="/heroes/add">新增</router-link>
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
              <!-- <a href="edit.html">编辑</a> -->
              <router-link :to="'/heroes/edit/'+item.id">编辑</router-link>
              &nbsp;&nbsp;
              <!-- 记录当前数据的id然后传给del进行删除 -->
              <a href="javascript:" @click="delData(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

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
      this.axios
        .get("heroes")
        .then((res) => {
          if (res.status == 200) {
            this.list = res.data;
          }
        })
        .catch(() => {
          // console.log(err)
        });
    },
    // 删除功能
    delData(id){
      if(confirm('是否确定删除?')){
        //在模板字符串中要输出变量可以使用 ${变量名} 的形式
        this.axios.delete(`heroes/${id}`)
        .then((res)=>{
          if (res.status == 200) {
            // 删除成功后刷新页面
            this.getData();
          }
        })
      }
    }
  }
};
</script>

<style>
</style>
