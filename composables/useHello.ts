const useHello = () => {
  const { data, pending, error } = useAsyncData('hello', () => $fetch('/api/hello'));
  const message = computed(() => data.value.message);
  return {
    message,
    pending,
    error,
  };
};

export default useHello;
