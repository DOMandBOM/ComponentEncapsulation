<template>
  <div
    class="scroll-container"
    @mousedown="startDrag"
    @mousemove="onDrag"
    @mouseup="stopDrag"
    @mouseleave="stopDrag"
  >
    <div class="scroll-content" ref="scrollContent">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const scrollContent = ref<HTMLDivElement | null>(null)

// 判断鼠标是否按下抬起
let isDragging = false
//
let startX = 0
let scrollLeft = 0

// isDragging 当用户鼠标按下，isDragging设置为真，为后面鼠标移动事件做铺垫
const startDrag = (e: MouseEvent) => {
  if (!scrollContent.value) return
  isDragging = true
  startX = e.pageX - scrollContent.value.offsetLeft
  scrollLeft = scrollContent.value.scrollLeft //可见内容与实际内容距离
}

const onDrag = (e: MouseEvent) => {
  if (!isDragging || !scrollContent.value) return
  e.preventDefault()
  const x = e.pageX - scrollContent.value.offsetLeft
  const walk = (x - startX) * 1 // 滚动速度
  scrollContent.value.scrollLeft = scrollLeft - walk
}

// 鼠标事件抬起 isDragging设为false,让鼠标移动事件失效
const stopDrag = () => {
  isDragging = false
}
</script>

<style scoped>
.scroll-container {
  display: flex;
  align-items: center;
  overflow: hidden;
  user-select: none; /* 防止拖动时选择文本 */
  background: linear-gradient(45deg, #3f51b5, #673ab7, #9c27b0, #e91e63);
  /* height: 500px; */
}

.scroll-content {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  cursor: grab;
  width: 100%; /* 根据需要调整宽度*/
}

.scroll-content:active {
  cursor: grabbing;
}

/* 隐藏滚动条 这样用户体验更好 */
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
</style>
