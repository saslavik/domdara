<template>
  <div class="filter_content filter_box">
    <!-- кнопка выпадающего меню фильтры -->
    <div class="filter_item filter_top category arrow"
    :class="{filter_top_active: filter}"
    @click="$emit('filter')">Фильтры</div>
    <!-- список фильтров -->
    <div class="filter_bottom"
    :class="{filter_bottom_active: filter}">
      <div class="bottom_title">
        фильтры <span @click="$emit('filter')">✕</span></div>
      <div class="filter_body"
      v-show="filter"
      :class="{filter_body_active: filter}">
      <!-- Сортировка -->
        <div class="sort filter_item">
          <div class="line_grey arrow"
          :class="{arrow_active: arrow.sort}"
          @click='arrow.sort = !arrow.sort'>Сортировка</div>
          <div class="item_end"
          :class="{item_end_active: arrow.sort}">
              <div class="filter_body">
                <div class="fitler_child" v-for="item in filterList.sort" :key="item.value"
                @click="filterList.sortValue = item.value"
                :class="{'fitler_child_active': item.value === filterList.sortValue}">
                  <input :id='item.value' type="radio" name="sort" :value="item.value" @click.stop
                  class="fitler_child fitler_child_active" v-model="filterList.sortValue" hidden>
                  <label :for="item.value">{{item.name}}</label>
                </div>
              </div>
          </div>
        </div >
        <!-- Варианты оплат -->
        <div class="payments filter_item">
          <div class="line_grey arrow"
          :class="{arrow_active: arrow.payments}"
          @click='arrow.payments = !arrow.payments'
          >Варианты оплаты</div>
          <div class="item_end"
          :class="{item_end_active: arrow.payments}">
            <div class="filter_body">
              <div class="fitler_child" v-for="item in filterList.payments" :key="item.value"
              @click="filterList.paymentsValue = item.value"
              :class="{'fitler_child_active': item.value === filterList.paymentsValue}">
                <input :id='item.value' type="radio" name="payments" :value="item.value"
                @click.stop class="fitler_child fitler_child_active"
                v-model="filterList.paymentsValue" hidden>
                <label :for="item.value">{{item.name}}</label>
              </div>
            </div>
          </div>
        </div>
        <!-- Страны -->
        <div class="countries line_white filter_item">
          <div class="line_white_title arrow"
          :class="{arrow_active: arrow.countries}"
          @click='arrow.countries = !arrow.countries'>Страна</div>
            <div class="item_end"
            :class="{item_end_active: arrow.countries}">
              <div class="filter_body"
              v-show="arrow.countries">
              <finder />
              <div class="fitler_child" v-for="item in filterList.countries" :key="item.value"
              @click="filterList.countriesValue = item.value"
              :class="{'fitler_child_active': item.value === filterList.countriesValue}">
                <input :id='item.value' type="radio" name="countries" :value="item.value"
                @click.stop class="fitler_child fitler_child_active"
                v-model="filterList.countriesValue" hidden>
                <label :for="item.value">{{item.name}}</label>
              </div>
              </div>
          </div>
        </div>
        <!-- Города -->
        <div class="cities line_white filter_item">
          <div class="line_white_title arrow"
          :class="{arrow_active: arrow.cities}"
          @click='arrow.cities = !arrow.cities'>Город</div>
          <div class="item_end"
          :class="{item_end_active: arrow.cities}">
            <div class="filter_body">
              <finder />
              <div class="fitler_child" v-for="item in filterList.cities" :key="item.value"
              @click="filterList.citiesValue = item.value"
              :class="{'fitler_child_active': item.value === filterList.citiesValue}">
                <input :id='item.value' type="radio" name="cities" :value="item.value" @click.stop
                class="fitler_child fitler_child_active" v-model="filterList.citiesValue" hidden>
                <label :for="item.value">{{item.name}}</label>
              </div>
              <p class="fitler_child">Тагил</p>
            </div>
          </div>
        </div>
        <!-- Районы -->
        <div class="area line_white filter_item">
          <div class="line_white_title arrow"
          :class="{arrow_active: arrow.area}"
          @click='arrow.area = !arrow.area'>Район</div>
          <div class="item_end"
          :class="{item_end_active: arrow.area}">
            <div class="filter_body">
              <div class="fitler_child" v-for="item in filterList.area" :key="item.value"
              @click="filterList.areaValue = item.value"
              :class="{'fitler_child_active': item.value === filterList.areaValue}">
                <input :id='item.value' type="radio" name="area" :value="item.value" @click.stop
                class="fitler_child fitler_child_active" v-model="filterList.areaValue" hidden>
                <label :for="item.value">{{item.name}}</label>
              </div>
            </div>
          </div>
        </div>
        <!-- радиус поиска -->
        <div class="distance filter_item">
          Радиус поиска
          <div class="distance_row">
            <div class="distance_input">
              <input type="text"
              v-model="distance[0]"
              v-bind:style="{width: width.from + 5 + 'px'}">
              <div class="input_fake_from">{{ distance[0] }}</div>м
            </div>
            <span>—</span>
            <div class="distance_input">
              <input type="text"
              v-model="distance[1]"
              v-bind:style="{width: width.to + 5 + 'px'}">
              <div class="input_fake_to">{{ distance[1] }}</div>м
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
        <!-- Чекбоксы -->
        <div class="advanced filter_item">
          <div v-for="item in advanced" :key="item.title"
          class="checkbox"
          :class="{advanced_active: item.value}"
          @click="item.value = !item.value">{{ item.title }}</div>
        </div>
      </div>
      <!-- кнопки применить и отмены -->
      <div class="row">
        <div class="cancel" @click="cancel()">Сбросить</div>
        <div class="apply" @click="apply()">Показать</div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component';
