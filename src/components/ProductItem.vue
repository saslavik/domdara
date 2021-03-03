<template>
  <div class="product_item">
    <div class="product_img"
    :class="{product_img_new: imgNew, product_img_top: imgTop}">
      <img :src="require(`../assets/img/${image}.jpg`)" alt="">
    </div>
    <div class="product_row">
      Кэшбэк 20%
      <div class="product_icons">
        <div>
          <img src="../assets/svg/Z.svg" alt=""><img src="../assets/svg/Score.svg" alt="">
        </div>
        <div>
          <svg width="19" height="17" viewBox="-1 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0627 0.25C14.4677 0.25 16.4168 2.125 16.4168 4.75C16.4168 10
            10.4793 13 8.50016 14.125C6.521 13 0.583496 10 0.583496 4.75C0.583496
            2.125 2.56266 0.25 4.93766 0.25C6.41016 0.25 7.7085 1 8.50016 1.75C9.29183
            1 10.5902 0.25 12.0627 0.25Z"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="product_title">{{ title }}</div>
    <div class="product_desc">{{ desc }}</div>
    <div class="product_additionalInfo" v-if="additionalInfo">
      <div class="additionalInfo_card">
        <img src="../assets/svg/Card.svg" alt="">3958
      </div>
      <div class="additionalInfo_arrow">
        <img src="../assets/svg/Arrow.svg" alt="">2947
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'img',
    'title',
    'desc',
    'imgNew',
    'imgTop',
    'additionalInfo',
  ],
  computed: {
    image() {
      return this.img;
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  width: 100%;
  &_container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &_item {
    flex: 0 1 24%;
    // width: 204px;
    font-size: 15px;
    margin-bottom: 30px;
    @media screen and (max-width: 1100px) {
      flex: 0 1 32%;
    }
    @media screen and (max-width: 980px) {
      flex: 0 1 24%;
    }
    @media screen and (max-width: 768px) {
      flex: 0 1 32%;
      margin-bottom: calc(9px + (15 - 9) * ((100vw - 320px) / (768 - 320)));
    }
    @media screen and (max-width: 576px) {
      flex: 0 1 48%;
    }
  }
  &_img {
    position: relative;
    img {
      width: 100%;
    }
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
        cursor: pointer;
        width: 16px;
        height: 16px;
        @media screen and (max-width: 768px) {
          width: calc(9px + (16 - 9) * ((100vw - 320px) / (768 - 320)));
          height: calc(9px + (16 - 9) * ((100vw - 320px) / (768 - 320)));
        }
      }
      svg {
        cursor: pointer;
        stroke: #7141F0;
        stroke-width: 2px;
        &:hover {
          fill: #7141F0;
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
    font-weight: 500;
    margin: 15px 0;
    @media screen and (max-width: 768px) {
      font-size: calc(9px + (18 - 9) * ((100vw - 320px) / (768 - 320)));
      margin: calc(9px + (15 - 9) * ((100vw - 320px) / (768 - 320))) 0;
    }
  }
  &_additionalInfo {
    display: flex;
    img {
      margin-right: 7px;
      @media screen and (max-width: 768px) {
        width: calc(11px + (17 - 11) * ((100vw - 320px) / (768 - 320)));
        margin-right: calc(4px + (7 - 4) * ((100vw - 320px) / (768 - 320)));
      }
    }
    @media screen and (max-width: 768px) {
      font-size: calc(9px + (15 - 9) * ((100vw - 320px) / (768 - 320)));
      margin: calc(0px + (15 - 0) * ((100vw - 320px) / (768 - 320))) 0;
    }
  }
}
.additionalInfo_card {
  display: flex;
  align-items: center;
  margin-right: 17px;
  @media screen and (max-width: 768px) {
    margin-right: calc(11px + (17 - 11) * ((100vw - 320px) / (768 - 320)));
  }
}
</style>
