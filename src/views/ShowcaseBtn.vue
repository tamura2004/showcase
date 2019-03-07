<template lang="pug">
v-container.pa-4(fluid)
  v-layout(align-center)
    v-flex(xs12 text-xs-center)
      .display-2.mb-4 ボタン
      div.my-4
        v-btn(color="primary") primary
        v-btn(color="success") success
        v-btn(color="error") error
        v-btn(color="warning") warning
        v-btn(color="info") info
        v-btn(disabled) disabled
      div.my-4
        v-btn(flat) flat
        v-btn(flat color="error") error
        v-btn(flat disabled) disabled
      div.my-4
        v-btn(small) small
        v-btn(large) large
        v-btn(fab) fab
        v-btn(icon): v-icon home
        v-btn(fab large icon color="error"): v-icon done
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ShowCaseBtn extends Vue {
}
</script>

<style lang="stylus" scoped>
</style>