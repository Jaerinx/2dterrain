(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(2673)}])},2673:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return c}});var s=l(5893),a=l(6758),n=l.n(a),r=l(7294);class u{getLength(){return this.nums.length}delete(e){if(this.nums.includes(e)&&this.nums.length>1){let t=this.nums.indexOf(e);this.nums.splice(t,1)}}setNum(e){this.nums=[e]}getWeightedNum(e){let t=0;for(let l=0;l<this.nums.length;l++)t+=this.nums[l]*e[l];return t}getNums(){return this.nums}constructor(e,t,l){this.nums=e,this.x=t,this.y=l}}var o=l(5216);let i=e=>{let{x:t,y:l,space:a,setLoaded:n,step:r}=e,u=a[t][l];return(0,s.jsx)("button",{className:"flex justify-center items-center m-0 p-0 ",onClick:()=>{r(t,l)},style:{backgroundColor:"".concat(1!=u.nums.length?"rgb(232, 232, 232)":0==u.nums[0]?"rgb(81, 214, 115)":1==u.nums[0]?"rgb(79,91,255)":2==u.nums[0]?"rgb(255, 213, 5)":3==u.nums[0]?"rgb(95,245,133)":4==u.nums[0]?"rgb(130,148,135)":"white")}},t+l)};var h=l(172);let m=[],d=[],f=[];function c(){let[e,t]=(0,r.useState)(9),[l,a]=(0,r.useState)(!1),[c,p]=(0,r.useState)(!1),[g,x]=(0,r.useState)(0),[b,w]=(0,r.useState)(0),[N,v]=(0,r.useState)(Math.floor(15+4*Math.random())),[V,j]=(0,r.useState)(Math.floor(15+4*Math.random())),[k,E]=(0,r.useState)(Math.floor(15+4*Math.random())),[M,L]=(0,r.useState)(Math.floor(15+4*Math.random())),[C,y]=(0,r.useState)(Math.floor(15+4*Math.random())),[S,_]=(0,r.useState)(Math.floor(15+4*Math.random()));(0,r.useEffect)(()=>{window.addEventListener("resize",()=>{x(window.innerWidth),p(!0)}),x(window.innerWidth),p(!0)},[l]),(0,r.useEffect)(()=>{let e=setTimeout(()=>{w(b+1)},100);return()=>{clearTimeout(e)}},[b,e]);let O=()=>{w(0),f=[],m=[];let t=0,l=0;for(let s=0;s<e;s++){let s=[];for(let a=0;a<e;a++)s.push(new u([0,1,2,3,4,5],t,l)),t+=1;l+=1,m.push(s)}d=[],t=0,l=0;for(let s=0;s<e;s++){let s=[];for(let l=0;l<e;l++)s.push([]),t+=1;l+=1,d.push(s)}a(!0)};(0,r.useEffect)(()=>{w(0),f=[],m=[];let t=0,l=0;for(let s=0;s<e;s++){let s=[];for(let a=0;a<e;a++)s.push(new u([0,1,2,3,4,5],t,l)),t+=1;l+=1,m.push(s)}d=[],t=0,l=0;for(let s=0;s<e;s++){let s=[];for(let l=0;l<e;l++)s.push([]),t+=1;l+=1,d.push(s)}a(!0)},[e]);let T=(e,t,l)=>{let s=[];for(var a=m.length-1,n=m[0].length-1,r=Math.max(0,e-l);r<=Math.min(e+l,a);r++)for(var u=Math.max(0,t-l);u<=Math.min(t+l,n);u++)(r!==e||u!==t)&&s.push([r,u]);return s};function W(e){return new Promise(t=>{w(b+1),setTimeout(t,e)})}let P=async()=>{let t=[];for(let l=0;l<e;l++)for(let s=0;s<e;s++)m[l][s].getLength()>1&&t.push([l,s]);for(;t.length>0;){let e=t.pop();X(e[0],e[1]),await W(1),t=(0,h.DY)(t).desc([e=>m[e[0]][e[1]].getLength()])}},z=async()=>{for(let t=0;t<e;t++)for(let l=0;l<e;l++)m[t][l].getLength()>1&&(X(t,l),(t+l)%10==0&&(await W(1e-6),w(b+1)))},X=async(e,t)=>{w(b+1);let l=T(e,t,1),s=[],a=m[e][t].getLength();m[e][t].nums.forEach(e=>{if(0==e)for(var t=0;t<N;t++)s.push(0);if(1==e)for(var t=0;t<V;t++)s.push(1);if(2==e)for(var t=0;t<k;t++)s.push(2);if(3==e)for(var t=0;t<M;t++)s.push(3);if(4==e)for(var t=0;t<C;t++)s.push(4);if(5==e)for(var t=0;t<S;t++)s.push(5)}),l.forEach(e=>{let t=e[0],l=e[1];if(1==m[t][l].getLength()&&s.includes(m[t][l].nums[0])){if(0==m[t][l].nums[0])for(var n=0;n<N/a;n++)s.push(0);if(1==m[t][l].nums[0])for(var n=0;n<V/a;n++)s.push(1);if(2==m[t][l].nums[0])for(var n=0;n<k/a;n++)s.push(2);if(3==m[t][l].nums[0])for(var n=0;n<M/a;n++)s.push(3);if(4==m[t][l].nums[0])for(var n=0;n<C/a;n++)s.push(4);if(5==m[t][l].nums[0])for(var n=0;n<S/a;n++)s.push(5)}});let n=0;n=s[Math.floor(Math.random()*s.length)],m[e][t].setNum(n),d[e][t]=n,D(e,t,n)},D=(e,t,l)=>{for(f.push([e,t,l]);f.length>0;){let e=f.pop();F(e[0],e[1],e[2])}},F=(e,t,l)=>{T(e,t,1).forEach(s=>{let a=s[0],n=s[1];1!==m[a][n].getLength()&&(0==m[e][t].nums[0]?(m[a][n].delete(1),m[a][n].delete(5),m[a][n].delete(2)):1==m[e][t].nums[0]?(m[a][n].delete(3),m[a][n].delete(5),m[a][n].delete(4),m[a][n].delete(0)):2==m[e][t].nums[0]?(m[a][n].delete(0),m[a][n].delete(5)):3==m[e][t].nums[0]?(m[a][n].delete(1),m[a][n].delete(5)):4==m[e][t].nums[0]?m[a][n].delete(1):5==m[e][t].nums[0]&&(m[a][n].delete(0),m[a][n].delete(1),m[a][n].delete(2),m[a][n].delete(3)),1==m[a][n].getLength()&&(d[e][t]=l,f.push([a,n,m[a][n].getNums()[0]])))})};if(c&&l)return(0,s.jsxs)("main",{className:"flex min-h-screen min-w-screen flex-col items-center justify-between m-0 p-2 overflow-hidden bg-white ".concat(n().className),children:[(0,s.jsxs)("div",{className:"text-black absolute top-10 right-10 ",style:{width:"".concat(.23*g,"px")},children:[(0,s.jsx)(o.L,{label:"size",step:10,maxValue:300,minValue:10,defaultValue:e,onChangeEnd:l=>{l!==e&&(a(!1),t(Number(l)))},className:"w-full"}),(0,s.jsxs)("div",{className:"flex justify-center w-full m-5",children:[(0,s.jsx)("button",{className:"text-black border-2 border-black rounded-md px-4 hover:bg-green-50 m-2",onClick:()=>{a(!1),O()},children:"clear"}),(0,s.jsx)("button",{className:"text-black border-2 border-black rounded-md px-4 hover:bg-red-50 m-2",onClick:()=>{z()},children:"Model Synthesis"}),(0,s.jsx)("button",{className:"text-black border-2 border-black rounded-md px-4 hover:bg-red-50 m-2",onClick:P,children:"Wave Function Collapse"})]})]}),(0,s.jsxs)("div",{className:"text-black absolute top-10 left-10 ",style:{width:"".concat(.23*g,"px")},children:[(0,s.jsx)(o.L,{label:"woods",step:1,maxValue:30,minValue:0,defaultValue:N,onChangeEnd:e=>{v(Number(e))},className:"w-full"}),(0,s.jsx)(o.L,{label:"water",step:1,maxValue:30,minValue:0,defaultValue:V,onChangeEnd:e=>{j(Number(e))},className:"w-full"}),(0,s.jsx)(o.L,{label:"sand",step:1,maxValue:30,minValue:0,defaultValue:k,onChangeEnd:e=>{E(Number(e))},className:"w-full"}),(0,s.jsx)(o.L,{label:"plains",step:1,maxValue:30,minValue:0,defaultValue:M,onChangeEnd:e=>{L(Number(e))},className:"w-full"}),(0,s.jsx)(o.L,{label:"rock",step:1,maxValue:30,minValue:0,defaultValue:C,onChangeEnd:e=>{y(Number(e))},className:"w-full"}),(0,s.jsx)(o.L,{label:"snow",step:1,maxValue:30,minValue:0,defaultValue:S,onChangeEnd:e=>{_(Number(e))},className:"w-full"})]}),(0,s.jsx)("div",{className:"text-black  border-black overflow-hidden grid grid-flow-row auto-rows-fr border-2",style:{width:"".concat(.45*g,"px"),maxWidth:"".concat(.45*g,"px"),height:"".concat(.45*g,"px"),maxHeight:"".concat(.45*g,"px")},children:m.map(e=>(0,s.jsx)("div",{className:"grid grid-flow-col auto-cols-fr m-0",children:e.map(t=>i({x:m.indexOf(e),y:e.indexOf(t),space:m,setLoaded:p,step:X}))},m.indexOf(e)))})]})}}},function(e){e.O(0,[379,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);