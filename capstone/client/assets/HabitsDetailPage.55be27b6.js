import{J as h,o as p,c as o,b as u,d as a,e as r,f as t,F as l,h as _,g as f,m as v,k as m}from"./vendor.94673814.js";import{_ as y,h as H,A as n}from"./index.97167401.js";const x={setup(){const c=h();return p(async()=>{await H.getMyHabits(),document.getElementById(c.params.id).scrollIntoView()}),{award:o(()=>n.newAward),activeHabits:o(()=>n.myHabits.filter(s=>s.isActive==!0)),archivedHabits:o(()=>n.myHabits.filter(s=>s.isActive==!1))}}},g={class:"container-fluid fill"},w={id:"scrollable",class:"row d-flex scrollable stopScrollMobile snap"},A=t("h3",{class:"text-primary text-center mt-3"},"Active Habits",-1),k=t("hr",null,null,-1),B=t("h3",{class:"text-primary text-center"},"Archived Habits",-1),M=t("hr",null,null,-1),D=["src"];function S(c,s,V,i,j,C){const d=u("HabitDetails"),b=u("Modal");return a(),r(l,null,[t("div",g,[t("div",w,[A,k,(a(!0),r(l,null,_(i.activeHabits,e=>(a(),m(d,{key:e.id,habit:e},null,8,["habit"]))),128)),B,M,(a(!0),r(l,null,_(i.archivedHabits,e=>(a(),m(d,{key:e.id,habit:e},null,8,["habit"]))),128))])]),f(b,{id:"display-award"},{body:v(()=>[t("div",null,[t("img",{crossorigin:"anonymous",class:"img-fluid",src:i.award.img,alt:""},null,8,D)])]),_:1})],64)}var I=y(x,[["render",S]]);export{I as default};
