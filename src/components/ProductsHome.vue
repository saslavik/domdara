<template>
  <div class="products">
    <div class="products_container">
      <div class="products_item" v-for="item in items" :key="item.title">
        <div class="products_img products_img_new">
          <img src="../assets/img/Product.jpg" alt="">
        </div>
        <div class="products_row">
          Кэшбэк 20%
          <div class="products_icons">
            <div>
              <img src="../assets/svg/Z.svg" alt=""><img src="../assets/svg/Score.svg" alt="">
            </div>
            <div>
              <img src="../assets/svg/Action.svg" alt="">
            </div>
          </div>
        </div>
        <div class="products_title">3 849 ₽</div>
        <div class="products_desc">Силиконовый чехол для телефона</div>
      </div>
      <div class="item_filler"></div>
      <div class="item_filler"></div>

    </div>
    <load-more v-on:items-btn="items += $event"/>
  </div>
</template>

<script>
import LoadMore from '@/components/LoadMore.vue';

export default {
  components: { LoadMore },
  data() {
    return {
      items: 24,
    };
  },
};
</script>

<style lang="scss" scoped>
.products {
  width: 100%;
  &_container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &_item {
    width: 204px;
    font-size: 15px;
    margin-bottom: 30px;
    @media screen and (max-width: 768px) {
      width: calc(134px + (204 - 134) * ((100vw - 320px) / (768 - 320)));
      margin-bottom: calc(9px + (15 - 9) * ((100vw - 320px) / (768 - 320)));
    }
  }
  &_img {
    position: relative;
    &::before {
      position: absolute;
      color: #181818;
      font-size: 15px;
      font-weight: 700;
      top: 0;
      left: 0;
      width: 51px;
      height: 27px;
      text-align: center;
      line-height: 27px;
      border-radius: 0 0 13px 0;
      @media screen and (max-width: 768px) {
        font-size: calc(8px + (15 - 8) * ((100vw - 320px) / (768 - 320)));
        width: calc(33px + (51 - 33) * ((100vw - 320px) / (768 - 320)));
        height: calc(18px + (27 - 18) * ((100vw - 320px) / (768 - 320)));
        line-height: calc(18px + (27 - 18) * ((100vw - 320px) / (768 - 320)));
      }
    }
    &_new::before {
      content: 'NEW';
      background-color: #FFE000;
    }
    &_top::before {
      content: 'TOP';
      background-color: #04E0E3;
    }
  }
  &_title {
    font-size: 20px;
    font-weight: 700;
    margin: 7px 0;
    @media screen and (max-width: 768px) {
      font-size: calc(15px + (20 - 15) * ((100vw - 320px) / (768 - 320)));
    }
  }
  &_row {
    height: 17px;
    font-weight: 500;
    margin: 9px 0;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      font-size: calc(9px + (15 - 9) * ((100vw - 320px) / (768 - 320)));
      height: calc(11px + (17 - 11) * ((100vw - 320px) / (768 - 320)));
      margin: calc(5px + (9 - 5) * ((100vw - 320px) / (768 - 320))) 0;
    }
  }
  &_icons {
    display: flex;
    div {
      display: flex;
      align-items: center;
      vertical-align: middle;
      img {
        width: 16px;
        height: 16px;
        @media screen and (max-width: 768px) {
          width: calc(9px + (16 - 9) * ((100vw - 320px) / (768 - 320)));
          height: calc(9px + (16 - 9) * ((100vw - 320px) / (768 - 320)));
        }
      }
      &:first-child {
        img {
          &:last-child {
            margin: 13px;
            @media screen and (max-width: 768px) {
              margin: calc(8px + (13 - 8) * ((100vw - 320px) / (768 - 320)));
            }
          }
        }
      }

      &:last-child {
        padding-left: 13px;
        border-left: 2px solid #C4C4C4;
        @media screen and (max-width: 768px) {
          padding-left: calc(8px + (13 - 8) * ((100vw - 320px) / (768 - 320)));
        }
      }
    }
  }
  &_desc {
    font-size: 18px;
    @media screen and (max-width: 768px) {
      font-size: calc(9px + (18 - 9) * ((100vw - 320px) / (768 - 320)));
    }
  }
}
</style>
