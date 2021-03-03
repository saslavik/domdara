<template>
  <div class="loadMore"  @click="$emit('items-btn', 8)">
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
    @media screen and (max-width: 768px) {
      font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (768 - 320)));
      height: calc(38px + (60 - 38) * ((100vw - 320px) / (768 - 320)));
      margin: calc(40px + (75 - 40) * ((100vw - 320px) / (768 - 320))) auto;
    }
    &:hover {
      color: #fff;
      background-color: rgba(24, 24, 24, 1);
      border: 2px solid rgba(24, 24, 24, 1);
    }
  }
</style>
