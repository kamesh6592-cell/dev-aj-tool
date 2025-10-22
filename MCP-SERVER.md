# DeepSite MCP Server

DeepSite is now available as an MCP (Model Context Protocol) server, enabling AI assistants like Claude to create websites directly using natural language.

## Two Ways to Use DeepSite MCP

**Quick Comparison:**

| Feature | Option 1: HTTP Server | Option 2: Local Server |
|---------|----------------------|------------------------|
| **Setup Difficulty** | ✅ Easy (just config) | ⚠️ Requires installation |
| **Authentication** | HF Token in config header | HF Token or session cookie in env |
| **Best For** | Most users | Developers, custom modifications |
| **Maintenance** | ✅ Always up-to-date | Need to rebuild for updates |

**Recommendation:** Use Option 1 (HTTP Server) unless you need to modify the MCP server code.

---

### 🌐 Option 1: HTTP Server (Recommended)

**No installation required!** Use DeepSite's hosted MCP server.

#### Setup for Claude Desktop

Add to your Claude Desktop configuration file:

**MacOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`  
**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "deepsite": {
      "url": "https://huggingface.co/deepsite/api/mcp",
      "transport": {
        "type": "sse"
      },
      "headers": {
        "Authorization": "Bearer hf_your_token_here"
      }
    }
  }
}
```

**Getting Your Hugging Face Token:**

1. Go to https://huggingface.co/settings/tokens
2. Create a new token with `write` access
3. Copy the token
4. Add it to the `Authorization` header in your config (recommended for security)
5. Alternatively, you can pass it as the `hf_token` parameter when using the tool

**⚠️ Security Recommendation:** Use the `Authorization` header in your config instead of passing the token in chat. This keeps your token secure and out of conversation history.

#### Example Usage with Claude

> "Create a portfolio website using DeepSite. Include a hero section, about section, and contact form."

Claude will automatically:
1. Use the `create_project` tool
2. Authenticate using the token from your config
3. Create the website on Hugging Face Spaces
4. Return the URLs to access your new site

---

### 💻 Option 2: Local Server

Run the MCP server locally for more control or offline use.

> **Note:** Most users should use Option 1 (HTTP Server) instead. Option 2 is only needed if you want to run the MCP server locally or modify its behavior.

#### Installation

```bash
cd mcp-server
npm install
npm run build
```

#### Setup for Claude Desktop

**Method A: Using HF Token (Recommended)**

```json
{
  "mcpServers": {
    "deepsite-local": {
      "command": "node",
      "args": ["/absolute/path/to/deepsite-v3/mcp-server/dist/index.js"],
      "env": {
        "HF_TOKEN": "hf_your_token_here",
        "DEEPSITE_API_URL": "https://huggingface.co/deepsite"
      }
    }
  }
}
```

**Method B: Using Session Cookie (Alternative)**

```json
{
  "mcpServers": {
    "deepsite-local": {
      "command": "node",
      "args": ["/absolute/path/to/deepsite-v3/mcp-server/dist/index.js"],
      "env": {
        "DEEPSITE_AUTH_COOKIE": "your-session-cookie",
        "DEEPSITE_API_URL": "https://huggingface.co/deepsite"
      }
    }
  }
}
```

**Getting Your Session Cookie (Method B only):**

1. Log in to https://huggingface.co/deepsite
2. Open Developer Tools (F12)
3. Go to Application → Cookies
4. Copy the session cookie value
5. Set as `DEEPSITE_AUTH_COOKIE` in the config

---

## Available Tools

### `create_project`

Creates a new DeepSite project with HTML/CSS/JS files.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | No | Project title (defaults to "DeepSite Project") |
| `pages` | array | Yes | Array of file objects with `path` and `html` |
| `prompt` | string | No | Commit message/description |
| `hf_token` | string | No* | Hugging Face API token (*optional if provided via Authorization header in config) |

**Page Object:**
```typescript
{
  path: string;  // e.g., "index.html", "styles.css", "script.js"
  html: string;  // File content
}
```

**Returns:**
```json
{
  "success": true,
  "message": "Project created successfully!",
  "projectUrl": "https://huggingface.co/deepsite/username/project-name",
  "spaceUrl": "https://huggingface.co/spaces/username/project-name",
  "liveUrl": "https://username-project-name.hf.space",
  "spaceId": "username/project-name",
  "projectId": "space-id",
  "files": ["index.html", "styles.css"]
}
```

---

## Example Prompts for Claude

### Simple Landing Page
> "Create a modern landing page for my SaaS product using DeepSite. Include a hero section with CTA, features grid, and footer. Use gradient background."

### Portfolio Website
> "Build a portfolio website with DeepSite. I need:
> - Hero section with my name and photo
> - Projects gallery with 3 sample projects
> - Skills section with tech stack
> - Contact form
> Use dark mode with accent colors."

### Blog Homepage
> "Create a blog homepage using DeepSite. Include:
> - Header with navigation
> - Featured post section
> - Grid of recent posts (3 cards)
> - Sidebar with categories
> - Footer with social links
> Clean, minimal design."

