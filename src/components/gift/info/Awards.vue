<template>
  <div class="awards" v-if="giftData.awards">
    <p>This gift received awards!</p>
    <img class="cursor-pointer" v-for="(award, idx) in giftData.awards" :src="award.smallIconUrl" :alt="award.title" :key="idx">
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import GiftData from '@/entity/GiftResp/RespData';
@Component
export default class Awards extends Vue {
  @Prop() public giftData!: GiftData;
}
</script>

<style lang="scss" scoped>
.awards {
  text-align: left;
  > p {
    font-size: 14px;
    margin-bottom: 5px;
  }
  > img {
    margin-right: 5px;
  }
}
</style>
