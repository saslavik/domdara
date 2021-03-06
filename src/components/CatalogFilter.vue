<template>
  <div class="catalog filter_box">
    <div class="line_grey arrow catalog_top"
    :class="{arrow_active: catalogShow}"
    @click="$emit('catalog')">Каталог</div>
    <div class="catalog_bottom"
    :class="{catalog_bottom_active: catalogShow}">
        <div class="filter_body"
        v-show="catalogShow"
        :class="{filter_body_active: catalogShow}">
          <div class="catalog_item"
          v-for="item in catalogList" :key="item.title">
            <div class="catalog_item_top arrow"
            :class="{catalog_item_top_active: item.childActive}"
            @click="item.childActive = !item.childActive">
              <img :src="require(`../assets/svg/catalog/${item.img}.svg`)" alt="">
              <div class="catalog_text">{{ item.title }}</div>
            </div>
            <div class="catalog_item_bottom"
            :class="{catalog_item_bottom_active: item.childActive}">
              <p class="catalog_child" v-for="child in item.child" :key="child">{{ child }}</p>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['catalog'],
  data() {
    return {
      arrowCatalog: false,
      catalogList: {
        woman: {
          title: 'Женская одежда',
          img: 't-shirt-2-line',
          childActive: false,
          child: [
            'Блузки и рубашки',
            'Боди',
            'Брюки',
            'Верхняя одежда',
            'Джемперы и кардиганы',
            'Джинсы',
            'Женские пижамы',
            'Жилеты',
            'Комбинезоны',
            'Комбинезоны c шортами',
            'Костюмы',
            'Купальники и пляжная одежда',
            'Женское нижнее белье',
            'Женские носки и чулочные изделия',
            'Пиджаки',
            'Платья',
            'Толстовки и свитшоты',
            'Футболки и топы',
            'Шорты',
            'Юбки',
          ],
        },
        man: {
          title: 'Мужская одежда',
          img: 'shirt-line',
          childActive: false,
          child: [
            'Брюки', 'Верхняя одежда', 'Джемперы, свитеры и кардиганы', 'Джинсы', 'Домашняя одежда', 'Жилеты', 'Костюмы', 'Мужское нижнее белье', 'Мужские носки', 'Пиджаки', 'Плавки и пляжные шорты', 'Рубашки', 'Спортивные костюмы', 'Толстовки и свитшоты', 'Футболки и поло Шорты',
          ],
        },
        gsm: {
          title: 'Мобильные телефоны и аксессуары',
          img: 'smartphone-line',
          childActive: false,
          child: [
            'Смартфоны Apple iPhone', 'Мобильные телефоны', 'Восстановленные телефоны', 'Аксессуары для мобильных телефонов', 'Запчасти для мобильных телефонов', 'Внешние аккумуляторы', 'Чехлы для смартфонов', 'Сенсорные панели (тачскрин)', 'Коммуникационное оборудование', 'Рации', 'Запчасти и аксессуары для раций',
          ],
        },
        baby: {
          title: 'Мать и ребёнок',
          img: 'parent-line',
          childActive: false,
          child: [
            'Одежда для малышек', 'Одежда для малышей', 'Одежда для девочек', 'Одежда для мальчиков', 'Обувь для детей', 'Оборудование и механизмы', 'Смена подгузников', 'Уход за ребенком', 'Детское постельное белье', 'Защитная экипировка', 'Кормление', 'Сочетающаяся одежда для семьи', 'Обувь для малышей', 'Приучение к туалету', 'Беременность и материнство', 'Детские сувениры', 'Мебель для малышей', 'Детское питание', 'Аксессуары', 'Детская коляска', 'Сиденья и аксессуары для авто',
          ],
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
  watch: {
    arrowCatalog: {
      handler(val) {
        if (val === false) this.closeUp();
      },
    },
  },
  computed: {
    catalogShow() {
      return this.catalog;
    },
  },
  methods: {
    closeUp() {
      const arr = Object.keys(this.catalog);
      arr.forEach((el) => { this.catalog[el].childActive = false; });
    },
  },
};
</script>

<style lang="scss" scoped>
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
    @media screen and (min-width: 981px) {
      right: 18px;
    }
  }
  @media screen and (max-width: 576px) {
    margin-bottom: 0;
  }
  &:hover {
    color: #7141F0;
    &::after {
      background-color: #7141F0;
    }
  }
}
.filter_body {
  padding: 0 15px;
  max-width: 283px;
  transition: 0.3s linear;
  @media screen and (max-width: 576px) {
    max-width: 100%;
  }
}
.filter_body_active {
    overflow: hidden;
    transition: 0.3s linear;
    z-index: -1;
    height: 100%;
}
.catalog {
  // position: relative;
  font-size: 15px;
}
.catalog_item {
  display: flex;
  flex-direction: column;
  text-align: center;
  min-height: 28px;
  transition: 0.3s linear;
  &_top {
    display: flex;
    &::after {
      transition: 0.3s linear;
      right: 3px;
      margin-top: -8px;
      top: 50%;
    }
    &:hover {
      transition: 0.3s linear;
      color: #7141F0;
      &::after {
        background-color: #7141F0;
      }
    }
    &_active {
      color: #7141F0;
      &::after {
        background-color: #7141F0;
        transition: 0.3s linear;
        transform: rotate(90deg);
      }
    }

  }
  &_bottom {
    display: flex;
    overflow: hidden;
    flex-direction: column;
    margin-bottom: 12px;
    max-height: 0;
    transition: all 0.3s linear;
    &_active {
      max-height: 10000px;
    }
  }
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
    flex-direction: column;
    cursor: pointer;

  }
  .catalog_child {
    text-align: left;
    margin-top: 12px;
    margin-left: 50px;
    &:hover {
      color: #7141F0;
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
.catalog_bottom {
  overflow: hidden;
  position: absolute;
  z-index: 3;
  background-color: #fff;
  max-height: 0;
  transition: all 0.3s ease;
  @media screen and (max-width: 576px) {
    left: 0;
    width: 100%;
  }
  &_active {
    max-height: 10000px;
  }
}
.catalog_top {
  @media screen and (max-width: 980px) {
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
  }
}
.arrow_active {
  color: #7141F0;
  transition: all 0.3s ease 0s;
  &::after {
    transform: rotate(90deg);
    background-color: #7141F0;
    transition: all 0.3s ease 0s;
    @media screen and (max-width: 980px) {
      transform: rotate(-90deg);
    }
  }
}
</style>
