(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"2mvg":function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),l=a("TSYQ"),o=a.n(l),c=a("q1tI"),i=a.n(c),s=a("vUet"),u=i.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,c=e.fluid,u=e.rounded,m=e.roundedCircle,d=e.thumbnail,f=Object(r.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);a=Object(s.b)(a,"img");var p=o()(c&&a+"-fluid",u&&"rounded",m&&"rounded-circle",d&&a+"-thumbnail");return i.a.createElement("img",Object(n.a)({ref:t},f,{className:o()(l,p)}))}));u.displayName="Image",u.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.a=u},"9pBV":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=o(a("q1tI"));o(a("i8i4"));function o(e){return e&&e.__esModule?e:{default:e}}var c=0,i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={loaded:!1},a.id=c++,a.createForm=a.createForm.bind(a),a.findFormElement=a.findFormElement.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"createForm",value:function(){var e=this;if(window.hbspt){if(null===this.el)return;var t=n({},this.props);delete t.loading,delete t.onSubmit,delete t.onReady;var a=n({},t,{target:"#"+this.el.getAttribute("id"),onFormSubmit:function(t){var a=t.serializeArray();e.props.onSubmit(a)}});return window.hbspt.forms.create(a),!0}setTimeout(this.createForm,1)}},{key:"loadScript",value:function(){var e=this,t=document.createElement("script");t.defer=!0,t.onload=function(){e.createForm(),e.findFormElement()},t.src="//js.hsforms.net/forms/v2.js",document.head.appendChild(t)}},{key:"findFormElement",value:function(){if(null!==this.el){var e=this.el.querySelector("iframe");e?(this.setState({loaded:!0}),this.props.onReady&&this.props.onReady(e)):setTimeout(this.findFormElement,1)}}},{key:"componentDidMount",value:function(){window.hbspt||this.props.noScript?(this.createForm(),this.findFormElement()):this.loadScript()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this;return l.default.createElement("div",null,l.default.createElement("div",{ref:function(t){return e.el=t},id:"reactHubspotForm"+this.id,style:{display:this.state.loaded?"block":"none"}}),!this.state.loaded&&this.props.loading)}}]),t}(l.default.Component);t.default=i,e.exports=t.default},M4a1:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("wx14"),o=a("zLVn"),c=a("TSYQ"),i=a.n(c),s=a("vUet"),u=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,c=e.children,u=e.aspectRatio,m=Object(o.a)(e,["bsPrefix","className","children","aspectRatio"]),d=Object(s.b)(a,"embed-responsive"),f=r.a.Children.only(c);return r.a.createElement("div",Object(l.a)({ref:t},m,{className:i()(d,n,u&&d+"-"+u)}),r.a.cloneElement(f,{className:i()(f.props.className,d+"-item")}))}));u.defaultProps={aspectRatio:"1by1"};var m=u,d=a("/Yc3");a("wKOj"),t.a=function(e){var t=e.id,a=e.autoplay,n=e.mute;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.Online,null,r.a.createElement("div",{style:{position:"relative"},className:"mb-5"},r.a.createElement(m,{style:{position:"relative",zIndex:1,border:"2px solid #000000",background:"#000000"},aspectRatio:"16by9"},r.a.createElement("iframe",{title:"intro video",className:"embed-responsive-item",width:"600",height:"338",src:"https://www.youtube.com/embed/"+t+"?autoplay="+a+"&mute="+n,frameBorder:"0",allowFullScreen:!0,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",autoPlay:!0})))),r.a.createElement(d.Offline,null,r.a.createElement("div",{className:"text-center p-3",style:{position:"relative",zIndex:1,border:"2px solid #000000",background:"#000000"}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"128",height:"128",viewBox:"0 0 512 512"},r.a.createElement("title",null,"Offline"),r.a.createElement("path",{d:"M93.72,183.25C49.49,198.05,16,233.1,16,288c0,66,54,112,120,112H320.37",style:{fill:"none",stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}),r.a.createElement("path",{d:"M467.82,377.74C485.24,363.3,496,341.61,496,312c0-59.82-53-85.76-96-88-8.89-89.54-71-144-144-144-26.16,0-48.79,6.93-67.6,18.14",style:{fill:"none",stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}),r.a.createElement("line",{x1:"448",y1:"448",x2:"64",y2:"64",style:{fill:"none",stroke:"#fff",strokeLinecap:"round",strokeMiterlimit:10,strokeWidth:"32px"}})),r.a.createElement("p",{className:"lead text-center"},r.a.createElement("strong",null,"You’re offline!")," Please connect to a network to see this video."))))}},f38Q:function(e,t){e.exports="data:image/png;base64,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"},i6Tk:function(e,t,a){e.exports=a.p+"static/AWS_logo-31bd5b60cc1492df5d1270f6e0ef43c7.jpg"},mul6:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("kCIJ"),o=a("xXt2"),c=a("7vrA"),i=a("3Z9Z"),s=a("JI6e"),u=a("Bl7J"),m=a("k3mn"),d=a("s6aV"),f=function(){return r.a.createElement("section",{className:"call-to-action text-center"},r.a.createElement(c.a,null,r.a.createElement(i.a,null,r.a.createElement(s.a,{xs:"12",md:"10",lg:"8",xl:"8",className:"mx-auto"},r.a.createElement("h2",{className:"mb-2"},r.a.createElement("strong",null,"Give us Feedback!")),r.a.createElement("p",{className:"lead mb-4"},"Let us know how our product could help You in your business. What do you expect, miss or suggest? Please share Your thoughts with us."),r.a.createElement(d.a,{title:"Help us to become better!",actionText:"Help us to become better.",formId:"db810d49-ed31-44b3-a79f-65f1c20b5c56",person:"matthias"}),r.a.createElement("p",{className:"mt-2 mb-0"},r.a.createElement("strong",null,"Thank You."))))))},p=a("w9Ys"),A=(a("M4a1"),a("2mvg")),b=a("oH5Y"),g=a.n(b),E=function(){return r.a.createElement(A.a,{className:"",fluid:!0,src:g.a,alt:"User Journey"})};t.default=Object(l.injectIntl)((function(e){var t=e.intl;return r.a.createElement(u.a,null,r.a.createElement(m.a,{lang:t.locale,title:t.formatMessage({id:"page.solution.title"})}),r.a.createElement(o.a,null,r.a.createElement(c.a,null,r.a.createElement(i.a,null,r.a.createElement(s.a,{xs:"12",md:"10",lg:"9",className:"mx-auto"},r.a.createElement("div",{className:"lead-title"},"Our Solution"),r.a.createElement("h1",{className:"display-2 mb-4 py-4"},r.a.createElement("strong",null,"Let viewers discover and share moments of TV.")),r.a.createElement("p",{className:"lead"},r.a.createElement("strong",null,"Have you ever tried sharing what's on TV?")," With Snapscreen you simply take a photo ",r.a.createElement("em",null,"(Snap)")," of a TV or streaming with your mobile. Snapscreen detects instantly the specific moment of the programm. You can rewind in time, create a clip and share this in broadcast quality."),r.a.createElement("div",{className:"pt-4 text-center text-sm-left"},r.a.createElement(l.Link,{to:"/contact/",className:"btn btn-primary btn-lg"},"Get in Touch"),r.a.createElement(l.Link,{to:"/business/",className:"btn btn-link btn-lg mx-sm-2 mt-2 mt-sm-0"},"What’s the business?")))))),r.a.createElement("section",null,r.a.createElement(c.a,null,r.a.createElement(i.a,null,r.a.createElement(s.a,{xs:"12",sm:"9",md:"8",className:"mr-auto mb-4"},r.a.createElement("h2",{className:"h3"},r.a.createElement("strong",null,"A user journey")," example with Snapscreen!"))),r.a.createElement(i.a,null,r.a.createElement(s.a,{xs:"12",md:"10",lg:"9",className:"mx-auto mb-4"},r.a.createElement(E,null)))),r.a.createElement(f,null)),r.a.createElement(p.a,null))}))},oH5Y:function(e,t,a){e.exports=a.p+"static/use-case-cecac7fb63c81d5f9232f70f0ad92ee2.png"},s6aV:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("cWnB"),o=a("zM5D"),c=a("9pBV"),i=a.n(c),s=a("kCIJ"),u=a("/Yc3");t.a=function(e){var t=e.title,a=e.actionText,c=e.formId,m=e.person,d=Object(s.useIntl)(),f=Object(n.useState)(!1),p=f[0],A=f[1],b=function(){return A(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{variant:"primary",onClick:function(){return A(!0)},className:"btn btn-primary btn-lg mt-2 mt-sm-0"},a),r.a.createElement(o.a,{show:p,onHide:b},r.a.createElement(o.a.Header,null,r.a.createElement(o.a.Title,null,r.a.createElement(u.Offline,null,"You’re offline!"),r.a.createElement(u.Online,null,t)),r.a.createElement("button",{className:"btn btn--close",onClick:b},r.a.createElement("span",{className:"sr-only"},"Close"))),r.a.createElement(o.a.Body,{className:""},r.a.createElement(u.Online,null,r.a.createElement(i.a,{portalId:"7433878",formId:c,onSubmit:function(){return console.log("Submit!")},onReady:function(e){return console.log("Form ready!")},loading:r.a.createElement("div",null,"Loading...")})),r.a.createElement(u.Offline,null,r.a.createElement("div",{className:"text-center p-5"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",viewBox:"0 0 512 512"},r.a.createElement("title",null,"Offline"),r.a.createElement("path",{d:"M93.72,183.25C49.49,198.05,16,233.1,16,288c0,66,54,112,120,112H320.37",style:{fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}),r.a.createElement("path",{d:"M467.82,377.74C485.24,363.3,496,341.61,496,312c0-59.82-53-85.76-96-88-8.89-89.54-71-144-144-144-26.16,0-48.79,6.93-67.6,18.14",style:{fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}),r.a.createElement("line",{x1:"448",y1:"448",x2:"64",y2:"64",style:{fill:"none",stroke:"#000",strokeLinecap:"round",strokeMiterlimit:10,strokeWidth:"32px"}}))),r.a.createElement("p",{className:"lead text-center"},r.a.createElement("strong",null,"Please connect")," to a network."))),r.a.createElement(o.a.Footer,{className:"justify-content-center"},r.a.createElement("p",{className:""},"Prefer Email instead?"),r.a.createElement("a",{href:d.formatMessage({id:"team."+m+".email"}),rel:"nofollow"},r.a.createElement(s.FormattedMessage,{id:"team."+m+".email"})))))}},w9Ys:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("kCIJ"),o=a("7vrA"),c=a("3Z9Z"),i=a("JI6e"),s=a("2mvg"),u=a("f38Q"),m=a.n(u),d=a("i6Tk"),f=a.n(d);t.a=Object(l.injectIntl)((function(){return r.a.createElement("section",{className:""},r.a.createElement(o.a,null,r.a.createElement(c.a,null,r.a.createElement(i.a,{xs:"12",lg:"12",className:"mx-auto text-center"},r.a.createElement("h4",null,r.a.createElement("strong",null,"We are supported")," and trusted by"),r.a.createElement(s.a,{className:"m-2 p-3 grayscale",src:m.a,alt:"Techstars",fluid:!0,width:200}),r.a.createElement(s.a,{className:"m-2 p-3 grayscale",src:f.a,alt:"Austria Wirtschaftsservice",fluid:!0,width:240})))))}))},wKOj:function(e,t,a){e.exports=a.p+"static/television-6e4e4ec309e158910ea13c4f8ca2d597.png"}}]);
//# sourceMappingURL=component---src-pages-solution-js-002065ef2a13b189385d.js.map