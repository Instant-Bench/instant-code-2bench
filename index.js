const { ChatOpenAI } = require('@langchain/openai')
const { prompts } = require('./prompt')

async function code2bench(code, extension) {
  const model = new ChatOpenAI({
    streaming: true,
    maxRetries: 10,
    maxConcurrency: 5,
    temperature: 0,
    openAIApiKey: process.env.OPENAPI_KEY,
    model: 'gpt-3.5-turbo',
  })
  const prompt = prompts(code, extension);
  const { content } = await model.invoke(prompt);
  console.log(content)
}

code2bench(
  `
void FreeRecursivelyNode(
    node::permission::FSPermission::RadixTree::Node* node) {
  if (node == nullptr) {
    return;
  }

  if (node->children.size()) {
    for (auto& c : node->children) {
      FreeRecursivelyNode(c.second);
    }
  }

  if (node->wildcard_child != nullptr) {
    delete node->wildcard_child;
  }
  delete node;
}
  `,
  'cpp'
)
