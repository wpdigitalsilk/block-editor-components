/*! For license information please see index.js.LICENSE.txt */
!function(){"use strict";var e={287:function(e,t){var r=Symbol.for("react.element"),o=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),p=Symbol.iterator;var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f=Object.assign,v={};function y(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||g}function h(){}function _(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=y.prototype;var b=_.prototype=new h;b.constructor=_,f(b,y.prototype),b.isPureReactComponent=!0;var E=Array.isArray,C=Object.prototype.hasOwnProperty,S={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,o){var n,l={},a=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)C.call(t,n)&&!w.hasOwnProperty(n)&&(l[n]=t[n]);var s=arguments.length-2;if(1===s)l.children=o;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];l.children=c}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===l[n]&&(l[n]=s[n]);return{$$typeof:r,type:e,key:a,ref:i,props:l,_owner:S.current}}function P(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}var k=/\/+/g;function O(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,n,l,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case r:case o:s=!0}}if(s)return a=a(s=e),e=""===l?"."+O(s,0):l,E(a)?(n="",null!=e&&(n=e.replace(k,"$&/")+"/"),T(a,t,n,"",(function(e){return e}))):null!=a&&(P(a)&&(a=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(k,"$&/")+"/")+e)),t.push(a)),1;if(s=0,l=""===l?".":l+":",E(e))for(var c=0;c<e.length;c++){var u=l+O(i=e[c],c);s+=T(i,t,n,u,a)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(i=e.next()).done;)s+=T(i=i.value,t,n,u=l+O(i,c++),a);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function M(e,t,r){if(null==e)return e;var o=[],n=0;return T(e,o,"","",(function(e){return t.call(r,e,n++)})),o}function B(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var F={current:null},j={transition:null},z={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:j,ReactCurrentOwner:S};t.Fragment=n},540:function(e,t,r){e.exports=r(287)}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,r),l.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};!function(){r.r(o),r.d(o,{IconPicker:function(){return O},Image:function(){return _},MediaDisplay:function(){return C},MediaPicker:function(){return y},MediaToolbar:function(){return d},OverlayDisplay:function(){return M},OverlayPicker:function(){return F},Repeater:function(){return U},ThemeIcon:function(){return x},Video:function(){return E},getEditorSettings:function(){return a},getMedia:function(){return n},getPoster:function(){return i}});var e=require("@wordpress/data"),t=require("@wordpress/core-data");function n(r){return(0,e.useSelect)((e=>{const{getMedia:o,isResolving:n,hasFinishedResolution:l}=e(t.store),a=[r,{context:"view"}];return{mediaDetails:o(...a),isResolvingMedia:n("getMedia",a),hasResolvedMedia:l("getMedia",a)}}),[r])}var l=require("@wordpress/block-editor");function a(){return(0,e.useSelect)((e=>{const{getSettings:t}=e(l.store);return t()}),[])}function i(r,o){return(0,e.useSelect)((e=>{const{getMedia:n,isResolving:l,hasFinishedResolution:a}=e(t.store),i=[r,{context:"view"}],s=n(...i);return{posterUrl:s?.media?.sizes?.[o]?.source_url||s?.source_url||"",isResolvingPoster:l("getMedia",i),hasResolvedPoster:a("getMedia",i)}}),[r,o])}var s=require("@wordpress/element"),c=require("@wordpress/i18n"),u=require("@wordpress/components");const d=e=>{const{onSelect:t,onRemove:r,id:o,mediaType:a,multiple:i}=e,d=!!o,{mediaDetails:m}=n(o);return(0,s.createElement)(u.ToolbarGroup,{label:(0,c.__)("Media")},d?(0,s.createElement)(s.Fragment,null,(0,s.createElement)(l.MediaReplaceFlow,{mediaUrl:m?.source_url?m.source_url:"",onSelect:t,name:`Replace ${a}`}),(0,s.createElement)(u.ToolbarButton,{onClick:r},`Remove ${a}`)):(0,s.createElement)(l.MediaUploadCheck,null,(0,s.createElement)(l.MediaUpload,{onSelect:t,allowedTypes:[a],render:({open:e})=>(0,s.createElement)(u.ToolbarButton,{onClick:e},`Add ${a}`),multiple:i})))};d.defaultProps={mediaType:"image",multiple:!1};var m=require("@emotion/styled"),p=r.n(m);const g=p().div`
	label {
		font-size: 11px;
		font-weight: 500;
		line-height: 1.4;
		text-transform: uppercase;
		display: inline-block;
		margin-bottom: 8px;
		padding: 0px;
	}

	.preview-wrap {
		position: relative;
		padding-bottom: 56.25%;
		height: 0;
		overflow: hidden;
		iframe,
		video {
			max-width: 100%;
			vertical-align: top;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border: 0;
		}
	}
`,f=p().div`
	> label {
		font-size: 11px;
		font-weight: 500;
		line-height: 1.4;
		text-transform: uppercase;
		display: inline-block;
		margin-bottom: 8px;
		padding: 0px;
	}

	.ds-media__image,
	.ds-media__video-element,
	.ds-media__video {
		margin-bottom: 20px;
	}
`,v=t=>{const{media:r,onSelect:o,displayFocalPicker:i,allowMediaTypeSwitch:m,controlPanelLabel:p,multiple:v,showBlockControls:y,isBackground:h}=t,{id:_,mediaType:b,imageSize:C,lazyLoad:S,srcset:w,videoSource:x,videoUrl:P,focalPoint:k,videoControls:O}=r,{autoplay:T,isMuted:M,showControls:B,posterId:F,posterSize:j}=O,{imageSizes:z}=a(),{mediaDetails:N,isResolvingMedia:R}=n(_),[I,U]=(0,s.useState)([]),$=!!_;(0,s.useEffect)((()=>{if(z){const e=z.map((({slug:e,name:t})=>({value:e,label:t})));U(e)}}),[z]);const{embedPreview:L}=(0,e.useSelect)((e=>{const{getEmbedPreview:t}=e("core");return{embedPreview:!!P.length&&t(P)}}),[P]);if(R)return(0,s.createElement)(u.Spinner,null);const G=N?.media_details?.sizes?.[C]?.source_url??N?.source_url,H=e=>{const t={...r,...e};o(t)},q=()=>{const e={...r,id:0};o(e)},V=e=>{const t={...r.videoControls,...e};H({videoControls:t})};return(0,s.createElement)(s.Fragment,null,(0,s.createElement)(u.PanelBody,{title:p},m&&(0,s.createElement)(s.Fragment,null,(0,s.createElement)(u.__experimentalToggleGroupControl,{label:(0,c.__)("Media Type"),value:b,isBlock:!0,onChange:e=>(e=>{const t={...r,id:0,videoUrl:"",...e};o(t)})({mediaType:e})},(0,s.createElement)(u.__experimentalToggleGroupControlOption,{value:"image",label:(0,c.__)("Image")}),(0,s.createElement)(u.__experimentalToggleGroupControlOption,{value:"video",label:(0,c.__)("Video")})),"video"==b&&(0,s.createElement)(u.__experimentalToggleGroupControl,{label:(0,c.__)("Video Source"),value:x,isBlock:!0,onChange:e=>H({videoSource:e})},(0,s.createElement)(u.__experimentalToggleGroupControlOption,{value:"internal",label:(0,c.__)("Internal")}),(0,s.createElement)(u.__experimentalToggleGroupControlOption,{value:"external",label:(0,c.__)("External")}))),$?(0,s.createElement)(s.Fragment,null,"image"==b&&(0,s.createElement)(s.Fragment,null,(0,s.createElement)(d,{id:_,onSelect:e=>H({id:e?.id?e.id:0}),onRemove:q,mediaType:b,multiple:v}),i&&(0,s.createElement)(u.FocalPointPicker,{label:(0,c.__)("Focal Point Picker"),url:G,value:k,onChange:e=>H({focalPoint:e})}),(0,s.createElement)(u.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,c.__)("Lazy Load"),onChange:()=>H({lazyLoad:!S}),checked:S,help:"Disable this option if your image is in the first fold."}),(0,s.createElement)(u.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,c.__)("Enable Responsive Images (srcset)"),onChange:()=>H({srcset:!w}),checked:w,help:"Srcset is an HTML image attribute that specifies the list of images to use in different browser situations."}),(0,s.createElement)(l.__experimentalImageSizeControl,{isResizable:!1,onChangeImage:e=>H({imageSize:e}),slug:C,imageSizeOptions:I})),"video"==b&&(0,s.createElement)(s.Fragment,null,"external"==x?(0,s.createElement)(s.Fragment,null,(0,s.createElement)(u.TextControl,{label:"Embed URL",type:"url",value:P,onChange:e=>H({videoUrl:e}),help:"Paste the URL from one of the provided oEmbed providers"}),(0,s.createElement)(u.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,c.__)("Autoplay Video"),onChange:()=>V({autoplay:!T}),checked:T}),(0,s.createElement)(u.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,c.__)("Mute Video"),onChange:()=>V({isMuted:!M}),checked:M}),(0,s.createElement)(u.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,c.__)("Show Controls"),onChange:()=>V({showControls:!B}),checked:B}),L&&(0,s.createElement)(g,null,(0,s.createElement)("label",null,(0,c.__)("Embed Preview")),(0,s.createElement)("div",{className:"preview-wrap",dangerouslySetInnerHTML:{__html:L.html}}))):(0,s.createElement)(s.Fragment,null,(0,s.createElement)(u.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,c.__)("Autoplay Video"),onChange:()=>V({autoplay:!T}),checked:T}),(0,s.createElement)(u.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,c.__)("Mute Video"),onChange:()=>V({isMuted:!M}),checked:M}),(0,s.createElement)(u.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,c.__)("Show Controls"),onChange:()=>V({showControls:!B}),checked:B}),F?(0,s.createElement)(f,null,(0,s.createElement)("label",null,(0,c.__)("Video Preview")),(0,s.createElement)(E,{id:_,videoSource:x,videoUrl:P,videoControls:O,isPreview:!0}),(0,s.createElement)(l.__experimentalImageSizeControl,{imageSizeHelp:"Please select the poster image size",isResizable:!1,onChangeImage:e=>V({posterSize:e}),slug:j,imageSizeOptions:I}),(0,s.createElement)(u.ToolbarGroup,{label:(0,c.__)("Poster")},(0,s.createElement)(u.ToolbarButton,{onClick:()=>V({posterId:0})},(0,c.__)("Remove Poster")))):(0,s.createElement)(l.MediaUploadCheck,null,(0,s.createElement)(l.MediaPlaceholder,{labels:{title:"Upload Video Poster",instructions:""},onSelect:e=>V({posterId:e?.id?e.id:0}),accept:"image",allowedTypes:["image"]}))))):(0,s.createElement)(s.Fragment,null,"external"==x&&"video"==b?(0,s.createElement)(s.Fragment,null,(0,s.createElement)(u.TextControl,{label:"Embed URL",type:"url",value:P,onChange:e=>H({videoUrl:e}),help:"Paste the URL from one of the provided oEmbed providers"}),L&&(0,s.createElement)(g,null,(0,s.createElement)("label",null,(0,c.__)("Embed Preview")),(0,s.createElement)("div",{className:"preview-wrap",dangerouslySetInnerHTML:{__html:L.html}}))):(0,s.createElement)(l.MediaUploadCheck,null,(0,s.createElement)(l.MediaPlaceholder,{labels:{title:`Upload ${b}`,instructions:""},onSelect:e=>H({id:e?.id?e.id:0}),accept:`${b}/*`,multiple:v,allowedTypes:[b]})))),y&&"external"!==x&&(0,s.createElement)(l.BlockControls,{group:"block"},(0,s.createElement)(d,{id:_,onSelect:e=>H({id:e?.id?e.id:0}),onRemove:q,mediaType:b,multiple:v})))},y=e=>{const{isControl:t}=e;return(0,s.createElement)(s.Fragment,null,t?(0,s.createElement)(v,e):(0,s.createElement)(l.InspectorControls,null,(0,s.createElement)(v,e)))};function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},h.apply(this,arguments)}y.defaultProps={media:{id:0,mediaType:"image",lazyLoad:!0,imageSize:"full",videoSource:"internal",videoUrl:"",focalPoint:{x:.5,y:.5},videoControls:{autoplay:!1,isMuted:!0,showControls:!0,posterId:0,posterSize:"full"}},displayFocalPicker:!0,allowMediaTypeSwitch:!1,controlPanelLabel:(0,c.__)("Media Settings"),multiple:!1,isControl:!0,showBlockControls:!0,isBackground:!1};const _=e=>{const{id:t,imageSize:r,focalPoint:o,isBackground:l,...a}=e,i=!!t,{mediaDetails:c,isResolvingMedia:d}=n(t),m=c?.media_details?.sizes?.[r]?.source_url??c?.source_url,p=c?.alt_text;if(l&&o&&(.5!==o.x||.5!==o.y)){const e={objectFit:"cover",objectPosition:`${100*o.x}% ${100*o.y}%`};a.style={...a.style,...e}}return(0,s.createElement)(s.Fragment,null,l?(0,s.createElement)("div",{className:"ds-media is-background"},i?(0,s.createElement)("img",h({src:m,className:"ds-media__image",alt:p},a)):(0,s.createElement)(u.Placeholder,{className:"ds-media__image ds-media-placeholder",withIllustration:!0})):(0,s.createElement)(s.Fragment,null,i?d?(0,s.createElement)(u.Spinner,null):(0,s.createElement)("img",{src:m,className:"ds-media__image",alt:p}):(0,s.createElement)(u.Placeholder,{className:"ds-media__image ds-media-placeholder",withIllustration:!0})))};function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},b.apply(this,arguments)}_.defaultProps={imageSize:"full",focalPoint:{x:.5,y:.5},isBackground:!1};const E=t=>{const{id:r,videoSource:o,videoUrl:l,videoControls:a,isBackground:c,isPreview:d}=t,{autoplay:m,isMuted:p,showControls:g,posterId:f,posterSize:v}=a;let y=!!r;const{mediaDetails:h,isResolvingMedia:_}=n(r),{posterUrl:E}=i(f,v),{embedPreview:C}=(0,e.useSelect)((e=>{const{getEmbedPreview:t}=e("core");return{embedPreview:!!l.length&&t(l)}}),[l]);let S=l,w=_,x="";"internal"==o&&h&&(S=h?.source_url?h.source_url:"",x=h?.mime_type?h.mime_type:"",w=_),"external"==o&&l&&(y=!0,w=!1);const P={poster:E};return(0,s.createElement)(s.Fragment,null,c?(0,s.createElement)("div",{className:"ds-media is-background"},y?w?(0,s.createElement)(u.Spinner,null):(0,s.createElement)(s.Fragment,null,"internal"==o&&(0,s.createElement)("div",{className:"ds-media__video"},(0,s.createElement)("video",b({muted:p,controls:!!d||g,disablePictureInPicture:!0,className:"ds-media__video-element"},P),(0,s.createElement)("source",{src:S,type:x}))),"external"==o&&(0,s.createElement)(s.Fragment,null,C&&(0,s.createElement)("div",{className:"ds-media__video",dangerouslySetInnerHTML:{__html:C.html}}))):(0,s.createElement)(u.Placeholder,{className:"ds-media__image ds-media-placeholder",withIllustration:!0})):(0,s.createElement)(s.Fragment,null,y?w?(0,s.createElement)(u.Spinner,null):(0,s.createElement)(s.Fragment,null,"internal"==o&&(0,s.createElement)("video",b({muted:p,controls:!!d||g,disablePictureInPicture:!0,className:"ds-media__video-element"},P),(0,s.createElement)("source",{src:S,type:x})),"external"==o&&(0,s.createElement)(s.Fragment,null,C&&(0,s.createElement)("div",{className:"ds-media__video",dangerouslySetInnerHTML:{__html:C.html}}))):(0,s.createElement)(u.Placeholder,{className:"ds-media__image ds-media-placeholder",withIllustration:!0})))};E.defaultProps={id:0,isBackground:!1,videoSource:"internal",videoUrl:"",videoControls:{autoplay:!1,isMuted:!0,showControls:!0,posterId:0,posterSize:"full"},isPreview:!1};const C=e=>{const{media:t,isBackground:r}=e,{id:o,mediaType:n,imageSize:l,videoSource:a,videoUrl:i,focalPoint:c,videoControls:u}=t;return(0,s.createElement)(s.Fragment,null,"image"===n&&(0,s.createElement)(_,{id:o,imageSize:l,focalPoint:c,isBackground:r}),"video"===n&&(0,s.createElement)(E,{id:o,videoSource:a,videoUrl:i,videoControls:u,isBackground:r}))};C.defaultProps={media:{id:0,mediaType:"image",lazyLoad:!0,srcset:!0,imageSize:"full",videoSource:"internal",videoUrl:"",focalPoint:{x:.5,y:.5},videoControls:{autoplay:!1,isMuted:!0,showControls:!0,posterId:0,posterSize:"full"}},isBackground:!1};var S=require("@wordpress/api-fetch"),w=r.n(S);const x=e=>{const{icon:t,width:r,height:o}=e;return(0,s.createElement)(s.Fragment,null,t&&(0,s.createElement)("svg",{className:`icon icon-${t}`,"aria-hidden":"true",width:r,height:o,role:"img"},(0,s.createElement)("use",{href:`#sprite-${t}`})))};x.defaultProps={width:40,height:40};const P=p().ul`
	list-style: none;
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 12px;
	li {
		display: flex;
		align-items: center;
		color: #000;
		justify-content: center;
		margin: 0;
		padding: 3px;
		border: 2px solid transparent;
	}

	li.selected {
		border-color: #000;
	}
`,k=e=>{const{onSelect:t,icon:r,width:o,height:n,panelTitle:l,isExpanded:a}=e,[i,c]=(0,s.useState)([]),[d,m]=(0,s.useState)(r);(0,s.useEffect)((()=>{(async()=>{try{const e=await w()({path:"/ds/v1/icons/"});c(e?.icons||[])}catch(e){console.log("Error fetching icons"),console.warn(e)}})()}),[]);return(0,s.createElement)(s.Fragment,null,(0,s.createElement)(u.PanelBody,{title:l,initialOpen:a},(0,s.createElement)(P,null,i.map((e=>(0,s.createElement)("li",{key:e,onClick:()=>(e=>{m(e),t(e)})(e),className:d===e?"selected":""},(0,s.createElement)(x,{icon:e,width:o,height:n})))))))},O=e=>{const{isControl:t}=e;return(0,s.createElement)(s.Fragment,null,t?(0,s.createElement)(k,e):(0,s.createElement)(l.InspectorControls,null,(0,s.createElement)(k,e)))};function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},T.apply(this,arguments)}O.defaultProps={icon:{},width:40,height:40,isControl:!0,panelTitle:(0,c.__)("Icon Picker"),isExpanded:!0};const M=e=>{const{overlay:t}=e,{hasOverlay:r,overlayType:o,overlayColor:n,overlayGradient:l,overlayOpacity:a}=t,i={style:{...{opacity:a/100}}};let c="";if("color"===o&&n){const e=n?.slug?n.slug:"";e&&(c=`has-${e}-background-color`)}if("gradient"===o&&l){const e=l?.slug?l.slug:"";e&&(c=`has-${e}-gradient-background`)}return(0,s.createElement)(s.Fragment,null," ",r&&(0,s.createElement)("div",T({className:`background-overlay ${c}`},i)))};M.defaultProps={overlay:{hasOverlay:!1,overlayColor:{},overlayGradient:{},overlayOpacity:25,overlayType:"color"}};const B=e=>{const{overlay:t,onSelect:r}=e,{hasOverlay:o,overlayType:n,overlayColor:l,overlayGradient:i,overlayOpacity:d}=t,{colors:m,gradients:p}=a(),g=e=>{const o={...t,...e};r(o)};return(0,s.createElement)(s.Fragment,null,(0,s.createElement)(u.PanelBody,{title:(0,c.__)("Background Overlay")},(0,s.createElement)(u.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,c.__)("Has Overlay"),onChange:()=>g({hasOverlay:!o}),checked:o})),o&&(0,s.createElement)(u.PanelBody,{title:(0,c.__)("Overlay Settings")},(0,s.createElement)(u.RangeControl,{__nextHasNoMargin:!0,label:(0,c.__)("Overlay Opacity"),value:d,onChange:e=>g({overlayOpacity:e}),min:0,max:100}),(0,s.createElement)(u.__experimentalToggleGroupControl,{label:(0,c.__)("Overlay Type"),value:n,isBlock:!0,onChange:e=>g({overlayType:e})},(0,s.createElement)(u.__experimentalToggleGroupControlOption,{value:"color",label:(0,c.__)("Color")}),(0,s.createElement)(u.__experimentalToggleGroupControlOption,{value:"gradient",label:(0,c.__)("Gradient")})),"color"===n&&(0,s.createElement)(u.ColorPalette,{colors:m,value:l?.color,onChange:e=>(e=>{const t=m.find((t=>t.color===e));g(t?{overlayColor:t}:{overlayColor:{}})})(e),disableCustomColors:!0}),"gradient"===n&&(0,s.createElement)(u.GradientPicker,{__nextHasNoMargin:!0,value:i?.gradient?i.gradient:"",gradients:p,onChange:e=>(e=>{const t=p.find((t=>t.gradient===e));g(t?{overlayGradient:t}:{overlayGradient:{}})})(e),disableCustomGradients:!0,asButtons:!0})))},F=e=>{const{isControl:t}=e;return(0,s.createElement)(s.Fragment,null,t?(0,s.createElement)(B,e):(0,s.createElement)(l.InspectorControls,null,(0,s.createElement)(B,e)))};F.defaultProps={overlay:{hasOverlay:!1,overlayColor:{},overlayGradient:{},overlayOpacity:25,overlayType:"color"},isControl:!0};var j=r(540),z=require("@wordpress/icons"),N=require("uuid");const R=p().div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin-top: 20px;
	background-color: rgb(30 30 30);
	border-radius: 5px;
	font-size: 14px;
	color: var(--wp--preset--color--white, #fff);
	position: absolute;
	top: 100%;
	left: 0;
	.components-button {
		margin: 0 auto;
		color: var(--wp--preset--color--white, #fff);
		height: 100%;
		text-decoration: none;
		width: 100%;
		border-radius: 0;
		&.has-icon {
			padding: 8px 15px;
			justify-content: center;
		}
	}
`,I=p().div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: rgb(30 30 30);
	border-radius: 5px;
	font-size: 14px;
	border: 1px solid #fff;
	color: #fff;
	top: 0;
	left: 100%;
	height: 100%;
	width: 36px;
	margin-left: 20px;
	.components-button {
		margin: 0 auto;
		color: #fff;
		height: 100%;
		&.has-icon {
			min-width: 26px;
			padding: 5px;
		}
	}
`,U=({children:e,onChange:t,value:r,defaultValue:o,addButtonLabel:n,removeButtonLabel:a})=>{function i(){const e=JSON.parse(JSON.stringify(o));o.length||e.push([]),e[0].id=(0,N.v4)(),t([...r,...e])}function c(e){const o=JSON.parse(JSON.stringify(r)).filter(((t,r)=>e!==r));t(o)}return(0,s.createElement)(s.Fragment,null,(0,s.createElement)(l.BlockControls,{group:"block"},(0,s.createElement)(u.ToolbarButton,{label:n,icon:z.plusCircle,onClick:()=>i()})),r.map(((o,n)=>{const l=(0,s.createElement)(I,null,(0,s.createElement)(u.Button,{icon:z.close,label:a,onClick:()=>c(n)}));return(0,s.createElement)(j.Fragment,{key:n},e(o,l,(e=>function(e,o){const n=JSON.parse(JSON.stringify(r));n[o]="object"===typeof e&&null!==e?{...n[o],...e}:e,t(n)}(e,n)),(()=>c(n)),o.id,n))})),(0,s.createElement)(R,null,(0,s.createElement)(u.Button,{variant:"link",onClick:()=>i(),icon:z.plusCircle,iconPosition:"right"},n)))};U.defaultProps={defaultValue:[],addButtonLabel:(0,c.__)("Add Item"),removeButtonLabel:(0,c.__)("Remove Item")}}(),module.exports=o}();
//# sourceMappingURL=index.js.map