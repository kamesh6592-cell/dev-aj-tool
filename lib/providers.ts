import DeepSeekLogo from "@/assets/deepseek.svg";
import QwenLogo from "@/assets/qwen.svg";
import KimiLogo from "@/assets/kimi.svg";
import ZaiLogo from "@/assets/zai.svg";
import MiniMaxLogo from "@/assets/minimax.svg";

export const PROVIDERS = {
  "fireworks-ai": {
    name: "Fireworks AI",
    id: "fireworks-ai",
  },
  nebius: {
    name: "Nebius AI Studio",
    id: "nebius",
  },
  sambanova: {
    name: "SambaNova",
    id: "sambanova",
  },
  novita: {
    name: "NovitaAI",
    id: "novita",
  },
  hyperbolic: {
    name: "Hyperbolic",
    id: "hyperbolic",
  },
  together: {
    name: "Together AI",
    id: "together",
  },
  groq: {
    name: "Groq",
    id: "groq",
  },
  "zai-org": {
    name: "Z.ai",
    id: "zai",
  },
};

export const MODELS = [
  {
    value: "deepseek-ai/DeepSeek-V3-0324",
    label: "DeepSeek V3 O324",
    providers: ["fireworks-ai", "nebius", "sambanova", "novita", "hyperbolic"],
    autoProvider: "novita",
    logo: DeepSeekLogo,
    companyName: "DeepSeek",
  },
  // {
  //   value: "deepseek-ai/DeepSeek-V3.1",
  //   label: "DeepSeek V3.1",
  //   providers: ["fireworks-ai", "novita"],
  //   autoProvider: "fireworks-ai",
  //   logo: DeepSeekLogo,
  //   companyName: "DeepSeek",
  // },
  // {
  //   value: "deepseek-ai/DeepSeek-V3.1-Terminus",
  //   label: "DeepSeek V3.1 Terminus",
  //   providers: ["novita"],
  //   autoProvider: "novita",
  //   logo: DeepSeekLogo,
  //   companyName: "DeepSeek",
  // },
  {
    value: "deepseek-ai/DeepSeek-V3.2-Exp",
    label: "DeepSeek V3.2 Exp",
    providers: ["novita"],
    autoProvider: "novita",
    logo: DeepSeekLogo,
    companyName: "DeepSeek",
  },
  {
    value: "Qwen/Qwen3-Coder-480B-A35B-Instruct",
    label: "Qwen3 Coder 480B A35B Instruct",
    providers: ["novita", "hyperbolic"],
    autoProvider: "novita",
    logo: QwenLogo,
    companyName: "Qwen",
  },
  {
    value: "moonshotai/Kimi-K2-Instruct-0905",
    label: "Kimi K2 Instruct",
    providers: ["together", "novita", "groq"],
    autoProvider: "groq",
    logo: KimiLogo,
    companyName: "Kimi",
  },
  // {
  //   value: "moonshotai/Kimi-K2-Instruct-0905",
  //   label: "Kimi K2 Instruct 0905",
  //   providers: ["together", "groq", "novita"],
  //   autoProvider: "groq",
  //   logo: KimiLogo,
  //   companyName: "Kimi",
  // },
  // {
  //   value: "moonshotai/Kimi-K2-Thinking",
  //   label: "Kimi K2 Thinking",
  //   logo: KimiLogo,
  //   companyName: "Kimi",
  //   isNew: true,
  //   temperature: 1.0,
  // },
  {
    value: "zai-org/GLM-4.6",
    label: "GLM-4.6",
    logo: ZaiLogo,
    companyName: "Z.ai",
  },
  {
    value: "MiniMaxAI/MiniMax-M2",
    label: "MiniMax M2",
    logo: MiniMaxLogo,
    companyName: "MiniMax",
    top_k: 40,
    temperature: 1.0,
    top_p: 0.95,
  },
];
