import{o as m,c as g,a as e,u as n,l as _,x as D,_ as C,b as u,w as k,d as c,F as d,p as h,e as S,t as E,v as R,r as f,n as w}from"./index-DdINGt44.js";import{N as M}from"./NavCase-DQG0ISHt.js";import{g as F,S as I}from"./ScrollTrigger-9YOtJa_T.js";import{_ as T}from"./grey-next-CgdbrB4w.js";import{_ as b}from"./white-next-RfnqgytE.js";const j={key:0,class:"flex z-50 justify-center items-center"},P={class:""},L={class:"flex flex-col justify-center bg-white rounded-lg shadow"},N={class:"flex flex-row p-4"},U={class:"border-b rounded-t"},Q={class:"text-xl font-semibold text-gray-900"},V={class:""},X=["src"],J={__name:"ShowModal",props:{showItem:Object,showImg:String,colseBtn:Boolean},emits:["closeModal"],setup(s,{emit:t}){const a=s,r=t;console.log(r);const i=()=>{r("closeModal",!a.colseBtn),console.log(a.colseBtn)};return console.log(a.showItem),(p,x)=>a.colseBtn?(m(),g("div",j,[e("div",P,[e("div",L,[e("div",N,[e("div",U,[e("h3",Q,n(a.showImg==="startimg1"?"路線圖":"時刻表"),1)]),e("button",{type:"button",onClick:i,class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"},x[0]||(x[0]=[e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),e("span",{class:"sr-only"},"Close modal",-1)]))]),e("div",V,[e("img",{class:"h-[80vh] max-lg:w-full max-lg:h-auto",src:a.showItem[a.showImg],alt:"票價表圖片"},null,8,X)])])])])):_("",!0)}},O=D("route",{state:()=>({caritems:[{title:"6",class:"city",stop1:"干城站",stop2:"忠義里",startimg1:"./image/route/6.png",startimg2:"./image/route/2.6.png"},{title:"6副",class:"city",stop1:"干城站",stop2:"原民中心",startimg1:"./image/route/6.1.png",startimg2:"./image/route/2.6.1.png"},{title:"8",class:"city",stop1:"臺中刑務所演武場",stop2:"逢甲大學",startimg1:"./image/route/8.png",startimg2:"./image/route/2.8.png"},{title:"11",class:"city",stop1:"臺中車站(民族路口)",stop2:"綠能街車(右環)",startimg1:"./image/route/11.png",startimg2:"./image/route/2.11.png"},{title:"12",class:"city",stop1:"明德高中",stop2:"豐原高中",startimg1:"./image/route/12.png",startimg2:"./image/route/2.12.png"},{title:"14",class:"city",stop1:"干城站",stop2:"舊庄(南清宮)",startimg1:"./image/route/14.png",startimg2:"./image/route/2.14.png"},{title:"14副",class:"city",stop1:"干城站",stop2:"神岡區公所",startimg1:"./image/route/14.1.png",startimg2:"./image/route/2.14.1.png"},{title:"15",class:"city",stop1:"臺中刑務所演武場",stop2:"國軍臺中總醫院",startimg1:"./image/route/15.png",startimg2:"./image/route/2.15.png"},{title:"26",class:"city",stop1:"新民高中",stop2:"嶺東科技大學",startimg1:"./image/route/26.png",startimg2:"./image/route/2.26.png"},{title:"27",class:"city",stop1:"臺中車站",stop2:"嶺東科技大學",startimg1:"./image/route/27.png",startimg2:"./image/route/2.27.png"},{title:"28",class:"city",stop1:"坪頂",stop2:"四張犁圖書館",startimg1:"./image/route/28.png",startimg2:"./image/route/2.28.png"},{title:"29",class:"city",stop1:"臺中監獄",stop2:"第一廣場",startimg1:"./image/route/29.png",startimg2:"./image/route/2.29.png"},{title:"33",class:"city",stop1:"文修停車場",stop2:"高鐵臺中站",startimg1:"./image/route/33.png",startimg2:"./image/route/2.33.png"},{title:"35",class:"city",stop1:"僑光科技大學",stop2:"南區公所",startimg1:"./image/route/35.png",startimg2:"./image/route/2.35.png"},{title:"41",class:"city",stop1:"公共資訊圖書館",stop2:"修平科技大學",startimg1:"./image/route/41.png",startimg2:"./image/route/2.41.png"},{title:"54",class:"city",stop1:"下港尾",stop2:"烏日",startimg1:"./image/route/54.png",startimg2:"./image/route/2.54.png"},{title:"60",class:"city",stop1:"大智公園",stop2:"坪頂",startimg1:"./image/route/60.png",startimg2:"./image/route/2.60.png"},{title:"66",class:"city",stop1:"潭子聯合辦公大樓",stop2:"大坑",startimg1:"./image/route/66.png",startimg2:"./image/route/2.66.png"},{title:"66副",class:"city",stop1:"松竹車站",stop2:"大坑",startimg1:"./image/route/66.1.png",startimg2:"./image/route/2.66.1.png"},{title:"69",class:"city",stop1:"龍潭里",stop2:"臺中國際機場",startimg1:"./image/route/69.png",startimg2:"./image/route/2.69.png"},{title:"70",class:"city",stop1:"嶺東科技大學",stop2:"綠川東站",startimg1:"./image/route/70.png",startimg2:"./image/route/2.70.png"},{title:"72",class:"city",stop1:"嶺東科技大學",stop2:"潭子聯合辦公大樓",startimg1:"./image/route/72.png",startimg2:"./image/route/2.72.png"},{title:"82",class:"city",stop1:"貿易三村",stop2:"臺中車站",startimg1:"./image/route/82.png",startimg2:"./image/route/2.82.png"},{title:"82延",class:"city",stop1:"貿易三村",stop2:"高鐵臺中站",startimg1:"./image/route/82.2.png",startimg2:"./image/route/2.82.2.png"},{title:"93",class:"city",stop1:"新烏日車站",stop2:"銅安厝",startimg1:"./image/route/93.png",startimg2:"./image/route/2.93.png"},{title:"97",class:"city",stop1:"國立苑裡高中",stop2:"臺中國際機場",startimg1:"./image/route/97.png",startimg2:"./image/route/2.97.png"},{title:"100",class:"city",stop1:"高鐵臺中站",stop2:"臺中車站",startimg1:"./image/route/100.png"},{title:"101",class:"city",stop1:"敦化后庄七街口",stop2:"彰化",startimg1:"./image/route/101.png",startimg2:"./image/route/2.101.png"},{title:"107",class:"city",stop1:"黎明新村",stop2:"舊正(烏溪橋頭)",startimg1:"./image/route/107.png",startimg2:"./image/route/2.107.png"},{title:"108",class:"city",stop1:"港尾",stop2:"南開科技大學校區",startimg1:"./image/route/108.png",startimg2:"./image/route/2.108.png"},{title:"128",class:"city",stop1:"大雅",stop2:"清水",startimg1:"./image/route/128.png",startimg2:"./image/route/2.128.png"},{title:"131",class:"city",stop1:"北屯區行政大樓",stop2:"朝陽科技大學(經塗城路)",startimg1:"./image/route/131.png",startimg2:"./image/route/2.131.png"},{title:"132",class:"city",stop1:"北屯區行政大樓",stop2:"朝陽科技大學",startimg1:"./image/route/132.png",startimg2:"./image/route/2.132.png"},{title:"133",class:"city",stop1:"新烏日車站",stop2:"朝陽科技大學",startimg1:"./image/route/133.png",startimg2:"./image/route/2.133.png"},{title:"142",class:"city",stop1:"豐年社區三站",stop2:"第一廣場",startimg1:"./image/route/142.png",startimg2:"./image/route/2.142.png"},{title:"154",class:"city",stop1:"臺中女中",stop2:"大甲區公所",startimg1:"./image/route/154.png",startimg2:"./image/route/2.154.png"},{title:"156",class:"city",stop1:"臺中國際機場",stop2:"高鐵臺中站",startimg1:"./image/route/156.png",startimg2:"./image/route/2.156.png"},{title:"157",class:"city",stop1:"文心森林公園",stop2:"大甲區公所",startimg1:"./image/route/157.png",startimg2:"./image/route/2.157.png"},{title:"163",class:"city",stop1:"國軍英雄館",stop2:"華盛頓中學",startimg1:"./image/route/163.png",startimg2:"./image/route/2.163.png"},{title:"200",class:"city",stop1:"柳豐路(亞大醫院)",stop2:"新民高中",startimg1:"./image/route/200.png"},{title:"200跳蛙公車",class:"city",stop1:"亞大醫院",stop2:"臺中女中",startimg1:"./image/route/200.2.png",startimg2:"./image/route/2.200.2.png"},{title:"243",class:"city",stop1:"東山高中",stop2:"亞洲大學安藤館",startimg1:"./image/route/243.png",startimg2:"./image/route/2.243.png"},{title:"245(含繞)",class:"city",stop1:"頂街",stop2:"亞大醫院",startimg1:"./image/route/245.png",startimg2:"./image/route/2.245.png"},{title:"248",class:"city",stop1:"新烏日車站",stop2:"修平科技大學",startimg1:"./image/route/248.png",startimg2:"./image/route/2.248.png"},{title:"284",class:"city",stop1:"臺中車站",stop2:"修平科技大學",startimg1:"./image/route/284.png",startimg2:"./image/route/2.284.png"},{title:"290",class:"city",stop1:"干城站",stop2:"童綜合醫院(梧棲院區)",startimg1:"./image/route/290.png",startimg2:"./image/route/2.290.png"},{title:"300",class:"city",stop1:"靜宜大學",stop2:"臺中車站",startimg1:"./image/route/300.png"},{title:"304",class:"city",stop1:"港區藝術中心",stop2:"新民高中",startimg1:"./image/route/304.png"},{title:"307",class:"city",stop1:"梧棲觀光漁港",stop2:"新民高中",startimg1:"./image/route/307.png",startimg2:"./image/route/2.307.png"},{title:"307副",class:"city",stop1:"四維港新五路口",stop2:"臺中車站(臺灣大道)",startimg1:"./image/route/307.1.png",startimg2:"./image/route/2.307.1.png"},{title:"309",class:"city",stop1:"高美濕地",stop2:"臺中車站",startimg1:"./image/route/309.png",startimg2:"./image/route/2.309.png"},{title:"310",class:"city",stop1:"臺中港旅客服務中心",stop2:"臺中車站",startimg1:"./image/route/310.png"},{title:"323",class:"city",stop1:"彩虹眷村",stop2:"新建國市場",startimg1:"./image/route/323.png",startimg2:"./image/route/2.323.png"},{title:"324",class:"city",stop1:"臺中都會公園",stop2:"臺中車站",startimg1:"./image/route/324.png",startimg2:"./image/route/2.324.png"},{title:"325",class:"city",stop1:"大肚車站",stop2:"臺中車站",startimg1:"./image/route/325.png",startimg2:"./image/route/2.325.png"},{title:"357",class:"city",stop1:"臺中國際機場",stop2:"中台新村",startimg1:"./image/route/357.png",startimg2:"./image/route/2.357.png"},{title:"365(代駛)",class:"city",stop1:"高鐵臺中站",stop2:"國安社區",startimg1:"./image/route/365.png"},{title:"500",class:"city",stop1:"臺中國際機場",stop2:"臺中車站",startimg1:"./image/route/500.png"},{title:"500延",class:"city",stop1:"三田國小",stop2:"臺中車站",startimg1:"./image/route/500.11.png"},{title:"500延區1",class:"city",stop1:"大雅",stop2:"三田國小",startimg1:"./image/route/500.12.png"},{title:"500延區2",class:"city",stop1:"臺中車站",stop2:"臺中車站",startimg1:"./image/route/500.13.png",startimg2:"./image/route/2.500.13.png"},{title:"500延區3",class:"city",stop1:"三田國小",stop2:"臺中車站",startimg1:"./image/route/500.14.png"},{title:"500跳蛙公車",class:"city",stop1:"忠義里",stop2:"臺中車站",startimg1:"./image/route/500.2.png",startimg2:"./image/route/2.500.2.png"},{title:"657",class:"city",stop1:"大甲高工",stop2:"建興",startimg1:"./image/route/657.png",startimg2:"./image/route/2.657.png"},{title:"659",class:"city",stop1:"幼獅工業區服務中心",stop2:"臺中榮總",startimg1:"./image/route/659.png",startimg2:"./image/route/2.659.png"},{title:"675",class:"city",stop1:"龍津高中",stop2:"凱旋敦化路口",startimg1:"./image/route/675.png",startimg2:"./image/route/2.675.png"},{title:"700跳蛙公車",class:"city",stop1:"明德高中",stop2:"豐原高中",startimg1:"./image/route/700.2.png",startimg2:"./image/route/2.700.2.png"},{title:"811",class:"city",stop1:"豐原東站",stop2:"大甲體育場",startimg1:"./image/route/811.png",startimg2:"./image/route/2.811.png"},{title:"901",class:"city",stop1:"豐村國小(經豐東路)",stop2:"明德高中",startimg1:"./image/route/901.png",startimg2:"./image/route/2.901.png"},{title:"901副",class:"city",stop1:"豐村國小(經豐原大道)",stop2:"明德高中",startimg1:"./image/route/901.1.png",startimg2:"./image/route/2.901.1.png"},{title:"901副2",class:"city",stop1:"豐村國小(繞敦富路)",stop2:"明德高中",startimg1:"./image/route/901.2.png",startimg2:"./image/route/2.901.2.png"},{title:"6899",class:"high",stop1:"台中",stop2:"埔里",startimg1:"./image/route/6899.png"},{title:"6188",class:"high",stop1:"台中",stop2:"竹山",startimg1:"./image/route/6188.png",startimg2:"./image/route/2.6188.png"},{title:"9010",class:"high",stop1:"台中",stop2:"新竹",startimg1:"./image/route/9010.png",startimg2:"./image/route/2.9010.png"},{title:"9015",class:"high",stop1:"台中",stop2:"北港",startimg1:"./image/route/9015.png",startimg2:"./image/route/2.9015.png"},{title:"9016",class:"high",stop1:"台中",stop2:"四湖",startimg1:"./image/route/9016.png",startimg2:"./image/route/2.9016.png"}]})}),Y=""+new URL("RouteBanner-Axo6eWn4.jpg",import.meta.url).href,v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGESURBVHgB7drBTQJBFMbxb1a62JMJ3LECaECDFQAV2AodiB2ssQGpQLyTYKJbhdld9yUkggme3pt5Q77fZZO5bPLPzFzeAERERERERERERORXgJHdbbkIBSaIpGuxGb7UaygxCXOI8ojI+jhLrTgFLIR2igQ0d6hNmGJQIXMDGBhWn9V+Vt58NxhD2aDAvAOmMGYSRlxX9bb/bKFof1/O29Y+irA5SgYOUdaIJIswZ6OEYHaXuQ9zLkoXimXTdM8w4jrMf1H6C34NQ27DpIwiXIZJHUW4C+MhinAVxksU4SaMpyjCRRhvUUTyMB6jiKRhvEYRycJ4jiKShPEeRUQPk0MUETVMLlFEtDA5RRFRwuQWRZiHyTGKMA2TaxRhFibnKMIkTO5RhHqYS4giVMPEjhKuwsfpf7CBErWhfj95HLcd3v6uW++U3axchA6TNuB9VNUrKFELs7srVyHg4Xgtt+NzTO8oFafj2JyjCNX3Mb/bOjyNqq9XEBEREREREREREZn4ARAy/Si67nE0AAAAAElFTkSuQmCC";F.registerPlugin(I);const H={name:"App",components:{ShowModal:J,NavCase2:M},data(){let s=O();return{store:s,items:s.caritems,thing:"city",search:"",showitems:[],currentPage:1,itemsPerPage:14,btnshow:!1,showitem:{},showimg:""}},computed:{totalPages(){return Math.ceil(this.showitems.length/this.itemsPerPage)},paginatedData(){const s=(this.currentPage-1)*this.itemsPerPage,t=s+this.itemsPerPage;return this.showitems.slice(s,t)}},mounted(){this.searchItem(),this.initScrollEffects2(),this.scrollTop()},methods:{switchType(s){this.thing=s,this.searchItem()},searchItem(){this.currentPage=1,this.showitems=this.items.filter(t=>{const a=t.class===this.thing,r=this.search.toLowerCase(),i=r===""||t.title.toLowerCase().includes(r)||t.stop1.toLowerCase().includes(r)||t.stop2.toLowerCase().includes(r);return a&&i});const s=document.querySelector(".nomessage");s&&s.remove(),this.showitems.length===0&&this.$nextTick(()=>{const t=document.querySelector("section.flex.flex-wrap"),a=document.createElement("div");a.textContent="查無相關路線",a.className="nomessage text-center text-5xl font-bold mt-4 text-[#DD4F1B] w-full",t.appendChild(a)})},closeModal(s){this.btnshow=s},openModal(s,t){this.showitem=t,this.showimg=s,this.btnshow=!0},scrollTop(){window.scrollTo({top:0})},scrollup(){const s=document.querySelector("#up");window.scrollTo({top:s.offsetTop-80})},initScrollEffects2(){const s=document.querySelector("#nav2");s.style.transition="opacity 0.3s ease";const t=()=>{let a=window.scrollY,r=window.innerWidth<640?.23:.5;a<window.innerHeight*r?(s.style.opacity=1,s.style.zIndex=99):a>window.innerHeight*r&&(s.style.opacity=0,s.style.zIndex=-1)};document.addEventListener("scroll",t),this.handleScroll=t}}},z={class:"mb-[200px] max-2xl:mb-[120px] max-md:mb-[60px]"},G={id:"banner2",class:"w-full h-[640px] max-2xl:h-[480px] max-md:h-[360px] max-sm:h-[240px] mb-[106px] max-2xl:mb-0"},K={class:"max-w-[1440px] m-auto w-full max-2xl:p-[50px] max-md:p-[25px]"},W={class:"mb-[125px] max-2xl:mb-[100px] max-md:mb-[50px] gap-[40px] max-md:gap-[20px] flex flex-col justify-between"},q={class:"text-[24px] w-auto h-[30px] flex font-bold gap-[28px] max-md:gap-[20px] items-center max-2xl:text-[20px] max-md:text-[12px]"},Z={class:"flex justify-between mb-[40px] max-lg:flex-wrap max-lg:gap-[20px] max-md:gap-[15px]",id:"up"},$={class:"flex flex-nowrap gap-[50px] max-2xl:gap-[30px] max-md:gap-[20px] font-bold"},tt={class:"w-auto flex gap-[25px] max-2xl:gap-[20px] max-md:gap-[15px]"},et=["onClick"],st={class:"w-[400px] max-2xl:w-[360px] max-md:w-[200px]"},at={class:"relative"},ot={class:"flex flex-wrap w-full mb-[100px] max-2xl:mb-[80px] max-md:mb-[60px] gap-[40px] max-lg:gap-[20px]"},it={class:"flex flex-col max-lg:flex-row py-[21px] max-md:py-[10px] justify-between text-[20px] max-2xl:text-[16px] max-md:text-[12px] font-bold"},rt={class:"flex flex-col max-lg:flex-grow max-lg:mr-[40px] border-b-[2px] border-b-[#DD4F1B]"},pt={class:"text-[#DD4F1B] text-[58px] max-2xl:text-[36px] max-md:text-[24px] leading-[70px] max-2xl:leading-[50px] max-md:leading-[35px] pb-[7px]"},mt={class:"flex max-lg:flex-col gap-[10px]"},gt=["onClick"],lt=["onClick"],nt={class:"flex flex-col max-lg:flex-row grow items-center max-lg:jusitify-center font-bold text-[24px] max-2xl:text-[20px] max-md:text-[14px] py-[45px] max-2xl:py-[30px] max-lg:py-0"},xt={class:"flex gap-[15px] max-md:gap-[10px] justify-center"},ct=["onClick"],ut={key:0,class:"backdrop-blur-[7px] fixed h-[100vh] top-0 left-0 right-0 flex justify-center items-center"};function dt(s,t,a,r,i,p){const x=f("NavCase2"),A=f("router-link"),B=f("ShowModal");return m(),g("main",z,[e("section",G,[u(x,{id:"nav2",class:"z-[50]"}),t[2]||(t[2]=e("img",{src:Y,alt:"子頁橫幅",class:"w-full h-full object-cover"},null,-1))]),e("div",K,[e("section",W,[e("div",q,[u(A,{to:"/"},{default:k(()=>t[3]||(t[3]=[c("首頁")])),_:1}),t[4]||(t[4]=e("img",{src:T,alt:"大於icon",class:"w-4 max-2xl:w-3 max-md:w-2"},null,-1)),t[5]||(t[5]=c(" 路線查詢 "))]),t[6]||(t[6]=e("div",{class:"text-[58px] max-2xl:text-[36px] max-md:text-[24px] font-bold w-auto border-l-[11px] max-md:border-l-[8px] border-l-[#DD4F1B]"},[e("span",{class:"ml-[50px] max-md:ml-[25px] py-[7px]"}," 路線查詢 ")],-1))]),e("section",Z,[e("section",$,[e("div",tt,[(m(),g(d,null,h({city:"台中市公車",high:"長途客運"},(o,l)=>e("button",{key:l,onClick:y=>p.switchType(l),class:w(["w-[200px] max-2xl:w-[150px] max-md:w-[100px] h-[70px] max-2xl:h-[60px] max-md:h-[48px] text-2xl font-bold rounded-full text-center max-2xl:text-[20px] max-md:text-[14px]",i.thing===l?"text-white bg-[#1B4794]":"text-[#1B4794] bg-[#ffffff] hover:bg-[#1B4794]/80 hover:text-white hover:border-none border-[3px] border-[#1B4794]"])},n(o),11,et)),64))]),t[7]||(t[7]=S('<div class="text-[#DD4F1B] flex max-sm:flex-col gap-[25px] max-md:gap-[15px] max-sm:gap-[4px] w-auto text-[24px] max-2xl:text-[20px] max-md:text-[12px]" data-v-c1546f84><a title="跳轉外部網站" href="https://citybus.taichung.gov.tw/ebus/fare/all" target="_blank" rel="noopener noreferrer" class="flex items-center" data-v-c1546f84><span class="group flex border-b-[2px] border-b-[#DD4F1B] transition pb-[2px] max-sm:pb-0" data-v-c1546f84> 票價查詢<img src="'+v+'" alt="右上箭頭" class="w-[35px] h-[35px] max-2xl:w-[30px] max-2xl:h-[30px] max-md:w-[20px] max-md:h-[20px] ml-[4px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" data-v-c1546f84></span></a><a title="跳轉外部網站" href="https://citybus.taichung.gov.tw/ebus/driving-map" target="_blank" rel="noopener noreferrer" class="flex items-center" data-v-c1546f84><span class="group flex border-b-[2px] border-b-[#DD4F1B] transition pb-[2px] max-sm:pb-0" data-v-c1546f84> 公車動態<img src="'+v+'" alt="右上箭頭" class="w-[35px] h-[35px] max-2xl:w-[30px] max-2xl:h-[30px] max-md:w-[20px] max-md:h-[20px] ml-[4px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" data-v-c1546f84></span></a></div>',1))]),e("form",st,[t[9]||(t[9]=e("label",{for:"default-search",class:"mb-2 text-sm font-medium text-gray-900 sr-only"},"Search",-1)),e("div",at,[E(e("input",{type:"text",id:"default-search","onUpdate:modelValue":t[0]||(t[0]=o=>i.search=o),onInput:t[1]||(t[1]=(...o)=>p.searchItem&&p.searchItem(...o)),class:"block w-full p-4 max-md:p-3 ps-9 h-[70px] max-2xl:h-[60px] max-md:h-[48px] text-[24px] max-2xl:text-[20px] max-md:text-[14px] border-[#1B4794] border-[3px] rounded-full bg-gray-50 focus:ring-[#1B4794] focus:ring-opacity-50 focus:outline-none focus:border-[#1B4794]/50",placeholder:"請輸入車號/站名",required:""},null,544),[[R,i.search]]),t[8]||(t[8]=e("div",{type:"submit",class:"text-white absolute end-2.5 bottom-2.5 px-4 py-2 max-md:px-3"},[e("svg",{class:"w-[30px] h-[30px] max-2xl:w-[24px] max-2xl:h-[24px] max-md:w-[15px] max-md:h-[15px] text-[#1B4794] hover:text-[#1B4794]/80","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})])],-1))])])]),e("section",ot,[(m(!0),g(d,null,h(p.paginatedData,(o,l)=>(m(),g("div",{key:l,class:"route-card h-[255px] max-2xl:h-[220px] max-md:h-[140px] px-[42px] py-[19px] max-md:px-[30px] max-md:py-[10px] flex max-lg:flex-col bg-[#FFF7EF] border-[3px] border-[#D9D9D9] rounded-[32px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"},[e("div",it,[e("div",rt,[t[10]||(t[10]=e("span",{class:"text-[#1B4794]"},"固定班次 ",-1)),e("span",pt,n(o.title),1)]),e("div",mt,[e("button",{onClick:y=>p.openModal("startimg1",o,"路線圖"),class:"flex items-center gap-2 max-md:gap-1 text-white bg-[#DD4F1B] hover:bg-[#DD4F1B]/80 focus:ring-2 focus:ring-[#D9D9D9]/80 focus:outline-none rounded-[15px] px-[17px] py-[6.5px] max-2xl:px-[12px] max-md:px-[8px] max-2xl:py-[4px] text-center"},t[11]||(t[11]=[c(" 路線圖 "),e("img",{src:b,alt:"白色大於icon",class:"w-4 max-2xl:w-3 max-md:w-2"},null,-1)]),8,gt),e("button",{onClick:y=>p.openModal("startimg2",o,"時刻表"),class:"flex items-center gap-2 max-md:gap-1 text-white bg-[#DD4F1B] hover:bg-[#DD4F1B]/80 focus:ring-2 focus:ring-[#D9D9D9]/80 focus:outline-none rounded-[15px] px-[17px] py-[6.5px] max-2xl:px-[12px] max-md:px-[8px] max-2xl:py-[4px] text-center"},t[12]||(t[12]=[c(" 時刻表 "),e("img",{src:b,alt:"白色大於icon",class:"w-4 max-2xl:w-3 max-md:w-2"},null,-1)]),8,lt)])]),t[15]||(t[15]=e("div",{class:"h-full mx-[32px] max-lg:mx-[20px] border-l-[3px] border-dashed border-[#D9D9D9] max-lg:hidden"},null,-1)),e("div",nt,[e("span",null,n(o.stop1),1),t[13]||(t[13]=e("div",{class:"h-full my-[12px] border-l-[2px] border-[#3b3b3b] max-lg:hidden"},null,-1)),t[14]||(t[14]=e("span",{class:"hidden max-lg:block"}," - ",-1)),e("span",null,n(o.stop2),1)])]))),128))]),e("section",xt,[(m(!0),g(d,null,h(p.totalPages,o=>(m(),g("button",{key:o,onClick:l=>{i.currentPage=o,p.scrollup()},class:w(["w-[50px] h-[50px] max-md:w-[30px] max-md:h-[30px] rounded",i.currentPage===o?"text-white bg-[#DD4F1B] text-[24px] max-2xl:text-[20px] max-md:text-[12px] font-bold rounded-full text-center":"text-black  text-[24px] max-2xl:text-[20px] max-md:text-[12px] font-bold rounded-full text-center hover:bg-[#DD4F1B] hover:text-white"])},n(o),11,ct))),128))])]),i.btnshow?(m(),g("div",ut,[u(B,{"colse-btn":i.btnshow,"show-img":i.showimg,"show-item":i.showitem,onCloseModal:p.closeModal},null,8,["colse-btn","show-img","show-item","onCloseModal"])])):_("",!0)])}const vt=C(H,[["render",dt],["__scopeId","data-v-c1546f84"]]);export{vt as default};
