<template lang="pug">
v-container.pa-4(fluid)
  v-layout
    v-flex(xs12 sm6 offset-sm3 text-xs-center)
      .display-2.mb-4 カード
      v-card
        v-img(
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        )
        v-card-title(primary-title)
          div
            h3.headline.mb-0 Kangaroo Valley Safari
            div  {{ cardText }}
        v-card-actions
          v-btn(flat color="orange") Share
          v-btn(flat color="orange") Explore
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ShowCaseCard extends Vue {
  private cardText: string = `
    Lorem ipsum dolor sit amet, brute iriure accusata ne mea.
    Eos suavitate referrentur ad, te duo agam libris qualisque,
    utroque quaestio accommodare no qui.
    Et percipit laboramus usu, no invidunt verterem nominati mel.
    Dolorem ancillae an mei, ut putant invenire splendide mel,
    ea nec propriae adipisci. Ignota salutandi accusamus in sed,
    et per malis fuisset, qui id ludus appareat.';
  `;
}
</script>

<style lang="stylus" scoped>
</style>