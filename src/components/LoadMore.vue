<template>
  <div class="loadMore"  @click="$emit('items-btn', 2)">
    ПОКАЗАТЬ ЕЩЕ
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
  .loadMore {
    margin: 75px auto;
    font-size: 18px;
    font-weight: 500;
    width: 282px;
    height: 60px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    letter-spacing: 0.02em;
    border: 2px solid #04E0E3;
    box-sizing: border-box;
    border-radius: 30px;
    cursor: pointer;
  }
</style>
