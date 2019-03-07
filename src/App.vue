<template lang="pug">
v-app
  v-toolbar(app flat dark color="primary")
    v-toolbar-title.headline UI showcase
  v-content
    v-tabs(fixed-tabs)
      v-tab(to="icon") アイコン
      v-tab(to="btn") ボタン
      v-tab(to="card") カード
      v-tab(to="list") リスト
      v-tab(to="form") フォーム
      v-tab(to="dialog") ダイアログ

    router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
}
</script>
