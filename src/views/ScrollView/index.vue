<template>
  <div class="box">
    <BaseScrollBox>
      <div class="scroll-item" v-for="item in scrollArr" :key="item.id">
        <div class="item">
          {{ item.name }}
        </div>
      </div>
    </BaseScrollBox>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseScrollBox from './components/BaseScrollBox.vue'
const scrollArr = ref<{ id: number; name: string }[]>([])

for (let index = 0; index < 100; index++) {
  scrollArr.value.push({
    id: index,
    name: `盒子${index}`,
  })
}

defineOptions({
  name: 'ScrollView',
})  

</script>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 110px);
  background-color: #fff;
}
.scroll-item {
  /* min-width: 100px; */
  /* margin: 0 10px; */
  padding: 10px;
  text-align: center;
  white-space: nowrap;
  /* height: 500px; */
  width: 200px;
  height: 200px;
}

.item {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ff9800, #ffc107, #ffeb3b, #cddc39);
}
</style>
