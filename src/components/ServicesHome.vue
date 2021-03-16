<template>
  <div class="company">
    <div class="company_container">
      <!-- единица услуг вызываемая через компанент и передачи ей значения -->
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
