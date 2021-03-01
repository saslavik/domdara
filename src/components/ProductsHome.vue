<template>
  <div class="products">
    <div class="products_container">
      <!-- <div class="products_item" v-for="item in items" :key="item.title">
        <div class="products_img products_img_new">
          <img src="../assets/img/Product.jpg" alt="">
        </div>
        <div class="products_row">
          Кэшбэк 20%
          <div class="products_icons">
            <div>
              <img src="../assets/svg/Z.svg" alt=""><img src="../assets/svg/Score.svg" alt="">
            </div>
            <div>
              <img src="../assets/svg/Action.svg" alt="">
            </div>
          </div>
        </div>
        <div class="products_title">3 849 ₽</div>
        <div class="products_desc">Силиконовый чехол для телефона</div>
      </div> -->
      <product-item v-for="item in items" :key="item.title"
      :imgNew="true"
      :imgTop="false"
      :img="'Product'"
      :title="'3 849 ₽'"
      :desc="'Силиконовый чехол для телефона'"/>
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
.products {
  width: 100%;
  &_container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
