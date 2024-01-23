import"./modulepreload-polyfill.js";function te(){return new Worker("/assets/worker-89eb400c.js",{type:"module"})}const y=self.examples.functionBodies;navigator.serviceWorker&&navigator.serviceWorker.register("/service-worker.js",{scope:"./index.html"});let c;const ne=document.querySelector("#file"),m=document.querySelector("#current"),V=document.querySelector("#file .uparrow"),B=document.querySelector("#fileDropdown"),j=document.querySelector("#save"),w=document.querySelector("#saveDropdown"),k=document.querySelector("#save .uparrow"),oe=function(){B.classList.remove("show"),w.classList.remove("show"),V.classList.remove("down"),k.classList.remove("down")},le=function(e){e.stopPropagation(),B.classList.toggle("show"),V.classList.toggle("down")},ce=function(e){e.stopPropagation(),w.classList.toggle("show"),k.classList.toggle("down")};ne.onclick=le;k.parentElement.onclick=ce;document.body.onclick=oe;const L="ManifoldCAD";function C(e){return window.localStorage.getItem(L+e)}function g(e,t){window.localStorage.setItem(L+e,t)}function N(e){window.localStorage.removeItem(L+e)}function ie(e){if(e>=window.localStorage.length)return;const t=window.localStorage.key(e);if(t.startsWith(L))return t.slice(L.length)}function E(){if(c){const e=m.textContent;y.get(e)||g(e,c.getValue())}}window.onpagehide=E;window.beforeunload=E;let R=!1,q=!0;function h(e){if(c){R=!0,m.textContent=e,g("currentName",e),q=y.get(e)!=null;const t=q?y.get(e).substring(1):C(e)??"";c.setValue(t)}}function U(e){const t=document.createElement("div");t.classList.add("item");const n=document.createElement("button");t.appendChild(n),n.type="button",n.classList.add("blue","item");const o=document.createElement("span");return n.appendChild(o),o.textContent=e,n.onclick=function(){E(),window.location.hash=`#${o.textContent}`,window.location.search="",h(o.textContent)},n.onkeyup=function(l){l.preventDefault()},n}function O(e){const t=document.createElement("button");return t.classList.add("icon"),e.parentElement.appendChild(t),t}function H(e){let t=1,n=e;for(;C(n)!=null||y.get(n)!=null;)n=e+" "+t++;return n}function K(e){const t=e.firstChild,n=O(e);n.classList.add("edit"),n.onclick=function(i){i.stopPropagation();const a=t.textContent,_=C(a),b=document.createElement("form"),u=document.createElement("input");u.classList.add("name"),u.value=a,t.textContent="",e.appendChild(b),b.appendChild(u),u.focus(),u.setSelectionRange(0,a.length);function ee(){const S=u.value;if(u.blur(),!S)return;const M=H(S);t.textContent=M,m.textContent==a&&(m.textContent=M),N(a),g(M,_)}b.onsubmit=ee,u.onclick=function(S){S.stopPropagation()},u.onblur=function(){e.removeChild(b),t.textContent=a}};const o=O(e);o.classList.add("trash");let l=0;o.onclick=function(i){if(i.stopPropagation(),e.classList.contains("blue"))l=performance.now(),e.classList.remove("blue"),e.classList.add("red"),document.body.addEventListener("click",function(){e.classList.add("blue"),e.classList.remove("red")},{once:!0});else if(performance.now()-l>500){N(t.textContent),m.textContent==t.textContent&&(h("Intro"),window.location.hash="#Intro");const a=e.parentElement;a.parentElement.removeChild(a)}}}const I=document.querySelector("#new");function T(e,t=void 0){const n=H(t??"New Script");g(n,e);const o=U(n);return I.insertAdjacentElement("afterend",o.parentElement),K(o),{button:o,name:n}}I.onclick=function(){T("").button.click()};const r=document.querySelector("#compile"),G=document.querySelector("#poster");let D=!1,F=!0;function J(){r.disabled=!1,F?r.click():G.textContent="Auto-run disabled due to prior failure"}let W;async function se(){const e=await fetch("/manifold-global-types.d.ts").then(n=>n.text()),t=await fetch("/manifold-encapsulated-types.d.ts").then(n=>n.text());return`
${e.replaceAll("export","")}
${t.replace(/^import.*$/gm,"").replaceAll("export","declare")}
declare interface ManifoldToplevel {
  CrossSection: typeof T.CrossSection;
  Manifold: typeof T.Manifold;
  Mesh: typeof T.Mesh;
  triangulate: typeof T.triangulate;
  setMinCircularAngle: typeof T.setMinCircularAngle;
  setMinCircularEdgeLength: typeof T.setMinCircularEdgeLength;
  setCircularSegments: typeof T.setCircularSegments;
  getCircularSegments: typeof T.getCircularSegments;
  setup: () => void;
}
declare const module: ManifoldToplevel;
`}async function re(){return`${(await fetch("/editor.d.ts").then(t=>t.text())).replace(/^import.*$/gm,"")}`}require.config({paths:{vs:"https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/vs"}});require(["vs/editor/editor.main"],async function(){monaco.languages.typescript.typescriptDefaults.addExtraLib(await se()),monaco.languages.typescript.typescriptDefaults.addExtraLib(await re()),c=monaco.editor.create(document.getElementById("editor"),{language:"typescript",automaticLayout:!0}),W=await(await monaco.languages.typescript.getTypeScriptWorker())(c.getModel().uri),c.getModel().updateOptions({tabSize:2});for(const[o]of y){const l=U(o);B.appendChild(l.parentElement)}let t=m.textContent;for(let o=0;o<window.localStorage.length;o++){const l=ie(o);if(l)if(l==="currentName")t=C(l);else if(l==="safe")F=C(l)!=="false";else{const i=U(l);I.insertAdjacentElement("afterend",i.parentElement),K(i)}}const n=new URLSearchParams(window.location.search);if(window.location.hash.length>0){const o=unescape(window.location.hash.substring(1));h(o)}else if(n.get("script")!=null){console.log(`Fetching ${n.get("script")}`),F=!1;const l=await(await fetch(n.get("script"))).text();h(T(l,n.get("name")).name)}else h(t),window.location.hash=`#${t}`;D&&J(),c.onDidChangeModelContent(o=>{if(r.disabled=!1,R){R=!1;return}if(q){const l=c.getPosition();T(c.getValue()).button.click(),c.setPosition(l)}}),window.onresize=()=>{c.layout({})}});const d=document.querySelector("model-viewer"),ae=document.querySelector("#animation"),v=document.querySelector("#play"),p=document.querySelector("#scrubber");let $=!1;d.addEventListener("load",()=>{const e=d.availableAnimations.length>0;ae.style.display=e?"flex":"none",e&&Q()});function Q(){d.play(),v.classList.remove("play"),v.classList.add("pause"),$=!1,p.classList.add("hide")}function ue(){d.pause(),v.classList.remove("pause"),v.classList.add("play"),$=!0,p.max=d.duration,p.value=d.currentTime,p.classList.remove("hide")}v.onclick=function(){$?Q():ue()};p.oninput=function(){d.currentTime=p.value};const f=document.querySelector("#console"),de=console.log;console.log=function(e){f.textContent+=e+`\r
`,f.scrollTop=f.scrollHeight,de(e)};function fe(){f.textContent=""}function me(){r.firstChild.style.visibility="hidden",r.classList.add("red","cancel")}function pe(){r.firstChild.style.visibility="visible",r.classList.remove("red","cancel")}let X=performance.now();function Y(){pe();const e=performance.now(),t=f.textContent;f.textContent=t.substring(t.indexOf(`
`)+1),console.log(`Took ${(Math.round((e-X)/10)/100).toLocaleString()} seconds`)}const s={glbURL:null,threeMFURL:null};let x=null;function P(){x=new te,x.onmessage=function(e){if(e.data==null){W!=null&&!D&&J(),D=!0;return}if(e.data.log!=null){f.textContent+=e.data.log+`\r
`,f.scrollTop=f.scrollHeight;return}Y(),r.disabled=!0,s.threeMFURL!=null&&(URL.revokeObjectURL(s.threeMFURL),s.threeMFURL=null),URL.revokeObjectURL(s.glbURL),s.glbURL=e.data.glbURL,s.threeMFURL=e.data.threeMFURL,A.disabled=s.threeMFURL==null,d.src=s.glbURL,s.glbURL==null?(d.showPoster(),G.textContent="Error",P()):g("safe","true")}}P();async function ge(){E(),g("safe","false"),me(),fe(),console.log("Running...");const e=await W.getEmitOutput(c.getModel().uri.toString());x.postMessage(e.outputFiles[0].text),X=performance.now()}function we(){x.terminate(),P(),Y(),console.log("Run canceled")}r.onclick=function(){r.classList.contains("cancel")?we():ge()};function Z(e,t,n){const o=e.parentElement;return()=>{const l=j.firstElementChild;l!==o&&(w.insertBefore(l,w.firstElementChild),j.insertBefore(o,w),o.appendChild(k.parentElement));const i=document.createElement("a");i.download=t,i.href=s[n],i.click()}}const z=document.querySelector("#glb");z.onclick=Z(z,"manifold.glb","glbURL");const A=document.querySelector("#threemf");A.onclick=Z(A,"manifold.3mf","threeMFURL");
