<template>
  <div>
    <div v-if="!pending && !error">{{ message }}</div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  setup: function () {
    const { data, pending, error } = useAsyncData('hello', () => $fetch('/api/hello'));
    const message = computed(() => data.value.message);
    return {
      pending,
      error,
      message,
    };
  },
});
</script>
