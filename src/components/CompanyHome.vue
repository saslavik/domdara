<template>
  <div class="company">
    <div class="company_container">
      <div class="company_item" v-for="item in items" :key="item.title">
        <img src="../assets/img/Company.jpg" alt="">
        <div class="company_row">
          Кэшбэк 20%
          <div class="company_icons">
            <div>
              <img src="../assets/svg/Z.svg" alt=""><img src="../assets/svg/Score.svg" alt="">
            </div>
            <div>
              <img src="../assets/svg/Action.svg" alt="">
            </div>
          </div>
        </div>
        <div class="company_title">Магазин MMZ</div>
        <div class="company_desc">Жидкий силиконовый чехол для телефона</div>
        <div class="company_additionalInfo">
          <div class="additionalInfo_card">
            <img src="../assets/svg/Card.svg" alt="">3958
          </div>
          <div class="additionalInfo_arrow">
            <img src="../assets/svg/Arrow.svg" alt="">2947
          </div>
        </div>
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
.company {
  &_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &_item {
    width: 204px;
    font-size: 15px;
    margin-bottom: 15px;
    @media screen and (max-width: 768px) {
      width: calc(134px + (204 - 134) * ((100vw - 320px) / (768 - 320)));
      margin-bottom: calc(9px + (15 - 9) * ((100vw - 320px) / (768 - 320)));
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
  &_additionalInfo {
    display: flex;
    margin: 15px 0;
    img {
      margin-right: 7px;
      @media screen and (max-width: 768px) {
        width: calc(11px + (17 - 11) * ((100vw - 320px) / (768 - 320)));
        margin: calc(9px + (15 - 9) * ((100vw - 320px) / (768 - 320))) 0;
        margin-right: calc(4px + (7 - 4) * ((100vw - 320px) / (768 - 320)));
      }
    }
    @media screen and (max-width: 768px) {
      font-size: calc(9px + (15 - 9) * ((100vw - 320px) / (768 - 320)));
      margin: calc(0px + (17 - 0) * ((100vw - 320px) / (768 - 320))) 0;
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
