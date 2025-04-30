<template>
  <div
    @mousedown="doDown"
    @click="doReset"
    class="boxLine"
    :style="{ width: props.lineWidth  }"
  ></div>
</template>

<script setup lang="ts">
const props = defineProps({
  handleMouseDown: {
    type: Function,
    default: () => {}
  },
  resetWidth: {
    type: Function,
    default: () => {}
  },
  index: {
    type: Number,
    require: true
  },
  lineWidth: {
    type: String,
    default: '8px'
  }
})

const doDown = ($event: MouseEvent) => {
  props.handleMouseDown($event, props.index)
}
const doReset = ($event: MouseEvent) => {
  props.resetWidth()
}


</script>
<style scoped>
.boxLine {
  height: 100%;
  background-color: rgb(234, 235, 237);
  cursor: ew-resize;
  opacity: 0;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* 将 group-hover:opacity-100 转换为普通CSS */
.boxLine:hover {
  opacity: 1;
}

/* 将 dark:bg-zinc-800 转换为普通CSS */
@media (prefers-color-scheme: dark) {
  .boxLine {
    background-color: #27272a; /* zinc-800 的颜色值 */
  }
}
</style>
