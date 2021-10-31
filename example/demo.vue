<template>
  <span>Namespace Storage</span>
</template>

<script>
import NStorage from '../'
export default {
  mounted() {
      let nStorage = new NStorage(123)
      nStorage.put('abc', 1)
  },
};
</script>

<style>
</style>