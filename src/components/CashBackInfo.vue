<template>
  <div class="cashBackInfo">
    <div class="container">
      <div class="cashBackInfo_line"></div>
      <div class="cashBackInfo_title">Получайте мгновенный кэшбэк и используйте его
        для новых покупок товаров и услуг до 100%!</div>
      <div class="cashBackInfo_descr">
        <p>Благодаря нашему сервису, вы получаете кэшбэк у наших партнёров, который
          увеличивается на вашем кошельке каждую секунду!</p>
        <p>Кэшбэк накопленный в EXO монетах автоматически увеличивается на 8,4% в месяц.</p>
        <h6>Как покупать с кэшбэком?</h6>
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
      <div class="minimise">
        <div class="minimise_btn">
          Свернуть
        </div>
      </div>
    </div>
    <div class="arrowUp" @click="scrollToTop">

    </div>
  </div>
</template>

<script>
export default {
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
  }
  &_title {
    font-size: 48px;
    font-weight: 700;
    color: #fff;
    width: 990px;
    margin-bottom: 45px;
  }
  &_descr {
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    width: 850px;
    p {
      margin-bottom: 30px;
    }
    h6 {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 30px;
    }
  }
}
.minimise {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  &_btn {
    cursor: pointer;
    padding: 6px 12px;
    position: relative;
    margin-bottom: 90px;
    &::after {
      content: '';
      position: absolute;
      mask: url('../assets/svg/Rectangle.svg') no-repeat;
      background-color: #fff;
      mask-size: cover;
      width: 21px;
      height: 21px;
      margin-left: 16px;
      transform: rotate(-90deg);
      top: 26%;
    }
  }
}
.arrowUp {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  position: absolute;
  right: 60px;
  bottom: 50px;
  border: 4px solid #262626;
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
  }
}
</style>
