<template>
  <div class="navbar">
    <div class="logo cursor-pointer" @click="toGallery">
      <p class="logo-text">
        <span class="reddit">reddit</span>
        <span class="gift">gifts</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Navbar extends Vue {
  public toGallery() {
    this.$router.push({
      name: 'gallery',
    });
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  margin-bottom: 10px;
  display: flex;
  border-bottom: 1px solid $light;
  .logo {
    padding: 25px;
    .logo-text {
      font-size: 25px;
      margin: 0;
      .reddit {
        color: $logo-left-color;
      }
      .gift {
        color: $deep-blue;
      }
    }
  }
}
</style>
