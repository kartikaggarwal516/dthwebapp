(this.webpackJsonpdthwebapp=this.webpackJsonpdthwebapp||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/pic2.1891b84c.jpg"},28:function(e,a,t){e.exports=t(51)},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},40:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(17),r=t.n(c),s=(t(33),t(34),t(19)),m=t.n(s),i=(t(35),t(6)),u=function(e){return l.a.createElement("div",null,l.a.createElement("img",{className:"himg",src:m.a,alt:"header image"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"head"},l.a.createElement("h2",null,"Welcome to SatTV")),l.a.createElement("div",{className:"container2"},l.a.createElement("div",{className:"content"},l.a.createElement(i.b,{to:"/balance"},l.a.createElement("div",{className:"opt"},l.a.createElement("h4",null,"Current Balance"),l.a.createElement("p",null,"View current balance in the account"))),l.a.createElement(i.b,{to:"/recharge"},l.a.createElement("div",{className:"opt"},l.a.createElement("h4",null,"Recharge Account"),l.a.createElement("p",null,"Recharge to add money in your account"))),l.a.createElement(i.b,{to:"/catalog"},l.a.createElement("div",{className:"opt"},l.a.createElement("h4",null,"Subscription Catalog"),l.a.createElement("p",null,"View available packs,channels and services"))),l.a.createElement(i.b,{to:"/subscribe"},l.a.createElement("div",{className:"opt"},l.a.createElement("h4",null,"Subscribe pack"),l.a.createElement("p",null,"Subscribe to base packs"))),l.a.createElement(i.b,{to:"/channel"},l.a.createElement("div",{className:"opt"},l.a.createElement("h4",null,"Add Channels"),l.a.createElement("p",null,"Add channels to an existing subscription"))),l.a.createElement(i.b,{to:"/services"},l.a.createElement("div",{className:"opt"},l.a.createElement("h4",null,"Special Services"),l.a.createElement("p",null,"Subscribe to special services"))),l.a.createElement(i.b,{to:"/view"},l.a.createElement("div",{className:"opt"},l.a.createElement("h4",null,"View Current Subscription"),l.a.createElement("p",null,"View currently subscribed packs, channels and services for your account"))),l.a.createElement(i.b,{to:"/update"},l.a.createElement("div",{className:"opt"},l.a.createElement("h4",null,"Update notification details"),l.a.createElement("p",null,"Update email and phone number for notifications")))))))},o=(t(40),function(e){return l.a.createElement("div",{className:"header"},l.a.createElement("img",{className:"himg",src:m.a,alt:"home image"}),l.a.createElement(i.b,{to:"/"},l.a.createElement("h4",null,"Home")))}),d=t(5),E=(t(42),Object(d.b)((function(e){return{balance:e.balance}}),null)((function(e){return l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement("div",{className:"balance-box"},l.a.createElement("div",{className:"balance"},l.a.createElement("h3",null,"Account Balance"),l.a.createElement("h3",null," ",e.balance," "))))}))),v=t(10),p=t(11),b=t(13),h=t(12),N=t(52),f=(t(43),t(4)),g=function(e){return{type:"ADDAMOUNT",payload:e}},y=function(e){return{type:"PACKSUBSCRIPTION",payload:e}},S=function(e){return{type:"PACK",payload:e}},A=function(e){return{type:"ADDCHANNEL",payload:e}},O=function(e){return{type:"ADDSERVICES",payload:e}},j=function(e){Object(b.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(v.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={msg:"",err:""},e.submitHandler=function(a){a.preventDefault();var t=Number(a.target[0].value),n=e.state,l=n.msg,c=n.err;t>0?(e.props.recharge(t),l="Reacharge completed successfully"):c="Please enter valid amount",e.setState({msg:l,err:c})},e}return Object(p.a)(t,[{key:"render",value:function(){var e=this.state,a=e.msg,t=e.err;return l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement("div",{className:"recharge-box"},l.a.createElement("div",{className:"rbox"},l.a.createElement("div",{className:"amount"},l.a.createElement("div",{className:"amount-box"},l.a.createElement("form",{onSubmit:this.submitHandler},l.a.createElement("input",{type:"number",placeholder:"Enter the amount to recharge",className:"inclass"}),l.a.createElement(N.a,{variant:"warning",type:"submit"},"Recharge"))),l.a.createElement("div",{className:"msg"},a.length>0&&0==t.length?l.a.createElement("div",{className:"smsg"},a):l.a.createElement("div",{className:"errmsg"},t))),l.a.createElement("div",{className:"newbalance"},l.a.createElement("div",{className:"balance"},l.a.createElement("h3",null,"Account Balance"),l.a.createElement("h3",null," ",this.props.balance," "))))))}}]),t}(n.Component),w=Object(d.b)((function(e){return{balance:e.balance}}),(function(e){return Object(f.a)({recharge:g},e)}))(j),k=(t(44),function(e){return l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement("div",{className:"catalog-box"},l.a.createElement("div",{className:"chead"},l.a.createElement("h3",null,"Available Catalog")),l.a.createElement("div",{className:"heads"},l.a.createElement("h4",null,"Available Packs")),l.a.createElement("div",{className:"packs-box"},l.a.createElement("div",{className:"pbox"},l.a.createElement("h5",null,"Gold - \u20b9100"),l.a.createElement("p",null,"Subscription pack"),l.a.createElement("hr",null),l.a.createElement("div",null,"Zee"),l.a.createElement("div",null,"Sony"),l.a.createElement("div",null,"Star Plus"),l.a.createElement("div",null,"Discovery"),l.a.createElement("div",null,"NatGeo")),l.a.createElement("div",{className:"pbox"},l.a.createElement("h5",null,"Silver - \u20b950"),l.a.createElement("p",null,"Subscription pack"),l.a.createElement("hr",null),l.a.createElement("div",null,"Zee"),l.a.createElement("div",null,"Sony"),l.a.createElement("div",null,"Star Plus"))),l.a.createElement("div",{className:"heads"},l.a.createElement("h4",null,"Available Channels")),l.a.createElement("div",{className:"channelbox"},l.a.createElement("div",{className:"channel"},"\u20b9 10 | Zee"),l.a.createElement("div",{className:"channel"},"\u20b9 15 | Sony"),l.a.createElement("div",{className:"channel"},"\u20b9 20 | Star Plus"),l.a.createElement("div",{className:"channel"},"\u20b9 10 | Discovery"),l.a.createElement("div",{className:"channel"},"\u20b9 20 | NatGeo")),l.a.createElement("div",{className:"heads"},l.a.createElement("h4",null,"Available Services")),l.a.createElement("div",{className:"channelbox"},l.a.createElement("div",{className:"channel"},"\u20b9 200 | Learn English"),l.a.createElement("div",{className:"channel"},"\u20b9 100 | Learn Cooking"))))}),C=(t(45),function(e){Object(b.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(v.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={errg:"",errs:"",msg:"",amount:0},e.submitHandler=function(a){a.preventDefault();var t=a.target[0].name,n=Number(a.target[0].value),l=!0,c=e.state,r=c.errg,s=c.errs,m=c.msg,i=c.amount;r="",s="",m="","Gold"==t?((0==(i=100*n)||i<0)&&(r="Please enter valid number"),i>e.props.balance&&(l=!1,r="Insufficient balance")):"Silver"==t&&((0==(i=50*n)||i<0)&&(s="Please enter valid number"),i>e.props.balance&&(l=!1,s="Insufficient balance")),l&&i>0&&(e.props.subscribe(i),e.props.currentPack(t),m="Pack Subscribed Successsfully"),e.setState({errg:r,errs:s,msg:m,amount:i})},e}return Object(p.a)(t,[{key:"render",value:function(){var e=this.state,a=e.errg,t=e.errs,n=e.msg,c=e.amount;return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement("div",{className:"subbox"},l.a.createElement("div",{className:"pbox"},l.a.createElement("h5",null,"Gold - \u20b9100"),l.a.createElement("p",null,"Subscription pack"),l.a.createElement("hr",null),l.a.createElement("div",null,"Zee"),l.a.createElement("div",null,"Sony"),l.a.createElement("div",null,"Star Plus"),l.a.createElement("div",null,"Discovery"),l.a.createElement("div",null,"NatGeo"),l.a.createElement("hr",null),l.a.createElement("form",{className:"fbox",onSubmit:this.submitHandler},l.a.createElement("input",{type:"number",name:"Gold",placeholder:"Number of Months",className:"subin"}),l.a.createElement(N.a,{variant:"warning",type:"submit",className:"subbtn"},"Subscribe"),a.length>0&&l.a.createElement("div",{className:"errmsg"},a))),l.a.createElement("div",{className:"pbox"},l.a.createElement("h5",null,"Silver - \u20b950"),l.a.createElement("p",null,"Subscription pack"),l.a.createElement("hr",null),l.a.createElement("div",null,"Zee"),l.a.createElement("div",null,"Sony"),l.a.createElement("div",null,"Star Plus"),l.a.createElement("hr",null),l.a.createElement("form",{className:"fbox",onSubmit:this.submitHandler},l.a.createElement("input",{type:"number",name:"Silver",placeholder:"Number of Months",className:"subin"}),l.a.createElement(N.a,{variant:"warning",type:"submit",className:"subbtn"},"Subscribe"),t.length>0&&l.a.createElement("div",{className:"errmsg"},t))),l.a.createElement("div",{className:"balbox"},l.a.createElement("div",{className:"balance"},l.a.createElement("h4",null,"Account Balance"),l.a.createElement("h4",null," ",this.props.balance," ")),l.a.createElement("div",{className:"balance"},l.a.createElement("h4",null,"Subscription Amount"),l.a.createElement("h4",null," ",c," ")),n.length>0&&l.a.createElement("div",{className:"smsg"},n)))))}}]),t}(n.Component)),x=Object(d.b)((function(e){return{balance:e.balance}}),(function(e){return Object(f.a)({subscribe:y,currentPack:S},e)}))(C),P=(t(46),function(e){Object(b.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(v.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={err:"",msg:""},e.submitHandler=function(a){a.preventDefault();var t=a.target[0].value.split(",");console.log("channels",t);var n=0,l=e.state,c=l.err,r=l.msg;c="",r="",t.map((function(e){var a=e.trim();"Zee"==a?n+=10:"Sony"==a?n+=15:"Star Plus"==a?n+=20:"Discovery"==a?n+=10:"NatGeo"==a&&(n+=20)})),console.log("amount",n),0==n?c="Please enter the channels name correctly as mentioned above":n>e.props.balance?c="Insufficient balance":(e.props.subscribe(n),r="Channels added Successfully",t.map((function(a){var t=a.trim();e.props.addChannel(t)}))),e.setState({err:c,msg:r})},e}return Object(p.a)(t,[{key:"render",value:function(){var e=this.state,a=e.err,t=e.msg;return l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement("div",{className:"channelbox"},l.a.createElement("div",{className:"clist"},l.a.createElement("h5",null,"Add Channels"),l.a.createElement("div",{className:"chprice"},"\u20b9 10 | Zee"),l.a.createElement("div",{className:"chprice"},"\u20b9 15 | Sony"),l.a.createElement("div",{className:"chprice"},"\u20b9 20 | Star Plus"),l.a.createElement("div",{className:"chprice"},"\u20b9 10 | Discovery"),l.a.createElement("div",{className:"chprice"},"\u20b9 20 | NatGeo")),l.a.createElement("div",{className:"balance"},l.a.createElement("h3",null,"Account Balance"),l.a.createElement("h3",null," ",this.props.balance," "))),l.a.createElement("div",{className:"addc"},l.a.createElement("form",{className:"cform",onSubmit:this.submitHandler},l.a.createElement("input",{type:"text",placeholder:"Enter channels name to add(seperated by comma)",className:"chanin"}),l.a.createElement(N.a,{variant:"warning",type:"submit",className:"subbtn"},"Add")),l.a.createElement("div",{className:"msg"},t.length>0&&0==a.length?l.a.createElement("div",{className:"smsg"},t):l.a.createElement("div",{className:"errmsg"},a))))}}]),t}(n.Component)),D=Object(d.b)((function(e){return{balance:e.balance}}),(function(e){return Object(f.a)({subscribe:y,addChannel:A},e)}))(P),H=(t(47),function(e){Object(b.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(v.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={err:"",msg:""},e.submitHandler=function(a){a.preventDefault();var t=a.target[0].value.split(","),n=0,l=e.state,c=l.err,r=l.msg;c="",r="",t.map((function(e){var a=e.trim();"Learn English"==a?n+=200:"Learn Cooking"==a&&(n+=100)})),0==n?c="Please enter the Services name correctly as mentioned above":n>e.props.balance?c="Insufficient balance":(e.props.subscribe(n),r="Services added Successfully",t.map((function(a){var t=a.trim();e.props.addServices(t)}))),e.setState({err:c,msg:r})},e}return Object(p.a)(t,[{key:"render",value:function(){var e=this.state,a=e.err,t=e.msg;return l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement("div",{className:"channelbox"},l.a.createElement("div",{className:"clist"},l.a.createElement("h5",null,"Add Services"),l.a.createElement("div",{className:"chprice"},"\u20b9 200 | Learn English"),l.a.createElement("div",{className:"chprice"},"\u20b9 100 | Learn Cooking")),l.a.createElement("div",{className:"balance"},l.a.createElement("h3",null,"Account Balance"),l.a.createElement("h3",null," ",this.props.balance," "))),l.a.createElement("div",{className:"addc"},l.a.createElement("form",{className:"cform",onSubmit:this.submitHandler},l.a.createElement("input",{type:"text",placeholder:"Enter Services name to add(seperated by comma)",className:"chanin"}),l.a.createElement(N.a,{variant:"warning",type:"submit",className:"subbtn"},"Add"))),l.a.createElement("div",{className:"msg"},t.length>0?l.a.createElement("div",{className:"smsg"},t):l.a.createElement("div",{className:"errmsg"},a)))}}]),t}(n.Component)),I=Object(d.b)((function(e){return{balance:e.balance}}),(function(e){return Object(f.a)({subscribe:y,addServices:O},e)}))(H),B=(t(48),Object(d.b)((function(e){return{pack:e.pack,channels:e.channels,services:e.services}}),null)((function(e){return l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement("div",{className:"viewbox"},l.a.createElement("div",{className:"clist"},l.a.createElement("h5",null,"Pack"),l.a.createElement("div",{className:"chprice"},e.pack)),l.a.createElement("div",{className:"clist"},l.a.createElement("h5",null,"Added Channels"),e.channels.map((function(e,a){return l.a.createElement("div",{key:a,className:"chprice"},e)}))),l.a.createElement("div",{className:"clist"},l.a.createElement("h5",null,"Services"),e.services.map((function(e,a){return l.a.createElement("div",{key:a,className:"chprice"},e)})))))}))),L=(t(49),function(e){Object(b.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(v.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={mail:"",phone:0,msg:"",merr:"",perr:""},e.submitHandler=function(a){a.preventDefault();var t=e.state,n=t.mail,l=t.phone,c=t.msg,r=t.merr,s=t.perr;c="",r="",s="",n=a.target[0].value,l=a.target[1].value;var m=!1,i=!1;n.length>0?m=!0:r="Please enter correct Email address",10==l.length?i=!0:s="Please enter 10 digit phone no",i&&m&&(c="Email and phone updated successfully"),e.setState({mail:n,phone:l,msg:c,merr:r,perr:s})},e}return Object(p.a)(t,[{key:"render",value:function(){var e=this.state,a=e.msg,t=e.merr,n=e.perr;return l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement("div",{className:"updatebox"},l.a.createElement("div",{className:"upbox"},l.a.createElement("form",{className:"uform",onSubmit:this.submitHandler},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,l.a.createElement("b",null,"Email address")),l.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter email",name:"mail"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,l.a.createElement("b",null,"Phone number")),l.a.createElement("input",{type:"number",className:"form-control",placeholder:"Enter Phone no.",name:"phone"})),l.a.createElement(N.a,{variant:"primary",type:"submit",className:"subbtn"},"Update")),l.a.createElement("div",{className:"msg"},a.length>0?l.a.createElement("div",{className:"smsg"},a):l.a.createElement("div",null,l.a.createElement("div",{className:"errmsg"},t),l.a.createElement("div",{className:"errmsg"},n))))))}}]),t}(n.Component)),G=t(2);t(50);var R=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i.a,{basename:"dthwebapp"},l.a.createElement(G.c,null,l.a.createElement(G.a,{exact:!0,path:"/",component:u}),l.a.createElement(G.a,{path:"/balance",component:E}),l.a.createElement(G.a,{path:"/recharge",component:w}),l.a.createElement(G.a,{path:"/catalog",component:k}),l.a.createElement(G.a,{path:"/subscribe",component:x}),l.a.createElement(G.a,{path:"/channel",component:D}),l.a.createElement(G.a,{path:"/services",component:I}),l.a.createElement(G.a,{path:"/view",component:B}),l.a.createElement(G.a,{path:"/update",component:L}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=[];var V=[];var Z=Object(f.b)({balance:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"BALANCEDETAILS":return e;case"ADDAMOUNT":return e+=a.payload;case"PACKSUBSCRIPTION":return e-=a.payload;default:return e}},channels:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADDCHANNEL":return e.push(a.payload),e;default:return e}},services:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADDSERVICES":return e.push(a.payload),e;default:return e}},pack:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"PACK":return e=a.payload;default:return e}}}),T=Object(f.c)(Z);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d.a,{store:T},l.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.994fca71.chunk.js.map