import Finder from '@/components/UI/Finder.vue';

export default {
  props: ['filter'],
  components: {
    VueSlider,
    Finder,
  },
  data() {
    return {
      // Радиус поиска
      distance: [1000, 25000],
      // список фильтров и их данных
      filterList: {
        sort: [
          {
            name: 'По умолчанию',
            value: 'default',
          },
          {
            name: 'Новые',
            value: 'new',
          },
          {
            name: 'Популярность',
            value: 'popular',
          },
          {
            name: 'Алфавит',
            value: 'abc',
          },
          {
            name: 'Рейтинг',
            value: 'rating',
          },
          {
            name: 'По возрастанию кэшбэка',
            value: 'minToMax',
          },
          {
            name: 'С доставкой',
            value: 'delivery',
          },
          {
            name: 'По убыванию кэшбэка',
            value: 'maxToMin',
          },
        ],
        sortValue: 'default',
        payments: [
          {
            name: 'Все',
            value: 'all',
          },
          {
            name: 'EXO',
            value: 'eho',
          },
          {
            name: 'Картой ДОМДАРА',
            value: 'domdara',
          },
          {
            name: 'Наличными или картой',
            value: 'cash',
          },
        ],
        paymentsValue: 'all',
        countries: [
          {
            name: 'Беларусь',
            value: 'bel',
          },
          {
            name: 'Россия',
            value: 'rus',
          },
          {
            name: 'Украина',
            value: 'ukr',
          },
        ],
        countriesValue: 'rus',
        cities: [
          {
            name: 'Москва',
            value: 'moscow',
          },
          {
            name: 'Ростов на дону',
            value: 'rostov',
          },
          {
            name: 'Тагил',
            value: 'tagil',
          },
          {
            name: 'Уфа',
            value: 'ufa',
          },
        ],
        citiesValue: null,
        area: [
          {
            name: '13 район',
            value: '13',
          },
          {
            name: '25 район',
            value: '25',
          },
        ],
        areaValue: null,
      },

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
      // Данные используемые для активации css классов
      arrow: {
        sort: false,
        payments: false,
        countries: false,
        cities: false,
        area: false,
      },
      // ширина по дефаулту инпутов радиуса
      width: {
        from: 35,
        to: 44,
      },
    };
  },
  watch: {
    // отслеживаем изменении данных в инпуте (радиус поиска)
    distance: {
      handler(val, oldVal) {
        this.inputResize();
        return (val, oldVal);
      },
      deep: true,
    },
  },
  methods: {
    // при изменении данных в инпуте (радиус поиска) менять ширину инпута на необходимую
    inputResize() {
      setTimeout(() => {
        this.width.from = this.$el.querySelector('.input_fake_from').clientWidth;
        this.width.to = this.$el.querySelector('.input_fake_to').clientWidth;
      }, 0);
    },
    // сворачиваем фильтры при переходе на мобильный режим
    closeMobile() {
      if (window.innerWidth <= 980) {
        window.scrollTo(0, 0);
        this.$emit('filter');
      }
    },
    // кнопка сброса всех данных в фильтре
    cancel() {
      /* eslint-disable no-param-reassign */
      Object.values(this.advanced).forEach((el) => { el.value = false; });
      this.distance = [1000, 25000];
      this.filterList.sortValue = 'default';
      this.filterList.paymentsValue = 'all';
      this.filterList.countriesValue = null;
      this.filterList.citiesValue = null;
      this.filterList.areaValue = null;
    },
    // кнопка применить в фильтрах
    apply() {
      if (window.innerWidth <= 980) {
        window.scrollTo(0, 0);
        this.$emit('filter');
      }
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
  max-height: 0;
  transition: all 0.3s ease 0s;
  &_active {
    max-height: 1000px;
  }
}
.bottom_title {
  display: none;
  @media screen and (max-width: 576px) {
    display: flex;
    margin: 15px;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    text-transform: uppercase;
  }
}
.row {
  display: none;
  @media screen and (max-width: 576px) {
    display: flex;
    justify-content: space-around;
    margin: 15px;
    .apply {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 120px;
      height: 40px;
      color: #fff;
      border-radius: 20px;
      background-color: #7141F0;
      border: 1px solid #7141F0;
      &:hover {
        background-color: #181818;
        border: 1px solid #181818;
      }
    }
    .cancel {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 120px;
      height: 40px;
      color: #181818;
      border-radius: 20px;
      border: 1px solid #181818;
      &:hover {
        color: #fff;
        background-color: #181818;
        border: 1px solid #181818;
      }
    }
  }
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
  input {
    border: none;
  }
  &_input {
    width: 111px;
    height: 43px;
    text-align: center;
    border: 1px solid #DCDFE6;
    border-radius: 30px;
    justify-content: center;
    box-sizing:border-box;
    .input_fake_to, .input_fake_from {
      position: absolute;
      top: -200vh;
      left: -300vh;
    }
    @media screen and (max-width: 980px) {
      width: 45%;
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
  max-height: 0;
  transition: all 0.3s ease;
  &_active {
    max-height: 10000px;
  }
  @media screen and (max-width: 980px) {
    position: absolute;
  }
  @media screen and (max-width: 576px) {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    padding: 0 15px;
    max-width: 100%;
    &_active {
      z-index: 9;
      top: 0;
      left: 0;
      overflow: scroll;
      background-attachment: fixed, fixed;
    }
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
  &:hover {
    color: #7141F0;
    &::after {
      background-color: #7141F0;
    }
  }
}
// белая строка фильтра
.line_white {
  margin: 15px;
  border-bottom: 1px solid #BFBFBF;
  &_title {
    padding: 12px 0;
    background-color: #fff;
    cursor: pointer;
    &::after {
      transition: all 0.3s ease 0s;
      background-color: #CFCFCF;
      top: 16px;
      right: 4px;
    }
    &:hover {
    color: #7141F0;
    &::after {
      background-color: #7141F0;
    }
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
  .fitler_child {
    margin-left: 50px;
    margin-bottom: 12px;
    cursor: pointer;
    &:hover {
      color: #7141F0;
    }
    label {
      cursor: pointer;
    }
    &_active {
      color: #7141F0;
      position: relative;
      &::before {
        content: '';
        background-color: #7141F0;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        position: absolute;
        left: -18px;
        top: calc(50% - 3px);
      }
    }
  }
}
</style>
