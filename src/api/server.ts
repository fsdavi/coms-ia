import { fastify } from "fastify";

const app = fastify()

app.get("/", async () => {
  return "Hello World";
});

app.listen({ port: 3030}).then(() => {
 console.log('API is running on 3030!')
});
