const sleep = ms => new Promise<void>(r => setTimeout(() => r(), ms));

export default defineEventHandler(async () => {
  await sleep(3000);
  return { message: 'hello' };
});