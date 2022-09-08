export default defineEventHandler(async () => {
  const data = await useStorage().getItem('assets:server:hello.txt')

  return {
    data
  }
})