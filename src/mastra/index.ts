import { Mastra } from "@mastra/core/mastra";
import { weatherWorkflow } from "./workflows";
import { weatherAgent } from "./agents";
import { weatherTool } from "./tools";
import { MCPServer } from "@mastra/mcp";

const mcpServer = new MCPServer({
  name: "My Custom Server",
  version: "1.0.0",
  tools: { weatherTool  },
  agents: { weatherAgent },
  workflows: { weatherWorkflow },
});

export const mastra = new Mastra({
  workflows: { weatherWorkflow },
  agents: { weatherAgent },
  mcpServers: { mcpServer },
});
