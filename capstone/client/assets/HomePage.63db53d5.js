import{j as b,c as l,b as f,d as a,e as r,f as i,F as d,h as _,l as v,g as y,m as w,k as h}from"./vendor.94673814.js";import{_ as H,A as o}from"./index.866b5c00.js";const g={name:"Home",setup(){const n=b(!1);return{showArchive:n,toggleShowArchived(){n.value=!n.value},activeUntrackedHabits:l(()=>o.myHabits.filter(e=>{if(e.isActive&&!e.trackHistory[0])return!0;{let c=new Date(e.trackHistory[0]),t=o.day;return e.isActive&&e.interval<=t.getDate()-c.getDate()}})),allActiveHabits:l(()=>o.myHabits.filter(e=>{let c=new Date(e.trackHistory[0]),t=o.day;return e.isActive&&t.getDate()-c.getDate()<e.interval}).reverse()),archivedHabits:l(()=>o.myHabits.filter(e=>!e.isActive)),award:l(()=>o.newAward)}}},k={class:"container-fluid"},A={class:"row w-100 d-flex justify-content-center"},x={key:0},p={class:"row w-100 d-flex justify-content-center"},j={key:0,class:"container-fluid"},D=i("hr",null,null,-1),S={class:"d-flex selectable p-2 mb-3 rounded"},B={key:0,class:"m-0"},C=i("p",{class:"m-0 ms-1 d-flex"},"Archived Habits",-1),N={key:0,class:"row w-100 d-flex justify-content-center text-center"},U=["src"];function V(n,e,c,t,F,M){const u=f("Habit"),m=f("Modal");return a(),r(d,null,[i("div",k,[i("div",A,[(a(!0),r(d,null,_(t.activeUntrackedHabits,s=>(a(),h(u,{key:s.id,habit:s},null,8,["habit"]))),128))]),t.activeUntrackedHabits.length?(a(),r("hr",x)):v("",!0),i("div",p,[(a(!0),r(d,null,_(t.allActiveHabits,s=>(a(),h(u,{key:s.id,habit:s,style:{filter:"saturate(80%)"}},null,8,["habit"]))),128))])]),t.archivedHabits.length?(a(),r("div",j,[D,i("div",{onClick:e[0]||(e[0]=(...s)=>t.toggleShowArchived&&t.toggleShowArchived(...s)),class:"d-flex justify-content-center"},[i("div",S,[t.showArchive?v("",!0):(a(),r("p",B,"Show")),C])]),t.showArchive?(a(),r("div",N,[(a(!0),r(d,null,_(t.archivedHabits,s=>(a(),h(u,{key:s.id,habit:s,style:{filter:"saturate(50%)"}},null,8,["habit"]))),128))])):v("",!0)])):v("",!0),y(m,{id:"display-award"},{body:w(()=>[i("div",null,[i("img",{class:"img-fluid",src:t.award.img,alt:""},null,8,U)])]),_:1})],64)}var P=H(g,[["render",V]]);export{P as default};