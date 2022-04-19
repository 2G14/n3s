<template>
  <div>
    <div>{{ count }}</div>
    <button @click="increment">increment</button>
    <button @click="reset">reset</button>
  </div>
</template>

<script>
export default defineComponent({
  setup: function () {
    const { count, increment, reset } = useCounter();
    return  {
      count,
      increment,
      reset,
    };
  },
});
</script>
