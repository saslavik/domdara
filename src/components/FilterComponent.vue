<template>
  <div class="filter">
    <input type="text" class="find filter_item" placeholder="Поиск">
    <div class="sort">
      <div class="main_options arrow filter_item"
      :class="{arrow_active: arrow.sort}"
      @click='arrow.sort = !arrow.sort'>Сортировка</div>
      <div class="filter_body"
      :class="{filter_body_active: arrow.sort}"
      >asdasd <br><br><br><br>asdsdfg</div>
    </div >
    <div class="payments">
      <div class="main_options arrow filter_item"
      :class="{arrow_active: arrow.payments}"
      @click='arrow.payments = !arrow.payments'
      >Варианты оплаты</div>
      <div class="filter_body"
      :class="{filter_body_active: arrow.payments}"></div>
    </div>
    <div class="countries options">
      <div class="options_title arrow"
      :class="{arrow_active: arrow.countries}"
      @click='arrow.countries = !arrow.countries'>Страна</div>
      <div class="filter_body"
      :class="{filter_body_active: arrow.countries}"></div>
    </div>
    <div class="cities options">
      <div class="options_title arrow"
      :class="{arrow_active: arrow.cities}"
      @click='arrow.cities = !arrow.cities'>Город</div>
      <div class="filter_body"
      :class="{filter_body_active: arrow.cities}"></div>
    </div>
    <div class="area options">
      <div class="options_title arrow"
      :class="{arrow_active: arrow.area}"
      @click='arrow.area = !arrow.area'>Район</div>
      <div class="filter_body"
      :class="{filter_body_active: arrow.area}"></div>
    </div>
    <div class="distance">
      Радиус поиска
      <div class="distance_inputs">
        <input v-model="distance[0]">
        <span>—</span>
        <input v-model="distance[1]">
      </div>
      <vue-slider
      v-model="distance"
      :min='1000'
      :max='25000'
      :min-range='1000'
      :process-dragable="true"
      tooltip="'none'">
      </vue-slider>
    </div>
    <div class="advanced">
      <div v-for="item in advanced" :key="item.title"
      class="checkbox"
      :class="{advanced_active: item.value}"
      @click="item.value = !item.value">{{ item.title }}</div>
    </div>
    <div class="catalog">
      <div class="main_options arrow filter_item"
      :class="{arrow_active: arrow.catalog}"
      @click='arrow.catalog = !arrow.catalog'>Каталог</div>
      <div class="filter_body"
      :class="{filter_body_active: arrow.catalog}">
        <div class="catalog_item" v-for="item in catalog" :key="item.title">
          <img :src="require(`../assets/svg/catalog/${item.img}.svg`)" alt="">
          <div class="catalog_text">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component';

export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      // Радиус поиска
      distance: [1000, 25000],
      // Чекбоксы
      advanced: {
        rating: {
          title: 'По рейтингу',
          value: false,
        },
        online: {
          title: 'Только онлайн магазины',
          value: false,
        },
        offline: {
          title: 'Только оффлайн магазины',
          value: false,
        },
        week: {
          title: 'Топы за неделю',
          value: false,
        },
        month: {
          title: 'Топы за месяц',
          value: false,
        },
        cart: {
          title: 'По количеству карт',
          value: false,
        },
      },
      arrow: {
        sort: false,
        payments: false,
        countries: false,
        cities: false,
        area: false,
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
  transition: all 0.3s ease 0s;
}
.filter_item {
  width: 283px;
  height: 40px;
  font-size: 15px;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 0 15px;
}
.find {
  background: #FFFFFF;
  border: 1px solid #BFBFBF;
  background: url(../assets/svg/Search.svg) no-repeat 248px 10px;
  background-size: auto 50%;
  margin-bottom: 45px;
  &::placeholder {
    color: #181818;
  }
}
.arrow {
  position: relative;
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
  transition: all 0.3s ease 0s;
  cursor: pointer;
  &::after {
    transition: all 0.3s ease 0s;
    background-color: #fff;
    top: 12px;
    right: 18px;
  }
}
.options {
  padding: 15px;
  transition: all 0.3s ease 0s;
  &_title {
    border-bottom: 1px solid #BFBFBF;
    padding: 12px 0;
    cursor: pointer;
    &::after {
      transition: all 0.3s ease 0s;
      background-color: #CFCFCF;
      top: 16px;
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
.distance {
  padding: 15px;
  margin-top: 45px;
  &_inputs {
    display: flex;
    justify-content: space-between;
    text-align: center;
    line-height: 43px;
    margin: 16px 0 20px 0;
    span {
      color: #C4C4C4;
    }
  }
  input {
    width: 111px;
    height: 43px;
    text-align: center;
    border-radius: 30px;
  }
}

.advanced {
  padding: 15px;
  .checkbox {
    cursor: pointer;
    padding: 0 0 0 28px;
    line-height: 28px;
    position: relative;
    transition: all 0.3s ease 0s;
    input{
      display: none;
    }
    &::before {
      content: '';
      width: 15px;
      height: 15px;
      border-radius: 3px;
      border: 1px solid #7141F0;
      position: absolute;
      left: 0;
      top: 6px;
    }
    &.advanced_active {
      &::before {
        content: '';
        background-image: url('../assets/svg/Checked.svg');
        background-repeat: no-repeat;
        background-color: #7141F0;
        background-position: center;
      }
    }
  }
}
.filter_body {
  padding: 0 15px;
    max-height: 0;
    transition: max-height 0.3s ease-out;
    overflow: hidden;
}
.filter_body_active {
  max-height: 500px;
    transition: max-height 0.3s ease-in;
}
.catalog_item {
  display: flex;
  text-align: center;
  min-height: 28px;
  width: 283px;
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
</style>
