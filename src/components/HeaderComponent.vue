<template>
  <header class="header">
    <div class="wrapper-content wrapper-content--fixed">
      <div class="container">
        <router-link class="logo" to='/'>
          <img src="../assets/img/Logo.png" alt="">
          <div class="title">домдара</div>
        </router-link>
        <ul class="navbar-list">
          <li class="navbar-item" v-for="link in links" :key="link.title">
            <router-link
              class="navbar-link"
              :to="link.url"
              :title="link.title">
                {{ link.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      links: [
        {
          title: 'Дарамаркет',
          url: '/',
        },
        {
          title: 'Биржа EXO',
          url: '/eho',
        },
        {
          title: 'Контакты',
          url: '/contacts',
        },
        {
          title: 'Часто задаваемые вопросы',
          url: '/faq',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.header {
  border: 0.5px solid #BDBDBD;
}
.container {
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 14px 0;
}
.logo {
  display: flex;
  justify-content: center;
  text-align: center;
  img {
    width: 43px;
    height: 43px;
    margin-right: 18px;
  }
  .title {
    margin: auto 0;
  }
}
.navbar-list {
  display: flex;
  text-align: center;
}
li {
  margin: auto 30px auto 0;
  .navbar-link {
    font-size: 15px;
    color: #181818;
    letter-spacing: 0.02em;
  }
  .router-link-exact-active {
    color: #7141F0;
  }
  &:last-child {
    margin: auto 0;
  }
}
</style>
