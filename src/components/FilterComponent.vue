<template>
  <div class="filter">
    <finder/>
    <div class="shopingCart">
      <div class="heart">
        <div class="heart_img"></div>
      </div>
      <div class="cart">
        <div class="cart_img"></div>
      </div>
    </div>
    <main-filter :filter="filter" @filter="filterShow()"/>
    <catalog-filter :catalog="catalog" @catalog="catalogShow()"/>
  </div>
</template>

<script>
import Finder from '@/components/UI/Finder.vue';
import MainFilter from '@/components/MainFilter.vue';
import CatalogFilter from '@/components/CatalogFilter.vue';

export default {
  components: {
    Finder,
    MainFilter,
    CatalogFilter,
  },
  data() {
    return {
      filter: false,
      catalog: false,
      screenMobileWidth: null,
    };
  },
  mounted() {
    this.screenMobileWidth = window.innerWidth > 980;
    window.addEventListener('resize', this.checkResize);
  },
  watch: {
    screenMobileWidth: {
      handler(val) {
        this.onResize();
        return val;
      },
    },
  },
  methods: {
    filterShow() {
      this.filter = !this.filter;
      this.catalog = false;
    },
    catalogShow() {
      this.catalog = !this.catalog;
      if (window.innerWidth <= 980) this.filter = false;
    },
    checkResize() {
      this.screenMobileWidth = window.innerWidth > 980;
    },
    onResize() {
      this.filter = (window.innerWidth) > 980;
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  flex-direction: column;
  margin-right: 25px;
  margin-top: 89px;
  transition: all 0.3s ease 0s;
  @media screen and (max-width: 980px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
    margin-right: 0;
  }
  @media screen and (max-width: 768px) {
    justify-content: start;
  }
}

.filter_box {
  width: 283px;
  @media screen and (max-width: 980px) {
    width: 30%;
  }
  @media screen and (max-width: 576px) {
    width: 45%;
  }
}
// кнопки возсле поиска в мобайл версии
.shopingCart {
  display: none;
  fill: none;
  align-items: center;
  margin-right: 0;
  margin-left: auto;
  @media screen and (max-width: 576px) {
    display: flex;
  }
  .heart_img, .cart_img {
    mask-size: cover;
    width: 18px;
    height: 18px;
    background-color: #BDBDBD;
    &:hover {
      background-color: #7141F0;
    }
  }
  .heart_img {
    mask: url(../assets/svg/Heart.svg) no-repeat;
    margin: 0 17px;
  }
  .cart_img {
    mask: url(../assets/svg/Shopping-bag.svg) no-repeat;
  }
}

</style>
