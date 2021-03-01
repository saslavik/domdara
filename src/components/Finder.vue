<template>
  <div class="find filter_box">
    <input type="text" class="find_input filter_item" placeholder="Поиск">
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.find {
  display: block;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    right: 16px;
    top: 12px;
    mask: url("../assets/svg/Search.svg") no-repeat;
    mask-size: cover;
    background-color: #181818;
    width: 18px;
    height: 17px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    min-width: 40%;
  }
  @media screen and (max-width: 576px) {
    // display: flex;
    min-width: 75%;
    &::after {
      content: '';
      background-color: #bdbdbd;
      right: 6px;
      top: 3px;
      width: 18px;
      height: 17px;
    }
  }
}
.find_input {
  height: 40px;
  width: 100%;
  background: #FFFFFF;
  border: 1px solid #BFBFBF;
  margin-bottom: 45px;
  border-radius: 20px;
  padding: 0 15px;
  font-size: 15px;
  &::placeholder {
    color: #181818;
  }
  @media screen and (max-width: 980px) {
    margin-bottom: 5px;
  }
  @media screen and (max-width: 576px) {
    height: 24px;
  }
}
</style>
