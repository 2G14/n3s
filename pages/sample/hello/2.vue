<template>
  <div>
    <div v-if="!pending && !error">{{ message }}</div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  setup: function () {
    const { message, pending, error } = useHello();
    return {
      pending,
      error,
      message,
    };
  },
});
</script>
