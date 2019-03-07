<template lang="pug">
v-form(v-model='valid')
  v-container
    v-layout
      v-flex(xs12, md4)
        v-text-field(v-model='firstname', :rules='nameRules', :counter='10', label='First name', required)
      v-flex(xs12, md4)
        v-text-field(v-model='lastname', :rules='nameRules', :counter='10', label='Last name', required)
      v-flex(xs12, md4)
        v-text-field(v-model='email', :rules='emailRules', label='E-mail', required)
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ShowCaseForm extends Vue {
  private valid: boolean = false;
  private firstname: string = '';
  private lastname: string = '';
  private nameRules: Array<(string) => boolean | string> = [
    (v: string) => !!v || 'Name is required',
    (v: string) => v.length <= 10 || 'Name must be less then 10 characters',
  ];
  private email: string = '';
  private emailRules: Array<(string) => boolean | string> = [
    (v: string) => !!v || 'E-mail is required',
    (v: string) => /.+@.+/.test(v) || 'E-mail must be valid',
  ];
}
</script>

<style lang="stylus" scoped>
</style>