<template>
  <div ref="box" class="box">
    <BaseResizeBox :ref="arrRef[0]" boxWith="300px" :isResizing="isResizing">
      <div class="box-item1"></div>
    </BaseResizeBox>
    <BaseResizeLine
      :handleMouseDown="handleMouseDown"
      :resetWidth="resetWidth"
      :index="0"
      lineWidth="8px"
    >
    </BaseResizeLine>
    <div style="height: 100%; flex: 1">
      <div class="box-item2"></div>
    </div>

    <BaseResizeLine
      :handleMouseDown="handleMouseDown"
      :resetWidth="resetWidth"
      :index="1"
      lineWidth="8px"
    ></BaseResizeLine>
    <BaseResizeBox :ref="arrRef[1]" boxWith="200px" :isResizing="isResizing">
      <div class="box-item3"></div>
    </BaseResizeBox>
  </div>
</template>

<script setup lang="ts">
import BaseResizeBox from './components/BaseResizeBox.vue'
import BaseResizeLine from './components/BaseResizeLine.vue'
import { ref } from 'vue'
import useResize from './hook/useResize'

const arrRef1 = ref()
const arrRef2 = ref()

const { handleMouseDown, resetWidth, isResizing, box, arrRef } = useResize(
  [
    { arrRef: arrRef1, setDefaultWidth: 100 },
    { arrRef: arrRef2, setDefaultWidth: 100 },
  ],
  '300px',
)
</script>

<style scoped>
.box {
  width: calc(100%);
  height: calc(100vh - 110px);
  display: flex;
}
.box-item1 {
  height: 100%;
  background: linear-gradient(45deg, #6a3093, #a044ff, #fda085);
  width: 100%;
}
.box-item2 {
  height: 100%;
  background: linear-gradient(150deg, #ff512f, #dd2476);
  width: 100%;
}
.box-item3 {
  height: 100%;
  width: 100%;
  background: linear-gradient(135deg, #ff9800, #ffc107, #ffeb3b, #cddc39);
}
</style>
