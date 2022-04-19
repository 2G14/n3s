const useCounter = () => {
  const count = ref(0);
  const increment = () => ++count.value;
  const reset = () => count.value = 0;
  return {
    count,
    increment,
    reset,
  };
};

export default useCounter;
