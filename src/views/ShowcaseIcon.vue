<template lang="pug">
v-container.pa-4(fluid)
  v-layout(align-center)
    v-flex(xs12 text-xs-center)
      .display-2 アイコン
      div.my-4
        v-icon home
        v-icon done
        v-icon arrow_forward_ios
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ShowCaseIcon extends Vue {
}
</script>

<style lang="stylus" scoped>
</style>