const s=""+new URL("tampermonkey.script.Bg1mtX-M.js",import.meta.url).href,o=""+new URL("sandbox.script.templage.BpIWZVVA.js",import.meta.url).href;function a(r){return fetch(o).then(e=>e.text()).then(e=>String(e).split(/^\/\/ -{5,}.*$/m).map(t=>t.trim()).filter(Boolean).slice(0,r?3:2).join(`

`))}function i(r=[]){const e=`// @match        ${new URL(location.href).host+"/*"}`,n=`// @match        ${r.join(`/*
// @match        `)}`,c=`'${r.join("', '")}'`;return fetch(s).then(t=>t.text()).then(t=>(t=t.replace("`{{serverMatch}}`",e),t=t.replace("`{{hostMatch}}`",n),t=t.replace("`{{headerHosts}}`",c),t))}export{a,i as g};
