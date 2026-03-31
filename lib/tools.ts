interface Tool {
  icon: string
  name: string
  description: string
  url: string
}

const tools: Tool[] = [
  {
    icon: "https://cms.embedworkflow.com/wp-content/uploads/2025/08/chatgpt-1024x301.png",
    name: "ChatGPT",
    description:
      "ChatGPT is an AI language model developed by OpenAI, designed to generate human-like text based on the input it receives, making it useful for a wide range of applications.",
    url: "https://chat.openai.com/",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Google_Gemini_logo_2025.svg/330px-Google_Gemini_logo_2025.svg.png",
    name: "Gemini",
    description:
      "Gemini is a next-generation AI model developed by Google DeepMind, designed to understand and generate human-like text with advanced reasoning capabilities.",
    url: "https://gemini.google.com/",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Claude_AI_logo.svg/330px-Claude_AI_logo.svg.png",
    name: "Claude",
    description:
      "Claude is an AI assistant developed by Anthropic, designed to provide helpful and safe responses to user queries while adhering to ethical guidelines.",
    url: "https://www.anthropic.com/claude",
  },
]

export default tools
