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
            @click="changeChildActive(item)">
              <img :src="require(`../assets/svg/catalog/${item.img}.svg`)" alt="">
              <div class="catalog_text">{{ item.title }}</div>
            </div>
            <div class="catalog_item_bottom"
            :class="{catalog_item_bottom_active: item.childActive}">
              <div class="catalog_child" v-for="child in item.child" :key="child.id"
              @click="catalogValue = child.id; closeMobile()"
              :class="{'catalog_child_active': child.id === catalogValue}">
                <input :id='child.id' type="radio" name="catalog" :value="child.id"
                hidden class="catalog_child" v-model="catalogValue" @click.stop>
                <label :for="child.id">{{child.name}}</label>
              </div>
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
      catalogValue: null,
      catalogList: {
        woman: {
          title: 'Женская одежда',
          img: 't-shirt-2-line',
          childActive: false,
          child: [
            {
              name: 'Блузки и рубашки',
              id: 1,
            },
            {
              name: 'Боди',
              id: 2,
            },
            {
              name: 'Брюки',
              id: 3,
            },
            {
              name: 'Верхняя одежда',
              id: 4,
            },
            {
              name: 'Джемперы и кардиганы',
              id: 5,
            },
            {
              name: 'Джинсы',
              id: 6,
            },
            {
              name: 'Женские пижамы',
              id: 7,
            },
            {
              name: 'Жилеты',
              id: 8,
            },
            {
              name: 'Комбинезоны',
              id: 9,
            },
            {
              name: 'Комбинезоны c шортами',
              id: 10,
            },
            {
              name: 'Костюмы',
              id: 11,
            },
            {
              name: 'Купальники и пляжная одежда',
              id: 12,
            },
            {
              name: 'Женское нижнее белье',
              id: 13,
            },
            {
              name: 'Женские носки и чулочные изделия',
              id: 14,
            },
            {
              name: 'Пиджаки',
              id: 15,
            },
            {
              name: 'Платья',
              id: 16,
            },
            {
              name: 'Толстовки и свитшоты',
              id: 17,
            },
            {
              name: 'Футболки и топы',
              id: 18,
            },
            {
              name: 'Шорты',
              id: 19,
            },
            {
              name: 'Юбки',
              id: 20,
            },
          ],
        },
        man: {
          title: 'Мужская одежда',
          img: 'shirt-line',
          childActive: false,
          child: [
            {
              name: 'Брюки',
              id: 21,
            },
            {
              name: 'Верхняя одежда',
              id: 22,
            },
            {
              name: 'Джемперы, свитеры и кардиганы',
              id: 23,
            },
            {
              name: 'Джинсы',
              id: 24,
            },
            {
              name: 'Домашняя одежда',
              id: 25,
            },
            {
              name: 'Жилеты',
              id: 26,
            },
            {
              name: 'Костюмы',
              id: 27,
            },
            {
              name: 'Мужское нижнее белье',
              id: 28,
            },
            {
              name: 'Мужские носки',
              id: 29,
            },
            {
              name: 'Пиджаки',
              id: 30,
            },
            {
              name: 'Плавки и пляжные шорты',
              id: 31,
            },
            {
              name: 'Рубашки',
              id: 32,
            },
            {
              name: 'Спортивные костюмы',
              id: 33,
            },
            {
              name: 'Толстовки и свитшоты',
              id: 34,
            },
            {
              name: 'Футболки и поло Шорты',
              id: 35,
            },
          ],
        },
        gsm: {
          title: 'Мобильные телефоны и аксессуары',
          img: 'smartphone-line',
          childActive: false,
          child: [
            {
              name: 'Смартфоны Apple iPhone',
              id: 36,
            },
            {
              name: 'Мобильные телефоны',
              id: 37,
            },
            {
              name: 'Восстановленные телефоны',
              id: 38,
            },
            {
              name: 'Аксессуары для мобильных телефонов',
              id: 39,
            },
            {
              name: 'Запчасти для мобильных телефонов',
              id: 40,
            },
            {
              name: 'Внешние аккумуляторы',
              id: 41,
            },
            {
              name: 'Чехлы для смартфонов',
              id: 42,
            },
            {
              name: 'Сенсорные панели (тачскрин)',
              id: 43,
            },
            {
              name: 'Коммуникационное оборудование',
              id: 44,
            },
            {
              name: 'Рации',
              id: 45,
            },
            {
              name: 'Запчасти и аксессуары для раций',
              id: 46,
            },
          ],
        },
        baby: {
          title: 'Мать и ребёнок',
          img: 'parent-line',
          childActive: false,
          child: [
            {
              name: 'Одежда для малышек',
              id: 47,
            },
            {
              name: 'Одежда для малышей',
              id: 48,
            },
            {
              name: 'Одежда для девочек',
              id: 49,
            },
            {
              name: 'Одежда для мальчиков',
              id: 50,
            },
            {
              name: 'Обувь для детей',
              id: 51,
            },
            {
              name: 'Оборудование и механизмы',
              id: 52,
            },
            {
              name: 'Смена подгузников',
              id: 53,
            },
            {
              name: 'Уход за ребенком',
              id: 54,
            },
            {
              name: 'Детское постельное белье',
              id: 55,
            },
            {
              name: 'Защитная экипировка',
              id: 56,
            },
            {
              name: 'Кормление',
              id: 57,
            },
            {
              name: 'Сочетающаяся одежда для семьи',
              id: 58,
            },
            {
              name: 'Обувь для малышей',
              id: 59,
            },
            {
              name: 'Приучение к туалету',
              id: 60,
            },
            {
              name: 'Беременность и материнство',
              id: 61,
            },
            {
              name: 'Детские сувениры',
              id: 62,
            },
            {
              name: 'Мебель для малышей',
              id: 63,
            },
            {
              name: 'Детское питание',
              id: 64,
            },
            {
              name: 'Аксессуары',
              id: 65,
            },
            {
              name: 'Детская коляска',
              id: 66,
            },
            {
              name: 'Сиденья и аксессуары для авто',
              id: 67,
            },
          ],
        },
        auto: {
          title: 'Автомобили и мотоциклы',
          img: 'car-line',
          childActive: false,
          child: [
            {
              name: 'Автомобили',
              id: 68,
            },
            {
              name: 'Автомобильные фары',
              id: 69,
            },
            {
              name: 'Запчасти для авто',
              id: 70,
            },
            {
              name: 'Автоэлектроника',
              id: 71,
            },
            {
              name: 'Аксессуары для салона',
              id: 72,
            },
            {
              name: 'Инструменты для ремонта авто',
              id: 73,
            },
            {
              name: 'Аксессуары и детали для мотоциклов',
              id: 74,
            },
            {
              name: 'Внешние аксессуары',
              id: 75,
            },
            {
              name: 'Мытье и уход за машиной',
              id: 76,
            },
            {
              name: 'Вездеходы, фургоны, лодки и др. транспорт',
              id: 77,
            },
            {
              name: 'Товары для путешествий и дороги',
              id: 78,
            },
            {
              name: 'Моторное масло',
              id: 79,
            },
            {
              name: 'Диски колёсные',
              id: 80,
            },
            {
              name: 'Шины',
              id: 81,
            },

          ],
        },
        groccery: {
          title: 'Украшния и часы',
          img: 'time-line',
          childActive: false,
          child: [
            {
              name: 'Ювелирные украшения',
              id: 82,
            },
            {
              name: 'Ожерелья и подвески',
              id: 83,
            },
            {
              name: 'Серьги',
              id: 84,
            },
            {
              name: 'Кольца',
              id: 85,
            },
            {
              name: 'Гибкие и жесткие браслеты',
              id: 86,
            },
            {
              name: 'Наборы ювелирных украшений и другое',
              id: 87,
            },
            {
              name: 'Изготовление бус и бижутерии',
              id: 88,
            },
            {
              name: 'Ювелирные изделия на свадьбу и помолвку',
              id: 89,
            },
            {
              name: 'Изготовление ювелирных изделий',
              id: 90,
            },
            {
              name: 'Индивидуальные ювелирные изделия',
              id: 91,
            },
            {
              name: 'Мужские часы',
              id: 92,
            },
            {
              name: 'Женские часы',
              id: 93,
            },
            {
              name: 'Часы для любимого',
              id: 94,
            },
            {
              name: 'Детские часы',
              id: 95,
            },
            {
              name: 'Карманные часы',
              id: 96,
            },
            {
              name: 'Аксессуары для наручных часов',
              id: 97,
            },
            {
              name: 'Женские часы-браслеты',
              id: 98,
            },
          ],
        },
        pc: {
          title: 'Компьютерная и офисная техника',
          img: 'computer-line',
          childActive: false,
          child: [
            {
              name: 'Офисная электроника',
              id: 99,
            },
            {
              name: 'Компьютерная периферия',
              id: 100,
            },
            {
              name: 'Ноутбуки',
              id: 101,
            },
            {
              name: 'Планшеты',
              id: 102,
            },
            {
              name: 'Внутренние накопители',
              id: 103,
            },
            {
              name: 'Компьютерные комплектующие',
              id: 104,
            },
            {
              name: 'Сетевое подключение',
              id: 105,
            },
            {
              name: 'Мыши и клавиатуры',
              id: 106,
            },
            {
              name: 'Аксессуары для планшетов',
              id: 107,
            },
            {
              name: 'Аксессуары для ноутбуков',
              id: 108,
            },
            {
              name: 'Демонстрационные стенды и аксессуары',
              id: 109,
            },
            {
              name: 'Мини ПК',
              id: 110,
            },
            {
              name: 'Промышленные компьютеры и аксессуары',
              id: 111,
            },
            {
              name: 'Десктопы',
              id: 112,
            },
            {
              name: 'Серверы',
              id: 113,
            },
            {
              name: 'Очистители для компьютеров',
              id: 114,
            },
            {
              name: 'Запчасти для ноутбуков',
              id: 115,
            },
            {
              name: 'Запчасти для планшетов',
              id: 116,
            },
            {
              name: 'Офисное ПО',
              id: 117,
            },

          ],
        },
        baggage: {
          title: 'Багаж и сумки',
          img: 'briefcase-3-line',
          childActive: false,
          child: [
            {
              name: 'Женские сумки',
              id: 118,
            },
            {
              name: 'Мужские сумки',
              id: 119,
            },
            {
              name: 'Рюкзаки',
              id: 120,
            },
            {
              name: 'Кошельки',
              id: 121,
            },
            {
              name: 'Сумки для детей',
              id: 122,
            },
            {
              name: 'Багаж и дорожные сумки',
              id: 123,
            },
            {
              name: 'Функциональные сумки',
              id: 124,
            },
            {
              name: 'Кошельки и зажимы для монет',
              id: 125,
            },
            {
              name: 'Детали и аксессуары для сумок',
              id: 126,
            },
          ],
        },
        home: {
          title: 'Дом и сад',
          img: 'plant-line',
          childActive: false,
          child: [
            {
              name: 'Кухня, столовая и бар',
              id: 127,
            },
            {
              name: 'Декор для дома',
              id: 128,
            },
            {
              name: 'Домашний текстиль',
              id: 129,
            },
            {
              name: 'Хобби и рукоделие',
              id: 130,
            },
            {
              name: 'Принадлежности для праздника и вечеринки',
              id: 131,
            },
            {
              name: 'Хранение и организация пространства',
              id: 132,
            },
            {
              name: 'Товары для ванной комнаты',
              id: 133,
            },
            {
              name: 'Домашняя уборка',
              id: 134,
            },
            {
              name: 'Товары для питомцев',
              id: 135,
            },
            {
              name: 'Садовые принадлежности',
              id: 136,
            },
            {
              name: 'Бытовые товары',
              id: 137,
            },
            {
              name: 'Бытовая химия',
              id: 138,
            },
          ],
        },
        electronics: {
          title: 'Электроника',
          img: 'flashlight-line',
          childActive: false,
          child: [
            {
              name: 'Портативная электроника',
              id: 139,
            },
            {
              name: 'Умная электроника',
              id: 140,
            },
            {
              name: 'ТВ, аудио и видеотехника',
              id: 141,
            },
            {
              name: 'Аксессуары и запчасти',
              id: 142,
            },
            {
              name: 'Фото и видеотехника',
              id: 143,
            },
            {
              name: 'Системы нагревания табака и электронные сигареты',
              id: 144,
            },
            {
              name: 'Наушники и гарнитуры',
              id: 145,
            },
            {
              name: 'Носимые устройства',
              id: 146,
            },
            {
              name: 'Игровые приставки и видеоигры',
              id: 147,
            },
            {
              name: 'Экшн-камеры и аксессуары',
              id: 148,
            },
            {
              name: 'Колонки',
              id: 149,
            },
            {
              name: 'Видеокамеры 360° и аксессуары',
              id: 150,
            },
            {
              name: 'Прочие электронные аксессуары',
              id: 151,
            },
            {
              name: 'Устройства VR/AR',
              id: 152,
            },
            {
              name: 'Роботы',
              id: 153,
            },
            {
              name: 'Техника Hi-Fi',
              id: 154,
            },
            {
              name: 'Съёмочное оборудование',
              id: 155,
            },
            {
              name: 'Источники питания',
              id: 156,
            },
          ],
        },
        beauty: {
          title: 'Красота и здоровье',
          img: 'empathize-line',
          childActive: false,
          child: [
            {
              name: '',
              id: 157,
            },
            {
              name: '',
              id: 158,
            },
            {
              name: '',
              id: 159,
            },
            {
              name: '',
              id: 160,
            },
            {
              name: '',
              id: 161,
            },
            {
              name: '',
              id: 162,
            },
            {
              name: '',
              id: 163,
            },
            {
              name: '',
              id: 164,
            },
            {
              name: '',
              id: 165,
            },
            {
              name: '',
              id: 166,
            },
            {
              name: '',
              id: 167,
            },
            {
              name: '',
              id: 168,
            },
            {
              name: '',
              id: 169,
            },
            {
              name: '',
              id: 170,
            },
            {
              name: '',
              id: 171,
            },
            {
              name: '',
              id: 172,
            },
            {
              name: '',
              id: 173,
            },
            {
              name: '',
              id: 174,
            },
            {
              name: '',
              id: 175,
            },
            {
              name: '',
              id: 176,
            },
            {
              name: '',
              id: 177,
            },
            {
              name: '',
              id: 178,
            },
            {
              name: '',
              id: 179,
            },
            {
              name: '',
              id: 180,
            },
            {
              name: '',
              id: 181,
            },
            {
              name: '',
              id: 182,
            },
            {
              name: '',
              id: 183,
            },
            {
              name: '',
              id: 184,
            },
            {
              name: '',
              id: 185,
            },
            {
              name: '',
              id: 186,
            },
            {
              name: '',
              id: 187,
            },
            {
              name: '',
              id: 188,
            },
            {
              name: '',
              id: 189,
            },
            {
              name: '',
              id: 190,
            },
            {
              name: '',
              id: 191,
            },
            {
              name: '',
              id: 192,
            },
            {
              name: '',
              id: 193,
            },
            {
              name: '',
              id: 194,
            },
            {
              name: '',
              id: 195,
            },
            {
              name: '',
              id: 196,
            },
            {
              name: '',
              id: 197,
            },
            {
              name: '',
              id: 198,
            },
            {
              name: '',
              id: 199,
            },
            {
              name: '',
              id: 200,
            },
              id: 201,
              id: 202,
              id: 203,
              id: 204,
              id: 205,
              id: 206,
              id: 207,
              id: 208,
              id: 209,
              id: 210,
              id: 211,
              id: 212,
              id: 213,
              id: 214,
              id: 215,
              id: 216,
              id: 217,
              id: 218,
              id: 219,
              id: 220,
              id: 221,
              id: 222,
              id: 223,
              id: 224,
              id: 225,
              id: 226,
              id: 227,
              id: 228,
              id: 229,
              id: 230,
              id: 231,
              id: 232,
              id: 233,
              id: 234,
              id: 235,
              id: 236,
              id: 237,
              id: 238,
              id: 239,
              id: 240,
              id: 241,
              id: 242,
              id: 243,
              id: 244,
              id: 245,
              id: 246,
              id: 247,
              id: 248,
              id: 249,
              id: 250,
              id: 251,
              id: 252,
              id: 253,
              id: 254,
              id: 255,
              id: 256,
              id: 257,
              id: 258,
              id: 259,
              id: 260,
              id: 261,
              id: 262,
              id: 263,
              id: 264,
              id: 265,
              id: 266,
              id: 267,
              id: 268,
              id: 269,
              id: 270,
              id: 271,
              id: 272,
              id: 273,
              id: 274,
              id: 275,
              id: 276,
              id: 277,
              id: 278,
              id: 279,
              id: 280,
              id: 281,
              id: 282,
              id: 283,
              id: 284,
              id: 285,
              id: 286,
              id: 287,
              id: 288,
              id: 289,
              id: 290,
              id: 291,
              id: 292,
              id: 293,
              id: 294,
              id: 295,
              id: 296,
              id: 297,
              id: 298,
              id: 299,
              id: 300,
              id: 301,
              id: 302,
              id: 303,
              id: 304,
              id: 305,
              id: 306,
              id: 307,
              id: 308,
              id: 309,
              id: 310,
              id: 311,
              id: 312,
              id: 313,
              id: 314,
              id: 315,
              id: 316,
              id: 317,
              id: 318,
              id: 319,
              id: 320,
              id: 321,
              id: 322,
              id: 323,
              id: 324,
              id: 325,
              id: 326,
              id: 327,
              id: 328,
              id: 329,
              id: 330,
              id: 331,
              id: 332,
              id: 333,
              id: 334,
              id: 335,
              id: 336,
              id: 337,
              id: 338,
              id: 339,
              id: 340,
              id: 341,
              id: 342,
              id: 343,
              id: 344,
              id: 345,
              id: 346,
              id: 347,
              id: 348,
              id: 349,
              id: 350,
              id: 351,
              id: 352,
              id: 353,
              id: 354,
              id: 355,
              id: 356,
              id: 357,
              id: 358,
              id: 359,
              id: 360,
              id: 361,
              id: 362,
              id: 363,
              id: 364,
              id: 365,
              id: 366,
              id: 367,
              id: 368,
              id: 369,
              id: 370,
              id: 371,
              id: 372,
              id: 373,
              id: 374,
              id: 375,
              id: 376,
              id: 377,
              id: 378,
              id: 379,
              id: 380,
              id: 381,
              id: 382,
              id: 383,
              id: 384,
              id: 385,
              id: 386,
              id: 387,
              id: 388,
              id: 389,
              id: 390,
              id: 391,
              id: 392,
              id: 393,
              id: 394,
              id: 395,
              id: 396,
              id: 397,
              id: 398,
              id: 399,
              id: 400,

          ],
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
      const arr = Object.keys(this.catalogList);
      arr.forEach((el) => { this.catalogList[el].childActive = false; });
    },
    changeChildActive(child) {
      //
      const changeValue = child;
      if (changeValue.childActive) {
        changeValue.childActive = !changeValue.childActive;
      } else {
        this.closeUp();
        changeValue.childActive = true;
      }
    },
    closeMobile() {
      if (window.innerWidth <= 980) {
        window.scrollTo(0, 0);
        this.$emit('catalog');
      }
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
