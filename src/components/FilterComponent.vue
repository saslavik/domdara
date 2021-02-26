<template>
  <div class="filter">
    <input type="text" class="find filter_item" placeholder="Поиск">
    <div class="sort">
      <div class="sort_title main_options arrow filter_item">Сортировка</div>
      <div class="sort_body"></div>
    </div>
    <div class="payments">
      <div class="payments_title main_options arrow filter_item">Варианты оплаты</div>
      <div class="payments_body"></div>
    </div>
    <div class="countries options">
      <div class="options_title arrow">Страна</div>
      <div class="countries_body"></div>
    </div>
    <div class="cities options">
      <div class="options_title arrow">Город</div>
      <div class="cities_body"></div>
    </div>
    <div class="area options">
      <div class="options_title arrow">Район</div>
      <div class="area_body"></div>
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
      <div class="catalog_title main_options arrow filter_item">Каталог</div>
      <div class="catalog_body"></div>
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
    };
  },
};
</script>

<style lang="scss" scoped>
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
  cursor: pointer;
  &::after {
    background-color: #fff;
    top: 12px;
    right: 18px;
  }
}
.options {
  padding: 15px;
  &_title {
    border-bottom: 1px solid #BFBFBF;
    padding: 12px 0;
    cursor: pointer;
    &::after {
      background-color: #CFCFCF;
      top: 16px;
      right: 4px;
    }
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
</style>
