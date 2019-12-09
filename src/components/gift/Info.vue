<template>
  <div class="info">
    <Banner class="info-block" :giftData="giftData" :photoUrl="photoUrl"/>
    <div class="to-gallery info-block">
      <button @click="toGallery">View Gallery</button>
    </div>
    <Awards class="info-block" :giftData="giftData" />
    <div class="body">
      <p v-html="giftData.bodyHTML"></p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import GiftData from '@/entity/GiftResp/RespData';
import Banner from './info/Banner.vue';
import Awards from './info/Awards.vue';
@Component({
  components: {Banner, Awards},
})
export default class Info extends Vue {
  @Prop() public giftData!: GiftData;
  @Prop() public photoUrl!: string;
  /**
   * 回禮物列表頁面
   */
  public toGallery() {
    this.$router.push({
      name: 'gallery',
    });
  }
}
</script>


<style lang="scss" scoped>
.info {
  .info-block {
    margin-bottom: 2%;
  }
  width: 48%;
  .to-gallery {
    > button {
      background-color: $deep-blue;
      color: $white;
      font-size: 11px;
      padding: 7px 18px;
      border-radius: 3px;
      border: 1px solid $border-blue;
    }
  }
  .body {
    text-align: left;
    padding: 15px;
    border: 1px solid $light;
    border-radius: 4px;
    p {
      font-size: 14px;
      font-weight: 100;
    }
  }
}
</style>