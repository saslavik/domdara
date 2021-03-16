<template>
  <div class="filter">
    <!-- сайд бар с фильтрами и поиском -->
    <finder/> <!-- сам поиск -->
    <!-- кнопки добавляются при мобильной версии -->
    <div class="shopingCart">
      <div class="heart">
        <div class="heart_img"></div>
      </div>
      <div class="cart">
        <div class="cart_img"></div>
      </div>
    </div>
    <!-- компоненты фильтр и каталог -->
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
      // данные фильтр и каталог нужны для того, что бы опеределять если значения свернуты
      filter: false,
      catalog: false,
      screenMobileWidth: null,
    };
  },
  // следим за шириной экрана
  mounted() {
    this.screenMobileWidth = window.innerWidth > 980;
    window.addEventListener('resize', this.checkResize);
  },
  // проверка ширины экрана для в случае если ширина под мобильную версию - сворачивать фильтра
  watch: {
    screenMobileWidth: {
      handler(val) {
        this.onResize();
        return val;
      },
    },
  },
  methods: {
    // окно фильтров
    filterShow() {
      this.filter = !this.filter;
      this.catalog = false;
      if (window.innerWidth <= 576) document.body.style.position = this.filter || this.catalog ? 'fixed' : 'relative';
    },
    // окно каталога
    catalogShow() {
      this.catalog = !this.catalog;
      if (window.innerWidth <= 980) this.filter = false;
      if (window.innerWidth <= 576) document.body.style.position = this.filter || this.catalog ? 'fixed' : 'relative';
    },
    // проверка ширины экрана
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
