"use strict";(self["webpackChunkdemo"]=self["webpackChunkdemo"]||[]).push([[498],{8199:function(e,t,s){s.r(t),s.d(t,{default:function(){return B}});var i=s(3396),a=s(7139),n=s.p+"img/flying-airplane.51c3fa44.gif";const r=e=>((0,i.dD)("data-v-3c88b77c"),e=e(),(0,i.Cn)(),e),l={class:"container"},o=r((()=>(0,i._)("div",{class:"intro"},[(0,i._)("span",{class:"intro_msg1"},"나에게 꼭 맞는 학교는 ... ")],-1))),c={class:"boxwrapper"},d={key:0,class:"show"},u=r((()=>(0,i._)("img",{src:n},null,-1))),m=[u],g={key:1,class:"contents"},h={class:"box"},_=["src"],v={class:"box_title"},b={class:"title_style"},p={class:"box_detail"},w={class:"box"},y=["src"],k={class:"box_title"},x={class:"title_style"},f={class:"box_detail"},S={class:"box"},D=["src"],I={class:"box_title"},q={class:"title_style"},z={class:"box_detail"},C={key:2},$=(0,i.Uk)("올바르지 않은 검색입니다."),L=r((()=>(0,i._)("br",null,null,-1))),U=(0,i.Uk)("선택한 국가와 언어를 다시 한번 확인해주세요"),N=r((()=>(0,i._)("br",null,null,-1))),J=r((()=>(0,i._)("br",null,null,-1)));function O(e,t,s,n,r,u){return(0,i.wg)(),(0,i.iD)("div",l,[o,(0,i._)("div",c,[r.isLoading&&!0!==this.recommended&&!r.nodata?((0,i.wg)(),(0,i.iD)("div",d,m)):(0,i.kq)("",!0),r.isLoading&&!0!==this.recommended||r.nodata?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",g,[(0,i._)("div",h,[(0,i._)("img",{src:`${r.firstuniv.univ_image}`,class:"box_image"},null,8,_),(0,i._)("div",v,[(0,i._)("span",b,(0,a.zw)(r.firstuniv.name),1)]),(0,i._)("div",p,[(0,i._)("button",{class:"box_link",onClick:t[0]||(t[0]=(...e)=>u.detail1&&u.detail1(...e))},"상세 정보 보기")])]),(0,i._)("div",w,[(0,i._)("img",{src:`${r.seconduniv2.univ_image}`,class:"box_image"},null,8,y),(0,i._)("div",k,[(0,i._)("span",x,(0,a.zw)(r.seconduniv2.name),1)]),(0,i._)("div",f,[(0,i._)("button",{class:"box_link",onClick:t[1]||(t[1]=(...e)=>u.detail2&&u.detail2(...e))},"상세 정보 보기")])]),(0,i._)("div",S,[(0,i._)("img",{src:`${r.thirduniv.univ_image}`,class:"box_image"},null,8,D),(0,i._)("div",I,[(0,i._)("span",q,(0,a.zw)(r.thirduniv.name),1)]),(0,i._)("div",z,[(0,i._)("button",{class:"box_link",onClick:t[2]||(t[2]=(...e)=>u.detail3&&u.detail3(...e))},"상세 정보 보기")])])])),!0===this.nodata?((0,i.wg)(),(0,i.iD)("div",C,[(0,i._)("span",null,[$,L,U,N,(0,i.Uk)("선택한 국가:"+(0,a.zw)(this.country),1),J,(0,i.Uk)("선택한 언어:"+(0,a.zw)(JSON.parse(this.language)[0])+","+(0,a.zw)(JSON.parse(this.language)[1]),1)])])):(0,i.kq)("",!0)])])}var T=s(6265),R=s.n(T),Z={components:{},data(){return{univlist:[],firstuniv:{},thirduniv:{},country:"",criteria:[],weather:"",language:[],semester:"",college:"",found:!1,senddata:{country:this.country,semester:this.semester,college:this.college,criteria:this.criteria,wlevel:this.wlevel,language:this.language},isLoading:!0,recommended:!1,seconduniv2:{},nodata:!1}},setup(){},create(){},mounted(){this.country=sessionStorage.getItem("country"),this.criteria=sessionStorage.getItem("criteria"),this.weather=sessionStorage.getItem("weather"),this.language=sessionStorage.getItem("language"),this.semester=sessionStorage.getItem("semester"),this.college=sessionStorage.getItem("college"),"true"===sessionStorage.getItem("recommended")&&(this.recommended=!0),this.getData()},unmounted(){},methods:{async getData(){try{const e=await R().get("/api/recommend/",{params:{country:this.country,criteria:this.criteria,college:this.college,weather:this.weather,language:this.language,semester:this.semester}});this.firstuniv=e.data[0],this.thirduniv=e.data[1],"Nodata"===e.data[0].name?this.nodata=!0:this.getData_2(e.data[0].name),sessionStorage.setItem("recommended","true"),setTimeout(this.recommend,3e3),setTimeout(this.loading,3e3)}catch(e){console.error(e)}},async getData_2(e){try{const t=await R().get("/api/tsneRecommend/",{params:{name:e}});this.seconduniv2=t.data[0]}catch(t){console.error(t)}},detail1(){this.$router.push({name:"detailresult",query:{name:this.firstuniv.name}})},detail2(){this.$router.push({name:"detailresult",query:{name:this.seconduniv2.name}})},detail3(){this.$router.push({name:"detailresult",query:{name:this.thirduniv.name}})},loading(){this.isLoading=!1},recommend(){this.recommended=!0}}},j=s(89);const A=(0,j.Z)(Z,[["render",O],["__scopeId","data-v-3c88b77c"]]);var B=A}}]);
//# sourceMappingURL=ResultView.c8afe5a2.js.map