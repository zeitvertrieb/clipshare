(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"9pBV":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=o(a("q1tI"));o(a("i8i4"));function o(e){return e&&e.__esModule?e:{default:e}}var i=0,s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={loaded:!1},a.id=i++,a.createForm=a.createForm.bind(a),a.findFormElement=a.findFormElement.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"createForm",value:function(){var e=this;if(window.hbspt){if(null===this.el)return;var t=n({},this.props);delete t.loading,delete t.onSubmit,delete t.onReady;var a=n({},t,{target:"#"+this.el.getAttribute("id"),onFormSubmit:function(t){var a=t.serializeArray();e.props.onSubmit(a)}});return window.hbspt.forms.create(a),!0}setTimeout(this.createForm,1)}},{key:"loadScript",value:function(){var e=this,t=document.createElement("script");t.defer=!0,t.onload=function(){e.createForm(),e.findFormElement()},t.src="//js.hsforms.net/forms/v2.js",document.head.appendChild(t)}},{key:"findFormElement",value:function(){if(null!==this.el){var e=this.el.querySelector("iframe");e?(this.setState({loaded:!0}),this.props.onReady&&this.props.onReady(e)):setTimeout(this.findFormElement,1)}}},{key:"componentDidMount",value:function(){window.hbspt||this.props.noScript?(this.createForm(),this.findFormElement()):this.loadScript()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this;return l.default.createElement("div",null,l.default.createElement("div",{ref:function(t){return e.el=t},id:"reactHubspotForm"+this.id,style:{display:this.state.loaded?"block":"none"}}),!this.state.loaded&&this.props.loading)}}]),t}(l.default.Component);t.default=s,e.exports=t.default},s6aV:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("cWnB"),o=a("zM5D"),i=a("9pBV"),s=a.n(i),c=a("kCIJ"),m=a("/Yc3"),u=a("9c0Y"),d=a.n(u);t.a=function(e){var t=e.title,a=e.actionText,i=e.formId,u=e.person,f=Object(c.useIntl)(),p=Object(n.useState)(!1),E=p[0],h=p[1],g=function(){return h(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{variant:"primary",onClick:function(){return h(!0)},className:"btn btn-primary btn-lg mt-2 mt-sm-0"},a),r.a.createElement(o.a,{show:E,onHide:g},r.a.createElement(o.a.Header,null,r.a.createElement(o.a.Title,null,r.a.createElement(m.Offline,null,r.a.createElement(c.FormattedMessage,{id:"offline.text"})),r.a.createElement(m.Online,null,t)),r.a.createElement("button",{className:"btn btn--close",onClick:g},r.a.createElement(d.a,null),r.a.createElement("span",{className:"sr-only"},r.a.createElement(c.FormattedMessage,{id:"action.close"})))),r.a.createElement(o.a.Body,{className:""},r.a.createElement(m.Online,null,r.a.createElement(s.a,{portalId:"7433878",formId:i,onSubmit:function(){return console.log("Submit!")},onReady:function(e){return console.log("Form ready!")},loading:r.a.createElement("div",null,"Loading...")})),r.a.createElement(m.Offline,null,r.a.createElement("div",{className:"text-center p-5"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",viewBox:"0 0 512 512"},r.a.createElement("title",null,r.a.createElement(c.FormattedMessage,{id:"offline.status"})),r.a.createElement("path",{d:"M93.72,183.25C49.49,198.05,16,233.1,16,288c0,66,54,112,120,112H320.37",style:{fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}),r.a.createElement("path",{d:"M467.82,377.74C485.24,363.3,496,341.61,496,312c0-59.82-53-85.76-96-88-8.89-89.54-71-144-144-144-26.16,0-48.79,6.93-67.6,18.14",style:{fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}),r.a.createElement("line",{x1:"448",y1:"448",x2:"64",y2:"64",style:{fill:"none",stroke:"#000",strokeLinecap:"round",strokeMiterlimit:10,strokeWidth:"32px"}}))),r.a.createElement("p",{className:"lead text-center"},r.a.createElement("strong",null,r.a.createElement(c.FormattedMessage,{id:"offline.cta"}))))),r.a.createElement(o.a.Footer,{className:"justify-content-center"},r.a.createElement("p",null,r.a.createElement(c.FormattedMessage,{id:"question.emailInstead"})),r.a.createElement("a",{href:f.formatMessage({id:"team."+u+".email"}),rel:"nofollow"},r.a.createElement(c.FormattedMessage,{id:"team."+u+".email"})))))}},"uw+q":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return E}));var n=a("q1tI"),r=a.n(n),l=a("kCIJ"),o=a("xXt2"),i=a("7vrA"),s=a("3Z9Z"),c=a("JI6e"),m=a("Bl7J"),u=a("k3mn"),d=a("s6aV"),f=a("yhRL"),p=a.n(f);t.default=Object(l.injectIntl)((function(e){var t=e.intl,a=e.data.markdownRemark,n=a.frontmatter,f=a.html;return r.a.createElement(m.a,null,r.a.createElement(u.a,{lang:t.locale,title:t.formatMessage({id:"page.terms.title"}),description:t.formatMessage({id:"page.terms.description"}),keywords:["legal","terms","use","govern","access","account","license"],ogImage:p.a}),r.a.createElement(o.a,{className:"blog-post"},r.a.createElement(i.a,null,r.a.createElement(s.a,null,r.a.createElement(c.a,{xs:"12",md:"10",lg:"9",className:"ml-auto mr-auto"},r.a.createElement("h1",{className:"display-2 mb-4 py-4"},r.a.createElement("strong",null,r.a.createElement(l.FormattedMessage,{id:"page.terms.title"}))),r.a.createElement("p",{className:"lead"},r.a.createElement("strong",null,r.a.createElement(l.FormattedMessage,{id:"page.terms.description"}))," ",r.a.createElement(l.FormattedMessage,{id:"page.terms.text"})),r.a.createElement("p",null,r.a.createElement("small",null,"Last update: ",n.date)),r.a.createElement("div",{className:"pt-4 text-center text-sm-left"},r.a.createElement(d.a,{title:"Report Privacy Violation",actionText:"Report violation",formId:"72eb91b6-6663-489c-a81e-71e39b184572",person:"matthias"})))))),r.a.createElement("section",{className:""},r.a.createElement(i.a,null,r.a.createElement(s.a,null,r.a.createElement(c.a,{xs:"12",md:"10",lg:"9",className:"ml-auto mr-auto",as:"article"},r.a.createElement("article",{dangerouslySetInnerHTML:{__html:f}}))))))}));var E="40308911"},yhRL:function(e,t,a){e.exports=a.p+"static/og_home-2b1b527e3f785301869c5edf0aee606b.jpg"}}]);
//# sourceMappingURL=component---src-pages-terms-js-5f473c5c843447794061.js.map