<template lang="pug">
v-layout(row)
  v-flex(xs12 sm6 offset-sm3)
    v-toolbar.mt-4(dark flat color="primary")
      v-toolbar-title 予定表
    v-list(two-line)

      v-subheader Today

      v-divider

      v-list-tile
        v-list-tile-avatar
          v-icon home
        v-list-tile-content
          v-list-tile-title 本日の予定
          v-list-tile-sub-title 午後からお散歩
        v-list-tile-action
          v-icon done

      v-divider

      v-list-tile
        v-list-tile-avatar
          v-icon accessibility
        v-list-tile-content
          v-list-tile-title 明日の予定
          v-list-tile-sub-title 朝からランニング
      v-divider
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ShowCaseList extends Vue {
}
</script>

<style lang="stylus" scoped>
</style>