(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"pred_len":5,"display_len":67,"ping_ip":"https://cors-anywhere.herokuapp.com/https://80.99.23.40:8443/ping","ip":"https://cors-anywhere.herokuapp.com/https://80.99.23.40:8443/predictions/stockpredictor"}]')},18:function(e,t,a){},29:function(e,t,a){e.exports=a.p+"static/media/checkmark.501056b4.png"},30:function(e,t,a){e.exports=a.p+"static/media/cross.6a4cc088.png"},31:function(e,t,a){e.exports=a(77)},36:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(22),i=a.n(s),o=(a(36),a(3)),l=a(4),c=a(6),p=a(5),d=(a(18),a(7)),u=a(13),h=function(e){Object(c.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={home:!0,devs:!1},n.handleClicks=n.handleClicks.bind(Object(d.a)(n)),n}return Object(l.a)(a,[{key:"handleClicks",value:function(e){"home"===e&&this.setState({home:!0,devs:!1}),"devs"===e&&this.setState({home:!1,devs:!0})}},{key:"render",value:function(){var e=this,t=this.state.home?"nav-link active":"nav-link ",a=this.state.devs?"nav-link active":"nav-link ";return r.a.createElement("header",{className:"mb-auto"},r.a.createElement("div",null,r.a.createElement("h3",{className:"float-md-start mb-0"},"Stock Predictor"),r.a.createElement("nav",{className:"nav nav-masthead justify-content-center float-md-end"},r.a.createElement(u.b,{className:t,to:"/",onClick:function(){return e.handleClicks("home")}},"Home"),r.a.createElement(u.b,{className:a,to:"/devs",onClick:function(){return e.handleClicks("devs")}},"Developers"))))}}]),a}(r.a.Component),m=a(23),g=a(11),v=["JSON"],b=function(e){Object(c.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(d.a)(n)),n}return Object(l.a)(a,[{key:"handleChange",value:function(e){var t=this,a=new FileReader;a.onload=function(e){t.props.uploadedFile(e.target.result),fetch(g[0].ip,{method:"POST",headers:{"Content-Type":"application/json"},body:e.target.result}).then((function(e){return e.json()})).then((function(e){return t.props.responseArrived(e)}))},a.readAsText(e),this.props.waitingForResponse()}},{key:"render",value:function(){return r.a.createElement(m.a,{classes:"mw-100 dnd-border",handleChange:this.handleChange,name:"uploaded_file",types:v,hoverTitle:"Drop here!",minSize:0,disabled:this.props.serverStatus})}}]),a}(r.a.Component),f=a(27),y=function(e){Object(c.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"m-4"},"Making predictions"),r.a.createElement(f.Ring,{color:"rgb(234, 162, 33)",height:"140px",width:"140px",duration:"0.87s"}))}}]),a}(r.a.Component),j=a(9),O=a(14),E=a(28),k=a.n(E),_=function(e){Object(c.a)(a,e);var t=Object(p.a)(a);function a(e){var n;Object(o.a)(this,a),(n=t.call(this,e)).getNextUpPrice=function(){return n.up_prices[n.up_current]},n.getNextUpDate=function(){return n.up_dates[n.up_current]},n.getNextPredPrice=function(){return n.pred_prices[n.pred_current]},n.getNextPredDate=function(){return n.pred_dates[n.pred_current]},n.predictions=n.props.predictions,n.uploaded_data=JSON.parse(n.props.uploaded_data).slice(-g[0].display_len),n.up_prices=[],n.up_dates=[],n.pred_prices=[],n.pred_dates=[],n.up_current=0,n.pred_current=0;var r,s=Object(O.a)(n.uploaded_data);try{for(s.s();!(r=s.n()).done;){var i=r.value;n.up_prices.push(i.Open),n.up_dates.push(i.Date.split(" ")[0])}}catch(u){s.e(u)}finally{s.f()}var l,c=Object(O.a)(n.predictions);try{for(c.s();!(l=c.n()).done;){var p=l.value;n.pred_prices.push(p.Open),n.pred_dates.push(p.Date.split(" ")[0])}}catch(u){c.e(u)}finally{c.f()}return n.state={data:{x:[],y:[],type:"scatter",mode:"lines",line:{color:"rgb(234, 162, 33)",width:1.6,dash:"solid"},fill:"tozeroy",fillcolor:"rgba(234, 162, 33, 0.034)"},layout:{autosize:!0,title:{text:"",font:{size:20,color:"#fff"}},xaxis:{title:"",nticks:7,color:"#fff",autorange:!0,showgrid:!1,tickmode:"auto",tickcolor:"#444",tickson:"labels",zeroline:!1,visible:!1},yaxis:{title:"PRICES",color:"#fff",gridwidth:.1,showticklabels:!0,autorange:!1,zeroline:!1,range:[0,1]},margin:{l:60,r:60,t:30,b:30},datarevision:0,paper_bgcolor:"rgba(17,17,17,0.64)",plot_bgcolor:"rgba(20, 34, 47,0.82)",modebar:{orientation:"v",remove:["zoomin","zoomout","resetScale2d"],add:["drawline","eraseshape"]},shapes:[]},revision:0,config:{responsive:!1,displaylogo:!1,scrollZoom:!0}},n.handleResize=n.handleResize.bind(Object(d.a)(n)),n}return Object(l.a)(a,[{key:"handleResize",value:function(){this.state.config.responsive;this.setState({resp:!0})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"componentDidMount",value:function(){var e=this,t=0,a=0,n=this.state,r=n.data,s=n.layout,i=setInterval((function(){t<e.up_prices.length?(r.y.push(e.getNextUpPrice()),r.x.push(e.getNextUpDate()),s.yaxis.range=[Math.min.apply(Math,Object(j.a)(r.y))-.13*Math.min.apply(Math,Object(j.a)(r.y)),Math.max.apply(Math,Object(j.a)(r.y))+.13*Math.max.apply(Math,Object(j.a)(r.y))],e.setState({revision:e.state.revision+1}),e.up_current=e.up_current+1,s.datarevision=e.state.revision+1,++t):t>=e.up_prices.length&&(s.shapes=[{type:"rect",xref:"x",yref:"paper",x0:e.up_dates[e.up_dates.length-2],y0:0,x1:e.up_dates[e.up_dates.length-1],y1:1,fillcolor:"rgb(255, 102, 85)",opacity:.42,line:{width:0}}],r.y.push(e.getNextPredPrice()),r.x.push(e.getNextPredDate()),s.yaxis.range=[Math.min.apply(Math,Object(j.a)(r.y))-.13*Math.min.apply(Math,Object(j.a)(r.y)),Math.max.apply(Math,Object(j.a)(r.y))+.13*Math.max.apply(Math,Object(j.a)(r.y))],e.setState({revision:e.state.revision+1}),e.pred_current=e.pred_current+1,s.datarevision=e.state.revision+1,++a===e.pred_prices.length&&(s.xaxis.visible=!0,window.addEventListener("resize",e.handleResize),window.clearInterval(i)))}),13)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Predictions"),r.a.createElement(k.a,{className:"w-100",data:[this.state.data],layout:this.state.layout,revision:this.state.revison,config:this.state.config}))}}]),a}(r.a.Component),w=a(29),x=a.n(w),N=a(30),R=a.n(N),C=function(e){Object(c.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={waitingUpload:!0,waitingResponse:!1,responseArrived:!1,preds:null,uploaded_data:null,server_disabled:!0},n.toggleWaitingForResponse=n.toggleWaitingForResponse.bind(Object(d.a)(n)),n.toggleResponseArrived=n.toggleResponseArrived.bind(Object(d.a)(n)),n.toggleReset=n.toggleReset.bind(Object(d.a)(n)),n.toggleFileUploaded=n.toggleFileUploaded.bind(Object(d.a)(n)),n.checkConnection=n.checkConnection.bind(Object(d.a)(n)),n}return Object(l.a)(a,[{key:"toggleWaitingForResponse",value:function(){this.setState({waitingUpload:!1,waitingResponse:!0,responseArrived:!1})}},{key:"toggleFileUploaded",value:function(e){this.setState({waitingUpload:!1,waitingResponse:!0,responseArrived:!1,uploaded_data:e})}},{key:"toggleResponseArrived",value:function(e,t){this.setState({waitingUpload:!1,waitingResponse:!1,responseArrived:!0,preds:e})}},{key:"toggleReset",value:function(){this.setState({waitingUpload:!0,waitingResponse:!1,responseArrived:!1,preds:null,uploaded_data:null})}},{key:"checkConnection",value:function(){var e=this;fetch(g[0].ping_ip,{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){console.log(t),"Healthy"===t.status?e.setState({server_disabled:!1}):e.setState({server_disabled:!0})}))}},{key:"componentDidMount",value:function(){this.checkConnection()}},{key:"render",value:function(){return r.a.createElement("div",{className:"px-3"},this.state.waitingUpload&&!this.state.waitingResponse&&!this.state.responseArrived&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"m-5 p-2"},"Drop some stock data!"),r.a.createElement(b,{waitingForResponse:this.toggleWaitingForResponse,responseArrived:this.toggleResponseArrived,uploadedFile:this.toggleFileUploaded,serverStatus:this.state.server_disabled}),r.a.createElement("div",{className:"d-flex flex-row justify-content-center align-items-center m-2"},r.a.createElement("div",{className:"p-1"},"Server status:"),r.a.createElement("img",{src:this.state.server_disabled?R.a:x.a,className:"d-flex p-1 justify-content-center align-items-center",width:"26",height:"26"})),this.state.server_disabled&&r.a.createElement("button",{className:"btn btn-sm p-2 pred-btn",onClick:this.checkConnection},"RETRY")),!this.state.waitingUpload&&this.state.waitingResponse&&!this.state.responseArrived&&r.a.createElement(y,null),!this.state.waitingUpload&&!this.state.waitingResponse&&this.state.responseArrived&&r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{predictions:this.state.preds,uploaded_data:this.state.uploaded_data}),r.a.createElement("button",{className:"btn btn-lg m-5 pred-btn w-50",onClick:this.toggleReset},"Predict another!")))}}]),a}(r.a.Component),S=function(e){Object(c.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"mt-auto text-white-50"},r.a.createElement("p",null,"Data from"," ",r.a.createElement("a",{href:"https://www.google.com/finance/",className:"text-white"},"Google Finance"),", using"," ",r.a.createElement("a",{href:"https://pytorch.org/",className:"text-white"},"PyTorch")," as ML library","."))}}]),a}(r.a.Component),M=function(e){Object(c.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"m-4 p-5"},"Developed by"),r.a.createElement("div",{className:"d-flex justify-content-evenly align-items-center row"},r.a.createElement("div",{className:"col-md-3 col-sm-4 m-2"},r.a.createElement("h3",null,"Mate Kadar")),r.a.createElement("div",{className:"col-md-3 col-sm-4 m-2"},r.a.createElement("h3",null,"and")),r.a.createElement("div",{className:"col-md-3 col-sm-4 m-2"},r.a.createElement("h3",null,"Gergely Dobsinszki"))))}}]),a}(r.a.Component),F=a(1),U=function(e){Object(c.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement(h,null),r.a.createElement(F.c,null,r.a.createElement(F.a,{exact:!0,path:"/",element:r.a.createElement(C,null)}),r.a.createElement(F.a,{exact:!0,path:"/devs",element:r.a.createElement(M,null)}))),r.a.createElement(S,null))}}]),a}(r.a.Component);a(76);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.201cc6bb.chunk.js.map