(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{88:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(92)),i=t(93),c={id:"build_dev_chain",title:"Set up a development chain"},l={unversionedId:"build_dev_chain",id:"build_dev_chain",isDocsHomePage:!1,title:"Set up a development chain",description:"This section runs you through the process of setting up a local HydraDX chain instance for development.",source:"@site/docs/build_dev_chain.md",slug:"/build_dev_chain",permalink:"/es/build_dev_chain",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/build_dev_chain.md",version:"current",sidebar:"sidebar",previous:{title:"Monitoreo de nodo",permalink:"/es/node_monitoring"},next:{title:"Writing Docs",permalink:"/es/contributing"}},u=[{value:"01 Install dependencies",id:"01-install-dependencies",children:[]},{value:"02 Build",id:"02-build",children:[]},{value:"03 Run",id:"03-run",children:[]},{value:"04 Connect to your local chain instance",id:"04-connect-to-your-local-chain-instance",children:[]}],d={toc:u};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This section runs you through the process of setting up a local HydraDX chain instance for development. "),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Are you looking to set up a node for validation purposes? Please move to our ",Object(o.b)("a",{parentName:"p",href:"/node_setup"},"validator setup guide"),"."))),Object(o.b)("h2",{id:"01-install-dependencies"},"01 Install dependencies"),Object(o.b)("p",null,"To prepare a local HydraDX chain instance for development, your machine needs to cover all dependencies for running a Substrate chain. You will need to install a Rust developer environment and make sure that it is configured properly for compiling Substrate runtime code to the WebAssembly (Wasm) target."),Object(o.b)("p",null,"You can install and configure all dependencies manually following the ",Object(o.b)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/getting-started"},"Substrate guide"),", or you could let this script do all the work for you:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ curl https://getsubstrate.io -sSf | bash -s -- --fast\n$ source ~/.cargo/env\n")),Object(o.b)("h2",{id:"02-build"},"02 Build"),Object(o.b)("p",null,"Build the Wasm and native execution environments:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# Fetch source of the latest stable release\n$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable\n\n# Build the binary\n$ cd HydraDX-node/\n$ cargo build --release\n")),Object(o.b)("p",null,"You should be able to find the build under ",Object(o.b)("inlineCode",{parentName:"p"},"./target/release/hydra-dx"),"."),Object(o.b)("h2",{id:"03-run"},"03 Run"),Object(o.b)("p",null,"Before running your build you can purge any existing development chains on your machine (you will need to do this often in the development process):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ ./target/release/hydra-dx purge-chain --dev\n")),Object(o.b)("p",null,"Run your build using one of the following commands:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ ./target/release/hydra-dx --dev\n\n# Run with detailed logging\n$ RUST_LOG=debug RUST_BACKTRACE=1 ./target/release/hydra-dx -lruntime=debug --dev\n")),Object(o.b)("h2",{id:"04-connect-to-your-local-chain-instance"},"04 Connect to your local chain instance"),Object(o.b)("p",null,"You can connect to your HydraDX development node using Polkadot/apps and changing network to ",Object(o.b)("inlineCode",{parentName:"p"},"Development"),". You can also use this link:",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer"},"https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer")),Object(o.b)("img",{alt:"connect to node",src:Object(i.a)("/building/connect-to-node.jpg")}))}s.isMDXComponent=!0},92:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return h}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),d=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=d(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(t),b=r,h=s["".concat(i,".").concat(b)]||s[b]||p[b]||o;return t?a.a.createElement(h,c(c({ref:n},u),{},{components:t})):a.a.createElement(h,c({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},93:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return i}));var r=t(16),a=t(94);function o(){var e=Object(r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,o=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,l=o.absolute,u=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if(Object(a.b)(t))return t;if(c)return n+t;var d=t.startsWith(n)?t:n+t.replace(/^\//,"");return u?e+d:d}(o,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,o().withBaseUrl)(e,n)}},94:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}))}}]);