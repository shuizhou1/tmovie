<template>
  <div>
    <onsell></onsell>
    <span class="fa-calendar-check-o"></span>
  </div>

</template>

<script>
import onsell from './onShell'
export default {
  name: "mainPage",
  components: {
    onsell
  }
}
</script>

<style scoped>
  p {
    margin-bottom: 20px;
  }
</style>
