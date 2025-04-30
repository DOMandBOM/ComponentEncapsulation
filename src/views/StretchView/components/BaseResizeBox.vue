<template>
  <div
    ref="resizeBoxRef"
    :class="`box ${props.isResizing && 'isResizing'}`"
    :style="{ width: props.boxWith }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  isResizing: {
    type: Boolean,
    require: true
  },
  boxWith: {
    type: String,
    default: '300px'
  }
})

const resizeBoxRef = ref()

defineExpose({
  resizeBoxRef
})
</script>
<style scoped>
.box {
  height: 100%;
  background-color: #ffffff;
  /* padding: 10px; */
}
.isResizing {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  transition-property: all;
}
</style>
