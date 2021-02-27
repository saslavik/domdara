<template>
  <div class="company">
    <div class="company_item" v-for="item in 30" :key="item.title">
      <img src="../assets/img/Image.jpg" alt="">
      <div class="company_row"></div>
      <div class="company_title">Магазин MMZ</div>
      <div class="company_desc">Жидкий силиконовый чехол для телефона</div>
      <div class="company_additionalInfo"></div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.company {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &_item {
    flex: 0 1 204px;
  }
}
</style>
