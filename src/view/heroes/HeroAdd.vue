<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">新增英雄</h2>
    <form>
      <div class="form-group">
        <label for="name">姓名</label>
        <input type="text" class="form-control" id="name" placeholder="Name" />
      </div>
      <div class="form-group">
        <label for="gender">性别</label>
        <input
          type="text"
          class="form-control"
          id="gender"
          placeholder="Gender"
        />
      </div>
      <button type="submit" class="btn btn-success">添加</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
