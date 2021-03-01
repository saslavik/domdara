<template>
  <div class="company">
    <div class="company_container">
      <!-- <div class="company_item" v-for="item in items" :key="item.title">
        <img src="../assets/img/Company.jpg" alt="">
        <div class="company_row">
          Кэшбэк 20%
          <div class="company_icons">
            <div>
              <img src="../assets/svg/Z.svg" alt=""><img src="../assets/svg/Score.svg" alt="">
            </div>
            <div>
              <img src="../assets/svg/Action.svg" alt="">
            </div>
          </div>
        </div>
        <div class="company_title">Магазин MMZ</div>
        <div class="company_desc">Жидкий силиконовый чехол для телефона</div>
        <div class="company_additionalInfo">
          <div class="additionalInfo_card">
            <img src="../assets/svg/Card.svg" alt="">3958
          </div>
          <div class="additionalInfo_arrow">
            <img src="../assets/svg/Arrow.svg" alt="">2947
          </div>
        </div>
      </div> -->
      <product-item
      v-for="item in items" :key="item.title"
      :img="'Company'"
      :title="'Магазин MMZ'"
      :desc="'Жидкий силиконовый чехол для телефона'"
      :additionalInfo="true"
      />
      <div class="item_filler"></div>
      <div class="item_filler"></div>
    </div>
    <load-more v-on:items-btn="items += $event"/>
  </div>
</template>

<script>
import LoadMore from '@/components/UI/LoadMore.vue';
import ProductItem from '@/components/ProductItem.vue';

export default {
  components: { LoadMore, ProductItem },
  data() {
    return {
      items: 24,
    };
  },
};
</script>

<style lang="scss" scoped>
.company {
  &_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}

</style>
