<template>
  <div class="app-container">
    <header class="header">
      <div class="logo-container">
        <h1 class="title gradient-text">常用组件</h1>
      </div>
      <nav class="nav-menu">
        <RouterLink to="/" class="nav-item gradient-text-title">首页</RouterLink>
        <RouterLink to="/scroll-view" class="nav-item gradient-text-title">左右滚动</RouterLink>
        <RouterLink to="/stretch-view" class="nav-item gradient-text-title">页面拉伸</RouterLink>
      </nav>
    </header>

    <main class="main-content">
      <div class="content-wrapper">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 10px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 10px;
}

::-webkit-scrollbar-track {
  background: transparent !important;
  /* 滚动条轨道背景 */
}

::-webkit-scrollbar-thumb {
  background-color: #edeef2 !important;
  /* 滚动条颜色 */
  border-radius: 4px !important;
  /* 滚动条圆角 */
}

::-webkit-scrollbar-thumb:hover {
  background-color: #6b6d6f !important;
  /* 悬停时颜色 */
}
</style>

<style scoped>
/* 核心渐变样式（4浏览器兼容方案） */
.gradient-text {
  /* 标准语法（未来-proof） */
  background: linear-gradient(135deg, #2b6cb0, #4fd1c5);

  /* WebKit内核（Chrome/Safari） */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* Firefox（需浏览器支持，新版本默认开启） */
  background-clip: text;
  color: transparent;
}

/* 核心渐变样式（4浏览器兼容方案） */
.gradient-text-title {
  /* 标准语法（未来-proof） */
  background: linear-gradient(135deg, #ed64a6, #f6ad55);
  /* WebKit内核（Chrome/Safari） */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* Firefox（需浏览器支持，新版本默认开启） */
  background-clip: text;
  color: transparent;
}

.app-container {
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo {
  display: block;
}

.title {
  font-size: 1.5rem;
  color: #2c3e50;
  margin: 0;
}

.nav-menu {
  display: flex;
  gap: 2rem;
}

.nav-item {
  color: #2c3e50;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-item:hover {
  background-color: #f5f5f5;
}

.nav-item.router-link-active {
  color: #42b983;
  font-weight: bold;
}

.main-content {
  margin-top: 80px;
  /* padding: 2rem; */
  flex: 1;
  display: flex;
  justify-content: center;
}

.content-wrapper {
  width: 100%;
  margin: 0 auto;
}
</style>
