(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),l=r(a("VbXa")),s=r(a("8OQS")),o=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},A=function(e){var t=e.fluid,a=e.fixed;return m(t||a).src},m=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),p=function(e){var t=u(e),a=A(t);return g[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,b=E&&window.IntersectionObserver,v=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+d+l+s+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,s=d.default.createElement(L,(0,o.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?d.default.createElement("picture",null,i(r),s):s})),L=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,A=e.ariaHidden,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":A,sizes:a,srcSet:r,src:i},m,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));L.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=E&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!h&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||E&&(h||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=A(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,s=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.placeholderClassName,g=e.fluid,p=e.fixed,h=e.backgroundColor,E=e.durationFadeIn,b=e.Tag,v=e.itemProp,w=e.loading,N=e.draggable,j=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,Q=(0,o.default)({opacity:j?1:0,transition:C?"opacity "+E+"ms":"none"},s),B="boolean"==typeof h?"lightgray":h,z={transitionDelay:E+"ms"},O=(0,o.default)({opacity:this.state.imgLoaded?0:1},C&&z,s,f),V={title:t,alt:this.state.isVisible?"":a,style:O,className:A,itemProp:v};if(g){var k=g,T=m(g);return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),B&&d.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:B,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&z)}),T.base64&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:V,imageVariants:k,generateSources:I}),T.tracedSVG&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:V,imageVariants:k,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(k),d.default.createElement(L,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:Q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)({alt:a,title:t,loading:w},T,{imageVariants:k}))}}))}if(p){var M=p,P=m(p),D=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete D.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:D,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},B&&d.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:B,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},C&&z)}),P.base64&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:V,imageVariants:M,generateSources:I}),P.tracedSVG&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:V,imageVariants:M,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(M),d.default.createElement(L,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:Q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)({alt:a,title:t,loading:w},P,{imageVariants:M}))}}))}return null},t}(d.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var Q=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),B=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});C.propTypes={resolutions:Q,sizes:B,fixed:c.default.oneOfType([Q,c.default.arrayOf(Q)]),fluid:c.default.oneOfType([B,c.default.arrayOf(B)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var z=C;t.default=z},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return g}));var r=a("q1tI"),i=a.n(r),n=a("Bl7J"),l=a("p52L"),s=a("9eSz"),o=a.n(s),d=function(e){e.source;var t=l.data;return i.a.createElement(o.a,{fluid:t.placeholderImage.childImageSharp.fluid,className:"img-fluid mx-auto d-block thumb-nail",alt:"Jason Howie"})},c=a("vrFN"),u=a("IP2g"),f=a("8tEE"),A=a("wHSu"),m=function(e){var t=e.dotNetLogo;return i.a.createElement("div",{className:"container",style:{textAlign:"center"}},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm"},i.a.createElement("img",{src:t,alt:".NET Core",id:"dotNetCore"}),i.a.createElement("p",null,"C#/.NET")),i.a.createElement("div",{className:"col-sm"},i.a.createElement(u.a,{icon:f.e,size:"5x",style:{color:"#F14A29"}}),i.a.createElement("p",null,"HTML5")),i.a.createElement("div",{className:"col-sm"},i.a.createElement(u.a,{icon:f.b,size:"5x",style:{color:"#264de4"}}),i.a.createElement("p",null,"CSS3")),i.a.createElement("div",{className:"col-sm"},i.a.createElement(u.a,{icon:f.f,size:"5x",style:{color:"#f0db4f"}}),i.a.createElement("p",null,"JavaScript")),i.a.createElement("div",{className:"col-sm"},i.a.createElement(u.a,{icon:f.h,size:"5x",style:{color:"#68A063"}}),i.a.createElement("p",null,"Node.js"))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm"},i.a.createElement(u.a,{icon:f.i,size:"5x",style:{color:"#61dbfb"}}),i.a.createElement("p",null,"React.js")),i.a.createElement("div",{className:"col-sm"},i.a.createElement(u.a,{icon:f.k,size:"5x",style:{color:"#42b883"}}),i.a.createElement("p",null,"Vue.js")),i.a.createElement("div",{className:"col-sm"},i.a.createElement(u.a,{icon:f.c,size:"5x",style:{color:"#f1502f"}}),i.a.createElement("p",null,"Git")),i.a.createElement("div",{className:"col-sm"},i.a.createElement(u.a,{icon:A.faDatabase,size:"5x"}),i.a.createElement("p",null,"SQL/Databases")),i.a.createElement("div",{className:"col-sm"},i.a.createElement(u.a,{icon:f.a,size:"5x",style:{color:"#602C50"}}),i.a.createElement("p",null,"Bootstrap 4"))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm"},i.a.createElement("h4",null,"And More!"))))},g=(t.default=function(e){var t=e.data;return i.a.createElement(n.a,null,i.a.createElement(c.a,{title:"Home"}),i.a.createElement("h1",null,"About Me"),i.a.createElement("figure",null,i.a.createElement(d,{source:"jason.jpg",alt:"Jason Howie"})),i.a.createElement("p",null,"My name is Jason Howie. I am a Full-Stack Web developer looking to further my education in programming and find full-time work doing it. Currently I am a student at ",i.a.createElement("a",{href:"https://www.techelevator.com/",target:"_blank",rel:"noopener noreferrer"},"Tech Elevator")," in Cleveland, Ohio, a 14-week coding bootcamp, learning to be a Full-Stack Developer. I am enrolled in their C#/.NET cohort, learning remotely due to the COVID-19 pandemic. Before Tech Elevator I learned through various online resources earning a Full-Stack JavaScript Techdegree with Treehouse. I also have finished two Nanodegrees with Udacity, including the Intro to Programming and Front-End Web Development Nanodegrees. I am always pursuing to learn more, create and experience new technology."),i.a.createElement("p",null,i.a.createElement("strong",null,"I am versed in:")),i.a.createElement(m,{dotNetLogo:t.file.publicURL}),i.a.createElement("p",null,"Before I took the journey on the life of a programmer, I was pursuing a life in Music. Vocal Performance to be exact. I have a passion in performing and have performed in everything from operas to contemporary pop-accapella groups and everything in between. I went to Kent State Universty and graduated with a degree in Music with a concentration in Vocal Performance. Although I loved performance I felt I needed to make myself more marketable, and found programming which I am enjoying just as much."))},"2878698090")},p52L:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAASoEkcWKa//EABoQAAEFAQAAAAAAAAAAAAAAAAIAAQMEMhD/2gAIAQEAAQUCUosHJN2XQ5//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPwGn/8QAFhEAAwAAAAAAAAAAAAAAAAAAAQIQ/9oACAECAQE/AQs//8QAGhAAAgIDAAAAAAAAAAAAAAAAAAEQMRIhcf/aAAgBAQAGPwKxY6ldZZ//xAAbEAEBAQACAwAAAAAAAAAAAAABEQAhMUGB8P/aAAgBAQABPyFe7gUKb7zV7NwRbDzmeXxNaGt//9oADAMBAAIAAwAAABA83//EABcRAAMBAAAAAAAAAAAAAAAAAAABESH/2gAIAQMBAT8Qc4U//8QAFhEBAQEAAAAAAAAAAAAAAAAAAREA/9oACAECAQE/EKFyTf/EABsQAQADAQADAAAAAAAAAAAAAAEAETEhUWGR/9oACAEBAAE/EDEAFUt9+RM4EluK33DYC8lwN+AU6gO1KQ22E//Z","aspectRatio":1.6556291390728477,"src":"/static/68fd5a5d706c2974e2f3c8b661e2b975/a7715/jason.jpg","srcSet":"/static/68fd5a5d706c2974e2f3c8b661e2b975/8f7df/jason.jpg 250w,\\n/static/68fd5a5d706c2974e2f3c8b661e2b975/0f3a1/jason.jpg 500w,\\n/static/68fd5a5d706c2974e2f3c8b661e2b975/a7715/jason.jpg 1000w,\\n/static/68fd5a5d706c2974e2f3c8b661e2b975/37d86/jason.jpg 1500w,\\n/static/68fd5a5d706c2974e2f3c8b661e2b975/cce53/jason.jpg 1913w","sizes":"(max-width: 1000px) 100vw, 1000px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-1abd5a050b7c9827f76a.js.map