<template>
  <div class="gift-page">
    saddas
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Gift from '@/entity/Gift.ts';
import axios from 'axios';
@Component
export default class GiftPage extends Vue {
  // 禮物資訊 URL
  public DETAIL_API: string = 'https://www.redditgifts.com/api/v1/exchanges/gallery/gift/';
  // public giftDeatil: GiftDetai;
  /**
   * 發出禮物資訊請求
   * @param slug - 用於禮物 api，識別禮物用
   */
  public async getGiftDetail(slug: string) {
    const respData = await axios.get(this.DETAIL_API + slug);
    const giftDetail = respData.data;
  }
  private created() {
    const slug = this.$route.params.slug;
    this.getGiftDetail(slug);
  }
}
</script>

<style lang="scss" scoped>
</style>
