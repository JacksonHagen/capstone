import{r as xt,a as it,o as Dt,c as h,b as y,d as r,e as l,f as o,g as w,F as A,h as T,t as g,p as D,i as S,j as H,w as R,k as E,l as b,m as L,T as rt,C as z,n as N,q as ct,B as St,s as V,L as F,u as Ht,S as lt,v as $t,x as Ct,y as k,z as W,A as It,M as U,D as Tt,E as Y,G as dt,H as Et,I as ut,J as Ot,K as jt,P as Lt,N as Mt,O as Pt,Q as Bt,R as G,U as qt,V as Rt,W as K,X as zt,Y as Nt,Z as Vt,_ as Ft,$ as Wt}from"./vendor.94673814.js";const Ut=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))t(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const n of d.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function a(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerpolicy&&(d.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?d.credentials="include":c.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function t(c){if(c.ep)return;c.ep=!0;const d=a(c);fetch(c.href,d)}};Ut();const u=xt({user:{},account:{},habits:[],activeHabit:{},myAwards:[],myHabits:[],day:{},newAward:{},quote:{}}),_t=window.location.origin.includes("localhost"),Q=_t?"http://localhost:3000":"",Yt="dev-wvrfwzhq.us.auth0.com",Gt="lAcTCVPJK7nDO2DAFlGznd09I1Z68b49",Kt="https://JackDev.com",Qt={apiKey:"AIzaSyDeQ2_okhLsFQDNMaciif7MfHxosUmF33Y",authDomain:"ontrak-capstone.firebaseapp.com",projectId:"ontrak-capstone",storageBucket:"ontrak-capstone.appspot.com",messagingSenderId:"289407244703",appId:"1:289407244703:web:c560af06ddfd19f9ecc5aa",measurementId:"G-KBZEQ8SECW"};function O(s,e){if(_t)console[s](`[${s}] :: ${new Date().toLocaleTimeString()} :: `,...e);else{switch(s){case"log":case"assert":return}console[s](`[${s}] :: ${new Date().toLocaleTimeString()} :: `,...e)}}const $={log(){O("log",arguments)},error(){O("error",arguments)},warn(){O("warn",arguments)},assert(){O("assert",arguments)},trace(){O("trace",arguments)}},f=it.create({baseURL:Q,timeout:8e3}),cn=it.create({baseURL:"https://bcw-sandbox.herokuapp.com",timeout:8e3});class Zt{async getHabitsByQuery(e){const a=await f.get("api/habits",e);u.myHabits=a.data}async getHabitbyId(e){const a=await f.get("api/habits/"+e);u.activeHabit.unshift(a.data)}async createHabit(e){const a=await f.post("api/habits/",e);u.myHabits.unshift(a.data)}async editHabit(e){const a=await f.put("api/habits/"+e.id,e);let t=u.myHabits.findIndex(c=>c.id===a.data.id);t!=-1&&u.myHabits.splice(t,1,a.data),u.activeHabit=a.data}async archiveHabit(e){await f.delete("api/habits/"+e),u.activeHabit.isActive=!1;let a=u.myHabits.find(t=>t.id===e);a&&(a.isActive=!1)}async getMyHabits(){const e=await f.get("account/habits");u.myHabits=e.data}}const j=new Zt;var v=(s,e)=>{for(const[a,t]of e)s[a]=t;return s};const Jt={name:"App",setup(){function s(){u.day=new Date}return Dt(async()=>{s(),setInterval(s,6e4)}),{appState:h(()=>u)}}},Xt={class:"sticky-md-top"},te={class:"mobile"},ee=o("footer",null,null,-1);function ae(s,e,a,t,c,d){const n=y("Navbar"),i=y("router-view");return r(),l(A,null,[o("header",Xt,[w(n)]),o("main",te,[w(i)]),ee],64)}var oe=v(Jt,[["render",ae]]);const se={setup(){let s=new Date(u.day);s.setDate(s.getDate()+1);let e=new Date;e.setDate(s.getDate()-7);function a(t,c){const d=new Date(t.getTime()),n=[];for(;d<=c;){let i=new Date(d);n.push(i.toISOString().split("T")[0]),d.setDate(d.getDate()+1)}return n}return{habits:h(()=>u.myHabits),week:h(()=>a(e,s))}}},ht=s=>(D("data-v-4b59cbd0"),s=s(),S(),s),ne={class:"row"},ie={class:"col-12 bg-light rounded p-3 d-flex flex-column align-items-center brightness"},re=ht(()=>o("p",{class:"text-dark"},"Last 7 Days",-1)),ce={class:"container"},le={class:"col-2 display-none-mobile"},de={class:"d-flex h-100 justify-content-end align-items-center"},ue={class:"text-end"},_e={class:"m-0"},he={class:"display-none-desktop m-0 mt-1"},be=ht(()=>o("div",{class:"col-2 display-none-mobile"},null,-1)),me={class:"row justify-content-center display-none-mobile"},ge={class:"pt-2 m-0"};function ve(s,e,a,t,c,d){const n=y("HabitWeeklySummary");return r(),l("div",ne,[o("div",ie,[re,o("div",ce,[(r(!0),l(A,null,T(t.habits,i=>(r(),l("div",{class:"row text-dark text-center justify-content-center",key:i.id},[o("div",le,[o("div",de,[o("div",ue,[o("p",_e,g(i.title),1)])])]),o("p",he,g(i.title),1),w(n,{habit:i},null,8,["habit"]),be]))),128)),o("div",me,[(r(!0),l(A,null,T(t.week,i=>(r(),l("div",{class:"col-1 box rounded text-dark m-1",key:i},[o("p",ge,g(i.split("-")[1])+"/"+g(i.split("-")[2]),1)]))),128))])])])])}var ye=v(se,[["render",ve],["__scopeId","data-v-4b59cbd0"]]),fe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ye});const pe={setup(){let s=[],e=[];const a=H(!1);R(()=>{const n=new Date(u.account.createdAt),i=new Date(u.day);i.setDate(i.getDate()+1),u.myHabits.length&&a.value!=!0&&t(n,i)});function t(n,i){const _=new Date(n.getTime()),m=[];for(;_<=i;)m.push(new Date(_)),_.setDate(_.getDate()+1);c(m)}function c(n){for(let i=0;i<n.length;i++){const _=new Date(n[i]);let m=[],et=0;u.myHabits.forEach(C=>{if(new Date(C.createdAt).getTime()<_.getTime()){m.push(C);let at=0,ot=C.trackHistory.findIndex(At=>new Date(_).toDateString());C.trackHistory.forEach(At=>{let st=new Date(C.trackHistory[ot]).getDate(),nt=ot;for(;st==new Date(C.trackHistory[nt]).getDate();)at++,nt+=C.interval,st--}),et+=at}}),m.length!=0&&(s.push(_.toDateString().split(" ")[2]+" "+_.toDateString().split(" ")[1]),e.push(Math.floor(et)))}a.value=!0}const d=h(()=>{let n=[];return u.myHabits.forEach(i=>n.push({streak:i.streak,title:i.title,color:i.color})),n.sort((i,_)=>i.streak-_.streak).reverse(),n});return{dayLabels:s,dayData:e,lineMax:h(()=>e[-1]*2),lineLoaded:a,topStreaks:h(()=>d.value.slice(0,3)),loaded:h(()=>u.myHabits.length),activeHabitsData:h(()=>{let n=[];return n[0]=u.myHabits.filter(i=>i.isActive).length,n[1]=u.myHabits.filter(i=>!i.isActive).length,n})}}},Z=s=>(D("data-v-758d703c"),s=s(),S(),s),we={class:"bg-primary rounded"},ke={class:"row mb-4"},Ae={class:"col-md-8 bg-light rounded p-3 chartbox"},xe=Z(()=>o("p",{class:"text-dark text-center"},"My Top Streaks",-1)),De={class:"col-md-3 m-start bg-light rounded text-center"},Se=Z(()=>o("p",{class:"text-dark"},"Active / Archived",-1)),He={class:"row"},$e={class:"col-12 p-3 bg-light mb-4 rounded"},Ce=Z(()=>o("p",{class:"text-dark"},"Streak Score",-1));function Ie(s,e,a,t,c,d){const n=y("BarChart"),i=y("PieChart"),_=y("LineChart");return r(),l(A,null,[o("div",we,[o("div",ke,[o("div",Ae,[xe,t.loaded?(r(),E(n,{key:0,chartData:{labels:t.topStreaks.map(m=>m.title),datasets:[{label:"",data:t.topStreaks.map(m=>m.streak),backgroundColor:t.topStreaks.map(m=>m.color)}]},chartOptions:{scales:{y:{ticks:{mirror:!0}}},indexAxis:"y",plugins:{legend:{display:!0,labels:t.topStreaks.map(m=>m.title)}}}},null,8,["chartData","chartOptions"])):b("",!0)]),o("div",De,[Se,w(i,{chartData:{labels:["Active","Archived"],datasets:[{data:t.activeHabitsData,backgroundColor:["#DE9A15","#D1F3EC"]}]}},null,8,["chartData"])])])]),o("div",He,[o("div",$e,[Ce,t.lineLoaded?(r(),E(_,{key:0,chartData:{labels:t.dayLabels,datasets:[{label:"",data:t.dayData,fill:!1,borderColor:"#DE9A15",tension:.1}]},chartOptions:{scales:{y:{suggestedMax:t.dayData[t.dayData.length-1]*1.5,beginAtZero:!0},x:{ticks:{padding:1,autoSkip:!1,maxRotation:30,minRotation:30}}},plugins:{legend:{display:!1}}}},null,8,["chartData","chartOptions"])):b("",!0)])])],64)}var Te=v(pe,[["render",Ie],["__scopeId","data-v-758d703c"]]),Ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Te});const Oe={setup(){return{myHabitAwards:h(()=>u.myAwards.filter(s=>s.habitId)),myAccountAwards:h(()=>u.myAwards.filter(s=>!s.habitId))}}},J=s=>(D("data-v-598e164f"),s=s(),S(),s),je={class:"row mb-4"},Le={class:"col-12 bg-light rounded p-3"},Me=J(()=>o("p",{class:"text-dark"},"My Awards",-1)),Pe={class:"row text-center text-dark justify-content-around"},Be={key:0},qe=J(()=>o("u",null,"Habit Awards",-1)),Re=[qe],ze=["src","title"],Ne={key:1},Ve={key:2},Fe=J(()=>o("u",null,"Account Awards",-1)),We=[Fe],Ue=["src"];function Ye(s,e,a,t,c,d){return r(),l("div",je,[o("div",Le,[Me,o("div",Pe,[t.myHabitAwards.length?(r(),l("p",Be,Re)):b("",!0),(r(!0),l(A,null,T(t.myHabitAwards,n=>(r(),l("div",{class:"col-3",key:n.id},[o("img",{src:n.img,class:"img-fluid",title:"Streak award for "+n.habit.title},null,8,ze)]))),128)),t.myAccountAwards.length&&t.myHabitAwards.length?(r(),l("hr",Ne)):b("",!0),t.myAccountAwards.length?(r(),l("p",Ve,We)):b("",!0),(r(!0),l(A,null,T(t.myAccountAwards,n=>(r(),l("div",{class:"col-3",key:n.id},[o("img",{crossorigin:"anonymous",src:n.img,class:"img-fluid"},null,8,Ue)]))),128))])])])}var Ge=v(Oe,[["render",Ye],["__scopeId","data-v-598e164f"]]),Ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ge});const Qe={setup(){return{myHabits:h(()=>u.myHabits),awards:h(()=>u.myAwards),quote:h(()=>u.quote)}}},Ze={class:"container"},Je={class:"row"},Xe={class:"col-md-3 g-0"},ta={class:"bg-primary rounded mt-4 me-3 p-3"},ea={class:"col-md-9 g-0"},aa={class:"ms-auto bg-primary rounded mt-4 p-3"},oa={key:0},sa={key:0,class:"text-end"};function na(s,e,a,t,c,d){return r(),l("div",Ze,[o("div",Je,[o("div",Xe,[o("div",ta,[o("h5",null,"Habits: "+g(t.myHabits.length),1),o("h5",null,"Awards: "+g(t.awards.length),1)])]),o("div",ea,[o("div",aa,[w(rt,{name:"slide-fade"},{default:L(()=>[t.quote?(r(),l("p",oa,g(t.quote.content),1)):b("",!0)]),_:1}),w(rt,{name:"slide-fade"},{default:L(()=>[t.quote?(r(),l("p",sa,[o("i",null,"-"+g(t.quote.author),1)])):b("",!0)]),_:1})])])])])}var ia=v(Qe,[["render",na],["__scopeId","data-v-16852d8b"]]),ra=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ia});const ca={props:{award:{type:Object,required:!0}},setup(){return{}}},la={class:"component"},da=["src","title"];function ua(s,e,a,t,c,d){return r(),l("div",la,[o("img",{src:a.award.img,crossorigin:"anonymous",height:"270",alt:"",title:a.award.title,class:"award-mobile",style:{filter:"brightness(70%)"}},null,8,da)])}var _a=v(ca,[["render",ua]]),ha=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_a});z.register(N,ct,St,V,F);const ba={components:{Bar:Ht},props:{chartData:{type:Object,required:!0},chartOptions:{type:Object,default:()=>{}}},setup(){return{height:150}}};function ma(s,e,a,t,c,d){const n=y("Bar");return r(),E(n,{"chart-data":a.chartData,"chart-options":a.chartOptions,height:t.height},null,8,["chart-data","chart-options","height"])}var ga=v(ba,[["render",ma]]),va=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ga});class I{static async confirm(e="Are you sure?",a="You won't be able to revert this!",t="warning",c="Yes, archive it!"){try{return!!(await lt.fire({title:e,text:a,icon:t,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:c})).isConfirmed}catch{return!1}}static toast(e="Warning!",a="warning",t="top-end",c=3e3,d=!0){lt.fire({title:e,icon:a,position:t,timer:c,timerProgressBar:d,toast:!0,showConfirmButton:!1})}}const ya={props:{habit:{type:Object,required:!0}},setup(s){const e=H(!1),a=$t(),t=H(!1),c=H(!1),d=H(!1),n=new Date(s.habit.trackHistory[0]),i=u.day.getDate()-n.getDate(),_=!s.habit.trackHistory[0];return R(async()=>{n.toDateString()==u.day.toDateString()&&s.habit.interval>i&&(t.value=!0),i>s.habit.interval&&d.value!=!0&&(d.value=!0,s.habit.streak=0,await j.editHabit(s.habit))}),{isNew:_,lastTracked:n,timeSinceLastTracked:i,isTracked:t,isChecked:c,missed:d,flip:e,account:h(()=>u.account),myHabitAwards:h(()=>u.myAwards.filter(m=>m.habitId==s.habit.id)),goToHabitsDetailPage(){a.push({name:"HabitsDetailPage",params:{id:"h-"+s.habit.id}})},toggle(){e.value=!e.value,e.value?document.getElementById("h-"+s.habit.id).classList.remove("round"):document.getElementById("h-"+s.habit.id).classList.add("round"),Ct.getOrCreateInstance(document.getElementById(s.habit.id)).toggle()},async checkIn(){try{c.value=!0,s.habit.trackHistory.unshift(new Date),s.habit.streak++,await j.editHabit(s.habit)}catch(m){$.error(m),I.toast(m.message,"error")}}}}},x=s=>(D("data-v-fe819918"),s=s(),S(),s),fa={class:"col-12 d-flex justify-content-center w-100 align-items-center"},pa={id:"habit",class:"mt-3 justify-content-center"},wa=["id"],ka={class:"d-flex col-8"},Aa={key:0,class:"mdi mdi-clock-alert-outline mx-2",title:"Check-in to keep your streak"},xa=x(()=>o("span",{class:"mdi mdi-menu-down col-1"},null,-1)),Da={key:0,class:"mdi mdi-bell-alert col-1 text-end",title:"You missed your check-in!"},Sa={key:1},Ha=x(()=>o("h5",{class:"col-1"},[o("i",null,"Archived")],-1)),$a=[Ha],Ca={key:2},Ia={key:0,class:"form-check"},Ta=x(()=>o("label",{class:"form-check-label visually-hidden",for:""}," Check if Habit Completed ",-1)),Ea=x(()=>o("h5",null,null,-1)),Oa={key:3,class:"d-flex align-items-center"},ja=x(()=>o("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 130.2 130.2"},[o("circle",{class:"path circle",fill:"none",stroke:"#121213","stroke-width":"6","stroke-miterlimit":"10",cx:"65.1",cy:"65.1",r:"62.1"}),o("polyline",{class:"path check",fill:"none",stroke:"#121213","stroke-width":"6","stroke-linecap":"round","stroke-miterlimit":"10",points:"100.2,40.2 51.5,88.8 29.8,67.5 "})],-1)),La=[ja],Ma=["id"],Pa={class:"row w-100 g-0"},Ba={class:"col-md-5"},qa={class:"p-2 m-2"},Ra={key:0},za={key:0},Na={key:1},Va={key:1,class:"text-start my-4"},Fa={class:"col-md-7 g-0 mb-4 align-items-center"},Wa={class:"d-flex flex-column justify-content-between h-100 rounded"},Ua={key:0,class:"d-flex flex-column"},Ya=x(()=>o("hr",null,null,-1)),Ga=x(()=>o("p",{class:"p-3 mb-0 fs-5 fw-lighter"}," Your earned badges will be displayed here ",-1)),Ka=x(()=>o("hr",null,null,-1)),Qa=[Ya,Ga,Ka],Za={key:1,class:"p-2 m-2"},Ja={id:"badges",class:"d-flex m-3"},Xa=["src"],to={key:2,class:"d-flex flex-column align-items-end mt-auto text-dark m-1"},eo=x(()=>o("h5",{class:"m-1"},"Last 7 days",-1));function ao(s,e,a,t,c,d){const n=y("HabitWeeklySummary");return r(),l("div",fa,[o("div",pa,[o("div",{class:"habit-bar d-flex justify-content-between align-items-center round text-start",style:k("background-color: "+a.habit.color),type:"button","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"false","aria-controls":"collapseOne",id:"h-"+a.habit.id,onClick:e[1]||(e[1]=W((...i)=>t.toggle&&t.toggle(...i),["stop"]))},[o("div",ka,[a.habit.interval-t.timeSinceLastTracked<1&&a.habit.isActive?(r(),l("div",Aa)):b("",!0),o("h5",null,g(a.habit.title),1),xa]),t.missed&&a.habit.isActive?(r(),l("div",Da)):b("",!0),a.habit.isActive?!t.isTracked||t.isNew?(r(),l("div",Ca,[t.isNew||t.timeSinceLastTracked>=a.habit.interval?(r(),l("div",Ia,[o("input",{type:"checkbox",class:"form-check-input border border-primary",title:"mark habit complete",name:"",id:"",value:"checkedValue",onClick:e[0]||(e[0]=W((...i)=>t.checkIn&&t.checkIn(...i),["stop"]))}),Ta,Ea])):b("",!0)])):t.isTracked?(r(),l("div",Oa,La)):b("",!0):(r(),l("div",Sa,$a))],12,wa),o("div",{id:a.habit.id,class:"collapse hide habit-body","aria-labelledby":"headingOne","data-parent":"#accordionExample"},[o("div",{class:"shadow short-round",style:k("filter: hue-rotate(5deg) brightness(140%); background-color: "+a.habit.color)},[o("div",Pa,[o("div",Ba,[o("div",qa,[a.habit.isActive?(r(),l("span",Ra,[t.isTracked?(r(),l("h4",za,"You've completed this habit today!")):b("",!0),o("p",null,"Your streak is "+g(a.habit.streak)+" days.",1),a.habit.interval-t.timeSinceLastTracked>0?(r(),l("p",Na," You'll be reminded of this habit again in "+g(a.habit.interval-t.timeSinceLastTracked)+" day"+g(a.habit.interval-t.timeSinceLastTracked>1?"s":""),1)):b("",!0)])):b("",!0),a.habit.isActive?b("",!0):(r(),l("div",Va," This habit has been archived. ")),o("button",{class:"m-0 btn btn-outline-dark justify-flex-start d-flex",onClick:e[2]||(e[2]=i=>t.goToHabitsDetailPage())}," See More... ")])]),o("div",Fa,[o("div",Wa,[t.myHabitAwards[0]?b("",!0):(r(),l("div",Ua,Qa)),t.myHabitAwards[0]?(r(),l("h3",Za," My badges for this habit ")):b("",!0),o("div",Ja,[(r(!0),l(A,null,T(t.myHabitAwards,i=>(r(),l("img",{key:i.id,src:i.img,alt:"",height:"100",style:{filter:"brightness(80%)"}},null,8,Xa))),128))]),a.habit.interval<7&&a.habit.isActive?(r(),l("div",to,[eo,w(n,{habit:a.habit},null,8,["habit"])])):b("",!0)])])])],4)],8,Ma)])])}var oo=v(ya,[["render",ao],["__scopeId","data-v-fe819918"]]),so=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:oo});const no={props:{habit:{type:Object,required:!0}},setup(s){return{awards:h(()=>u.myAwards.filter(e=>e.habitId==s.habit.id)),async archiveHabit(){try{await I.confirm("Are you sure?","This habit will be archived, not deleted. Archived habits are not tracked and cannot be interacted with. ","warning","Yes, archive it.")&&await j.archiveHabit(s.habit.id)}catch(e){$.error(e),I.toast(e.message,"error")}}}}},X=s=>(D("data-v-8f072944"),s=s(),S(),s),io=["id"],ro={class:"darken-30 p-3 mt-3 w-100"},co={class:"mt-3 justify-content-center"},lo=X(()=>o("h3",null,"Habit",-1)),uo={key:1},_o=X(()=>o("i",null,"Archived",-1)),ho=[_o],bo={class:"col-12 p-1 rounded bg-light"},mo={class:"col-12 p-1 my-2 rounded bg-light"},go=X(()=>o("h3",null,"Last 7 Days",-1)),vo={class:"col-12 d-flex justify-content-center"},yo={class:"col-12 bg-light d-flex justify-content-around"};function fo(s,e,a,t,c,d){const n=y("HabitWeeklySummary"),i=y("Award");return r(),l("div",{class:"col-12 d-flex fit-content(100vh) containerScroll container-scroll align-items-center scrollsnap",id:"h-"+a.habit.id},[o("div",ro,[o("div",co,[o("div",{class:"darken-30 w-100 p-3 m-0 d-flex justify-content-between rounded-top",style:k("background-color: "+a.habit.color)},[lo,a.habit.isActive?(r(),l("button",{key:0,class:"btn btn-outline-dark",onClick:e[0]||(e[0]=_=>t.archiveHabit())}," Archive Habit ")):(r(),l("h5",uo,ho))],4),o("div",{class:"rounded-bottom p-3",style:k("filter: hue-rotate(5deg) brightness(140%); background-color: "+a.habit.color)},[o("h3",null,g(a.habit.title),1),o("div",bo,[o("h5",null,g(a.habit.inspo),1)]),o("div",mo,[o("h6",null," Current Streak: "+g(a.habit.streak)+" Max Streak: "+g(a.habit.maxStreak),1)]),go,o("div",vo,[w(n,{habit:a.habit},null,8,["habit"])]),o("div",yo,[(r(!0),l(A,null,T(t.awards,_=>(r(),E(i,{key:_.id,award:_},null,8,["award"]))),128))])],4)])])],8,io)}var po=v(no,[["render",fo],["__scopeId","data-v-8f072944"]]),wo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:po});const bt=It.initializeApp(Qt),ko=bt.auth(),Ao=bt.storage();class xo{async login(){try{const a=(await f.get("account/firebase")).data.token;await ko.signInWithCustomToken(a)}catch(e){$.error(e),I.toast(e.message,"error")}}async upload(e){return await(await Ao.ref("Images").child("images").child("badges").child(e.name).put(e,{customMetadata:{uid:u.account.id,size:e.size,type:"Images"}})).ref.getDownloadURL()}}const mt=new xo;const tt={setup(){const s=H({}),e=H([]),a=H(!1);return{showImgInput:a,formData:s,formColor:h(()=>`${s.value.color}`),account:h(()=>u.account),day:h(()=>u.day),toggleImgInput(){a.value=!a.value},setImage(t){e.value=t.target.files},async upload(){try{const t=await mt.upload(e.value[0])}catch(t){$.error(t),I.toast(t.message,"error")}},async newHabit(){try{s.value.interval=document.getElementById("habit-interval").value,s.value.accountId=this.account.id,await j.createHabit(s.value),s.value={},U.getOrCreateInstance(document.getElementById("newHabitModal")).toggle()}catch(t){$.error(t),I.toast(t.message,"error")}}}}},gt=()=>{Tt(s=>({"2489d458-formColor":s.formColor}))},vt=tt.setup;tt.setup=vt?(s,e)=>(gt(),vt(s,e)):gt;const Do=tt,M=s=>(D("data-v-2489d458"),s=s(),S(),s),So={class:"mb-3"},Ho=M(()=>o("label",{for:"habit-title",class:"form-label"},"Give it a title:",-1)),$o={class:"mb-3"},Co={class:"d-flex justify-content-between"},Io=M(()=>o("label",{for:"habit-inspo",class:"form-label"},"Why are you making this Habit?",-1)),To={key:0},Eo={key:1},Oo=M(()=>o("small",{id:"helpId",class:"form-text text-muted"},"This is optional, but we will show it to you later.",-1)),jo={class:"input-group mb-3"},Lo=M(()=>o("label",{class:"form-check-label visually-hidden",id:"color-label",name:"color",for:"color"},"Choose Color",-1)),Mo=ut('<option class="border-top border-dark bg-danger dropdown-item" value="#EA9D55" data-v-2489d458> Orange </option><option class="border-top border-dark bg-warning dropdown-item" selected value="#FFECA8" data-v-2489d458> Yellow </option><option class="border-top border-dark bg-success dropdown-item" value="#D1F3EC" data-v-2489d458> Aqua </option><option class="border-top border-dark bg-primary dropdown-item text-light" value="#74A59A" data-v-2489d458> Green </option><option class="border-top border-dark bg-purple dropdown-item" value="#9BA5FF" data-v-2489d458> Purple </option>',5),Po=[Mo],Bo=ut('<div class="mb-3" data-v-2489d458><label for="habit-interval" data-v-2489d458>How often do you want us to remind you?</label><select name="habit-interval" id="habit-interval" class="rounded p-1 ms-2" required data-v-2489d458><option selected value="1" data-v-2489d458>Daily</option><option value="2" data-v-2489d458>Every other day</option><option value="7" data-v-2489d458>Weekly</option><option value="28" data-v-2489d458>Monthly</option></select></div><div class="modal-footer" data-v-2489d458><button type="button" class="btn btn-secondary" data-bs-target="newHabitModal" data-bs-dismiss="modal" data-v-2489d458> Close </button><button type="submit" class="btn btn-primary" data-v-2489d458>Submit</button></div>',2);function qo(s,e,a,t,c,d){return r(),l("form",{name:"newHabitForm",onSubmit:e[4]||(e[4]=W((...n)=>t.newHabit&&t.newHabit(...n),["prevent"]))},[o("div",So,[Ho,Y(o("input",{type:"text",class:"form-control",id:"habit-title",placeholder:"","onUpdate:modelValue":e[0]||(e[0]=n=>t.formData.title=n),required:"",max:"40"},null,512),[[dt,t.formData.title]])]),o("div",$o,[o("div",Co,[Io,o("label",{class:"selectable px-1 rounded",onClick:e[1]||(e[1]=(...n)=>t.toggleImgInput&&t.toggleImgInput(...n)),for:""},[t.showImgInput?b("",!0):(r(),l("span",To,"Add an image")),t.showImgInput?(r(),l("span",Eo,"Actually, just text")):b("",!0)])]),Y(o("input",{type:"text",class:"form-control",id:"habit-inspo",placeholder:"","onUpdate:modelValue":e[2]||(e[2]=n=>t.formData.inspo=n),max:"1000"},null,512),[[dt,t.formData.inspo]]),Oo]),o("div",jo,[Lo,Y(o("select",{class:"form-select rounded",required:"",name:"color",id:"color","aria-label":"Default select example",placeholder:"Choose A Color","onUpdate:modelValue":e[3]||(e[3]=n=>t.formData.color=n)},Po,512),[[Et,t.formData.color]])]),Bo],32)}var Ro=v(Do,[["render",qo],["__scopeId","data-v-2489d458"]]),zo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ro});const No={props:{habit:{type:Object,required:!0}},setup(s){const e=Ot();let a=new Date(u.day);a.setDate(a.getDate()+1);let t=new Date;t.setDate(a.getDate()-7);function c(d,n){const i=new Date(d.getTime()),_=[];for(;i<=n;){let m=new Date(i);_.push(m.toISOString().split("T")[0]),i.setDate(i.getDate()+1)}return _}return{route:e,today:h(()=>new Date),week:c(t,a),trackHistory:h(()=>{let d=[];return s.habit.trackHistory.forEach(n=>{let i=new Date(n);d.push(i.toISOString().split("T")[0])}),d})}}},Vo={class:"d-flex"},Fo={class:""},Wo={class:""},Uo={class:""},Yo={class:""},Go={class:""},Ko={class:""},Qo={class:""};function Zo(s,e,a,t,c,d){return r(),l("div",Vo,[o("div",Fo,[o("div",{class:"m-1 rounded border box",style:k("background-color: "+(t.trackHistory.includes(t.week[0])?a.habit.color+"; filter: brightness(70%) !important;":"gray"))},null,4)]),o("div",Wo,[o("div",{class:"m-1 rounded border box",style:k("background-color: "+(t.trackHistory.includes(t.week[1])?a.habit.color+"; filter: brightness(70%) !important;":"gray"))},null,4)]),o("div",Uo,[o("div",{class:"m-1 rounded border box",style:k("background-color: "+(t.trackHistory.includes(t.week[2])?a.habit.color+"; filter: brightness(70%) !important;":"gray"))},null,4)]),o("div",Yo,[o("div",{class:"m-1 rounded border box",style:k("background-color: "+(t.trackHistory.includes(t.week[3])?a.habit.color+"; filter: brightness(70%) !important;":"gray"))},null,4)]),o("div",Go,[o("div",{class:"m-1 rounded border box",style:k("background-color: "+(t.trackHistory.includes(t.week[4])?a.habit.color+"; filter: brightness(70%) !important;":"gray"))},null,4)]),o("div",Ko,[o("div",{class:"m-1 rounded border box",style:k("background-color: "+(t.trackHistory.includes(t.week[5])?a.habit.color+"; filter: brightness(70%) !important;":"gray"))},null,4)]),o("div",Qo,[o("div",{class:"m-1 rounded border box",style:k("background-color: "+(t.trackHistory.includes(t.week[6])?a.habit.color+"; filter: brightness(70%) !important;":"gray"))},null,4)])])}var Jo=v(No,[["render",Zo]]),Xo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Jo});z.register(N,jt,V,F,Lt);const ts={components:{Line:Mt},props:{chartData:{type:Object,required:!0},chartOptions:{type:Object,default:()=>{}}},setup(){return{height:200}}};function es(s,e,a,t,c,d){const n=y("Line");return r(),E(n,{"chart-data":a.chartData,"chart-options":a.chartOptions,height:t.height},null,8,["chart-data","chart-options","height"])}var as=v(ts,[["render",es]]),os=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:as});const ss="modulepreload",yt={},ns="/",P=function(e,a){return!a||a.length===0?e():Promise.all(a.map(t=>{if(t=`${ns}${t}`,t in yt)return;yt[t]=!0;const c=t.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${d}`))return;const n=document.createElement("link");if(n.rel=c?"stylesheet":ss,c||(n.as="script",n.crossOrigin=""),n.href=t,document.head.appendChild(n),c)return new Promise((i,_)=>{n.addEventListener("load",i),n.addEventListener("error",_)})})).then(()=>e())};function is(s){switch(s){case"./pages/AboutPage.vue":return P(()=>import("./AboutPage.9862d437.js"),["assets/AboutPage.9862d437.js","assets/vendor.94673814.js"]);case"./pages/AccountPage.vue":return P(()=>import("./AccountPage.a81485af.js"),["assets/AccountPage.a81485af.js","assets/vendor.94673814.js"]);case"./pages/HabitsDetailPage.vue":return P(()=>import("./HabitsDetailPage.55be27b6.js"),["assets/HabitsDetailPage.55be27b6.js","assets/vendor.94673814.js"]);case"./pages/HomePage.vue":return P(()=>import("./HomePage.3f132773.js"),["assets/HomePage.3f132773.js","assets/vendor.94673814.js"]);default:return new Promise(function(e,a){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+s)))})}}function B(s){return()=>is(`./pages/${s}.vue`)}const rs=[{path:"/",name:"Home",component:B("HomePage"),beforeEnter:G},{path:"/about",name:"About",component:B("AboutPage")},{path:"/habitsDetailPage/:id",name:"HabitsDetailPage",component:B("HabitsDetailPage"),beforeEnter:G},{path:"/account",name:"Account",component:B("AccountPage"),beforeEnter:G}],ft=Pt({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:Bt(),routes:rs});class cs{async getAccount(){try{const e=await f.get("/account");u.account=e.data}catch(e){$.error("HAVE YOU STARTED YOUR SERVER YET???",e)}}async editAccount(e){const a=await f.put("/account",e);u.account=a.data}async getMyAwards(){const e=await f.get("/account/awards");u.myAwards=e.data}}const ls=new cs;class ds{async getMyAwards(){const e=await f.get("/account/awards");u.myAwards=e.data}}const us=new ds,q={connection:"connection",connected:"connected",disconnect:"disconnect",authenticate:"authenticate",authenticated:"authenticated",userConnected:"userConnected",userDisconnected:"userDisconnected",error:"error"};class _s{constructor(e=!1,a=Q){this.socket=qt(a||Q),this.requiresAuth=e,this.queue=[],this.authenticated=!1,this.on(q.connected,this.onConnected).on(q.authenticated,this.onAuthenticated).on(q.error,this.onError)}on(e,a){var t;return(t=this.socket)==null||t.on(e,a.bind(this)),this}onConnected(e){this.connected=!0,this.playback()}onAuthenticated(e){this.authenticated=!0,this.playback()}authenticate(e){var a;(a=this.socket)==null||a.emit(q.authenticate,e)}onError(e){$.error("[SOCKET_ERROR]",e)}enqueue(e,a){$.log("[ENQUEING_ACTION]",{action:e,payload:a}),this.queue.push({action:e,payload:a})}playback(){const e=[...this.queue];this.queue=[],e.forEach(a=>{this.emit(a.action,a.payload)})}emit(e,a=void 0){if(this.requiresAuth&&!this.authenticated)return this.enqueue(e,a);if(!this.connected)return this.enqueue(e,a);this.socket.emit(e,a)}}class hs extends _s{constructor(){super();this.on("error",this.onError).on("EARNED_BADGE",this.earnedBadge)}async earnedBadge(e){u.myAwards.push(e),u.newAward=await e.badge,U.getOrCreateInstance(document.getElementById("display-award")).show(),setTimeout(()=>{u.newAward={}},3e3)}onError(e){I.toast(e.message,"error")}}const pt=new hs,p=Rt({domain:Yt,clientId:Gt,audience:Kt,useRefreshTokens:!0,onRedirectCallback:s=>{ft.push(s&&s.targetUrl?s.targetUrl:window.location.pathname)}});p.on(p.AUTH_EVENTS.AUTHENTICATED,async function(){f.defaults.headers.authorization=p.bearer,f.interceptors.request.use(bs),u.user=p.user,await ls.getAccount(),pt.authenticate(p.bearer),await j.getMyHabits(u.user.id),await us.getMyAwards(),await mt.login()});async function bs(s){if(!p.isAuthenticated)return s;const e=p.identity.exp*1e3,a=e<Date.now(),t=e<Date.now()+1e3*60*60*12;return a?await p.loginWithPopup():t&&(await p.getTokenSilently(),f.defaults.headers.authorization=p.bearer,pt.authenticate(p.bearer)),s}const ms={setup(){return{user:h(()=>u.user),account:h(()=>u.account),async login(){p.loginWithPopup()},async logout(){p.logout({returnTo:window.location.origin})}}}},gs=s=>(D("data-v-ef68022e"),s=s(),S(),s),vs={class:"navbar-text"},ys={key:1,class:"dropdown my-2 my-lg-0"},fs={class:"dropdown-toggle selectable","data-bs-toggle":"dropdown","aria-expanded":"false",id:"authDropdown"},ps={key:0,class:"px-2 p-1"},ws=["src"],ks={key:0,class:"mx-3 text-success lighten-30"},As={class:"dropdown-menu p-0 list-group w-100","aria-labelledby":"authDropdown"},xs=gs(()=>o("i",{class:"mdi mdi-logout"},null,-1)),Ds=K(" logout "),Ss=[xs,Ds];function Hs(s,e,a,t,c,d){return r(),l("span",vs,[t.user.isAuthenticated?(r(),l("div",ys,[o("div",fs,[t.account.picture?(r(),l("div",ps,[o("img",{src:t.account.picture,crossorigin:"anonymous",alt:"account photo",height:"40",class:"rounded"},null,8,ws),t.account.picture?b("",!0):(r(),l("span",ks,g(t.account.name),1))])):b("",!0)]),o("div",As,[o("div",{class:"list-group-item list-group-item-action hoverable text-danger",onClick:e[1]||(e[1]=(...n)=>t.logout&&t.logout(...n))},Ss)])])):(r(),l("button",{key:0,class:"btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0",onClick:e[0]||(e[0]=(...n)=>t.login&&t.login(...n))}," Login "))])}var $s=v(ms,[["render",Hs],["__scopeId","data-v-ef68022e"]]),Cs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$s});const Is={setup(){return R(()=>{u.newAward&&setTimeout(()=>{U.getOrCreateInstance(document.getElementById("display-award")).hide()},2e3)}),{}}},Ts={class:"modal",tabindex:"-1",role:"dialog"},Es={class:"modal-dialog",role:"document"},Os={class:""},js={class:"modal-body"};function Ls(s,e,a,t,c,d){return r(),l("div",Ts,[o("div",Es,[o("div",Os,[o("div",js,[zt(s.$slots,"body")])])])])}var Ms=v(Is,[["render",Ls]]),Ps=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ms});const Bs={setup(){return{account:h(()=>u.account)}}},wt=s=>(D("data-v-41458b80"),s=s(),S(),s),qs={class:"bg-primary w-100 d-flex align-items-center active pt-2"},Rs={class:"d-flex justify-content-between col-6"},zs={class:"d-flex"},Ns=K(" Home "),Vs=K(" Stats "),Fs={class:"col-6 text-end d-flex justify-content-end"},Ws={class:"modal fade",id:"newHabitModal",tabindex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"},Us={class:"modal-dialog",role:"document"},Ys={class:"modal-content"},Gs=wt(()=>o("div",{class:"modal-header"},[o("h5",{class:"modal-title"},"What's Your Habit?"),o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),Ks={key:0,class:"modal-body"},Qs=wt(()=>o("button",{class:"m-2 btn btn-info float elevation-5",type:"button",title:"Create a new habit","data-bs-toggle":"modal","data-bs-target":"#newHabitModal"},[o("i",{class:"mdi mdi-plus"})],-1));function Zs(s,e,a,t,c,d){const n=y("router-link"),i=y("Login"),_=y("HabitForm");return r(),l(A,null,[o("nav",qs,[o("div",Rs,[o("div",zs,[o("h1",null,[w(n,{class:"btn text-success lighten-30 selectable text-uppercase",to:{name:"Home"}},{default:L(()=>[Ns]),_:1}),w(n,{to:{name:"Account"},class:"btn text-success lighten-30 selectable text-uppercase"},{default:L(()=>[Vs]),_:1})])])]),o("div",Fs,[w(i)])]),o("div",Ws,[o("div",Us,[o("div",Ys,[Gs,t.account.id?(r(),l("div",Ks,[w(_)])):b("",!0)])])]),Qs],64)}var Js=v(Bs,[["render",Zs],["__scopeId","data-v-41458b80"]]),Xs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Js});z.register(Nt,N,ct,V,F,Vt);const tn={components:{Doughnut:Ft},props:{chartData:{type:Object,required:!0},chartOptions:{type:Object,default:()=>{}}},setup(){return{}}};function en(s,e,a,t,c,d){const n=y("Doughnut");return r(),E(n,{"chart-data":a.chartData,"chart-options":a.chartOptions},null,8,["chart-data","chart-options"])}var an=v(tn,[["render",en]]),on=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:an});function sn(s){Object.entries({"./components/AccountCalendarView.vue":fe,"./components/AccountCharts.vue":Ee,"./components/AccountMyAwards.vue":Ke,"./components/AccountTopBar.vue":ra,"./components/Award.vue":ha,"./components/BarChart.vue":va,"./components/Habit.vue":so,"./components/HabitDetails.vue":wo,"./components/HabitForm.vue":zo,"./components/HabitWeeklySummary.vue":Xo,"./components/LineChart.vue":os,"./components/Login.vue":Cs,"./components/Modal.vue":Ps,"./components/Navbar.vue":Xs,"./components/PieChart.vue":on}).forEach(([a,t])=>{const c=t.name||a.substr(a.lastIndexOf("/")+1).replace(/\.\w+$/,"");s.component(c,t.default)})}const kt=Wt(oe);sn(kt);kt.use(ft).mount("#app");export{u as A,I as P,v as _,j as h,cn as q};
