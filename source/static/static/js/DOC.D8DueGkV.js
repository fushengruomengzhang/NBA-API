import{_ as u,s as p,a as P}from"./index.hDkcmVYY.js";import{o as g,k as h,a as s,w as c,r as i}from"./vendor.Bu9sNYWM.js";import"./async.component.20260921.js";import"../../public.scmp.config.js";const S=""+new URL("../png/request_detail.CJkkbxgZ.png",import.meta.url).href,m=""+new URL("../png/api_doc_detail.DueNsqIJ.png",import.meta.url).href,f=""+new URL("../png/task_handler_detail.BzVmVNPY.png",import.meta.url).href,w=""+new URL("../png/ai_detail.B4o6lXMh.png",import.meta.url).href,H=""+new URL("../png/chat_detail.lVz80ktR.png",import.meta.url).href,_=""+new URL("../png/setting_detail.CyhLHbVy.png",import.meta.url).href,l=`<div class='title'>NBA-API 使用手册（完整版）</div>

> 浏览器端团队 API 平台：**测接口、写文档、定时调度、AI助手、群聊** 一体。  
> 左侧帮助目录与壳层侧栏同序：API → Swagger → 组合文档 → 定时 → **AI助手** → **群聊** → **配置** → **使用帮助**；底栏还有 **数据统计**。

---

# 产品概览

**NBA-API** 面向开发、测试、产品团队，在浏览器内完成接口调试、文档协作、定时巡检与轻量群聊协作，  
支持内网私有化部署以及本地化部署。

## 侧栏导航（与 Index 壳层一致）

\`\`\`
上区（主功能）
  API管理  ·  Swagger管理  ·  组合文档  ·  定时任务  ·  AI助手（抽屉）  ·  群聊  ·  配置⚙  ·  使用帮助
下区（底栏）
  数据统计
\`\`\`

| 图标 / 入口        | 行为 |
|------------------|------|
| **API管理**        | 进入接口树与工作区 |
| **Swagger管理**    | OpenAPI 地址联调（不落库） |
| **组合文档**       | API 组合文档树 |
| **定时任务**       | 调度中心 |
| **AI助手**         | **不跳路由**：右侧抽屉本机私聊 |
| **群聊**           | 群列表与聊天室 |
| **配置 ⚙**         | **下拉菜单**（见第七章）：用户 / AI / Header / 域名 / 插件管理 / 开关项 |
| **使用帮助**       | 打开本手册（当前页） |
| **数据统计**       | 近 30 天 API / 组合文档新增柱状图（需远程服务） |

**壳层行为（重要）：**

| 情况 | 表现 |
|------|------|
| **远程服务不通** | 仅 **API管理**、**Swagger管理** 可进；点组合文档 / 定时 / 群聊 / 数据统计会提示「远程服务不可用」；群在线状态也不挂载 |
| **有未保存修改时离开** | 从 API管理 / 组合文档 / Swagger管理 切到其它模块时，若有未保存编辑会确认「离开将丢弃」 |
| **AI 抽屉** | \`modal\` 可穿透，测接口时可同时开着抽屉 |

## 分享页壳层

打开分享链接进入的是另一套侧栏，**不是**上面的正式端菜单。能测已分享的 API / 文档，不能把它存进团队库。

\`\`\`
分享页
  API_DOC  ·  AI助手（抽屉）  ·  群聊  ·  配置⚙  ·  使用帮助
\`\`\`

| 图标 / 入口 | 行为 |
|-----------|------|
| **API_DOC** | 打开这次分享的 API 或组合文档，可执行 |
| **AI助手** | 与正式端相同：右侧抽屉本机私聊 |
| **群聊** | 与正式端相同；远程不通时点开会提示不可用 |
| **配置 ⚙** | 只有下面四项 |
| **使用帮助** | 打开本手册 |

分享页齿轮里**只有**：

| 项 | 说明 |
|----|------|
| **用户名称配置** | 协同 / 群显示名 |
| **AI信息配置** | 与正式端同一套本机密钥 |
| **全局请求头配置** | 本机缓存 |
| **暗色模式** | 开关，菜单保持打开 |

没有插件管理、插件请求头、执行次数、远程/本地域名、自动保存，也没有数据统计。  
远程服务不通时，内容区留空并显示 logo，打开时会提示「远程服务不可用」。

## 核心能力

| 模块             | 要点                                                                                    |
|----------------|---------------------------------------------------------------------------------------|
| **API 管理**     | HTTP / SSE / WebSocket、RESTFUL、Fetch 导入、JSON5<br>脚本、并发 N 次（结果 Tab）、顺序/并行执行<br>版本快照、分享 |
| **Swagger 管理** | 填 OpenAPI / Swagger 地址 → 左树点接口 → 右侧执行<br>不写入 API 库                                    |
| **组合文档**       | 多接口业务流程说明<br>协同编辑、分享 / 下载                                                             |
| **定时任务**       | CRON / RRULE / 时间戳<br>直接关联 API                                                        |
| **AI助手**       | 侧栏机器人抽屉：本机私聊<br>DeepSeek / 千问 / 千帆 / 本地模型；密钥仅存本机                               |
| **群聊**         | 实时群聊、邀请/踢人；群内亦可 \`@AI助手\`、发送到群                                                  |
| **配置**         | ⚙ 下拉：用户 / AI / Header / 执行次数 / 域名；**插件管理**（下载插件·查看脚本·自动启用）；自动保存 / 暗色模式 |
| **数据统计**       | API、组合文档近 30 天每日新增（柱状图） |

## 产品亮点

1. **「自动启用插件」— 远程页面直连本机服务**
   > 工具部署在内网/远程服务器，目标 API 在开发者本机 \`localhost\` / \`127.0.0.1\` 时，
   > 安装篡改猴后：齿轮 → **插件管理** → 打开「自动启用插件」，本机地址的 HTTP 会自动经浏览器插件发出，无需额外代理。
   > 也可在单个 API 的 Api Detail 打开「使用插件」强制代发。**仅 HTTP；WebSocket 始终浏览器直连**。
   > 插件脚本可从齿轮 → **插件管理** → **点击查看脚本**（弹窗展示，\`@match\` 已按当前站点填好，复制到篡改猴即可），或按 1.15 手改示例。

2. **全协议接口测试 — HTTP(S) / SSE / WS(S) 一站覆盖**
   > 支持 GET / POST / PUT / DELETE 及 RESTFUL 路径参数（如 \`/user/{id}\`）；
   > SSE 流式在「结果 N」的 **Data** 中实时更新；
   > WebSocket 连接、子协议、Query 鉴权、Message 多格式收发。
   > Body 支持 JSON5、multipart、表单；文件下载可「点我保存」。

3. **测 · 写 · 跑 · AI · 群 — 侧栏闭环**
   > **测**：目录树、多标签、域名 Context-Path / Prefix / Path 拼接。  
   > **写**：单接口预览、多 API 组合文档（协同 / 分享 / 下载）。  
   > **跑**：定时任务 CRON / RRULE / 时间戳关联 API 巡检。  
   > **AI助手**：侧栏机器人开本机抽屉（不问群）。  
   > **群聊**：侧栏气泡进群；需要时 \`@AI助手\` 多轮再「发送到群」。  
   > **配置 / 帮助 / 统计**：齿轮下拉管环境；问号进本手册；底栏看近 30 天新增。

4. **分享零安装 + 多端实时协同**
   > 单个 / 批量 / 已打开标签均可生成分享链接，接收方浏览器打开即测。
   > 远程 API 多人编辑时，保存方更新后其他端标签旁出现<font color="red">同步图标</font>。
   > 组合文档支持多人协同（先配置用户名）。

5. **远程 + 本地双库，协作与隐私兼顾**
   > **远程 API** 存服务器，团队共享。
   > **本地 API**（<font color="orange">橘黄色</font>）仅本机。
   > **远程域名** 团队共享；
   > **本地域名** 仅本机；
   > **全局请求头** 本机缓存，同名时优先于局部 Header 和插件请求头。  
   > **插件请求头** 用同一套篡改猴脚本，从目标网站抓取页面显式设置的请求头，再按域名主机套用（见 1.9、1.15）。

6. **批量压测与流程编排**
   > 单接口「执行 N 次」，每次对应一个可关闭的「结果 N」；
   > 多标签顺序执行或并行执行（自动跳过 WS / SSE）。
   > RequestTime 折线图；
   > 结果 Tab 的 Header 视图可右键回填请求头。

7. **直转文档**
   > Fetch请求转换: 打开Console,选择NetWork,找到目标请求,右键 Copy as fetch → FetchCode To API。
   > Java(<=8) Code 文档解析: 上传 Java（Swagger 注解）生成字段文档，**To Body Param** 生成 JSON 示例。

8. **脚本预处理 + 版本快照**
   > \`getVersion\` / \`buildParam\` / \`buildMessage\` 动态改写参数或消息；
   > Console 终端可看脚本日志与 \`help\` / \`tail\` 等；
   > 版本快照回滚；
   > 自动保存开启后请求成功即更新有编辑的 API。

9. **Swagger 管理 — 不入库**
   > 侧栏进入 Swagger 管理：填服务的 Swagger UI / docs 地址并加载，  
   > 展开分组后点操作即可在右侧执行、看「结果 N」。  
   > 适合对照现网 OpenAPI 临时联调；不会保存进 API 管理树  
   > （与「上传 Java Swagger 注解生成字段文档」不是同一功能）。

10. **开箱即用的团队配置**

> 用户名与角色、**AI 信息（密钥 / 本地地址）**、全局执行次数、全局 Header、插件请求头、远程/本地域名、  
> **插件管理**（下载 CRX / **查看脚本** / 自动启用插件）、自动保存、暗色模式集中在侧栏齿轮下拉；  
> API 树拖拽、搜索、目录继承 Context-Path 与 Prefix。

## 与主流工具对比

> 对比 **Postman · Apifox · Insomnia · Swagger/Knife4j · YApi**　｜　✅ 较好　⚠️ 部分　❌ 不支持

| 能力                     |   NBA-API   | 主流工具常见情况                |
|------------------------|:-----------:|-------------------------|
| HTTP / SSE / WebSocket |  ✅ / ✅ / ✅  | HTTP 普遍；SSE/WS 因工具而异    |
| 浏览器在线 + 私有化部署          |      ✅      | Postman/Apifox 私有化多为企业版 |
| 组合文档 + 协同编辑            |      ✅      | Swagger/YApi 偏只读或弱协同    |
| 定时调度 API               |      ✅      | 多数需 Monitor 付费或另写脚本     |
| 远程页面测本机 localhost      | ✅「自动启用插件」 | 通常需本地客户端或代理           |
| 本地私密 API（不上云）          |      ✅      | 较少支持                    |
| 群聊 + 本机 AI 协作          |      ✅      | 多数不内置或需另装               |
| 独立 AI 助手入口             |      ✅      | 多数需另开产品或插件            |
| Fetch 一键导入             |      ✅      | 多数不支持                   |
| Mock / CI 集成           |      ❌      | Postman / Apifox 更强     |

---

# 一、API 管理

## 1.1 界面说明

\`\`\`
左侧 API 树 ──▶ 右侧工作区
                  ├─ 标签页（已打开的 API）
                  ├─ URL 栏（方法 / 域名 / 路径 / 执行）
                  ├─ 配置区（Detail / Header / Query / Body / Message / Script / Version）
                  └─ 响应区（Console / RequestTime / 结果 N）
                     └─ 结果 N 内下拉：Data（响应体）/ Header（响应头）
\`\`\`

![API 管理界面](./img/request_detail.png)

| 视觉标记                                      | 含义                          |
|-------------------------------------------|-----------------------------|
| <font color="orange">**橘黄色**</font>文件夹/图钉 | **本地 API**（仅本机，不可分享、不可批量选择） |
| 标签前 \`*\`                                   | 有未保存修改                      |
| <font color="red">红色</font>同步图标           | 他人已更新，点击拉取最新                |
| Script 旁<font color="orange">黄色</font>灯泡 | 该 API 已填写预处理脚本（有内容即亮，清空则灭） |

## 1.2 推荐目录结构

\`\`\`
项目
 └── 模块
      └── Controller（目录）
           └── 具体 API（叶子节点）
\`\`\`

## 1.3 远程 API 与本地 API

| 对比项         | 远程 API     | 本地 API（<font color="orange">橘黄色</font>） |
|-------------|------------|-----------------------------------------|
| 存储位置        | 服务器，团队共享   | 浏览器本地，仅自己可见                             |
| 分享          | ✅          | ❌                                       |
| 批量选择 / 组合文档 | ✅          | ❌                                       |
| 多端同步        | ✅          | ❌                                       |
| 适用场景        | 团队协作、正式接口库 | 临时调试、敏感/私密接口                            |

## 1.4 新建 API 或目录

**入口：** 左侧 **⋯** → **Create New**，或在目录上 **右键**。

| 字段          | 说明                                                       |
|-------------|----------------------------------------------------------|
| 类型          | 目录 / API                                                 |
| 存储          | **远程**（团队共享）/ **本地**（<font color="orange">橘黄</font>，仅本机） |
| 父级          | 挂载位置                                                     |
| 名称          | 目录或 API 名称                                               |
| ContextPath | 如 \`/api\`；新建子级会继承                                         |
| Prefix      | Controller 统一前缀；新建子级会继承                                  |
| Method      | GET / POST / PUT / DELETE / **WS**                       |
| Path        | 如 \`/list\` 或 \`/user/{id}\`                                 |
| SSEReq      | SSE 流式（HTTP 方法 POST / GET）                               |
| 使用插件      | 经篡改猴从本机代发（仅 HTTP，见 1.15）                              |

> 修改父级 ContextPath / Prefix **不会**自动更新已有子级。

## 1.5 树操作与 ⋯ 菜单

| 操作       | 方式                                   |
|----------|--------------------------------------|
| 打开 API   | 单击叶子节点                               |
| 调整结构     | 拖拽节点                                 |
| 搜索       | 顶部「搜索(名称或者路径)」                       |
| 定位       | 瞄准图标                                 |
| Fetch 导入 | ⋯ → **FetchCode To API**（覆盖当前选中 API） |
| 批量分享/组文档 | ⋯ → **选择 API** → 勾选 → 对应菜单           |

**右键菜单：** 刷新目录、编辑、删除（有子节点不可删）、新建子目录、新建子 API。

**执行按钮下拉：** 执行 N 次、保存/更新 API、预览 API、分享 API、复制路径、记录版本。

## 1.6 多标签页与批量执行

- 可同时打开多个 API；关闭时有未保存修改会提示
- **拖拽排序：** 按住标签左右拖动调整顺序  
  请在当前看得见的标签条内拖；拖到屏幕外的标签不会自动滚过来
- **打开顺序会记住：** 打开、关闭、拖拽后，刷新或再次进入 API 管理时，  
  已打开标签大致按上次顺序恢复
- **标签右键：** 关闭文档 / 顺序执行 / 并行执行（**自动跳过 WS、SSE**）

## 1.7 请求地址

\`\`\`
完整 URL = 域名 + ContextPath + Prefix + Path
\`\`\`

域名从 **远程/本地域名配置** 下拉选择，须以 \`http(s)://\` 或 \`ws(s)://\` 开头。

## 1.8 HTTP / SSE 接口测试

### 执行请求

| 操作     | 方式                                               |
|--------|--------------------------------------------------|
| 执行一次   | 点 **执行**，或 \`Ctrl+Enter\` / \`⌘+Enter\`<br>（出现「结果1」） |
| 执行 N 次 | 执行按钮下拉 → **执行 N 次**<br>（N 在齿轮里配置；出现「结果1」…「结果N」）  |
| 保存/更新  | \`Ctrl+S\` / \`⌘+S\`，或下拉 → **更新 API**                |
| 取消     | 执行中主按钮变为 **取消**<br>中止本轮还在进行的请求；**已经成功的「结果」仍保留**  |

> 执行中**不能关闭**「结果 N」标签；须先取消或等待完成。
> 执行过程中下拉里的 **「执行 N 次」不可用**，避免叠跑；取消或跑完后再点。详见 1.11 响应区。

### RESTFUL

Path 为 \`/user/{id}\` 时，在 **Query** 标签配置参数 \`id\` 及值。

### SSE

在 **Api Detail** 打开 **SSEReq**，执行后在对应「结果 N」→ **Data** 中流式更新。点 **取消** 后流式内容不再继续写入。

## 1.9 Header（请求头）

适用于 **HTTP / SSE** 及 **WebSocket 连接**（WS 有特殊规则，见 1.10）。

### 三种来源

| 来源            | 配置位置             | 范围                          |
|---------------|------------------|-----------------------------|
| **全局请求头**     | 齿轮 ⚙ → 全局请求头配置   | 所有 API，本机缓存                 |
| **局部 Header** | API → Header 标签  | 当前 API                      |
| **插件请求头**     | 齿轮 ⚙ → 插件请求头管理   | 按主机名分标签；列表仅本机会话（刷新需重抓）；**各主机勾选的参数名本机缓存** |

### 优先级（重要）

**同名时：全局请求头 > 当前 API 的 Header > 插件请求头。**

已经占用的参数名，低优先级的同名行不会再发出。三种来源都只发送**已勾选**的行。

建议：团队 Token 放全局；接口特有 Header 放局部；从目标网站抓来的登录态、签名头放插件请求头。若与前两层同名，执行时会被盖掉。

> 「自动启用插件 / 使用插件」决定请求**怎么发出**（是否经篡改猴代发）；「插件请求头」决定额外**带哪些头**。共用同一套脚本，开关与用途不同。

### 插件请求头怎么用

1. 按 **1.15** 安装并配置篡改猴脚本：\`@match\` 包含 NBA-API 页面，以及要监听的网站；\`collectHeaderHost\` 填该网站主机名（含端口，如 \`www.example.com\`、\`127.0.0.1:8080\`）
2. **保持 API 管理页打开**（分享页没有「插件请求头管理」，也收不到抓取）
3. 在目标网站正常操作，让页面发出 \`fetch\` / \`XHR\`（一设置请求头就会抓，不必等响应返回）
4. 回到 API 管理 → 齿轮 → **插件请求头管理**
5. 每个主机一个标签，表格列与局部 Header 相同；尚无数据时会提示先配脚本、再到目标站发请求
6. 将当前 API 的**域名**设为同一主机后再执行（匹配的是域名主机名，不是 Path）  
   \`https://www.example.com/app\` → 标签 \`www.example.com\`  
   \`http://127.0.0.1:8080\` → 标签 \`127.0.0.1:8080\`

| 情况                         | 结果                    |
|----------------------------|-----------------------|
| 第一次出现、且本机未记过勾选的参数名        | 默认不勾选                 |
| 同一主机、参数名完全相同               | 勾选按本机缓存；描述在本会话内可保留，值更新为最新抓取 |
| 本次请求里没有的参数名                | 从该主机列表中移除             |
| Cookie、User-Agent、HttpOnly 等 | 浏览器自动附加的头，抓不到         |
| 刷新，或离开后再进 API 管理           | 列表清空，需在目标站再发一次请求；**曾勾选过的参数名会按主机恢复勾选** |

标签名是**被抓请求的主机名**（含端口），不一定是你当前浏览页的主机。例如页面在 \`www.example.com\`，请求发往 \`api.example.com\`，则标签为 \`api.example.com\`，API 域名也要选该主机才会带上。

### Header 表格

| 列   | 说明                     |
|-----|------------------------|
| 参数名 | 如 Authorization、Accept |
| 参数值 | 实际值                    |
| 描述  | 备注                     |
| 勾选  | 未勾选则不参与                |

在「结果 N」→ **Header** 视图中，对响应头右键 **ToThisHeader** / **ToGlobalHeader** 可快速回填。

## 1.10 WebSocket 测试

### 能做什么

- 浏览器直连 \`ws://\` / \`wss://\`
- 握手时配置子协议（通过 Header 表）
- URL 携带 Query 参数
- 连接后多次发送消息
- Script 动态修改消息

### 与 HTTP 的区别

| 项目        | HTTP         | WebSocket (WS)    |
|-----------|--------------|-------------------|
| 域名        | \`http(s)://\` | **\`ws(s)://\`**    |
| 执行按钮      | 执行 / 取消      | **连接 / 关闭**       |
| Body 标签   | 有            | **无**（改为 Message） |
| 服务器代理     | 可以           | **始终浏览器直连**       |
| 使用插件      | 可用           | **不适用**           |
| 执行 N 次    | 可用           | **不可用**           |
| 批量顺序/并行   | 可用           | **自动跳过**          |
| 结果·Header | 可读           | **浏览器无法读取**       |

### 使用流程

\`\`\`
① Method 选 WS
② 域名填 ws:// 或 wss://
③ 配置 ContextPath / Prefix / Path
④ Header：配置子协议（见下）
⑤ Query：需要时配置 URL 参数
⑥ 点「连接」
⑦ Message 标签编辑消息 →「发送」
⑧ 「结果1」→ Data：查看 open / 消息 / error / closed
⑨ 点「关闭」断开
\`\`\`

### Header — 子协议映射

浏览器 WebSocket **不能**像 HTTP 那样设置任意请求头。  
本工具将 **Header 表中勾选的行** 映射为握手时的 **子协议（Sec-WebSocket-Protocol）**：

\`\`\`
Header 每一行（已勾选、值非空、且参数名 ≠ Content-Type）
        │
        └──▶ 取「参数值」作为子协议名
                │
                └──▶ 连接时使用 [子协议1, 子协议2, ...]
\`\`\`

| 规则         | 说明                            |
|------------|-------------------------------|
| 使用 **参数值** | 参数名不参与子协议（Content-Type 行会被忽略） |
| 全局 + 局部 + 插件 | 优先级同 1.9：全局 > 局部 > 插件；用的仍是参数值 |
| 多行 = 多个子协议 | 每行一个子协议值                      |

**子协议 \`chat\` 示例：**

| 参数名      | 参数值  | 勾选 |
|----------|------|----|
| protocol | chat | ✅  |

**多子协议示例：**

| 参数名 | 参数值      | 勾选 |
|-----|----------|----|
| p1  | v1.stomp | ✅  |
| p2  | chat     | ✅  |

### Token 鉴权

Header 中的 \`Authorization\` **不会**作为 HTTP 头发送给 WS 握手。

| 方式            | 做法                                                |
|---------------|---------------------------------------------------|
| **Query（推荐）** | Query 加 \`token=xxx\` → \`wss://host/path?token=xxx\` |
| **Path**      | 写在路径中                                             |
| **首条消息**      | Message 发送登录/鉴权 JSON                              |

### 常见误区

| 误区                          | 正确理解                                      |
|-----------------------------|-------------------------------------------|
| Header 写 Authorization 即可鉴权 | WS 握手不传 HTTP Authorization<br>用 Query 或首包 |
| 参数名会传给服务端                   | 实际传的是 **参数值**（子协议名）                       |
| 结果·Header 可读                | WS 响应头在浏览器中不可读                            |
| 开「自动启用插件」就能连 localhost WS | 插件代发只作用于 HTTP；WS 始终由浏览器直连 |

### Query / Message / 响应

勾选 Query 会拼到连接 URL。  
Message 支持 json / text / xml / javascript；  
**发送**仅连接 **open** 时可点；选 json 时发送前尝试 JSON5 解析。

在「结果1」→ **Data** 中查看：

| 响应内容     | 含义    |
|----------|-------|
| \`open\`   | 连接成功  |
| 文本/数据    | 服务端消息 |
| \`error\`  | 错误    |
| \`closed\` | 已关闭   |

### 完整示例（STOMP）

1. Method = **WS**，域名 = \`wss://mq.example.com\`，Path = \`/ws\`
2. Header：参数值 \`v12.stomp\`，勾选
3. Query：\`token=your-jwt\`，勾选
4. **连接** → Message 发 STOMP 帧 → 在「结果1」→ Data 查看

## 1.11 API 配置详解

### Api Detail

SSEReq、「使用插件」、存储、名称、**备注**、只读 URL 预览。

### Query

参数名 / 类型 / 值 / 描述 / 勾选；列首可拖拽排序。

### Body（非 WS）

| 类型                                | 用途         |
|-----------------------------------|------------|
| application/json                  | JSON5，支持注释 |
| application/xml                   | XML        |
| multipart/form-data               | 表单 + 文件上传  |
| application/x-www-form-urlencoded | 普通表单       |

**请求字段描述：** 可上传 Java（Swagger 注解）生成说明；**To Body Param** 转为 JSON 示例（见 1.13）。

### Version

执行下拉 → **记录版本** → 添加版本信息
> 如果存在相同的信息内容会有警告提示

Version 标签 → 查看版本记录 → 右键菜单：**use this version** / **remove version** / **clear version**。

### 响应区

根级**没有**独立的 ResponseData / ResponseHeader 标签。响应体与响应头都在「结果 N」内查看。

| 根级标签            | 内容                                               |
|-----------------|--------------------------------------------------|
| **Console**     | 可交互终端：脚本日志、参数摘要（见 1.12）<br>以及 \`help\` / \`clear\` / \`grep\` / \`tail\` 等命令 |
| **RequestTime** | 各次请求耗时折线图                                        |
| **结果 N**        | 第 N 次执行的结果（可关闭）<br>标签旁下拉切换 **Data** / **Header** |

**「结果 N」要点：**

- 执行 **1 次**也会出现「结果1」；执行 N 次为「结果1」…「结果N」
- 下拉 **Data**：响应体（原 ResponseData）  
  文件接口显示「点我保存」；SSE 流式内容写在这里
- 下拉 **Header**：HTTP 响应头（原 ResponseHeader；WS 下浏览器读不到）
- 当前 Data / Header 模式会高亮标明
- 某次结果还在跑时，切到对应「结果」可看到加载中；  
  该次写完后加载结束（其它次可能已完成）
- **执行中**关闭「结果 N」会被拒绝，提示先取消或等待完成
- **取消**只停还没完成的请求；**已经成功的结果仍保留**  
  SSE 取消后不再继续刷 Data
- 关掉某个结果标签后：焦点落到相邻结果；  
  若没有结果了，落到 **Console**
- 底栏 Time / Status / Size 跟随当前选中的「结果 N」；  
  在 Console / RequestTime 时回退到合理默认

**Console 与焦点：**

- 要看脚本日志时，先点开 **Console**（不是浏览器 F12）
- Console 是 **终端**：可输入 \`help\` 看命令；常用 \`clear\` 清屏、\`grep\` 过滤、\`tail\` / \`tail -f\` 跟日志
- 若你已经点过 Console，之后新的「结果 N」出现时**不会把你拽走**，  
  方便边跑边看日志
- 若从未点过根标签，有结果时会自动落到「结果1」

**响应字段描述：** 可为返回 JSON 字段添加文档说明。

## 1.12 Script（getVersion / buildParam / buildMessage）

在 **Script** 标签编写预处理脚本。右键 **初始化脚本** 会写入与产品模板一致的函数骨架（HTTP/SSE：\`getVersion\` + \`buildParam\`；WS 再加 \`buildMessage\`）。

**灯泡提示：** Script 标签左侧有灯泡图标。编辑区**有脚本内容**时灯泡呈<font color="orange">黄色</font>（亮）；内容为空（或仅空白）时灰色（灭）。用于一眼判断当前 API 是否配置了预处理，与脚本是否正在执行无关。

| 菜单        | 作用                                                                               |
|-----------|----------------------------------------------------------------------------------|
| **初始化脚本** | 写入默认模板（与 \`sandbox.script.templage\` 用户段一致）                                      |
| **运行脚本**  | **不发真实 HTTP/WS**<br>按当前配置走一遍 \`getVersion\` → \`buildParam\` /（Message 非空时）\`buildMessage\`<br>日志与参数摘要进 **Console** |

> 「运行脚本」≠ 侧栏 **Swagger 管理**。前者只调试脚本；后者从 OpenAPI 树选接口再执行。

脚本里可用 \`console.log\` / \`info\` / \`warn\` / \`error\` 等，输出在响应区 **Console**。

### 何时会跑脚本

| 时机 | \`getVersion\` | \`buildParam\` | \`buildMessage\` |
|------|:------------:|:------------:|:--------------:|
| HTTP / SSE **执行**（含执行 N 次） | ✅ | ✅（Query / Body） | — |
| WS **连接** | ✅ | ✅（若有 Query 等） | ✅（Message 非空时） |
| Script「**运行脚本**」 | ✅（\`reqNum\` 一般为 0） | ✅ | ✅（Message 非空时） |
| WS **发送** | ❌ | ❌ | ✅（只调这一项） |

> 正式 **执行 / 连接** 时，Console 里还能看到加工后的 Query / Body（或 Message）摘要，便于核对实际发出去的内容。

### \`getVersion\`

\`\`\`js
function getVersion(reqNum) {
  // -1：本次不跑脚本加工（跳过 buildParam / buildMessage）
  //  0：用当前编辑中的配置
  // ≥1：用 Version 里第 N 版参数再加工
  return 0;
}
\`\`\`

| 返回值 | 含义 |
|--------|------|
| **\`-1\`** | 本次请求**跳过**全部脚本加工 |
| **\`0\`** | 用当前编辑中的 Query / Body / Message |
| **\`≥1\`** | 先取 **Version** 标签里第 N 版参数，再交给 \`buildParam\` / \`buildMessage\` |

「执行 N 次」时 \`reqNum\` 为 1…N；「运行脚本」时一般为 0。版本号找不到对应记录会报错并写入 Console。

### HTTP / SSE — \`buildParam\`

默认模板：

\`\`\`js
function buildParam(reqNum, key, value, path, desc, type, check) {
  return value;
}
\`\`\`

| 参数 | 含义 |
|------|------|
| \`reqNum\` | 第几次请求（「执行 N 次」时从 1…N） |
| \`key\` / \`value\` | 当前字段名与值 |
| \`path\` | 字段路径 |
| \`desc\` / \`type\` | 描述、类型（JSON 树遍历时部分场景可能为空） |
| \`check\` | **是否勾选参与请求**（未勾选的字段不会进入脚本，也不会发出） |

每次发请求前，会对 Query、JSON Body、表单字段等逐项调用；**返回值**作为实际发送值。适合加时间戳、签名、按次数变化的测试数据。

**示例：签名字段 + 打日志**

\`\`\`js
function buildParam(reqNum, key, value, path, desc, type, check) {
  if (key === 'timestamp') return Date.now();
  if (key === 'nonce') {
    const n = \`n-\${reqNum}-\${Date.now()}\`;
    console.info('nonce', reqNum, n); // → 响应区 Console
    return n;
  }
  return value;
}
\`\`\`

### WebSocket — \`buildMessage\`

WS 初始化模板为 \`buildMessage(msg)\`。默认模板 **\`return undefined\`**——若原样保留，发送内容可能变成 \`undefined\`；请显式 \`return\` 处理后的内容。

\`\`\`js
function buildMessage(msg) {
  // msg：Message 原文；选 json5 时可能已被解析成对象
  console.info('ws send', msg);
  return msg; // 务必返回要发出的内容
}
\`\`\`

| 场景 | 说明 |
|------|------|
| **WS 发送** | 每次点「发送」前调用；**不**再走 \`getVersion\` |
| **连接 / 运行脚本** | Message 非空时也会在 \`runScript\` 流程里调用（受 \`getVersion\` 影响） |

也可在 Script 里点 **运行脚本**，用当前 Message 试跑（不真正连上服务端）。

## 1.13 FetchCode To API 与 Java 转文档

### FetchCode To API

1. F12 → Network → 右键请求 → **Copy as fetch**
2. ⋯ → **FetchCode To API** → 粘贴 → **ToApi**
3. 确认后覆盖当前 API 的 method、URL、Header、Body 等，微调后执行

### Java 源码 → 字段文档

1. 在请求/响应字段描述处打开 Java 分析抽屉
2. **UploadJavaFile** 上传 \`.java\`（可多文件），或直接编辑标签页中的源码
3. 支持 Swagger 注解（如 \`ApiModel\` / \`ApiModelProperty\`）；泛型请改成真实类名并补上对应类代码
4. **ToDocument** 生成字段说明；需要示例 JSON 时用 **To Body Param**

> 这是「注解 → 文档字段」，不是侧栏 **Swagger 管理**（OpenAPI 地址联调）。

## 1.14 分享与多端同步

| 类型         | 方式                      |
|------------|-------------------------|
| 单 API      | 执行下拉 → 分享 API           |
| 多 API（已打开） | ⋯ → 分享已打开的 API          |
| 多 API（已选择） | ⋯ → 选择 API → 分享已选择的 API |

本地 API 不可分享。  
分享页不能保存/更新 API，但可 **执行 / 执行 N 次**。  
多人编辑远程 API 时，保存方更新后其他端标签旁出现<font color="red">**同步图标**</font>，点击拉取最新。

## 1.15 插件代发（HTTP 本地测试）

**做什么：** 当工具跑在远程、目标 API 在你本机的 \`localhost\` / \`127.0.0.1\` 时，服务器访问不到该地址，但你的电脑可以。打开代发开关后，HTTP 请求经篡改猴从**本机浏览器**发出，无需 Postman 或额外代理。

**两个开关：**

| 开关 | 位置 | 含义 |
|------|------|------|
| **自动启用插件** | 齿轮 ⚙ → **插件管理** → 开关（文案：自动启用 / 自动禁用） | 打开后，域名主机为 \`127.0.0.1\` / \`localhost\` 的 HTTP **自动**走插件代发；未装好篡改猴时切换会提示失败 |
| **使用插件** | Api Detail（及新建/编辑 API） | 仅当前 API **强制**走插件代发 |

**插件管理子菜单（齿轮 ⚙ → 插件管理，悬停展开）：**

| 项 | 说明 |
|----|------|
| **点击下载插件** | 打开篡改猴 CRX 下载页（可拖到 Chrome 安装） |
| **点击查看脚本** | 弹窗展示完整用户脚本；\`@match\` **已按当前 NBA-API 站点自动填好**；复制到篡改猴后按需补目标站 \`@match\` 与 \`collectHeaderHost\` |
| **自动启用插件** | 见上表 |

**和「插件请求头」的关系：** 同一份篡改猴脚本还负责在目标网站抓取页面显式设置的请求头。代发靠上面两个开关；抓头看 **1.9**，入口在齿轮 → **插件请求头管理**。

**不适用于 WebSocket**（WS 始终由浏览器直连，与上述开关无关）。

**配置步骤（推荐：用菜单查看脚本）：**

1. 安装 [篡改猴](https://www.tampermonkey.net/) ≥ 5.3.3  
   （可选：齿轮 → 插件管理 → **点击下载插件**，或 [CRX](https://www.tampermonkey.net/crx/tampermonkey_stable.crx) 拖到 Chrome）
2. 开启「允许运行用户脚本」
3. 齿轮 → 插件管理 → **点击查看脚本** → 复制弹窗中的代码 → 在篡改猴中新建脚本并粘贴  
   - 已带当前站点的 \`@match\`（形如 \`当前主机/*\`）  
   - 若要抓其它网站的请求头：再加一条 \`@match\`，并把该主机名写入脚本里的 \`collectHeaderHost\`
4. 打开代发开关（二选一或同时用）：
   - **齿轮 → 插件管理 →「自动启用插件」**：域名主机为 \`127.0.0.1\` / \`localhost\` 时自动走插件代发
   - **Api Detail →「使用插件」**：仅当前 API 强制走插件代发（仍须脚本已安装且 \`@match\` 正确）

**备选：手改示例脚本**（不走「查看脚本」时，把下方 \`@match\` 改成你的 NBA-API 地址，并按需加目标站）：

脚本能力概览：

- 为本工具提供本机代发能力（配合「自动启用插件」或 Api Detail「使用插件」）
- 在 \`collectHeaderHost\` 列出的网站上，抓取页面代码**显式设置**的请求头 → 回到 API 管理 → 齿轮 → **插件请求头管理**（合并规则见 **1.9**）


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

  /** 归一 headers 为 [[key,value],...] 后写入通道（兼容 pluginHeaderListener / Object.fromEntries） */
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

4. （若用手改示例而非「查看脚本」）按环境改 \`@match\` / \`collectHeaderHost\` 后保存脚本，再打开代发开关（见上文「自动启用插件」或 Api Detail「使用插件」）

## 1.16 快捷键

| 操作       | Windows    | Mac            |
|----------|------------|----------------|
| 执行 / 连接  | Ctrl+Enter | ⌘+Enter        |
| 保存 / 更新  | Ctrl+S     | ⌘+S            |
| JSON 格式化 | —          | Option+Shift+F |

---

# 二、Swagger 管理

侧栏 **Swagger 管理** 入口。  
用 OpenAPI / Swagger 文档地址临时联调接口，  
**右侧操作方式与 API 管理相同**（执行、看「结果 N」、Script 等），  
但**不会写入 API 管理树**。

> 与 API 管理里「上传 Java（Swagger 注解）生成字段文档」不同：  
> 这里是 **填服务 docs 地址 → 选操作 → 执行**。

## 怎么用

\`\`\`
① 侧栏打开 Swagger 管理
② 输入 Swagger UI / docs 地址
   （如 http://host/scmp/swagger-ui/index.html）→ 点「加载」
③ 左树出现分组（默认收起）；展开某一组后看到 tag 目录与接口
④ 点某个接口叶子 → 右侧出现方法与路径
   按需改参数后点「执行」或下拉「执行 N 次」
⑤ 在「结果 N」查看响应
   需要调试脚本时用法同 API 管理（日志在 Console）
\`\`\`

| 操作              | 说明                                 |
|-----------------|------------------------------------|
| **加载**          | 先拉资源列表；分组默认不全部展开                   |
| **展开分组**        | 才加载该组文档，并显示 tag / 接口               |
| **搜索**          | 按名称或路径过滤<br>若还有未展开的组，会先补齐再过滤并展开命中项 |
| **无 tag 的接口**   | 会出现在类似 \`未分组_0\`、\`未分组_1\` 的目录下        |
| **执行 / 执行 N 次** | 与 API 管理相同（非 WS）<br>可出「结果1」…「结果N」  |

## 限制（重要）

- **不能**从本模式「保存 / 更新」进 API 库  
  也没有版本落库、分享进库等写库能力  
  （分享页同样：可执行 / 执行 N 次，不可写库）
- 离开 Swagger 管理再进 API 管理，  
  这里的临时打开内容不会变成你的接口树节点
- 要沉淀到团队库：在 **API 管理** 新建或导入后再维护

---

# 三、组合文档

![组合文档编辑](./img/api_doc_detail.png)

- **入口：** 侧栏 **文档** 图标（API 组合文档管理）
- **创建：**
    - API 管理 → ⋯ → **选择 API** → 勾选 → **编辑 API 组合文档**
    - 或文档树 **新建子文档**（可关联 API，也可纯文档）
- **一组 API 只对应一份文档**；再次编辑会回显已有文档
- **能力：** 多人协同编辑、分享文档、初始化文档、下载文档
- 文档内可打开关联 API 做测试
- **协同前提：** 齿轮中配置 **用户名称**，协作者名称才会正确展示
- **分享：** 编辑器下拉 → 分享文档（接收方打开即可阅读/按权限操作）

> 本地 API 不能选入组合文档；仅远程 API 适合团队文档沉淀。

---

# 四、定时任务

![定时任务调度中心](./img/task_handler_detail.png)

- **入口：** 侧栏 **时钟** 图标（定时任务调度中心）
- **管理：** 顶部 **调度器总开关**；单任务启动 / 暂停；按描述、类型筛选
- **状态：** 列表可见 **暂停中 / 运行中 / 已结束 / 异常**

## 新建 / 编辑

**必填：** 描述、开始时间、调度类型与表达式、调度 API（可多选）、调度过期策略。

**可选：** 结束时间、提前/延迟（负数提前、正数延迟）、结束策略。

### 调度类型示例

| 类型        | 含义       | 示例                              |
|-----------|----------|---------------------------------|
| **时间戳**   | 指定时刻执行一次 | 选某个日期时间                         |
| **CRON**  | 周期表达式    | \`0 0/5 * * * ?\`（每 5 分钟，以界面生成为准） |
| **RRULE** | 重复规则     | 如每日/每周；可用界面生成后微调                |

### 策略说明

| 项      | 选项                  | 含义           |
|--------|---------------------|--------------|
| 调度过期策略 | 不执行 / 立即执行一次        | 到点未跑或错过时如何处理 |
| 结束策略   | 到结束时间过期 / 最后一次执行完过期 | 任务何时不再调度     |

### 日志

打开任务 **查看日志** 后可：

| 操作 | 说明 |
|------|------|
| **重新加载** | 刷新当前日志视图 |
| **下载当前日志** | 导出当前看到的日志 |
| **下载历史日志** | 导出历史日志 |

> 仅能关联 **远程 API** 树中的接口；适合巡检、定时冒烟。

---

# 五、AI助手

与 **群聊** 同级的侧栏入口（机器人图标）。正式端与 **分享页** 均提供。  
密钥在齿轮 ⚙ → **AI信息配置**（仅本机）。群内如何 \`@AI\` /「发送到群」见 **第六章 群聊**。

## 5.1 前置：AI 信息配置

齿轮 ⚙ → **AI信息配置**：

1. **远程：** 填写 DeepSeek / 千问 / 千帆 API 密钥（按需）
2. **本地：** 填写 Base-Url（如本地兼容 OpenAI 的 \`/v1\` 根）与 Authorization
3. 保存；**不上传服务器**

未保存过密钥时，远程供应商仍可出现在下拉里，但没有密钥则拉不到模型列表。  
本地供应商仅在填了 Base-Url 后才会出现在智能体一级选项中。  
保存后抽屉 / 群工具条一般立刻生效，通常无需刷新。

> **用户信息配置**里的**角色**（产品 / 后端 / 前端 / 测试）会影响本机 AI 角色技能；进群或开抽屉前建议一并配好名称与角色。

## 5.2 侧栏抽屉怎么用

**入口：** 侧栏 **机器人** → 右侧抽屉「AI助手」。  
**适用：** 测接口时随手问模型、不拉群、不广播。

![侧栏 AI 助手抽屉](./img/ai_detail.png)

\`\`\`
① 齿轮配好 AI 密钥（或本地 Base-Url）
② 点侧栏机器人打开抽屉
③ 选智能体 / 思考模式（就绪后自动进入本机会话，无需 @）
④ 直接输入回车对话；助手回复在气泡 **左侧**，你的提问在 **右侧**
⑤ 需要清空时点工具条「清空聊天记录」（只清本机该抽屉会话）
\`\`\`

| 能力 | 说明 |
|------|------|
| 会话隔离 | 消息键为 \`ai_你的用户Id\`，**不上群列表**，与真人群互不影响 |
| 与群内差异 | **无**「退出AI会话 / 发送到群」；**不能** Shift+@；未选模型时不能发送 |
| 分享页 | 分享壳侧栏同样有机器人入口，逻辑与正式端一致 |
| 清空记录 | 仅本机、不可恢复；不影响任何人的群聊记录 |

## 5.3 典型场景

| 场景 | 步骤摘要 |
|------|----------|
| 测接口时顺手问 AI | 侧栏机器人 → 选模型 → 直接对话（不上群） |
| 清掉抽屉里的废话 | 抽屉工具条 →「清空聊天记录」→ 确认 |
| 换 / 补密钥 | 齿轮 → AI信息配置 → 保存 → 抽屉内重选模型 |
| 换角色视角 | 齿轮改角色 → 再开抽屉会话 |

---

# 六、群聊

与 **AI助手** 同级的侧栏入口（气泡图标）。用于同在线成员的轻量协作；聊天室工具条也可挂本机 AI（密钥仍在齿轮，见 **第五章**）。

![群聊与 AI 助手](./img/chat_detail.png)

## 6.1 能做什么 / 不能做什么

|   | 说明                                                      |
|---|---------------------------------------------------------|
| ✅ | 建群、邀请、改名、踢人、退群                                          |
| ✅ | 成员在线 / 离线状态                                             |
| ✅ | 同在线成员实时聊天、未读角标                                          |
| ✅ | 群内 \`@AI助手\` / 发送到群；**清空聊天记录**（仅本机）                     |
| ❌ | **无离线消息补传、无历史漫游**<br>（离线期间消息错过即丢）                       |
| ❌ | **无服务端群权威库**<br>（各端本地会话收敛，不是中心化群档案）                     |
| ⚠ | **被踢**：会话与历史仍在<br>但不能发言 / 邀请 / 改名 / 踢人<br>可退群或等再邀「重新加入」 |
| ⚠ | **拒绝邀请**：仅本机消失<br>**邀请方不会收到拒绝回执**                       |

> 把群聊当作「在线时的协作通道」，不要当作可回溯的即时通讯存档。  
> 本机清空记录无法恢复；也不影响其他人屏幕上已有的气泡。

## 6.2 群操作流程

\`\`\`
① 齿轮配置用户名称 + 角色（要用 AI 再配「AI信息配置」，见第五章）
② ⋯ → Create Group，输入群名
③ 聊天室点「邀请」，选择在线成员
④ 对方同意（或已在群则静默确认）后即可聊天
⑤ 右键群：修改群名 / 退出群聊
⑥ 成员列表可踢人（被踢方进入锁定态）
\`\`\`

**要点：**

- 建群后先只有自己；靠邀请加人
- 输入框：**回车发送**，**Shift+回车**换行；**Shift+@** 唤起成员 /「AI助手」提及列表
- 工具条 **「清空聊天记录」**：确认后删除本机该群消息并清空聊天气泡（仅本机）
- 已被踢再被邀请时，通知文案为「重新加入」
- 退群会删除本机该群会话与消息；其他人侧只是少一名成员

## 6.3 群内 AI

**入口：** 打开某个群 → 聊天室上方 AI 工具条（选智能体 / 思考模式 / 会话控制）。  
密钥与模型列表与侧栏 AI 抽屉共用（**第五章**）。

### 选择与会话

1. 选择 **智能体**（Local / DeepSeek / 千问 / 千帆 → 再选模型）
2. 选择 **思考模式**：快速 / 思考 / 专家
3. 未选好模型或密钥无效时，无法有效唤醒本机 AI（\`@\` 列表也可能不出现本地 AI）

### 使用闭环

\`\`\`
① 齿轮配好 AI 密钥（或本地 Base-Url）
② 输入框 **Shift+@** 选本地 AI（或进入 sticky「AI会话」）
③ 与 AI 本机多轮对话（默认不上线到群）
④ 助手气泡在 **左侧**，你的发言在 **右侧**
⑤ 需要同步给大家时 →「发送到群」（展示为角色·名称·AI）
⑥ 也可在群话中 @ 其他成员的 AI，由对方本机助手接应
⑦「退出AI会话」结束本机会话态；「清空聊天记录」只清本机该群消息
\`\`\`

| 能力       | 说明                         |
|----------|----------------------------|
| 本机会话     | 对话主要落在本机；不等于自动广播           |
| 发送到群     | 把 AI 最新回复发到真人群通道           |
| 角色 skill | 按你在用户信息里选的角色加载对应辅助风格       |
| 清空记录     | 仅本机；对方屏幕与对方本地库不受影响         |
| 与抽屉差异   | 群内有 \`@\` / 发送到群 / 退出会话；抽屉见第五章 |

## 6.4 典型场景

| 场景         | 步骤摘要                     |
|------------|--------------------------|
| 拉人快速对齐     | 建群 → 邀请在线同事 → 贴接口链接 / 现象 |
| 本机问 AI 再同步 | 齿轮配 Key → 群内 @AI助手 多轮 →「发送到群」 |
| 清掉本机群记录    | 群工具条 →「清空聊天记录」→ 确认 |
| 换角色视角      | 齿轮改角色（如后端→测试）→ 再开 AI 会话  |

---

# 七、配置与环境

以下是**正式端**齿轮菜单。分享页只有用户名称、AI 信息、全局请求头、暗色模式，见上文「分享页壳层」。

入口：侧栏 **齿轮 ⚙**（悬停提示「配置信息管理」）→ **点击展开下拉菜单**（不是独立设置页）。

![配置下拉与插件管理](./img/setting_detail.png)

\`\`\`
用户信息配置
AI信息配置
───────────
全局请求头配置
插件请求头管理
全局执行N次配置
───────────
远程域名配置
本地域名配置
───────────
插件管理 ▶（悬停）
  ├─ 点击下载插件（CRX）
  ├─ 点击查看脚本（弹窗；自动带当前站 @match）
  └─ 自动启用插件 / 自动禁用插件（开关）
───────────
自动保存（开关，菜单保持打开）
暗色模式（开关，菜单保持打开）
\`\`\`

| 项             | 说明                                           |
|---------------|----------------------------------------------|
| **用户信息配置**    | 名称（协同/群显示名）<br>**角色**（产品/后端/前端/测试，影响群 AI）    |
| **AI信息配置**    | DeepSeek / 千问 / 千帆密钥<br>本地 Base-Url + Authorization<br>**仅本机**；侧栏 AI 抽屉与群工具条共用 |
| **全局请求头配置**   | 本机缓存，**同名时优先级最高**（高于局部 Header 和插件请求头）       |
| **插件请求头管理**   | 篡改猴从目标站抓到的请求头，按主机名分标签<br>列表仅当前会话（刷新需重抓）；**各主机已勾选的参数名本机缓存**；执行时按 API **域名主机**匹配 |
| **全局执行N次配置**  | 弹窗输入「执行 N 次」的 N（须为正整数）                      |
| **远程域名配置**    | 团队共享；须 \`http(s)://\` 或 \`ws(s)://\` 开头          |
| **本地域名配置**    | 仅本机（≠「本地 API」存储）                             |
| **插件管理**      | 见 **1.15**：下载 CRX、**查看脚本**、**自动启用插件**           |
| **自动保存**      | 请求成功后自动更新有编辑的 API；开关行点击不关菜单                  |
| **暗色模式**      | 开暗色主题；默认跟随系统；开关行点击不关菜单                     |

> 「自动启用插件」未检测到篡改猴时无法打开，并提示「未识别到篡改猴插件」。  
> 远程服务不通时，配置里本机弹窗仍可打开；群在线、数据统计等需服务的能力不可用。

---

# 八、数据统计

**入口：** 侧栏底栏 **波形** 图标（数据统计）。

| 图表 | 内容 |
|------|------|
| API 近 30 天每日新增 | 柱状图：API 数、文件夹数；副标题为合计 |
| 组合文档近 30 天每日新增 | 柱状图：文档数、文件夹数；副标题为合计 |

- **依赖远程服务**：服务不通时点入口会提示「远程服务不可用」
- 数据来自服务端增长统计接口；适合看团队库近期沉淀节奏

---

# 典型使用场景

| 场景             | 步骤摘要                                                            |
|----------------|-----------------------------------------------------------------|
| 新建并测试 POST     | Create New → Method/Path → Body → 执行<br>在「结果1」看 Data → 更新 API   |
| 新成员加入          | 配置用户名与角色、远程域名、全局 Token<br>（要用群 AI 再配 AI信息）→ 打开 API 执行 |
| 抓包导入           | Copy as fetch → FetchCode To API → ToApi<br>→ 微调 → 执行           |
| 压测 10 次        | 齿轮设执行次数 10 → 下拉执行 10 次<br>→ 切换「结果1」…「结果10」查看                    |
| 跑一组流程          | 多标签打开 → 拖拽排好顺序<br>→ 右键顺序/并行执行                                   |
| 标签顺序常驻         | 打开若干 API → 拖拽排序 → 刷新页<br>→ 标签大致按原顺序回来                           |
| Swagger 管理联调   | 侧栏 Swagger 管理 → 填 docs 地址 → 加载 → 展开<br>→ 点接口 → 执行（不落库）             |
| 脚本打日志          | Script 右键「运行脚本」或正式执行<br>→ Console 终端看日志；可用 \`help\` / \`tail\`       |
| 写接口说明          | 选择 API → 编辑组合文档 → 分享                                            |
| 本地 Spring Boot | 装篡改猴 → 齿轮「插件管理」查看脚本并复制安装，打开「自动启用插件」<br>→ 域名 \`localhost:8080\` → 执行            |
| 带上目标站的请求头    | 脚本配好 \`@match\` 与 \`collectHeaderHost\`，API 管理页保持打开<br>→ 目标站发一次请求 →「插件请求头管理」勾选要用的头（按主机记住）→ API 域名选同一主机 → 执行 |
| SSE 流式         | Api Detail 开 SSEReq → 执行<br>→「结果1」→ Data 看流式内容                  |
| WebSocket      | WS + 子协议 Header + Query token → 连接<br>→ Message 发送 →「结果1」→ Data |
| 定时巡检           | 新建任务 → CRON + 调度 API → 启动<br>→ 查看日志（可下载当前/历史）                      |
| 群内 AI 协作       | 齿轮 → AI信息配置 → 进群选智能体<br>→ Shift+@ AI助手 → 发送到群                     |
| 侧栏 AI 私聊       | 齿轮配 Key → 侧栏机器人 → 选模型直接对话<br>（分享页同样可用）                              |
| 清空本机聊天记录     | 群或 AI 抽屉工具条 →「清空聊天记录」→ 确认<br>（仅本机，不可恢复）                          |
| 看近 30 天沉淀     | 侧栏底栏「数据统计」→ 看 API / 组合文档每日新增柱状图（需远程服务）                              |
| 远程服务挂了怎么办   | 仍可进 **API管理** / **Swagger管理** 做本机联调；其它模块会提示服务不可用                     |

---

# 常见问题（FAQ）

**Q：为什么找不到 ResponseData / ResponseHeader 标签？**  
A：已并入「结果 N」。点开结果标签旁的下拉，  
在 **Data**（响应体）与 **Header**（响应头）之间切换。  
执行一次也会出现「结果1」。

**Q：为什么关不掉「结果 N」？**  
A：执行中禁止关闭结果 Tab。  
请先点 **取消**（停掉还在进行的请求；已成功的结果仍保留），  
或等待执行完成后再关。

**Q：执行中为什么点不了「执行 N 次」？**  
A：正在跑的时候下拉里该项不可用，避免叠跑。  
先 **取消** 或等完成后再点。

**Q：Swagger 里为什么不能「更新 API」？**  
A：Swagger 管理不写入 API 管理库；  
**执行 / 执行 N 次**仍可用。  
要沉淀请到 API 管理新建或导入。  
分享页同样：可测、不可写库。

**Q：脚本里的 console.log 去哪了？**  
A：看响应区根标签 **Console**（可交互终端，不是浏览器 F12）。  
可先点开 Console 再执行，新结果不会抢走焦点。  
终端内可试 \`help\`、\`clear\`、\`grep\`、\`tail\`。  
Script 编辑器右键「运行脚本」也可只跑脚本不发请求。

**Q：Script 旁边的灯泡什么时候亮？**  
A：脚本编辑区**有内容**就亮（黄色），清空则灭。  
表示「已配置预处理脚本」，不是「正在运行」。

**Q：getVersion 返回 -1 和 0 有什么区别？**  
A：\`-1\` = 本次完全跳过脚本加工；\`0\` = 用当前配置再跑 \`buildParam\` / \`buildMessage\`；  
\`≥1\` = 先取 Version 第 N 版参数再加工。

**Q：WS 初始化脚本后 Message 发出去是 undefined？**  
A：默认模板 \`buildMessage\` 写的是 \`return undefined\`。  
请改成 \`return msg\`（或你处理后的内容）再发送。

**Q：为什么 Header 没生效？**  
A：同名时全局请求头优先，其次是当前 API 的 Header，插件请求头最后。未勾选的行不发送。  
WebSocket 下这三层合并后仍映射为子协议，不是 HTTP 头。

**Q：插件请求头管理为什么是空的？**  
A：确认三件事：篡改猴脚本的 \`@match\` 含 NBA-API 和目标站；\`collectHeaderHost\` 是目标站主机名（含端口）；API 管理页开着时，再去目标站发一次请求。  
分享页没有这个菜单。刷新后列表会清空，需要重抓；重抓后，本机曾勾选过的参数名会按主机恢复勾选。  
Cookie、User-Agent 这类浏览器自动带的头抓不到。

**Q：列表里有头，执行却没带上？**  
A：API 地址栏里的**域名主机**要和对话框标签一致（含端口），对的不是 Path。  
该行须勾选（新抓到的头默认不勾，需自己勾上；勾选会按主机记住）；若全局或局部已有同名参数，插件这行不会覆盖。

**Q：刷新后以前勾过的插件请求头还在吗？**  
A：请求头的值和列表本身不持久，刷新后要再去目标站抓一次。  
各主机**勾选过的参数名**会本机记住；同一参数名再次出现时会恢复勾选。

**Q：本地 API 为什么不能分享？**  
A：存在浏览器本地，无法生成服务端分享链接，需改为远程存储。

**Q：打开「自动启用插件」后请求仍失败？**  
A：确认篡改猴已安装并允许用户脚本；脚本 \`@match\` 覆盖当前 NBA-API 地址（推荐用齿轮 → 插件管理 → **点击查看脚本** 后复制安装）；目标确为 \`localhost\` / \`127.0.0.1\` 的 HTTP（WebSocket 不适用）。  
若主机不是本机地址，请在该 API 的 Api Detail 单独打开「使用插件」。  
未识别到插件时，开关无法打开并会提示「未识别到篡改猴插件」。

**Q：齿轮里的「启用插件」去哪了？**  
A：在 **插件管理** 子菜单里，文案为「自动启用插件 / 自动禁用插件」。同级还有「点击下载插件」「点击查看脚本」。

**Q：远程服务不通还能干什么？**  
A：可进 **API管理**、**Swagger管理**；组合文档 / 定时 / 群聊 / 数据统计会提示不可用。本地 API、本地域名、AI 抽屉等本机能力仍可按环境使用。

**Q：切模块时提示未保存？**  
A：从 API管理、组合文档或 Swagger管理 离开且有未保存编辑时，确认离开会丢弃修改；可先保存再切。

**Q：修改 API 后别人看不到？**  
A：需「更新 API」保存；对方点标签旁<font color="red">同步图标</font>。

**Q：Body JSON 报错？**  
A：支持 JSON5 注释；Mac 可用 Option+Shift+F 格式化。

**Q：RESTful 路径参数？**  
A：Path 写 \`{id}\`，Query 配 \`id\` 及值。

**Q：WebSocket 用 Authorization 鉴权？**  
A：不能作为 HTTP 头发送；用 Query 或首条消息。

**Q：为什么离线一阵后再进群，中间消息没有了？**  
A：群聊不做离线补传与历史漫游，错过即丢；  
需要存档请用组合文档或其他渠道。

**Q：被踢之后还能干什么？**  
A：不能发言/邀请/改名/踢人；  
可退群，或等他人再邀「重新加入」。

**Q：AI 在哪里？以前的钥匙按钮呢？**  
A：**第五章 AI助手** — 侧栏 **机器人** → 右侧抽屉（本机私聊，正式端与分享页都有）；  
**第六章 群聊** — 侧栏 **气泡** → 打开某个群 → 聊天室工具条（\`@AI助手\`、发送到群）。  
两者同级；密钥一律在齿轮 ⚙ → **AI信息配置**。

**Q：侧栏 AI 抽屉和群里 AI 有什么区别？**  
A：抽屉是个人本机会话（\`ai_用户Id\`），不能邀请、不能「发送到群」、不用 \`@\`；  
群内可 \`@\`、可「发送到群」、可「退出AI会话」。密钥与模型列表共用。

**Q：为什么 AI 回复在左边？**  
A：助手气泡刻意放在对侧（左），你的发言在右侧，便于区分「人 / 助手」。  
极早以前落库的旧 AI 行可能仍靠右，新对话按左侧显示。

**Q：清空聊天记录会清掉别人的吗？**  
A：不会。只删本机 IndexedDB 里该会话的消息并清掉本机气泡；  
其他人屏幕与本地库不受影响，也不会发群通知。

**Q：为什么群里看不到 Local 智能体？**  
A：本地项只有在「AI信息配置」里填了 **Base-Url** 后才会出现在一级下拉里。  
远程供应商始终可点，但没密钥时通常拉不到模型列表。

**Q：改完密钥要不要刷新页面？**  
A：一般不用。保存后抽屉 / 群工具条会读到最新配置；若级联已打开，可重新选一下模型。

**Q：拒绝群邀请后对方怎么还显示我在？**  
A：拒绝只在本机生效，邀请方收不到拒绝回执，  
其成员列表不会因此自动变化。

---

# NBA-API

**一句话：** NBA-API 是团队在线 API 测试与文档平台——测接口、写文档、定时调度、AI助手、群聊，一个工具搞定。

**三点亮点：**

1. **测得全** — HTTP / SSE / WebSocket，RESTful、JSON5、文件上传、  
   并发 N 次（「结果 N」对照查看）；Swagger 管理即可联调
2. **文档跟测走** — 预览、组合文档、分享链接、协同编辑
3. **环境与协作不卡脖子** —「自动启用插件」测本机 localhost；插件管理可查看脚本并复制安装；插件请求头按域名主机套用目标站头；  
   齿轮配 AI 密钥（仅本机）；侧栏 **AI助手** 与 **群聊** 同级入口，需要时再上群；底栏可看 **数据统计**

**适合：** 后端维护接口库、前端按文档联调、测试巡检与批量执行、  
小团队在线对齐与 AI 辅助。
`,T={"./img/request_detail.png":S,"./img/api_doc_detail.png":m,"./img/task_handler_detail.png":f,"./img/ai_detail.png":w,"./img/chat_detail.png":H,"./img/setting_detail.png":_},N={urlMapping:T,_is_md:!0,toJSON:()=>l,toString:()=>l,valueOf:()=>l},b={name:"NBA-API-DOC",components:{},setup(){return{}},emits:[],props:{},data(){return{folders:[]}},computed:{el(){return this.$refs.docWrapper.$el},content(){return[N]}},watch:{},created(){},mounted(){},methods:{handleNodeClick(a){const n=this.el.querySelector(`[data-tree-id='${a.uniFlag}']`);n&&n.scrollIntoView({behavior:"smooth"})},onDocChange(){let a=[],n=[],A=0;Array.from(this.el.querySelectorAll("h1,h2,h3,h4,h5,h6")).map((r,d)=>{const e=parseInt(r.tagName.slice(1),10),o=p("dti_");r.setAttribute("data-tree-id",o);const t={id:++A,pid:0,label:r.textContent.trim(),uniFlag:o};for(;n.length&&n[n.length-1].level>=e;)n.pop();n.length>0&&(t.pid=n[n.length-1].id),n.push({...t,level:e}),a.push(t)}),this.folders=P(a,"id","pid")}}},C={class:"nba-api-doc"};function y(a,n,A,r,d,e){const o=i("el-tree"),t=i("s3-scroll"),I=i("s3-doc");return g(),h("div",C,[s(t,{class:"folder"},{default:c(()=>[s(o,{data:d.folders,onNodeClick:e.handleNodeClick},null,8,["data","onNodeClick"])]),_:1}),s(t,null,{default:c(()=>[s(I,{ref:"docWrapper",class:"wrapper_detail",unUseNum:"",content:e.content,onChange:e.onDocChange},null,8,["content","onChange"])]),_:1})])}const E=u(b,[["render",y],["__scopeId","data-v-a95b9845"]]);export{E as default};
