import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { getAllPromptsRoute } from "@/api/routes/get-all-prompts";
import { uploadVideoRoute } from "@/api/routes/upload-video";
import { createTranscriptionRoute } from "@/api/routes/create-transcription";
import { generateAICompletionRoute } from "@/api/routes/generate-ai-completion";

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);
app.register(generateAICompletionRoute);

app.listen({ port: 3030 }).then(() => {
  console.log("API is running on 3030!");
});
