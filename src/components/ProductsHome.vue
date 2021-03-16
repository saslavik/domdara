<template>
  <div class="products">
    <div class="products_container">
      <!-- единица товаров вызываемая через компанент и передачи ей значения -->
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
