2026-09-27T13:40:24.363Z	Initializing build environment...
2026-09-27T13:40:28.255Z	Success: Finished initializing build environment
2026-09-27T13:40:29.160Z	Cloning repository...
2026-09-27T13:40:30.382Z	No build output detected to cache. Skipping.
2026-09-27T13:40:30.382Z	No dependencies detected to cache. Skipping.
2026-09-27T13:40:30.384Z	Detected the following tools from environment: bun@1.2.15, nodejs@24.18.0
2026-09-27T13:40:30.386Z	Installing project dependencies: bun install
2026-09-27T13:40:30.538Z	bun install v1.2.15 (df017990)
2026-09-27T13:40:30.541Z	
2026-09-27T13:40:30.542Z	[21.00ms] done
2026-09-27T13:40:30.542Z	No packages! Deleted empty lockfile
2026-09-27T13:40:30.661Z	Executing user deploy command: npx wrangler deploy
2026-09-27T13:40:31.852Z	npm warn exec The following package was not found and will be installed: wrangler@4.141.0
2026-09-27T13:40:38.625Z	
2026-09-27T13:40:38.626Z	 ⛅️ wrangler 4.141.0
2026-09-27T13:40:38.626Z	────────────────────
2026-09-27T13:40:38.710Z	
2026-09-27T13:40:38.710Z	Detected Project Settings:
2026-09-27T13:40:38.711Z	 - Worker Name: chelsea-designer
2026-09-27T13:40:38.712Z	 - Framework: Static
2026-09-27T13:40:38.712Z	 - Output Directory: .
2026-09-27T13:40:38.712Z	
2026-09-27T13:40:38.712Z	? Do you want to modify these settings?
2026-09-27T13:40:38.712Z	🤖 Using fallback value in non-interactive context: no
2026-09-27T13:40:38.715Z	
2026-09-27T13:40:38.717Z	📦 Install packages:
2026-09-27T13:40:38.717Z	 - wrangler (devDependency)
2026-09-27T13:40:38.717Z	
2026-09-27T13:40:38.717Z	📝 Update package.json scripts:
2026-09-27T13:40:38.717Z	 - "deploy": "wrangler deploy"
2026-09-27T13:40:38.718Z	 - "preview": "wrangler dev"
2026-09-27T13:40:38.718Z	
2026-09-27T13:40:38.718Z	📄 Create wrangler.jsonc:
2026-09-27T13:40:38.718Z	  {
2026-09-27T13:40:38.718Z	    "$schema": "node_modules/wrangler/config-schema.json",
2026-09-27T13:40:38.718Z	    "name": "chelsea-designer",
2026-09-27T13:40:38.719Z	    "compatibility_date": "2026-09-25",
2026-09-27T13:40:38.719Z	    "observability": {
2026-09-27T13:40:38.719Z	      "enabled": true
2026-09-27T13:40:38.719Z	    },
2026-09-27T13:40:38.719Z	    "assets": {
2026-09-27T13:40:38.722Z	      "directory": "."
2026-09-27T13:40:38.723Z	    }
2026-09-27T13:40:38.723Z	  }
2026-09-27T13:40:38.723Z	
2026-09-27T13:40:38.723Z	? Proceed with setup?
2026-09-27T13:40:38.723Z	🤖 Using fallback value in non-interactive context: yes
2026-09-27T13:40:42.349Z	├ Adding Wrangler files to the .gitignore file
2026-09-27T13:40:42.349Z	│ updated .gitignore file
2026-09-27T13:40:42.349Z	│
2026-09-27T13:40:42.728Z	🌀 Building list of assets...
2026-09-27T13:40:42.762Z	✨ Read 2115 files from the assets directory /opt/buildhome/repo
2026-09-27T13:40:42.984Z	
2026-09-27T13:40:42.984Z	Cloudflare collects anonymous telemetry about your usage of Wrangler. Learn more at https://github.com/cloudflare/workers-sdk/tree/main/packages/wrangler/telemetry.md
2026-09-27T13:40:42.985Z	
2026-09-27T13:40:43.059Z	✘ [ERROR] Asset too large.
2026-09-27T13:40:43.060Z	
2026-09-27T13:40:43.060Z	  Cloudflare Workers supports assets with sizes of up to 25 MiB. We found a file /opt/buildhome/repo/node_modules/workerd/bin/workerd with a size of 128 MiB.
2026-09-27T13:40:43.060Z	  Ensure all assets in your assets directory "/opt/buildhome/repo" conform with the Workers maximum size requirement.
2026-09-27T13:40:43.060Z	
2026-09-27T13:40:43.060Z	
2026-09-27T13:40:43.621Z	🪵  Logs were written to "/opt/buildhome/.config/.wrangler/logs/wrangler-2026-09-27_13-40-38_305.log"
2026-09-27T13:40:43.724Z	Failed: error occurred while running deploy command
