"use strict";(self.webpackChunkeliza_docs=self.webpackChunkeliza_docs||[]).push([[6803],{7248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"installation","title":"Installation","description":"Currently eliza is dependent on Supabase for local development. You can install it with the following command:","source":"@site/docs/installation.md","sourceDirName":".","slug":"/installation","permalink":"/eliza/docs/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/ai16z/eliza/tree/main/docs/docs/installation.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3}}');var s=n(4848),l=n(8453);const o={sidebar_position:3},i="Installation",r={},d=[{value:"Select your database adapter",id:"select-your-database-adapter",level:2},{value:"Set up environment variables",id:"set-up-environment-variables",level:3},{value:"SQLite Local Setup (Easiest)",id:"sqlite-local-setup-easiest",level:3},{value:"Supabase Local Setup",id:"supabase-local-setup",level:3},{value:"Supabase Cloud Setup",id:"supabase-cloud-setup",level:3},{value:"Local Model Setup",id:"local-model-setup",level:3},{value:"Development",id:"development",level:3},{value:"Usage",id:"usage",level:3}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"installation",children:"Installation"})}),"\n",(0,s.jsx)(t.p,{children:"Currently eliza is dependent on Supabase for local development. You can install it with the following command:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"pnpm install eliza"})}),"\n",(0,s.jsx)(t.h2,{id:"select-your-database-adapter",children:"Select your database adapter"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"pnpm install sqlite-vss better-sqlite3 # for sqlite (simple, for local development)\n\npnpm install @supabase/supabase-js # for supabase (more complicated but can be deployed at scale)\n"})}),"\n",(0,s.jsx)(t.h3,{id:"set-up-environment-variables",children:"Set up environment variables"}),"\n",(0,s.jsx)(t.p,{children:"You will need a Supbase account, as well as an OpenAI developer account."}),"\n",(0,s.jsx)(t.p,{children:"Copy and paste the .dev.vars.example to .dev.vars and fill in the environment variables:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'SUPABASE_URL="https://your-supabase-url.supabase.co"\nSUPABASE_SERVICE_API_KEY="your-supabase-service-api-key"\nOPENAI_API_KEY="your-openai-api-key"\n'})}),"\n",(0,s.jsx)(t.h3,{id:"sqlite-local-setup-easiest",children:"SQLite Local Setup (Easiest)"}),"\n",(0,s.jsx)(t.p,{children:"You can use SQLite for local development. This is the easiest way to get started with eliza."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'import { BgentRuntime, SqliteDatabaseAdapter } from "eliza";\nimport { Database } from "sqlite3";\nconst sqliteDatabaseAdapter = new SqliteDatabaseAdapter(new Database(":memory:"));\n\nconst runtime = new BgentRuntime({\n  serverUrl: "https://api.openai.com/v1",\n  token: process.env.OPENAI_API_KEY, // Can be an API key or JWT token for your AI services\n  databaseAdapter: sqliteDatabaseAdapter,\n  // ... other options\n});\n'})}),"\n",(0,s.jsx)(t.h3,{id:"supabase-local-setup",children:"Supabase Local Setup"}),"\n",(0,s.jsx)(t.p,{children:"First, you will need to install the Supabase CLI. You can install it using the instructions here."}),"\n",(0,s.jsx)(t.p,{children:"Once you have the CLI installed, you can run the following commands to set up a local Supabase instance:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"supabase init\nsupabase start\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You can now start the eliza project with ",(0,s.jsx)(t.code,{children:"pnpm run dev"})," and it will connect to the local Supabase instance by default."]}),"\n",(0,s.jsx)(t.p,{children:"NOTE: You will need Docker installed for this to work. If that is an issue for you, use the Supabase Cloud Setup instructions instead below)."}),"\n",(0,s.jsx)(t.h3,{id:"supabase-cloud-setup",children:"Supabase Cloud Setup"}),"\n",(0,s.jsx)(t.p,{children:"This library uses Supabase as a database. You can set up a free account at supabase.io and create a new project."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Step 1: On the Subase All Projects Dashboard, select \u201cNew Project\u201d."}),"\n",(0,s.jsx)(t.li,{children:"Step 2: Select the organization to store the new project in, assign a database name, password and region."}),"\n",(0,s.jsx)(t.li,{children:"Step 3: Select \u201cCreate New Project\u201d."}),"\n",(0,s.jsx)(t.li,{children:"Step 4: Wait for the database to setup. This will take a few minutes as supabase setups various directories."}),"\n",(0,s.jsx)(t.li,{children:"Step 5: Select the \u201cSQL Editor\u201d tab from the left navigation menu."}),"\n",(0,s.jsx)(t.li,{children:'Step 6: Copy in your own SQL dump file or optionally use the provided file in the eliza directory at: "src/supabase/db.sql". Note: You can use the command "supabase db dump" if you have a pre-exisiting supabase database to generate the SQL dump file.'}),"\n",(0,s.jsx)(t.li,{children:"Step 7: Paste the SQL code into the SQL Editor and hit run in the bottom right."}),"\n",(0,s.jsx)(t.li,{children:"Step 8: Select the \u201cDatabases\u201d tab from the left navigation menu to verify all of the tables have been added properly."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:['Once you\'ve set up your Supabase project, you can find your API key by going to the "Settings" tab and then "API". You will need to set the',(0,s.jsx)(t.code,{children:" SUPABASE_URL and SUPABASE_SERVICE_API_KEY"})," environment variables in your ",(0,s.jsx)(t.code,{children:".dev.vars"})," file."]}),"\n",(0,s.jsx)(t.h3,{id:"local-model-setup",children:"Local Model Setup"}),"\n",(0,s.jsx)(t.p,{children:"While eliza uses ChatGPT 3.5 by default, you can use a local model by setting the serverUrl to a local endpoint. The LocalAI project is a great way to run a local model with a compatible API endpoint."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"const runtime = new BgentRuntime({\n  serverUrl: process.env.LOCALAI_URL,\n  token: process.env.LOCALAI_TOKEN, // Can be an API key or JWT token for your AI service\n  // ... other options\n});\n"})}),"\n",(0,s.jsx)(t.h3,{id:"development",children:"Development"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"pnpm run dev # start the server\n\npnpm run shell # start the shell in another terminal to talk to the default agent\n"})}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'      import { BgentRuntime, SupabaseDatabaseAdapter, SqliteDatabaseAdapter } from "eliza";\n\n      const sqliteDatabaseAdapter = new SqliteDatabaseAdapter(new Database(":memory:"));\n\n\n      // You can also use Supabase like this\n      // const supabaseDatabaseAdapter = new SupabaseDatabaseAdapter(\n      //   process.env.SUPABASE_URL,\n      //   process.env.SUPABASE_SERVICE_API_KEY)\n      //   ;\n\n\n      const runtime = new BgentRuntime({\n        serverUrl: "https://api.openai.com/v1",\n        token: process.env.OPENAI_API_KEY, // Can be an API key or JWT token for your AI services\n        databaseAdapter: sqliteDatabaseAdapter,\n        actions: [\n          /* your custom actions */\n        ],\n        evaluators: [\n          /* your custom evaluators */\n        ],\n        model: "gpt-3.5-turbo", // whatever model you want to use\n        embeddingModel: "text-embedding-3-small", // whatever model you want to use\n      });\n'})})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(6540);const s={},l=a.createContext(s);function o(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);