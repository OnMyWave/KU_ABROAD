"use strict";(self["webpackChunkdemo"]=self["webpackChunkdemo"]||[]).push([[498],{4684:function(e,t,s){s.r(t),s.d(t,{default:function(){return j}});var i=s(3396),a=s(7139),n=s.p+"img/flying-airplane.51c3fa44.gif";const r=e=>((0,i.dD)("data-v-35bb006d"),e=e(),(0,i.Cn)(),e),o={class:"container"},l=r((()=>(0,i._)("div",{class:"intro"},[(0,i._)("span",{class:"intro_msg1"},"나에게 꼭 맞는 학교는 ... ")],-1))),c={class:"boxwrapper"},d={key:0,class:"show"},u=r((()=>(0,i._)("img",{src:n},null,-1))),m=[u],g={key:1,class:"contents"},h={class:"box"},_=["src"],v={class:"box_title"},b={class:"title_style"},p={class:"box_detail"},y={class:"box"},w=["src"],f={class:"box_title"},x={class:"title_style"},k={class:"box_detail"},I={class:"box"},D=["src"],S={class:"box_title"},C={class:"title_style"},$={class:"box_detail"};function q(e,t,s,n,r,u){return(0,i.wg)(),(0,i.iD)("div",o,[l,(0,i._)("div",c,[r.isLoading&&!0!==this.recommended?((0,i.wg)(),(0,i.iD)("div",d,m)):(0,i.kq)("",!0),r.isLoading&&!0!==this.recommended?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",g,[(0,i._)("div",h,[(0,i._)("img",{src:`${r.firstuniv.univ_image}`,class:"box_image"},null,8,_),(0,i._)("div",v,[(0,i._)("span",b,(0,a.zw)(r.firstuniv.name),1)]),(0,i._)("div",p,[(0,i._)("button",{class:"box_link",onClick:t[0]||(t[0]=(...e)=>u.detail1&&u.detail1(...e))},"상세 정보 보기")])]),(0,i._)("div",y,[(0,i._)("img",{src:`${r.seconduniv2.univ_image}`,class:"box_image"},null,8,w),(0,i._)("div",f,[(0,i._)("span",x,(0,a.zw)(r.seconduniv2.name),1)]),(0,i._)("div",k,[(0,i._)("button",{class:"box_link",onClick:t[1]||(t[1]=(...e)=>u.detail2&&u.detail2(...e))},"상세 정보 보기")])]),(0,i._)("div",I,[(0,i._)("img",{src:`${r.thirduniv.univ_image}`,class:"box_image"},null,8,D),(0,i._)("div",S,[(0,i._)("span",C,(0,a.zw)(r.thirduniv.name),1)]),(0,i._)("div",$,[(0,i._)("button",{class:"box_link",onClick:t[2]||(t[2]=(...e)=>u.detail3&&u.detail3(...e))},"상세 정보 보기")])])]))])])}var L=s(6265),z=s.n(L),T={components:{},data(){return{univlist:[],firstuniv:{},seconduniv:{},thirduniv:{},country:"",criteria:[],weather:"",language:[],semester:"",college:"",found:!1,senddata:{country:this.country,semester:this.semester,college:this.college,criteria:this.criteria,wlevel:this.wlevel,language:this.language},isLoading:!0,recommended:!1,univ1:"",seconduniv2:{}}},setup(){},create(){},mounted(){this.country=sessionStorage.getItem("country"),this.criteria=sessionStorage.getItem("criteria"),this.weather=sessionStorage.getItem("weather"),this.language=sessionStorage.getItem("language"),this.semester=sessionStorage.getItem("semester"),this.college=sessionStorage.getItem("college"),"true"===sessionStorage.getItem("recommended")&&(this.recommended=!0),this.getData(),this.univ1=this.firstuniv.name,this.getData_2()},unmounted(){},methods:{async getData(){try{const e=await z().get("/api/recommend/",{params:{country:this.country,criteria:this.criteria,college:this.college,weather:this.weather,language:this.language,semester:this.semester}});this.firstuniv=e.data,sessionStorage.setItem("recommended","true"),setTimeout(this.recommend,3e3),setTimeout(this.loading,3e3)}catch(e){console.error(e)}},async getData_2(){try{const e=await z().get("/api/tsneRecommend/",{params:{name:this.univ1}});console.log(e.data),this.seconduniv2=e.data[0]}catch(e){console.error(e)}},detail1(){this.$router.push({name:"detailresult",query:{name:this.firstuniv.name}})},detail2(){this.$router.push({name:"detailresult",query:{name:this.seconduniv.name}})},detail3(){this.$router.push({name:"detailresult",query:{name:this.thirduniv.name}})},loading(){this.isLoading=!1},recommend(){this.recommended=!0}}},R=s(89);const Z=(0,R.Z)(T,[["render",q],["__scopeId","data-v-35bb006d"]]);var j=Z}}]);
//# sourceMappingURL=ResultView.e3e08132.js.map