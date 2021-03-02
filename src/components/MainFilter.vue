<template>
  <div class="filter_content filter_box">
    <!-- кнопка выпадающего меню фильтры -->
    <div class="filter_item filter_top category arrow"
    :class="{filter_top_active: arrow.filtres}"
    @click="arrow.filtres = !arrow.filtres">Фильтры</div>
    <!-- список фильтров -->
    <div class="filter_bottom">
      <transition name="fade">
        <div class="filter_body"
        v-show="arrow.filtres"
        :class="{filter_body_active: arrow.filtres}">
          <div class="sort filter_item">
            <div class="line_grey arrow"
            :class="{arrow_active: arrow.sort}"
            @click='arrow.sort = !arrow.sort'>Сортировка</div>
            <div class="item_end">
              <transition name="fade">
                <div class="filter_body"
                v-show="arrow.sort"
                :class="{filter_body_active: arrow.sort}"
                >
                test <br>test <br>test <br>test <br></div>
              </transition>
            </div>
          </div >
          <div class="payments filter_item">
            <div class="line_grey arrow"
            :class="{arrow_active: arrow.payments}"
            @click='arrow.payments = !arrow.payments'
            >Варианты оплаты</div>
            <div class="item_end">
              <transition name="fade">
              <div class="filter_body"
              v-show="arrow.payments"
              :class="{filter_body_active: arrow.payments}">
              test <br>test <br>test <br>test <br></div>
            </transition>
            </div>
          </div>
          <div class="countries line_white filter_item">
            <div class="line_white_title arrow"
            :class="{arrow_active: arrow.countries}"
            @click='arrow.countries = !arrow.countries'>Страна</div>
            <div class="item_end">
              <transition name="fade">
                <div class="filter_body"
                v-show="arrow.countries"
                :class="{filter_body_active: arrow.countries}">
                item1 <br>
                item2 <br>
                item3 <br>
                item4
                </div>
              </transition>
            </div>
          </div>
          <div class="cities line_white filter_item">
            <div class="line_white_title arrow"
            :class="{arrow_active: arrow.cities}"
            @click='arrow.cities = !arrow.cities'>Город</div>
            <div class="item_end">
              <transition name="fade">
                <div class="filter_body"
                v-show="arrow.cities"
                :class="{filter_body_active: arrow.cities}">
                test <br>test <br>test <br>test<br></div>
              </transition>
            </div>
          </div>
          <div class="area line_white filter_item">
            <div class="line_white_title arrow"
            :class="{arrow_active: arrow.area}"
            @click='arrow.area = !arrow.area'>Район</div>
            <div class="item_end">
              <transition name="fade">
                <div class="filter_body"
                v-show="arrow.area"
                :class="{filter_body_active: arrow.area}">
                test <br>test <br>test <br>test <br></div>
              </transition>
            </div>
          </div>
          <div class="distance filter_item">
            Радиус поиска
            <div class="distance_row">
              <div class="distance_input">
                <input type="text"
                v-model="distance[0]"
                v-bind:style="{width: width.from + 5 + 'px'}">
                <div class="input_fake_from">{{ distance[0] }}</div>
                 м
              </div>
              <span>—</span>
              <div class="distance_input">
                <input type="text"
                v-model="distance[1]"
                v-bind:style="{width: width.to + 5 + 'px'}">
                <div class="input_fake_to">{{ distance[1] }}</div>
                 м
              </div>
            </div>
            <vue-slider
            v-model="distance"
            :min='1000'
            :max='25000'
            :min-range='1000'
            :process-dragable="true"
            :tooltip="'none'">
            </vue-slider>
          </div>
          <div class="advanced filter_item">
            <div v-for="item in advanced" :key="item.title"
            class="checkbox"
            :class="{advanced_active: item.value}"
            @click="item.value = !item.value">{{ item.title }}</div>
          </div>
        </div>
      </transition>
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
      calc: 30,
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
        filtres: false,
        sort: false,
        payments: false,
        countries: false,
        cities: false,
        area: false,
      },
      width: {
        from: null,
        to: null,
      },
    };
  },
  mounted() {
    this.arrow.filtres = (window.innerWidth) > 980;
    window.addEventListener('resize', this.onResize);
  },
  // watch: {
  //   distance: {
  //     handler(val, oldVal) {
  //       this.inputResize();
  //       return (val, oldVal);
  //     },
  //     deep: true,
  //   },
  // },
  methods: {
    onResize() {
      this.arrow.filtres = (window.innerWidth) > 980;
    },
    inputResize() {
      this.width.from = this.$el.querySelector('.input_fake_from').clientWidth;
      this.width.to = this.$el.querySelector('.input_fake_to').clientWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
// стрелка справа от списка
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
.item_end {
  overflow: hidden;
}
// радиус поиска
.distance {
  padding: 15px;
  margin-top: 45px;
  &_row {
    display: flex;
    justify-content: space-between;
    text-align: center;
    line-height: 43px;
    margin: 16px 0 20px 0;
    span {
      color: #C4C4C4;
    }
  }
  &_input {
    width: 111px;
    height: 43px;
    text-align: center;
    border: 1px solid #DCDFE6;
    border-radius: 30px;
    justify-content: center;
    box-sizing:border-box;
    input {
      // width: 60%;
      // box-sizing:border-box;
    }
    .input_fake_to, .input_fake_from {
      position: absolute;
    }
    @media screen and (max-width: 980px) {
      width: 80px;
    }
  }
}
// чекбоксы
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
// Скрывающееся меню фильтров в мобайл версии
.filter_bottom {
  background-color: #fff;
  z-index: 5;
  overflow: hidden;
  @media screen and (max-width: 980px) {
    position: absolute;
  }
  @media screen and (max-width: 576px) {
    width: 100vh;
  }
}
.filter_item {
  font-size: 15px;
  box-sizing: border-box;
}
// серая строка фильтра
.line_grey {
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
}
// белая строка фильтра
.line_white {
  margin: 15px;
  &_title {
    border-bottom: 1px solid #BFBFBF;
    padding: 12px 0;
    background-color: #fff;
    cursor: pointer;
    &::after {
      transition: all 0.3s ease 0s;
      background-color: #CFCFCF;
      top: 16px;
      right: 4px;
    }
  }
}
// Кнопка для выпаданию фильтров
.filter_top {
  padding: 0 15px;
  margin-bottom: 14px;
  display: none;
  line-height: 40px;
  @media screen and (max-width: 980px) {
    display: block;
    background-color: #fff;
    cursor: pointer;
    &::after {
      transition: all 0.3s ease 0s;
      background-color: #CFCFCF;
      width: 9px;
      height: 9px;
      top: 15px;
      transform: rotate(90deg);
      margin-left: 9px;
    }
    &_active {
      color: #7141F0;
      transition: all 0.3s ease 0s;
      &::after {
        transform: rotate(90deg);
        background-color: #7141F0;
        transition: all 0.3s ease 0s;
        transform: rotate(-90deg);
      }
    }
  }
  @media screen and (max-width: 576px) {
    margin-bottom: 0;
  }
}
// стрелка при выборе строки фильтра
.arrow_active {
  color: #7141F0;
  transition: all 0.3s ease 0s;
  &::after {
    transform: rotate(90deg);
    background-color: #7141F0;
    transition: all 0.3s ease 0s;
    @media screen and (max-width: 980px) {
      transform: rotate(90deg);
    }
  }
}

.filter_content {
  @media screen and (min-width: 981px) {
    display: block;
  }
}
// выпадающее меню каждой категории фильтров
.filter_body {
  transition: 0.3s linear;
}
.filter_body_active {
  overflow: hidden;
  transition: 0.3s linear;
  z-index: -1;
  height: 100%;
  padding-bottom: 10px;
  max-width: 283px;
}
// анимация
.fade-enter, .fade-leave-to {
  transform: translateY(-100%);
}

.fade-enter-to, .fade-leave {
  transform: translateY(0);
}
</style>
