<template>
  <img alt="Vue logo" src="../../assets/vue.svg" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <span class="text">样式test</span>
  <van-cell is-link title="支持rem适配,375和750设计稿">
		<van-icon name="checked" color="#07c160" size="20" />
	</van-cell>
</template>
<script>
  import { defineComponent } from 'vue';
  import HelloWorld from '../../components/HelloWorld.vue';
  export default defineComponent({
    name: 'Home',
    components: {
      HelloWorld
    }
  });
</script>
<style  lang="scss" scoped>
@import './index.scss';
</style>