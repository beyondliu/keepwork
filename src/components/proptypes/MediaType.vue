<template>
  <div class="image-container">
    <img class="preview-img" :src='originValue.src' alt="">
    <div class="operate">
      <el-button size='mini' round>修改</el-button>
      <el-button size='mini' round>
        <i class="iconfont icon-shezhi"></i> 设置
      </el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'mediaType',
  props: {
    editingKey: String,
    originValue: Object
  }
}
</script>
<style scoped>
.image-container {
  text-align: center;
  position: relative;
  border: 1px solid #E4E7ED;
  height: 155px;
  overflow: hidden;
}
.operate {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(102, 102, 102, 0.75);
  display: none; 
}
.image-container:hover .operate {
  display: flex;
  align-items: center;
  justify-content: center;
}
.preview-img{
  display: block;
  height: 100%;
  width: auto;
  margin: 0 auto;
}
.iconfont {
  font-size: 15px;
  line-height: 10px;
  vertical-align: middle;
}
</style>

