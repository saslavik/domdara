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
    flex: 0 1 204px;
    font-size: 15px;
    margin-bottom: 15px;
  }
  &_title {
    font-size: 20px;
    font-weight: 700;
    margin: 7px 0;
  }
  &_row {
    height: 17px;
    font-weight: 500;
    margin: 9px 0;
    display: flex;
    justify-content: space-between;
  }
  &_icons {
    display: flex;
    div {
      padding: 0 13px;
      display: flex;
      align-items: center;
      vertical-align: middle;
      &:first-child {
        img {
          padding-right: 9px;
          &:last-child {
            padding: 0;
          }
        }
      }
      &:last-child {
        padding-right: 0;
        border-left: 2px solid #C4C4C4;
;
      }
    }
  }
  &_additionalInfo {
    display: flex;
    margin: 15px 0;
    img {
      margin-right: 7px;
    }
  }
}
.additionalInfo_card {
  display: flex;
  align-items: center;
  margin-right: 17px;
}
</style>
