<template>
  <div id="app">
    <div class="box">
      <el-button type="primary">Primary</el-button>
      <el-button :icon="Search" circle />
      <el-button type="primary" :icon="Edit" circle />
      <el-button type="success" :icon="Check" circle />
      <el-button type="info" :icon="Message" circle />
      <el-button type="warning" :icon="Star" circle />
      <el-button type="danger" :icon="Delete" circle />
    </div>
    <el-pagination
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[100, 200, 300, 400]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    <h1>测试svg</h1>
    <svg>
      <use xlink:href="#icon-logo" fill="red"></use>
    </svg>
    <SvgIcon name="logo"></SvgIcon>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
const currentPage4 = ref(4)
const pageSize4 = ref(4)
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
console.log(import.meta.env)
</script>
<style scoped lang="scss">
  .box {
    background-color: $color;
  }
</style>