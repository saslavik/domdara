<template>
  <div id="wrapper">
    <header-component />
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
  components: { HeaderComponent },
};
</script>

<style lang="scss">
#wrapper {
}
</style>
