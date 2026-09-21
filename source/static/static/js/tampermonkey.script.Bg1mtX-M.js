// ==UserScript==
// @name         CORS Script
// @namespace    http://tampermonkey.net/
// @version      1.0.3
// @description  《NBA-API管理》油猴跨域脚本
// @author       fusheng.zhang
`{{serverMatch}}`
`{{hostMatch}}`
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
    // 收集请求头的host:想收集哪个网站,就在此处配置上该网站的host,不需要http(s),比如 www.baidu.com
    // 如果此处配置了,但是无法抓取到请求头信息,那么检查一下上方是否有对应的@match配置.
    collectHeaderHost: [`{{headerHosts}}`],
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