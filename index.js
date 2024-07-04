const { ChatOpenAI } = require('@langchain/openai')
const { prompts } = require('./prompt')
const Fastify = require('fastify')
const fastify = Fastify({ logger: true })

async function code2bench(code, extension) {
  const model = new ChatOpenAI({
    streaming: true,
    maxRetries: 10,
    maxConcurrency: 5,
    temperature: 0,
    openAIApiKey: process.env.OPENAI_KEY,
    model: 'gpt-3.5-turbo',
  })
  const prompt = prompts(code, extension);
  const { content } = await model.invoke(prompt);
  return content;
}

fastify.post('/', {
  schema: {
    body: {
      type: 'object',
      properties: {
        extension: { type: 'string' },
        code: { type: 'string' },
      },
      required: ['extension', 'code']
    }
  }
}, async (req, reply) => {
  const bench = await code2bench(req.body.code, req.body.extension);
  return bench;
})

if (require.main === module) {
  fastify.listen({ port: 3000 })
}

module.exports = {
  code2bench,
};
