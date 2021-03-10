<template>
  <div>
    Page1
    <div> {{ routeName }} </div>
  </div>
</template>
<script>
export default {
  name: 'Page1',
  activated() {
    console.log('Page1 activated')
  },
  deactivated() {
    console.log('Page1 deactivated')
  },

  computed: {
    routeName() {
      console.log('---> Page1 computed properties is computed')
      return this.$route.name
    }
  }
}
</script>
