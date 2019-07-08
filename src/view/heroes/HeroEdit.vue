<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">编辑英雄</h2>
    <form>
      <div class="form-group">
        <label for="name">姓名</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Name"
          v-model="fromData.name"
        />
      </div>
      <div class="form-group">
        <label for="gender">性别</label>
        <input
          type="text"
          class="form-control"
          id="gender"
          placeholder="Gender"
          v-model="fromData.gender"
        />
      </div>
      <button type="button" class="btn btn-success" @click.prevent="edit">修改</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      // 绑定文本框
      fromData: {
        name: "",
        gender: ""
      }
    };
  },
  mounted() {
    this.getId();
  },
  // 根据id获取页面数据
  methods: {
    getId() {
      axios.get(`http://localhost:3000/heroes/${this.id}`).then(res => {
        if (res.status == 200) {
          this.fromData = res.data;
        }
      });
    },
    edit() {
      axios
        .put(`http://localhost:3000/heroes/${this.id}`, this.fromData)
        .then(res => {
          if (res.status == 200) {
            this.$router.push({ path: "/heroes" });
          }
        });
    }
  }
};
</script>

<style>
</style>
