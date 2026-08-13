(()=>{
const APP_VERSION='v62',APP_BUILD='2026.08.14',APP_REPO='letszun/CHONGQUING-TRIP';
const STYLE_ID='cq-v62-ui-patch';
if(!document.getElementById(STYLE_ID)){
  const style=document.createElement('style');style.id=STYLE_ID;style.textContent=`
.version-stack{display:grid;gap:10px}
.version-build{min-width:0;border-radius:24px;padding:17px 18px 18px;background:var(--t-c2);color:var(--on-c2);box-shadow:var(--shadow)}
.version-build>span{display:block;font-size:9px;line-height:1.3;font-weight:760;letter-spacing:.01em;color:var(--muted-c2)}
.version-build>strong{display:block;margin-top:8px;font-size:48px;line-height:.9;font-weight:830;letter-spacing:-.065em;color:inherit}
.version-meta-card{min-width:0;border-radius:24px;padding:3px 16px;background:var(--t-paper);color:var(--t-ink);box-shadow:var(--shadow)}
.version-row{min-width:0;display:grid;grid-template-columns:70px minmax(0,1fr);gap:12px;align-items:center;padding:13px 0;border-top:1px solid color-mix(in srgb,var(--t-ink) 11%,transparent)}
.version-row:first-child{border-top:0}
.version-row>span{font-size:9px;font-weight:750;color:var(--muted-paper)}
.version-row>b{min-width:0;font-size:13px;line-height:1.35;font-weight:760;text-align:right;overflow-wrap:anywhere;color:var(--t-ink)}
.version-github{min-width:0;border-radius:22px;padding:14px 16px;background:var(--t-action);color:var(--on-action);box-shadow:var(--shadow);display:grid;grid-template-columns:minmax(0,1fr) auto;gap:12px;align-items:center}
.version-github>span{min-width:0;display:grid;gap:4px}
.version-github small{font-size:9px;line-height:1.2;font-weight:750;color:var(--muted-action)}
.version-github b{min-width:0;font-size:13px;line-height:1.35;font-weight:760;overflow-wrap:anywhere;color:var(--on-action)}
.version-github i{font-size:17px;line-height:1;font-style:normal;color:var(--on-action)}
html[data-theme="trullion"] .plan-card.lime .plan-event,
html[data-theme="trullion"] .plan-card.lime .plan-foot>div,
html[data-theme="trullion"] .plan-card.lime .plan-foot>button{background:#AFBADB!important;color:#111713!important;box-shadow:inset 0 0 0 1px rgba(17,23,19,.07)!important}
html[data-theme="trullion"] .plan-card.lime .plan-event small,
html[data-theme="trullion"] .plan-card.lime .plan-foot span,
html[data-theme="trullion"] .plan-card.lime .plan-foot>button span{color:rgba(17,23,19,.62)!important}
`;document.head.appendChild(style);
}
if(!document.getElementById('version')){const el=document.createElement('section');el.id='version';el.className='view';document.getElementById('detail')?.before(el)}
if(Array.isArray(MORE)&&!MORE.some(x=>x[0]==='version'))MORE.push(['version','VERSION','앱 버전 · GitHub 배포']);
function renderVersionPanel(){document.getElementById('version').innerHTML=`${sec('VERSION')}<div class="version-stack"><section class="version-build"><span>CURRENT BUILD</span><strong>${APP_VERSION}</strong></section><section class="version-meta-card"><div class="version-row"><span>BUILD</span><b>${APP_BUILD}</b></div><div class="version-row"><span>BRANCH</span><b>main</b></div><div class="version-row"><span>SYNC</span><b>GitHub</b></div></section><a class="version-github" href="https://github.com/${APP_REPO}" target="_blank" rel="noopener"><span><small>REPOSITORY</small><b>${APP_REPO}</b></span><i>↗</i></a></div>`}
const baseRoute=route;window.removeEventListener('hashchange',baseRoute);const patchedRoute=()=>{const v=(location.hash||'#today').slice(1).split('/')[0];if(v==='version'){renderVersionPanel();show('version');nav('more');return}baseRoute()};window.addEventListener('hashchange',patchedRoute);if(location.hash==='#version')patchedRoute()
})();
