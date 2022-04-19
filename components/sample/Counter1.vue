<template>
  <div>
    <div>{{ count }}</div>
    <button @click="increment">increment</button>
    <button @click="reset">reset</button>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  setup: function () {
    const count = ref(0);
    const increment = () => ++count.value;
    const reset = () => count.value = 0;
    return {
      count,
      increment,
      reset,
    };
  },
});
</script>
