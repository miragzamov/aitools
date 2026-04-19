interface Tool {
  name: string;
  description: string;
  url: string;
  category: string;
  price?: string;
}

const tools: Tool[] = [
  // --- LANGUAGE & ASSISTANTS ---
  {
    name: "ChatGPT",
    description: "The industry-standard conversational AI for writing, coding, and general problem-solving.",
    url: "https://chatgpt.com/",
    category: "Language Models",
    price: "Freemium",
  },
  {
    name: "Gemini",
    description: "Google's multimodal AI with deep integration into Workspace and advanced reasoning.",
    url: "https://gemini.google.com/",
    category: "Language Models",
    price: "Freemium",
  },
  {
    name: "Claude",
    description: "An AI assistant known for nuanced, human-like writing and high safety standards.",
    url: "https://claude.ai/",
    category: "AI Assistants",
    price: "Freemium",
  },
  {
    name:"Grok",
    description:"An AI assistant built into X (formerly Twitter) for real-time information and social media insights.",
    url:"https://x.com/grok",
    category:"AI Assistants",
    price:"Freemium"
  },
  {
    name: "Perplexity AI",
    description: "A research-focused search engine that provides cited answers to real-time queries.",
    url: "https://www.perplexity.ai/",
    category: "Search & Research",
    price: "Freemium",
  },

  // --- IMAGES & VIDEO ---
  {
    name: "Midjourney",
    description: "High-end generative AI for creating artistic and hyper-realistic visual imagery.",
    url: "https://www.midjourney.com/",
    category: "Image Generation",
    price: "Freemium",
  },
  {
    name: "Runway",
    description: "A professional suite for generative video, offering text-to-video and advanced editing.",
    url: "https://runwayml.com/",
    category: "Video Generation",
    price: "Freemium",
  },
  {
    name: "Luma Dream Machine",
    description: "High-speed video generator capable of producing realistic 5-second cinematic clips.",
    url: "https://lumalabs.ai/dream-machine",
    category: "Video Generation",
    price: "Freemium",
  },
  {
    name: "Adobe Firefly",
    description: "Creative generative AI built into Photoshop for commercially-safe image editing.",
    url: "https://www.adobe.com/firefly",
    category: "Design & Creative",
    price: "Freemium",
  },
  // --- CODING & TECHNICAL ---
  {
    name: "GitHub Copilot",
    description: "An AI programmer that suggests code and functions in real-time within your editor.",
    url: "https://github.com/features/copilot",
    category: "Coding Assistants",
    price: "Freemium",
  },
  {
    name: "Cursor",
    description: "An AI-native code editor that understands your entire codebase for seamless refactoring.",
    url: "https://www.cursor.com/",
    category: "Coding Assistants",
    price: "Freemium",
  },
  {
    name: "Llama 3",
    description: "Meta’s powerful open-weights model for developers to build and deploy custom AI.",
    url: "https://llama.meta.com/",
    category: "Open Source Models",
  },
  {
    name: "Hugging Face",
    description: "The leading platform for sharing and deploying open-source machine learning models.",
    url: "https://huggingface.co/",
    category: "Open Source Models",
    price: "Freemium",

  },
  {
    name: "Replit Ai",
    description: "An AI coding assistant built into the Replit IDE for real-time code generation.",
    url: "https://replit.com/ai",
    category: "Coding Assistants",
    price: "Freemium",
  },
  // --- PRODUCTIVITY & AUDIO ---
  {
    name: "Notion AI",
    description: "Integrated workspace tool for summarizing notes, drafting docs, and organizing data.",
    url: "https://www.notion.so/product/ai",
    category: "Productivity",
    price: "Freemium",
  },
  {
    name: "ElevenLabs",
    description: "The leading platform for high-fidelity AI voice synthesis and emotional speech.",
    url: "https://elevenlabs.io/",
    category: "Audio & Speech",
    price: "Freemium",
  },
  {
    name: "Suno",
    description: "Generates full-length songs with vocals and lyrics from simple text descriptions.",
    url: "https://suno.com/",
    category: "Music Generation",
    price: "Freemium",
  },
  {
    name: "Fireflies.ai",
    description: "Automates meeting notes by transcribing and summarizing voice conversations.",
    url: "https://fireflies.ai/",
    category: "Productivity",
    price: "Freemium",
  },

  // --- DESIGN & SPECIALIZED ---
  {
    name: "Canva Magic Studio",
    description: "A suite of design-focused AI tools for social media, layouts, and presentations.",
    url: "https://www.canva.com/magic-home/",
    category: "Design & Creative",
    price: "Freemium",
  },
  {
    name: "Uizard",
    description: "AI-powered design tool that converts wireframes and sketches into UI mockups.",
    url: "https://uizard.io/",
    category: "Design & Creative",
    price: "Freemium",
  },
  {
    name: "Gamma",
    description: "Generates beautiful, interactive slide decks and websites from a single prompt.",
    url: "https://gamma.app/",
    category: "Productivity",
    price: "Freemium",
  },
  {
    name: "Mistral AI",
    description: "Efficient, high-performance language models optimized for speed and transparency.",
    url: "https://mistral.ai/",
    category: "Language Models",
    price: "Freemium",
  },
  {
    name: "Jasper",
    description: "Enterprise-grade AI platform for scaling marketing content and brand voice.",
    url: "https://www.jasper.ai/",
    category: "Marketing",
    price: "Freemium",
  }
];

export default tools;
