<template>
  <div class="container">
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
    <div class="home_body">
      <filter-component/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import FilterComponent from '@/components/FilterComponent.vue';
// @ is an alias to /src

export default {
  components: { FilterComponent },
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
.home_nav {
  margin-left: 308px;
}
.home_nav-list {
  display: flex;
}
.home_nav-item {
  margin-top: 44px;
  margin-right: 20px;
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
    cursor: pointer;

  }
  .router-link-exact-active {
    background: #7141F0;
    border: 1px solid #7141F0;
    color: #fff;
  }
}

.home_body {
  display: flex;
}
</style>
