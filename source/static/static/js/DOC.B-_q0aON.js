import{_ as g,s as h,a as p}from"./index.CVLsvW-u.js";import{o as S,k as I,a as s,w as c,r as i}from"./vendor.Bu9sNYWM.js";import"./async.component.20261028.js";import"../../public.scmp.config.js";const P=""+new URL("../png/request_detail.CJkkbxgZ.png",import.meta.url).href,m=""+new URL("../png/api_doc_detail.DueNsqIJ.png",import.meta.url).href,f=""+new URL("../png/task_handler_detail.BzVmVNPY.png",import.meta.url).href,_=""+new URL("../png/ai_detail.B4o6lXMh.png",import.meta.url).href,H=""+new URL("../png/chat_detail.lVz80ktR.png",import.meta.url).href,T=""+new URL("../png/setting_detail.CyhLHbVy.png",import.meta.url).href,l=`<div class='title'>NBA-API 使用手册</div>

> 在浏览器里完成：**测接口、写文档、定时巡检、AI 助手、群聊**。  
> 左侧帮助目录与侧栏同序：API → Swagger → 组合文档 → 定时 → AI助手 → 群聊 → 配置 → 使用帮助；底栏还有 **数据统计**。

---

# 产品概览

**NBA-API** 面向开发、测试、产品团队，支持内网私有化与本地部署。

## 侧栏入口（正式端）

\`\`\`
上区：API管理 · Swagger管理 · 组合文档 · 定时任务 · AI助手 · 群聊 · 配置⚙ · 使用帮助
下区：数据统计
\`\`\`

| 入口 | 用来做什么                              |
|------|------------------------------------|
| **API管理** | 维护接口树，调试 HTTP(S) / SSE / WebSocket |
| **Swagger管理** | 填 OpenAPI 地址临时联调（不写入接口库）           |
| **组合文档** | 多接口业务流程说明，可协同、分享                   |
| **定时任务** | 按 CRON / 规则定时跑指定 API               |
| **AI助手** | 右侧抽屉本机私聊（不跳页、不上群）                  |
| **群聊** | 群列表与聊天室；需要时可 @AI、发送到群              |
| **配置 ⚙** | 用户 / AI / 请求头 / 域名 / 插件 / 开关       |
| **使用帮助** | 打开本手册                              |
| **数据统计** | 近 30 天 API / 组合文档新增（需远程服务）         |

**使用时请注意：**

| 情况 | 你会看到 |
|------|----------|
| **远程服务不通** | 只能进 **API管理**、**Swagger管理**；其它模块会提示不可用 |
| **有未保存修改时离开** | 从 API / 组合文档 / Swagger 切走会确认是否丢弃修改 |
| **测接口时开 AI** | 可同时开着右侧 AI 抽屉，不挡操作 |

## 分享页入口

打开分享链接时是另一套侧栏：**能测已分享内容，不能存进团队库**。

\`\`\`
分享页：API_DOC · AI助手 · 群聊 · 配置⚙ · 使用帮助
\`\`\`

分享页齿轮里只有：用户名称、AI 信息、全局请求头、暗色模式。  
没有插件管理、执行次数、远程/本地域名、自动保存、数据统计。

## 你能做什么（速览）

| 模块 | 一句话 |
|------|--------|
| **API 管理** | HTTP / SSE / WebSocket、脚本改参数、执行 N 次、分享、版本 |
| **Swagger 管理** | 对着现网文档临时执行，不落库 |
| **组合文档** | 把多接口写成一篇可协同的文档 |
| **定时任务** | 关联远程 API 做巡检 |
| **AI助手** | 本机密钥，侧栏私聊 |
| **群聊** | 在线协作；可再 @AI 发到群 |
| **配置** | 环境、Header、插件、主题等本机/团队项 |
| **数据统计** | 看近 30 天沉淀节奏 |

## 产品亮点

| 概要 | 说明 |
|------|------|
| **远程测本机接口** | 工具在服务器、接口在你电脑的 \`localhost\` 时，装好篡改猴并打开「自动启用插件」，HTTP 从本机浏览器发出（见 1.15）。<br>也可在单个 API 打开「使用插件」。<br>WebSocket 始终本机直连。 |
| **HTTP / SSE / WebSocket** | 一套界面覆盖三种协议。<br>含 REST 路径参数、SSE 流式「结果 N」、文件下载「点我保存」。<br>Body 支持 JSON5（可写注释）。 |
| **传输可加密** | 经服务器转发时可开启传输加密。<br>部署开启后界面操作不变，仍看「结果 N」的 Data / Header。 |
| **Fetch 转 API** | 浏览器 F12 → Network → Copy as fetch。<br>粘贴到 **FetchCode To API**，生成方法、地址、Header、Body，微调即可执行（见 1.13）。 |
| **Java 8 转文档** | 上传或粘贴 Java（≤8，含 Swagger 注解）。<br>一键生成请求/响应字段说明，需要时再生成 Body 示例 JSON。<br>与侧栏「Swagger 管理」是两回事（见 1.13）。 |
| **Swagger 临时联调** | 填现网 docs 地址就能点接口执行。<br>**不写入**团队接口库，适合对照文档冒烟（见第二章）。 |
| **脚本** | 在 **Script** 里发请求前改参数/消息（签名、时间戳等）。<br>可「运行脚本」只试跑不发真实请求。<br>配合 Version 版本快照选用参数（见 1.12）。 |
| **控制台** | 响应区 **Console** 是可交互终端（不是浏览器 F12）。<br>看脚本日志与参数摘要；可用 \`help\` / \`clear\` / \`grep\` / \`tail\` 等。 |
| **定时任务** | 侧栏时钟：CRON / RRULE / 指定时刻。<br>关联远程 API 做巡检、冒烟；日志可查看与下载（见第四章）。 |
| **批量执行与结果对照** | 单接口「执行 N 次」，或多标签顺序/并行（自动跳过 WS、SSE）。<br>每次对应可切换的「结果 N」，可看耗时图。 |
| **插件请求头** | 同一份篡改猴脚本可从目标站抓页面显式设置的请求头。<br>按主机勾选后套到同域名 API（见 1.9）。 |
| **远程库 + 本地私密 API** | 橘黄色仅本机、不可分享；远程库团队共享。<br>全局请求头本机优先于接口 Header 与插件请求头。 |
| **分享即开即测** | 单个 / 多选 / 已打开标签均可出链接，对方打开就能执行。<br>远程 API 他人保存后，你标签旁可出现红色同步图标。 |
| **组合文档可协同** | 多接口流程说明，多人一起改；可分享、下载。<br>文档里也能打开关联 API 再测。 |
| **本机 AI** | 密钥只存在本机齿轮配置，不上云。<br>侧栏抽屉私聊，或群里 @AI 再「发送到群」。 |
| **测 · 写 · 跑 · AI · 群** | 侧栏一条链路：测接口、写文档、定时、本机 AI、群聊。<br>底栏可看近 30 天沉淀统计。 |
| **自动保存 / 版本** | 可开启请求成功后自动更新有编辑的 API。<br>可记录版本，便于回看与脚本选用。 |

## 和其他工具比什么

> 对比对象：**Postman · Apifox · Insomnia · Swagger / Knife4j · YApi**（下表「常见情况」指这类工具里较普遍的能力，非逐产品打分）

| 能力 | NBA-API | 常见情况 |
|------|:-------:|----------|
| HTTP / SSE / WebSocket | ✅ / ✅ / ✅ | SSE/WS 因工具而异 |
| 服务器转发时传输加密 | ✅ | 少见 |
| 浏览器 + 私有化 | ✅ | 多为客户端或企业版 |
| 组合文档协同 | ✅ | 偏只读 |
| 定时跑 API | ✅ | 常需付费或另写 |
| 远程测 localhost | ✅ 插件 | 常需本地客户端 |
| 本地不上云的 API | ✅ | 较少 |
| 群聊 + 本机 AI | ✅ | 多数不内置 |
| Fetch 导入成 API | ✅ | 多数无 |
| Java 注解 → 字段文档 | ✅ | 少见内置 |
| Mock / CI | ❌ | 其它工具更强 |

---

# 一、API 管理

## 1.1 认一认界面

\`\`\`
左侧接口树 ──▶ 右侧工作区
                ├─ 已打开的 API 标签
                ├─ 地址栏（方法 / 域名 / 路径 / 执行）
                ├─ 配置（Detail / Header / Query / Body / Message / Script / Version）
                └─ 下方：Console / 耗时 /「结果 N」
                     └─ 结果内可切换 Data（正文）/ Header（响应头）
\`\`\`

![API 管理界面](./img/request_detail.png)

| 看到什么 | 表示什么 |
|----------|----------|
| <font color="orange">橘黄色</font> | **本地 API**（仅本机，不可分享、不可批量勾选进文档） |
| 标签前 \`*\` | 有未保存修改 |
| <font color="red">红色</font>同步图标 | 别人已更新，点一下拉取 |
| Script 旁黄色灯泡 | 已填写预处理脚本（有字就亮，清空就灭） |

## 1.2 建议怎么建目录

\`\`\`
项目 → 模块 → Controller（目录） → 具体 API
\`\`\`

## 1.3 远程 API 还是本地 API

| | 远程 | 本地（橘黄） |
|--|------|--------------|
| 存在哪 | 服务器，团队可见 | 仅你的浏览器 |
| 分享 / 批量进文档 / 多端同步 | ✅ | ❌ |
| 适合 | 正式接口库 | 临时、敏感调试 |

## 1.4 新建目录或 API

**入口：** 左侧 **⋯ → Create New**，或在目录上右键。

| 字段 | 说明 |
|------|------|
| 类型 | 目录 / API |
| 存储 | 远程 / 本地 |
| ContextPath / Prefix | 如 \`/api\`、Controller 前缀；新建子级会继承 |
| Method | GET / POST / PUT / DELETE / **WS** |
| Path | 如 \`/list\`、\`/user/{id}\` |
| SSEReq | 按 SSE 流式接收 |
| 使用插件 | 本机篡改猴代发（仅 HTTP，见 1.15） |

> 改父级 ContextPath / Prefix **不会**自动改已有子级。

## 1.5 树上能做什么

| 操作 | 怎么做 |
|------|--------|
| 打开 | 点叶子节点 |
| 调整结构 | 拖拽 |
| 搜索 | 顶部「搜索(名称或者路径)」 |
| 从 Fetch 导入 | ⋯ → **FetchCode To API** |
| 批量分享 / 组文档 | ⋯ → **选择 API** → 勾选 → 对应菜单 |

右键：刷新、编辑、删除（有子节点不可删）、新建子目录/子 API。  
执行下拉：执行 N 次、保存/更新、预览、分享、复制路径、记录版本。

## 1.6 多标签与批量执行

- 可同时打开多个 API；关标签时若有未保存会提示
- 标签可左右拖排序（请在看得见的范围内拖）
- 打开顺序会记住，刷新后大致恢复
- 标签右键：**顺序执行** / **并行执行**（**自动跳过 WebSocket、SSE**）
- 记录版本
- 还原修改

### 请求实际怎么发出去

| 你怎么测 | 怎么发出去 | 需要什么 |
|----------|------------|----------|
| 普通 HTTP（未开插件） | 经 **远程 NBA-API 服务** 转发 | 远程服务要通 |
| SSE | 每次单独走服务端流式通道 | 远程要通（本机插件代发除外） |
| WebSocket | 浏览器直连目标 | 不经批量；多标签批量会跳过 |
| 开了「自动启用插件」或「使用插件」的 HTTP | 篡改猴从本机发出 | 远程可不通；见 1.15 |

顺序 = 一个接一个；并行 = 多个 HTTP 尽量一起发。  
「执行 N 次」会得到「结果1」…「结果N」，规则同上。

> 远程不通时，走服务器的 HTTP / SSE 会失败，并提示可改用插件。  
> 本机 \`localhost\` / \`127.0.0.1\` 可开「自动启用插件」继续测。

## 1.7 完整地址怎么拼

\`\`\`
完整 URL = 域名 + ContextPath + Prefix + Path
\`\`\`

域名在「远程/本地域名配置」里选，须以 \`http(s)://\` 或 \`ws(s)://\` 开头。

## 1.8 测 HTTP / SSE

| 你想 | 操作 |
|------|------|
| 执行一次 | **执行**，或 \`Ctrl+Enter\` / \`⌘+Enter\` → 出现「结果1」 |
| 执行 N 次 | 执行下拉 → **执行 N 次**（N 在齿轮里配） |
| 保存 | \`Ctrl+S\` / \`⌘+S\`，或下拉 **更新 API** |
| 取消 | 执行中主按钮变 **取消**；已成功的结果仍保留 |

> 执行中不能关「结果 N」；也不能叠跑「执行 N 次」。

**REST 路径参数：** Path 写 \`/user/{id}\`，在 **Query** 里配 \`id\`。  
**SSE：** Api Detail 打开 **SSEReq**，在「结果 N → Data」看流式内容；取消后不再写入。

## 1.9 请求头（Header）

适用于 HTTP / SSE，以及 WebSocket 连接（WS 规则见 1.10）。

### 三种来源

| 来源 | 在哪配 | 范围 |
|------|--------|------|
| **全局请求头** | 齿轮 → 全局请求头配置 | 所有 API，本机 |
| **当前 API 的 Header** | Header 标签 | 当前接口 |
| **插件请求头** | 齿轮 → 插件请求头管理 | 按主机名；列表刷新后可能要重抓，勾选会记住 |

### 谁优先

**同名时：全局 > 当前 API > 插件。**  
未勾选的行不发送。  
「自动启用插件 / 使用插件」管**怎么发出去**；「插件请求头」管**多带哪些头**。

### 插件请求头怎么用

1. 按 **1.15** 装好篡改猴；\`@match\` 含本工具页和要监听的网站；\`collectHeaderHost\` 填主机名（可带端口）
2. **保持 API 管理页打开**（分享页没有此菜单）
3. 在目标站正常操作，让页面发出请求
4. 齿轮 → **插件请求头管理**，按主机看表格并勾选要用的头
5. 把当前 API **域名**设成同一主机再执行

| 情况 | 结果 |
|------|------|
| 新出现的参数名 | 默认不勾选 |
| 同名再次抓到 | 勾选按本机记忆；值更新为最新 |
| 浏览器自动带的 Cookie 等 | 抓不到 |
| 刷新后再进 | 列表清空需重抓；勾选过的名字会恢复 |

标签名是**被请求主机**，不一定是你正在看的页面主机。

### 表格列

参数名 / 参数值 / 描述 / 勾选。  
在「结果 N → Header」里可对响应头右键 **ToThisHeader** / **ToGlobalHeader** 回填。

## 1.10 测 WebSocket

**能做：** 直连 \`ws://\` / \`wss://\`；用 Header 配子协议；Query / Message 收发。  
**和 HTTP 不同：** 先「连接」再「发送」；连接成功后加载会结束，但连接仍保持，可用取消/断开来关。

**建议流程：** 配好域名与 Path → Header 写子协议需要的值 → Query 放 token（不要指望 Authorization 当 HTTP 头）→ 连接 → Message 发送 →「结果1 → Data」看收发。

**注意：** Header 三层合并后映射为**子协议**，不是普通 HTTP 头。  
默认脚本里 \`buildMessage\` 若仍是 \`return undefined\`，发出去会是 undefined，请改成 \`return msg\`。

## 1.11 各配置标签与结果区

- **Api Detail：** 方法、SSE、使用插件等
- **Query / Body：** 查询与正文（JSON5、表单、文件等）
- **Version：** 参数版本快照，可给脚本选用
- **结果区：** Console（终端，可 \`help\` / \`clear\` / \`grep\` / \`tail\`）、耗时图、「结果 N」
- 已点过 Console 时，新结果**不会抢走焦点**；从未点过则会落到「结果1」
- 可为返回 JSON 字段写说明文档

## 1.12 预处理脚本（Script）

在 **Script** 标签写发请求前的加工逻辑。右键 **初始化脚本** 会写入默认函数模板（HTTP/SSE：版本选择 + 参数加工；WebSocket 再带消息加工）。

灯泡亮 = 编辑区有内容（已配置脚本），不是「正在跑」。

| 菜单 | 做什么 |
|------|--------|
| **初始化脚本** | 写入默认函数模板，方便直接改 |
| **运行脚本** | **不发真实请求**，只按当前配置跑一遍脚本；日志与参数摘要进 **Console** |

> 「运行脚本」只调试脚本；侧栏 **Swagger 管理** 是另一套联调入口。

脚本里可用 \`console.log\` / \`info\` / \`warn\` / \`error\`，输出在响应区 **Console**（不是浏览器 F12）。

### 什么时候会跑

| 时机 | 版本选择 \`getVersion\` | 参数加工 \`buildParam\` | 消息加工 \`buildMessage\` |
|------|:---:|:---:|:---:|
| HTTP / SSE **执行**（含 N 次） | ✅ | ✅ | — |
| WS **连接** | ✅ | ✅（若有 Query 等） | ✅（Message 非空） |
| 「**运行脚本**」 | ✅ | ✅ | ✅（Message 非空） |
| WS **发送** | ❌ | ❌ | ✅（只跑这一项） |

### 版本选择 \`getVersion\`

\`\`\`js
function getVersion(reqNum) {
  // -1：本次跳过全部脚本加工
  //  0：用当前编辑中的配置
  // ≥1：先取 Version 里第 N 版，再加工
  return 0;
}
\`\`\`

「执行 N 次」时 \`reqNum\` 为 1…N；「运行脚本」时一般为 0。

### 参数加工 \`buildParam\`（HTTP / SSE）

\`\`\`js
function buildParam(reqNum, key, value, path, desc, type) {
  return value;
}
\`\`\`

对勾选参与请求的字段逐项调用，**返回值**即实际发送值。适合时间戳、签名、按次数变化的数据。

\`\`\`js
function buildParam(reqNum, key, value, path, desc, type) {
  if (key === 'timestamp') return Date.now();
  if (key === 'nonce') {
    const n = \`n-\${reqNum}-\${Date.now()}\`;
    console.info('nonce', reqNum, n);
    return n;
  }
  return value;
}
\`\`\`

### 消息加工 \`buildMessage\`（WebSocket）

\`\`\`js
function buildMessage(msg) {
  console.info('ws send', msg);
  return msg; // 务必返回要发出的内容
}
\`\`\`

连接或「运行脚本」时若 Message 非空也会加工（仍受 \`getVersion\` 影响）；点「发送」时只跑 \`buildMessage\`。

## 1.13 从 Fetch / Java 生成配置

**Fetch 导入：** F12 → Network → Copy as fetch → ⋯ → **FetchCode To API** → 粘贴 → **ToApi** → 微调后执行。

**Java → 字段说明：** 在字段描述处打开分析抽屉 → 上传 \`.java\` 或编辑源码 → **ToDocument**；需要示例 JSON 用 **To Body Param**。  
这是「注解变文档」，不是侧栏 **Swagger 管理**。

## 1.14 分享与同步

| 类型 | 入口 |
|------|------|
| 单个 | 执行下拉 → 分享 API |
| 已打开多个 | ⋯ → 分享已打开的 API |
| 勾选多个 | ⋯ → 选择 API → 分享 |

本地 API 不可分享。分享页可执行，不可保存进库。  
他人更新远程 API 后，点标签旁红色同步图标拉取。

## 1.15 用插件测本机 HTTP

**场景：** 工具在远程，接口在你电脑的 \`localhost\` / \`127.0.0.1\`。打开代发后，HTTP 从本机浏览器发出。

| 开关 | 位置 | 作用 |
|------|------|------|
| **自动启用插件** | 齿轮 → 插件管理 | 本机主机的 HTTP 自动走插件 |
| **使用插件** | Api Detail | 仅当前 API 强制走插件 |

同级还有：**点击下载插件**、**点击查看脚本**（弹窗里 \`@match\` 已按当前站点填好，复制到篡改猴即可）。  
抓「插件请求头」也靠同一份脚本，见 1.9。  
**WebSocket 不适用**（始终直连）。

**推荐步骤：**

1. 安装 [篡改猴](https://www.tampermonkey.net/) ≥ 5.3.3，允许运行用户脚本  
2. 齿轮 → 插件管理 → **点击查看脚本** → 复制 → 新建脚本粘贴  
3. 若要抓其它站请求头：再加 \`@match\`，并把主机名写入 \`collectHeaderHost\`  
4. 打开「自动启用插件」和/或当前 API「使用插件」

**备选：手改示例**（不走「查看脚本」时，改 \`@match\` / \`collectHeaderHost\`）：

脚本作用：① 代发本机 HTTP；② 在列出的网站上抓页面显式设置的请求头，供「插件请求头管理」使用。

\`\`\`js
// ==UserScript==
// @name         CORS Script
// @namespace    http://tampermonkey.net/
// @version      1.0.3
// @description  《NBA-API管理》油猴跨域脚本
// @author       fusheng.zhang
// @match        192.168.18.191/view/pc_scmp/*
// @match        www.baidu.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        unsafeWindow
// @grant        GM.xmlHttpRequest
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_addValueChangeListener
// ==/UserScript==

(function () {
  'use strict';
  const config = {
    collectHeaderHost: ["www.baidu.com"], // 收集请求头的 host
  }

  unsafeWindow._GM_xmlHttpRequest = GM?.xmlHttpRequest || GM_xmlhttpRequest;
  unsafeWindow._GM_addValueChangeListener = GM?.addValueChangeListener || GM_addValueChangeListener;
  const getValue = () => (GM?.getValue || GM_getValue)("NBA-COLLECT-HEADER");
  const setValue = (value) => (GM?.setValue || GM_setValue)("NBA-COLLECT-HEADER", value);
  const deleteValue = () => (GM?.deleteValue || GM_deleteValue)("NBA-COLLECT-HEADER")

  unsafeWindow._GM_getValue = getValue;
  unsafeWindow._GM_setValue = setValue;
  unsafeWindow._GM_deleteValue = deleteValue;

  if (!config.collectHeaderHost.includes(new URL(unsafeWindow.location.href).host)) return;

  /** 把请求头整理后交给 NBA-API 的「插件请求头管理」 */
  function collectHeaders({url, headers, type}) {
    if (!headers) return;
    let entries = [], host = new URL(url, unsafeWindow.location.href).host;
    if (typeof Headers !== 'undefined' && headers instanceof Headers) entries = Array.from(headers.entries());
    else if (Array.isArray(headers)) entries = headers.map(([k, v]) => [String(k), String(v)]);
    else if (typeof headers === 'object') entries = Object.entries(headers).map(([k, v]) => [k, String(v)]);
    if (!entries?.length) return;
    getValue().then((res = {}) => {
      res[host] = {headers: entries, type};
      setValue(res);
    })
  }

  // ========== 1. 拦截 fetch：发送时抓取请求头 ==========
  const originalFetch = unsafeWindow.fetch;
  unsafeWindow.fetch = function (input, init) {
    try {
      let url, merged;
      if (typeof Request !== 'undefined' && input instanceof Request) {
        url = input.url;
        merged = new Headers(input.headers);
        if (init?.headers) new Headers(init.headers).forEach((v, k) => merged.set(k, v));
      } else {
        url = String(input);
        merged = new Headers(init?.headers || undefined);
      }
      collectHeaders({url, headers: merged, type: 'fetch'});
    } catch (e) { }
    return originalFetch.apply(this, arguments);
  };

  // ========== 2. 拦截 XMLHttpRequest：setRequestHeader 时立即抓取 ==========
  const originalOpen = unsafeWindow.XMLHttpRequest.prototype.open;
  const originalSetRequestHeader = unsafeWindow.XMLHttpRequest.prototype.setRequestHeader;

  unsafeWindow.XMLHttpRequest.prototype.open = function (method, url) {
    this.__nbaCollect = {url, headers: {}};
    return originalOpen.apply(this, arguments);
  };

  unsafeWindow.XMLHttpRequest.prototype.setRequestHeader = function (name, value) {
    if (!this.__nbaCollect) this.__nbaCollect = {url: '', headers: {}};
    this.__nbaCollect.headers[name] = value;
    try {collectHeaders({url: this.__nbaCollect.url, headers: this.__nbaCollect.headers, type: 'fetch'})} catch (e) { }
    return originalSetRequestHeader.apply(this, arguments);
  };
})();
\`\`\`

## 1.16 快捷键

| 操作 | Windows | Mac |
|------|---------|-----|
| 执行 / 连接 | Ctrl+Enter | ⌘+Enter |
| 保存 / 更新 | Ctrl+S | ⌘+S |
| JSON 格式化 | — | Option+Shift+F |

---

# 二、Swagger 管理

侧栏进入。填 OpenAPI / Swagger 地址临时联调，**右侧操作与 API 管理类似，但不会写入接口树**。

\`\`\`
① 打开 Swagger 管理 → 填 docs 地址 →「加载」
② 展开分组 → 点接口 → 右侧改参数后「执行」/「执行 N 次(并行执行|串行执行)」
③ 在「结果 N」查看；脚本调试方式同 API 管理
\`\`\`

| 操作 | 说明 |
|------|------|
| 加载 / 展开分组 | 分组默认收起，展开才拉该组 |
| 搜索 | 按名称或路径；未展开的组会先补齐 |
| 无 tag | 落在「未分组_x」一类目录 |

**限制：** 不能保存/更新进库；离开后再进 API 管理，这里的临时内容不会变成你的树节点。要沉淀请到 API 管理新建或导入。

---

# 三、组合文档

![组合文档编辑](./img/api_doc_detail.png)

- 入口：侧栏文档图标  
- 创建：API 管理勾选后「编辑 API 组合文档」，或文档树新建（可关联 API）  
- 一组 API 对应一份文档；可协同、分享、下载；文档内可打开关联 API 测试  
- 协同前请在齿轮配置 **用户名称**  
- 本地 API 不能选入组合文档

---

# 四、定时任务

![定时任务调度中心](./img/task_handler_detail.png)

- 入口：侧栏时钟；可总开关、启停单任务、按描述/类型筛选  
- 新建必填：描述、开始时间、类型与表达式、调度 API、过期策略  
- 类型：时间戳（一次）、CRON、RRULE  
- 日志可重新加载、下载当前/历史  
- 仅能关联 **远程 API**

---

# 五、AI助手

侧栏机器人 → 右侧抽屉本机私聊。密钥在齿轮 → **AI信息配置**（仅本机）。群内用法见第六章。

## 5.1 先配密钥

1. 远程：填 DeepSeek / 千问 / 千帆密钥（按需）  
2. 本地：填 Base-Url 与 Authorization  
3. 保存；**不上传服务器**

未配密钥时远程商家可出现但拉不到模型；本地项要填了 Base-Url 才出现。  
用户信息里的**角色**会影响 AI 辅助风格。

## 5.2 抽屉怎么用

![侧栏 AI 助手抽屉](./img/ai_detail.png)

\`\`\`
① 配好密钥 → 点侧栏机器人
② 选智能体 / 思考模式 → 直接对话（助手左、你右）
③ 「清空聊天记录」只清本机该抽屉会话
\`\`\`

与群内差异：无「发送到群 / 退出 AI 会话」、不用 Shift+@；未选模型不能发。分享页同样有入口。

---

# 六、群聊

![群聊与 AI 助手](./img/chat_detail.png)

## 6.1 能做 / 不能做

| | 说明 |
|--|------|
| ✅ | 建群、邀请、改名、踢人、退群；在线状态；实时聊；@AI / 发送到群 |
| ❌ | 无离线补传、无历史漫游；不是可回溯的消息存档 |
| ⚠ | 被踢后不能发言等，可退群或等「重新加入」；拒绝邀请对方收不到回执 |

## 6.2 基本流程

\`\`\`
① 配用户名（要用 AI 再配密钥）→ 建群 → 邀请在线成员
② 回车发送，Shift+回车换行，Shift+@ 提人 / AI
③ 右键改名 / 退群；可清空本机该群记录
\`\`\`

## 6.3 群里用 AI

选智能体与思考模式 → Shift+@ 本地 AI 多轮（默认不上群）→ 需要时「发送到群」→「退出 AI 会话」。  
密钥与侧栏抽屉共用。

---

# 七、配置与环境

正式端齿轮菜单如下（分享页项更少，见前文）。

![配置下拉与插件管理](./img/setting_detail.png)

\`\`\`
用户信息配置 / AI信息配置
全局请求头 · 插件请求头 · 全局执行N次
远程域名 · 本地域名
插件管理 ▶ 下载插件 · 查看脚本 · 自动启用插件
自动保存 · 暗色模式
\`\`\`

| 项 | 说明 |
|----|------|
| 用户信息 | 显示名；角色影响 AI 风格 |
| AI 信息 | 密钥 / 本地地址，仅本机 |
| 全局请求头 | 同名时优先级最高 |
| 插件请求头 | 按主机勾选；见 1.9 |
| 执行 N 次 | 正整数 N |
| 远程/本地域名 | 须带协议头；本地域名 ≠ 本地 API |
| 插件管理 | 见 1.15 |
| 自动保存 | 请求成功后更新有编辑的 API |
| 暗色模式 | 默认可跟随系统 |

未识别到篡改猴时，「自动启用插件」打不开。

---

# 八、数据统计

底栏波形入口：API / 组合文档近 30 天每日新增柱状图。需远程服务；不通时会提示不可用。

---

# 典型使用场景

| 场景 | 怎么做 |
|------|--------|
| 新建并测 POST | 新建 → 配 Method/Path/Body → 执行 →「结果1」→ 更新 |
| 新成员上手 | 配用户名、远程域名、全局 Token（要用 AI 再配密钥） |
| 抓包导入 | Copy as fetch → FetchCode To API → 微调 → 执行 |
| 压测 10 次 | 齿轮设 N=10 → 执行 10 次 → 切换结果标签 |
| 跑一组流程 | 多标签排好序 → 右键顺序/并行（跳过 WS/SSE） |
| Swagger 联调 | 填 docs → 加载 → 点接口 → 执行（不落库） |
| 脚本打日志 | 「运行脚本」或正式执行 → Console |
| 写说明文档 | 选择 API → 编辑组合文档 → 分享 |
| 测本机 Spring Boot | 装插件 → 查看脚本安装 → 自动启用 → 域名 localhost |
| 带上目标站请求头 | 配脚本 → 目标站发请求 → 插件请求头管理勾选 → 域名一致 → 执行 |
| SSE / WebSocket | 开 SSEReq 或 WS 连接后看「结果 N」 |
| 定时巡检 | 新建任务 → CRON + API → 启动 → 看日志 |
| 侧栏问 AI / 群里同步 | 抽屉私聊；或群内 @AI 再「发送到群」 |
| 远程挂了 | 仍可进 API / Swagger；本机插件测 localhost |

---

# 常见问题（FAQ）

**Q：找不到 ResponseData / ResponseHeader？**  
A：已并入「结果 N」，用标签旁下拉在 **Data** / **Header** 间切换。

**Q：关不掉「结果 N」？**  
A：执行中禁止关。先取消或等跑完。

**Q：执行中点不了「执行 N 次」？**  
A：避免叠跑，取消或完成后再点。

**Q：Swagger 为什么不能更新 API？**  
A：故意不写库；要沉淀请到 API 管理新建/导入。分享页同理。

**Q：console.log 去哪了？**  
A：响应区 **Console** 终端（不是 F12）。可先点开再执行以免焦点被抢。

**Q：灯泡什么时候亮？**  
A：脚本区有内容就亮，表示已配置，不是正在运行。

**Q：getVersion 返回 -1 和 0？**  
A：\`-1\` 跳过加工；\`0\` 用当前配置加工；\`≥1\` 先取 Version 第 N 版再加工。

**Q：WS 发出去是 undefined？**  
A：把 \`buildMessage\` 改成 \`return msg\`（或你的内容）。

**Q：Header 没生效？**  
A：同名全局优先；未勾选不发。WS 下合并结果是子协议，不是 HTTP 头。

**Q：插件请求头是空的？**  
A：检查 \`@match\`、\`collectHeaderHost\`、API 管理页是否开着，并去目标站发一次请求。分享页无此菜单。

**Q：有头却没带上？**  
A：域名主机要和标签一致；行要勾选；同名时全局/局部会盖住插件头。

**Q：刷新后勾选还在吗？**  
A：列表要重抓；勾选过的参数名会按主机记住。

**Q：本地 API 不能分享？**  
A：只在本机，需改为远程存储。

**Q：自动启用插件仍失败？**  
A：篡改猴与 \`@match\`、目标是否本机 HTTP；非本机主机请勾 Api Detail「使用插件」。

**Q：「启用插件」菜单呢？**  
A：在 **插件管理** 里，文案是「自动启用 / 自动禁用」。

**Q：远程不通还能干什么？**  
A：API / Swagger；本机插件测 localhost；WS 直连。其它模块会提示不可用。

**Q：并行执行有的没跑？**  
A：批量会跳过 WS、SSE，请在各自标签单独执行。

**Q：切模块提示未保存？**  
A：确认离开会丢弃，可先保存。

**Q：别人看不到我的修改？**  
A：先「更新 API」；对方点红色同步图标。

**Q：Body JSON 报错？**  
A：支持 JSON5 注释；Mac 可用 Option+Shift+F 格式化。

**Q：RESTful 路径参数？**  
A：Path 写 \`{id}\`，Query 配同名参数。

**Q：WebSocket 用 Authorization？**  
A：不能当 HTTP 头；用 Query 或首条消息。

**Q：离线后再进群消息没了？**  
A：不做离线补传与漫游；重要内容请用组合文档等存档。

**Q：被踢了还能干什么？**  
A：不能发言/邀请/改名/踢人；可退群或等重新加入。

**Q：AI 入口在哪？**  
A：侧栏机器人（抽屉私聊）；群聊里工具条与 Shift+@。密钥都在齿轮 → AI信息配置。

**Q：抽屉和群里 AI 区别？**  
A：抽屉不能发到群、不用 @；群里可以。密钥共用。

**Q：为什么 AI 在左边？**  
A：助手在左、你在右，方便区分。

**Q：清空记录会清别人的吗？**  
A：不会，只清本机。

**Q：看不到 Local 智能体？**  
A：AI 信息里先填 Base-Url。

**Q：改密钥要刷新吗？**  
A：一般不用；可重新选一下模型。

**Q：拒绝邀请对方怎么还显示我？**  
A：拒绝只在本机生效，对方收不到回执。

---

# NBA-API

**一句话：** 团队在线 API 测试与文档平台——测接口、写文档、定时、AI、群聊，一个工具搞定。

1. **测得全** — HTTP / SSE / WebSocket，执行 N 次对照「结果 N」；Swagger 可临时联调  
2. **传得稳** — 经服务器转发可开传输加密；下载仍可保存  
3. **环境不卡** — 插件测 localhost；插件请求头套目标站头；AI 密钥仅本机；底栏看统计  

**适合：** 后端维护接口库、前端联调、测试巡检与批量执行、小团队在线对齐。
`,N={"./img/request_detail.png":P,"./img/api_doc_detail.png":m,"./img/task_handler_detail.png":f,"./img/ai_detail.png":_,"./img/chat_detail.png":H,"./img/setting_detail.png":T},w={urlMapping:N,_is_md:!0,toJSON:()=>l,toString:()=>l,valueOf:()=>l},C={name:"NBA-API-DOC",components:{},setup(){return{}},emits:[],props:{},data(){return{folders:[]}},computed:{el(){return this.$refs.docWrapper.$el},content(){return[w]}},watch:{},created(){},mounted(){},methods:{handleNodeClick(a){const n=this.el.querySelector(`[data-tree-id='${a.uniFlag}']`);n&&n.scrollIntoView({behavior:"smooth"})},onDocChange(){let a=[],n=[],d=0;Array.from(this.el.querySelectorAll("h1,h2,h3,h4,h5,h6")).map((r,A)=>{const e=parseInt(r.tagName.slice(1),10),o=h("dti_");r.setAttribute("data-tree-id",o);const t={id:++d,pid:0,label:r.textContent.trim(),uniFlag:o};for(;n.length&&n[n.length-1].level>=e;)n.pop();n.length>0&&(t.pid=n[n.length-1].id),n.push({...t,level:e}),a.push(t)}),this.folders=p(a,"id","pid")}}},b={class:"nba-api-doc"};function E(a,n,d,r,A,e){const o=i("el-tree"),t=i("s3-scroll"),u=i("s3-doc");return S(),I("div",b,[s(t,{class:"folder"},{default:c(()=>[s(o,{data:A.folders,onNodeClick:e.handleNodeClick},null,8,["data","onNodeClick"])]),_:1}),s(t,null,{default:c(()=>[s(u,{ref:"docWrapper",class:"wrapper_detail",unUseNum:"",content:e.content,onChange:e.onDocChange},null,8,["content","onChange"])]),_:1})])}const W=g(C,[["render",E],["__scopeId","data-v-a95b9845"]]);export{W as default};
