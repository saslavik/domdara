<template>
  <div class="filter">
    <finder/>
    <main-filter/>
    <div class="catalog filter_box">
      <div class="main_options arrow box_item"
      :class="{arrow_active: arrow.catalog}"
      @click='arrow.catalog = !arrow.catalog'>Каталог</div>
      <div class="catalog_end">
        <transition name="fade">
          <div class="filter_body"
          v-show="arrow.catalog"
          :class="{filter_body_active: arrow.catalog}">
            <div class="catalog_item" v-for="item in catalog" :key="item.title">
              <img :src="require(`../assets/svg/catalog/${item.img}.svg`)" alt="">
              <div class="catalog_text">{{ item.title }}</div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Finder from '@/components/Finder.vue';
import MainFilter from '@/components/MainFilter.vue';

export default {
  components: {
    Finder,
    MainFilter,
  },
  data() {
    return {
      arrow: {
        catalog: false,
      },
      catalog: {
        woman: {
          title: 'Женская одежда',
          img: 't-shirt-2-line',
        },
        man: {
          title: 'Мужская одежда',
          img: 'shirt-line',
        },
        gsm: {
          title: 'Мобильные телефоны и аксессуары',
          img: 'smartphone-line',
        },
        baby: {
          title: 'Мать и ребёнок',
          img: 'parent-line',
        },
        auto: {
          title: 'Автомобили и мотоциклы',
          img: 'car-line',
        },
        groccery: {
          title: 'Украшния и часы',
          img: 'time-line',
        },
        pc: {
          title: 'Компьютерная и офисная техника',
          img: 'computer-line',
        },
        baggage: {
          title: 'Багаж и сумки',
          img: 'briefcase-3-line',
        },
        home: {
          title: 'Дом и сад',
          img: 'plant-line',
        },
        electronics: {
          title: 'Электроника',
          img: 'flashlight-line',
        },
        beauty: {
          title: 'Красота и здоровье',
          img: 'empathize-line',
        },
        sport: {
          title: 'Спорт и развлечения',
          img: 'basketball-line',
        },
        shoes: {
          title: 'Обувь',
          img: 'footprint-line',
        },
        light: {
          title: 'Лампы и освещение',
          img: 'keynote-line',
        },
        toys: {
          title: 'Игрушки и хобби',
          img: 'bear-smile-line',
        },
        weddings: {
          title: 'Свадьбы и торжества',
          img: 'open-arm-line',
        },
        furniture: {
          title: 'Мебель',
          img: 'archive-drawer-line',
        },
        components: {
          title: 'Электронные компоненты и принадлежности',
          img: 'battery-2-charge-line',
        },
        food: {
          title: 'Продукты',
          img: 'cake-3-line',
        },
        stationery: {
          title: 'Канцтовары для офиса и дома',
          img: 'pencil-ruler-2-line',
        },
        appliances: {
          title: 'Бытовая техника',
          img: 'fridge-line',
        },
        improvement: {
          title: 'Обустройство дома',
          img: 'home-4-line',
        },
        uniform: {
          title: 'Тематическая одежда и униформа',
          img: 't-shirt-line',
        },
        wigs: {
          title: 'Шиньоны и парики',
          img: 'scissors-line',
        },
        tools: {
          title: 'Инструменты',
          img: 'hammer-line',
        },
        security: {
          title: 'Безопасность и защита',
          img: 'shield-check-line',
        },
        accessories: {
          title: 'Аксессуары для одежды',
          img: 'hand-coin-line',
        },
        digital: {
          title: 'Цифровые товары',
          img: 'bank-card-line',
        },
        online: {
          title: 'Online услуги',
          img: 'global-line',
        },
      },
    };
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
  position: relative;
  @media screen and (max-width: 980px) {
    width: 30%;
  }
  @media screen and (max-width: 576px) {
    width: 45%;
  }
}
.arrow {
  position: relative;
  z-index: 5;
  &::after {
    content: '';
    position: absolute;
    mask: url('../assets/svg/Rectangle.svg') no-repeat;
    mask-size: cover;
    width: 16px;
    height: 16px;
  }
}
.main_options {
  background-color: #E6E6E6;
  line-height: 40px;
  margin-bottom: 14px;
  border-radius: 20px;
  padding: 0 15px;
  cursor: pointer;
  &::after {
    transition: all 0.3s ease 0s;
    background-color: #fff;
    top: 12px;
    right: 18px;
  }
  @media screen and (max-width: 576px) {
    margin-bottom: 0;
  }
}

.filter_body {
  padding: 0 15px;
  max-width: 283px;
  transition: 0.3s linear;
}
.filter_body_active {
    overflow: hidden;
    transition: 0.3s linear;
    z-index: -1;
    height: 100%;
}
.catalog {
  position: relative;
  font-size: 15px;
}
.catalog_item {
  display: flex;
  text-align: center;
  min-height: 28px;

  img {
    width: 18px;
    height: 18px;
    margin: auto 0;
  }
  .catalog_text {
    padding-left: 12px;
    text-align: left;
    display: flex;
    margin: auto 0;
  }
}
.catalog_end {
  overflow: hidden;
  position: absolute;
  z-index: 3;
  background-color: #fff;
}
.box_item {
  @media screen and (max-width: 980px) {
    background-color: #fff;
    cursor: pointer;
    &::after {
      transition: all 0.3s ease 0s;
      background-color: #CFCFCF;
      top: 12px;
      right: 4px;
    }
  }
}
.arrow_active {
  color: #7141F0;
  transition: all 0.3s ease 0s;
  &::after {
    transform: rotate(90deg);
    background-color: #7141F0;
    transition: all 0.3s ease 0s;
  }
}
.fade-enter, .fade-leave-to {
  transform: translateY(-100%);
}

.fade-enter-to, .fade-leave {
  transform: translateY(0);
}
</style>
