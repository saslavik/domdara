<template>
  <div class="home">
    <div class="container">
      <div class="home_content">
        <filter-component/>
        <div class="home_body">
          <div class="home_nav">
            <ul class="home_nav-list">
              <li class="home_nav-item" v-for="link in links" :key="link.title">
                <router-link
                  tag="button"
                  class="home_nav-link"
                  :to="link.url"
                  :title="link.title">
                    {{ link.title }}
                </router-link>
              </li>
            </ul>
          </div>
          <router-view/>
        </div>
      </div>
    </div>
    <cash-back-info />
  </div>
</template>

<script>
import FilterComponent from '@/components/FilterComponent.vue';
import CashBackInfo from '@/components/CashBackInfo.vue';

export default {
  components: { FilterComponent, CashBackInfo },
  name: 'Home',
  data() {
    return {
      links: [
        {
          title: 'Компании',
          url: '/',
        },
        {
          title: 'Товары',
          url: 'products',
        },
        {
          title: 'Услуги',
          url: 'services',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  overflow: auto;
}
.home_content {
  display: flex;
  @media screen and (max-width: 980px) {
    flex-direction: column;
  }
}
.home_body {
  display: flex;
  flex-direction: column;
}
.home_nav {
  margin-bottom: 20px;
}
.home_nav-list {
  display: flex;
}
.home_nav-item {
  margin-top: 44px;
  margin-right: 20px;
  @media screen and (max-width: 576px) {
    margin-top: 5px;
    margin-right: calc(15px + (20 - 15) * ((100vw - 320px) / (576 - 320)));
  }
    &:last-child {
      margin-right: 0;
    }
  .home_nav-link {
    font-size: 15px;
    background-color: #fff;
    color: #181818;
    border: 1px solid #181818;
    box-sizing: border-box;
    border-radius: 20px;
    height: 25px;
    width: 105px;
    letter-spacing: 0.02em;
    cursor: pointer;
    &:hover {
      color: #fff;
      background-color:#181818;
      border: 1px solid #181818;
    }
    @media screen and (max-width: 576px) {
      font-size: calc(9px + (15 - 9) * ((100vw - 320px) / (576 - 320)));
      width: calc(82px + (105 - 82) * ((100vw - 320px) / (576 - 320)));
      height: calc(19px + (25 - 19) * ((100vw - 320px) / (576 - 320)));
    }
  }
  .router-link-exact-active {
    background: #7141F0;
    border: 1px solid #7141F0;
    color: #fff;
  }
}

</style>
