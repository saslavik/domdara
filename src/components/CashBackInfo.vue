<template>
  <div class="cashBackInfo">
    <div class="container">
      <div class="cashBackInfo_line"></div>
      <div class="cashBackInfo_title">Получайте мгновенный кэшбэк и используйте его
        для новых покупок товаров и услуг до 100%!</div>
      <div class="cashBackInfo_descr">
        <div class="descr_aid">
          <p>Благодаря нашему сервису, вы получаете кэшбэк у наших партнёров, который
          увеличивается на вашем кошельке каждую секунду!</p>
          <p>Кэшбэк накопленный в EXO монетах автоматически увеличивается на 8,4% в месяц.</p>
          <h6>Как покупать с кэшбэком?</h6>
        </div>
        <div class="descr_minimise"
        :class="{descr_minimise_active: minimise}">
          <div class="minimise_content">
            <p>1. Вы регистрируетесь у нас на нашем сайте domdara.com<br>
              2. Выбираете магазин на нашей платформе дарамаркет<br>
              3. Совершаете покупки - предъявляете карту - получаете кэшбэк
            </p>
            <h6>Кэшбэк, который:</h6>
            <ul>
              <li>•  начисляется мгновенно</li>
              <li>•  не сгорает</li>
              <li>•  переводится на банковскую карту</li>
              <li>•  переводится любому пользователю</li>
              <li>•  увеличивается на счету</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="minimise">
        <div class="minimise_btn"
        :class="{minimise_btn_active: !minimise}"
        @click="minimise = !minimise">
          <span v-if="minimise">Свернуть</span>
          <span v-if="!minimise">Смотреть далее</span>
        </div>
      </div>
    </div>
    <div class="arrowUp" @click="scrollToTop">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // значени свернутоскти кешбека
      minimise: false,
    };
  },
  // кнопка поднятия экрана вверх
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.cashBackInfo {
  background-color: #7141F0;
  padding: 1px 0;
  position: relative;
  &_line {
    background-color: #04E0E3;
    width: 100px;
    height: 10px;
    border-radius: 10px;
    margin-top: 100px;
    margin-bottom: 40px;
    @media screen and (max-width: 768px) {
      width: calc(36px + (100 - 36) * ((100vw - 320px) / (768 - 320)));
      height: calc(3px + (10 - 3) * ((100vw - 320px) / (768 - 320)));
      margin-top: calc(40px + (100 - 40) * ((100vw - 320px) / (768 - 320)));
      margin-bottom: calc(13px + (40 - 13) * ((100vw - 320px) / (768 - 320)));
    }
  }
  &_title {
    font-size: 48px;
    letter-spacing: 0.02em;
    font-weight: 700;
    color: #fff;
    max-width: 990px;
    margin-bottom: 45px;
    @media screen and (max-width: 768px) {
      font-size: calc(18px + (48 - 18) * ((100vw - 320px) / (768 - 320)));
    }
  }
  &_descr {
    font-size: 20px;
    letter-spacing: 0.02em;
    font-weight: 400;
    color: #fff;
    max-width: 850px;
    @media screen and (max-width: 768px) {
      font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (768 - 320)));
    }
    p {
      margin-bottom: 30px;
    }
    h6 {
      font-size: 24px;
      letter-spacing: 0.02em;
      font-weight: 700;
      margin-bottom: 30px;
      @media screen and (max-width: 768px) {
        font-size: calc(14px + (24 - 14) * ((100vw - 320px) / (768 - 320)));
      }
    }
  }
}
.descr_minimise {
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s linear;
  &_active {
    max-height: 600px;
  }
}
.minimise_content {
  // position: absolute;
  bottom: 0;
}
// кнопка свернуть
.minimise {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (768 - 320)));
    margin-top: calc(32px + (0 - 32) * ((100vw - 320px) / (768 - 320)));
  }
  &_btn {
    transition: 0.3s;
    cursor: pointer;
    padding: 6px 12px;
    position: relative;
    margin-bottom: 90px;
    @media screen and (max-width: 768px) {
      margin-bottom: calc(75px + (90 - 75) * ((100vw - 320px) / (768 - 320)));
    }
    &::after {
      content: '';
      position: absolute;
      mask: url('../assets/svg/Rectangle.svg') no-repeat;
      background-color: #fff;
      mask-size: cover;
      width: 21px;
      height: 21px;
      margin-left: 16px;
      margin-top: -9px;
      transform: rotate(-90deg);
      top: 50%;
      transition: all 0.3s linear;
    }
    &_active::after {
      margin-top: -15px;
      transform: rotate(90deg);
    }
  }
}
// кнопка подняться в начало
.arrowUp {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  position: absolute;
  right: 60px;
  bottom: 50px;
  border: 4px solid #262626;
  @media screen and (max-width: 768px) {
    width: calc(30px + (64 - 30) * ((100vw - 320px) / (768 - 320)));
    height: calc(30px + (64 - 30) * ((100vw - 320px) / (768 - 320)));
    right: calc(20px + (60 - 20) * ((100vw - 320px) / (768 - 320)));
    bottom: calc(20px + (50 - 20) * ((100vw - 320px) / (768 - 320)));
    border: 2px solid #262626;
  }
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    width: 64px;
    height: 64px;

    background-color: #262626;
    mask: url('../assets/svg/ArrowUp.svg') no-repeat 0 0;
    left: 16%;
    top: 16%;
    mask-size: 60%;
    @media screen and (max-width: 768px) {
      width: calc(30px + (64 - 30) * ((100vw - 320px) / (768 - 320)));
      height: calc(30px + (64 - 30) * ((100vw - 320px) / (768 - 320)));
    }
  }
}
</style>