### Interactive Dashboard
> "Make an analytics dashboard with DeepSite:
> - Sidebar navigation
> - 4 metric cards at top
> - 2 chart placeholders
> - Data table
> - Modern, professional UI with charts.css"

---

## Direct API Usage

You can also call the HTTP endpoint directly:

### Using Authorization Header (Recommended)

```bash
curl -X POST https://huggingface.co/deepsite/api/mcp \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer hf_your_token_here" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "create_project",
      "arguments": {
        "title": "My Website",
        "pages": [
          {
            "path": "index.html",
            "html": "<!DOCTYPE html><html><head><title>Hello</title></head><body><h1>Hello World!</h1></body></html>"
          }
        ]
      }
    }
  }'
```

### Using Token Parameter (Fallback)

```bash
curl -X POST https://huggingface.co/deepsite/api/mcp \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "create_project",
      "arguments": {
        "title": "My Website",
        "pages": [
          {
            "path": "index.html",
            "html": "<!DOCTYPE html><html><head><title>Hello</title></head><body><h1>Hello World!</h1></body></html>"
          }
        ],
        "hf_token": "hf_xxxxx"
      }
    }
  }'
```

### List Available Tools

```bash
curl -X POST https://huggingface.co/deepsite/api/mcp \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/list",
    "params": {}
  }'
```

---

## Testing

### Test Local Server

```bash
cd mcp-server
./test.sh
```

### Test HTTP Server

```bash
curl -X POST https://huggingface.co/deepsite/api/mcp \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list","params":{}}'
```

---

## Migration Guide: From Parameter to Header Auth

If you're currently passing the token as a parameter in your prompts, here's how to migrate to the more secure header-based authentication:

### Step 1: Update Your Config

Edit your Claude Desktop config file and add the `headers` section:

```json
{
  "mcpServers": {
    "deepsite": {
      "url": "https://huggingface.co/deepsite/api/mcp",
      "transport": {
        "type": "sse"
      },
      "headers": {
        "Authorization": "Bearer hf_your_actual_token_here"
      }
    }
  }
}
```

### Step 2: Restart Claude Desktop

Completely quit and restart Claude Desktop for the changes to take effect.

### Step 3: Use Simpler Prompts

Now you can simply say:
> "Create a portfolio website with DeepSite"

Instead of:
> "Create a portfolio website with DeepSite using token `hf_xxxxx`"

Your token is automatically included in all requests via the header!

---

## Security Notes

### HTTP Server (Option 1)
- **✅ Recommended:** Store your HF token in the `Authorization` header in your Claude Desktop config
- The token is stored locally on your machine and never exposed in chat
- The token is sent with each request but only used to authenticate with Hugging Face API
- DeepSite does not store your token
- Use tokens with minimal required permissions (write access to spaces)
- You can revoke tokens anytime at https://huggingface.co/settings/tokens
- **⚠️ Fallback:** You can still pass the token as a parameter, but this is less secure as it appears in conversation history

### Local Server (Option 2)
- Use `HF_TOKEN` environment variable (same security as Option 1)
- Or use `DEEPSITE_AUTH_COOKIE` if you prefer session-based auth
- All authentication data stays on your local machine
- Better for development and testing
- No need for both HTTP Server and Local Server - choose one!

---

## Troubleshooting

### "Invalid Hugging Face token"
- Verify your token at https://huggingface.co/settings/tokens
- Ensure the token has write permissions
- Check that you copied the full token (starts with `hf_`)

### "At least one page is required"
- Make sure you're providing the `pages` array
- Each page must have both `path` and `html` properties

### "Failed to create project"
- Check your token permissions
- Ensure the project title doesn't conflict with existing spaces
- Verify your Hugging Face account is in good standing

### Claude doesn't see the tool
- Restart Claude Desktop after modifying the config
- Check that the JSON config is valid (no trailing commas)
- For HTTP: verify the URL is correct
- For local: check the absolute path to index.js

---

## Architecture

### HTTP Server Flow
```
Claude Desktop
      ↓
 (HTTP Request)
      ↓
huggingface.co/deepsite/api/mcp
      ↓
Hugging Face API (with user's token)
      ↓
New Space Created
      ↓
URLs returned to Claude
```

### Local Server Flow
```
Claude Desktop
      ↓
 (stdio transport)
      ↓
Local MCP Server
      ↓
 (HTTP to DeepSite API)
      ↓
huggingface.co/deepsite/api/me/projects
      ↓
New Space Created
```

---

## Contributing

The MCP server implementation lives in:
- HTTP Server: `/app/api/mcp/route.ts`
- Local Server: `/mcp-server/index.ts`

Both use the same core DeepSite logic for creating projects - no duplication!

---

## License

MIT

---

## Resources

- [Model Context Protocol Spec](https://modelcontextprotocol.io/)
- [DeepSite Documentation](https://huggingface.co/deepsite)
- [Hugging Face Spaces](https://huggingface.co/docs/hub/spaces)
- [Claude Desktop](https://claude.ai/desktop)

