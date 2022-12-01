"use strict";(self.webpackChunkaps_samples_docs=self.webpackChunkaps_samples_docs||[]).push([[116],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294),o=n(6010);const i="tabItem_Ymn6";function a(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,a),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),o=n(7294),i=n(6010),a=n(2389),s=n(7392),l=n(7094),c=n(2466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:a,defaultValue:p,values:m,groupId:h,className:w}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,s.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:y}=(0,l.U)(),[N,j]=(0,o.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=h){const e=k[h];null!=e&&e!==N&&b.some((t=>t.value===e))&&j(e)}const I=e=>{const t=e.currentTarget,n=T.indexOf(t),r=b[n].value;r!==N&&(C(t),j(r),null!=h&&y(h,String(r)))},x=e=>{var t;let n=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},w)},b.map((e=>{let{value:t,label:n,attributes:a}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:x,onClick:I},a,{className:(0,i.Z)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,o.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,a.Z)();return o.createElement(p,(0,r.Z)({key:String(t)},e))}},9381:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294),o=n(5488),i=n(5162);function a(e){let{NodeJsVsCode:t,DotNetVsCode:n,DotNetVs2022:a}=e;return r.createElement(o.Z,{groupId:"development-environment"},r.createElement(i.Z,{value:"nodejs-vscode",label:"Node.js & VSCode",default:!0},r.createElement(t,null)),r.createElement(i.Z,{value:"dotnet-vscode",label:".NET 6 & VSCode"},r.createElement(n,null)),r.createElement(i.Z,{value:"dotnet-vs2022",label:".NET 6 & VS2022"},r.createElement(a,null)))}},5304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>h,toc:()=>f});var r=n(7462),o=(n(7294),n(3905)),i=n(9381);const a={toc:[]};function s(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},a,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Final folder structure",src:n(8349).Z,width:"1200",height:"930"})))}s.isMDXComponent=!0;const l={toc:[]};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Final folder structure",src:n(84).Z,width:"1500",height:"1162"})))}c.isMDXComponent=!0;const u={toc:[]};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Final folder structure",src:n(250).Z,width:"1107",height:"700"})))}d.isMDXComponent=!0;const p={title:"Viewer & UI"},m="Viewer & UI",h={unversionedId:"tutorials/hubs-browser/viewer",id:"tutorials/hubs-browser/viewer",title:"Viewer & UI",description:"Finally, we're ready to build the client-side piece of our application.",source:"@site/docs/tutorials/02-hubs-browser/04-viewer.mdx",sourceDirName:"tutorials/02-hubs-browser",slug:"/tutorials/hubs-browser/viewer",permalink:"/tutorials/hubs-browser/viewer",draft:!1,editUrl:"https://github.com/autodesk-platform-services/aps-tutorials-website/edit/master/docs/tutorials/02-hubs-browser/04-viewer.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Viewer & UI"},sidebar:"tutorialSidebar",previous:{title:"Data Browsing",permalink:"/tutorials/hubs-browser/data"},next:{title:"Dashboard",permalink:"/tutorials/dashboard/"}},w={},f=[{value:"Viewer logic",id:"viewer-logic",level:2},{value:"Sidebar logic",id:"sidebar-logic",level:2},{value:"Application logic",id:"application-logic",level:2},{value:"User interface",id:"user-interface",level:2},{value:"Try it out",id:"try-it-out",level:2}],b={toc:f};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"viewer--ui"},"Viewer & UI"),(0,o.kt)("p",null,"Finally, we're ready to build the client-side piece of our application."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you're developing with Node.js, you can use TypeScript definitions for the Viewer.\nRun"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --dev @types/forge-viewer\n")),(0,o.kt)("p",{parentName:"admonition"},"in your terminal to add the TypeScript definition file to your project.")),(0,o.kt)("h2",{id:"viewer-logic"},"Viewer logic"),(0,o.kt)("p",null,"Let's start by implementing the Viewer functionality for our application.\nCreate a ",(0,o.kt)("inlineCode",{parentName:"p"},"viewer.js")," file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"wwwroot")," subfolder with the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/viewer.js"',title:'"wwwroot/viewer.js"'},"/// import * as Autodesk from \"@types/forge-viewer\";\n\nasync function getAccessToken(callback) {\n    try {\n        const resp = await fetch('/api/auth/token');\n        if (!resp.ok) {\n            throw new Error(await resp.text());\n        }\n        const { access_token, expires_in } = await resp.json();\n        callback(access_token, expires_in);\n    } catch (err) {\n        alert('Could not obtain access token. See the console for more details.');\n        console.error(err);        \n    }\n}\n\nexport function initViewer(container) {\n    return new Promise(function (resolve, reject) {\n        Autodesk.Viewing.Initializer({ getAccessToken }, async function () {\n            const viewer = new Autodesk.Viewing.GuiViewer3D(container);\n            viewer.start();\n            viewer.setTheme('light-theme');\n            resolve(viewer);\n        });\n    });\n}\n\nexport function loadModel(viewer, urn) {\n    function onDocumentLoadSuccess(doc) {\n        viewer.loadDocumentNode(doc, doc.getRoot().getDefaultGeometry());\n    }\n    function onDocumentLoadFailure(code, message) {\n        alert('Could not load model. See console for more details.');\n        console.error(message);\n    }\n    Autodesk.Viewing.Document.load('urn:' + urn, onDocumentLoadSuccess, onDocumentLoadFailure);\n}\n")),(0,o.kt)("p",null,"The script is an ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"},"ES6 module"),"\nthat exports two functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"initViewer")," will create a new instance of the viewer in the specified DOM container"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"loadModel")," for loading a specific model to the viewer")),(0,o.kt)("h2",{id:"sidebar-logic"},"Sidebar logic"),(0,o.kt)("p",null,"Next we'll implement the behavior of a sidebar where we're going to display\nall the hubs, projects, folders, items, and versions in a 3rd party tree-view component.\nCreate a ",(0,o.kt)("inlineCode",{parentName:"p"},"sidebar.js")," file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"wwwroot")," subfolder with the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/sidebar.js"',title:'"wwwroot/sidebar.js"'},"async function getJSON(url) {\n    const resp = await fetch(url);\n    if (!resp.ok) {\n        alert('Could not load tree data. See console for more details.');\n        console.error(await resp.text());\n        return [];\n    }\n    return resp.json();\n}\n\nfunction createTreeNode(id, text, icon, children = false) {\n    return { id, text, children, itree: { icon } };\n}\n\nasync function getHubs() {\n    const hubs = await getJSON('/api/hubs');\n    return hubs.map(hub => createTreeNode(`hub|${hub.id}`, hub.attributes.name, 'icon-hub', true));\n}\n\nasync function getProjects(hubId) {\n    const projects = await getJSON(`/api/hubs/${hubId}/projects`);\n    return projects.map(project => createTreeNode(`project|${hubId}|${project.id}`, project.attributes.name, 'icon-project', true));\n}\n\nasync function getContents(hubId, projectId, folderId = null) {\n    const contents = await getJSON(`/api/hubs/${hubId}/projects/${projectId}/contents` + (folderId ? `?folder_id=${folderId}` : ''));\n    return contents.map(item => {\n        if (item.type === 'folders') {\n            return createTreeNode(`folder|${hubId}|${projectId}|${item.id}`, item.attributes.displayName, 'icon-my-folder', true);\n        } else {\n            return createTreeNode(`item|${hubId}|${projectId}|${item.id}`, item.attributes.displayName, 'icon-item', true);\n        }\n    });\n}\n\nasync function getVersions(hubId, projectId, itemId) {\n    const versions = await getJSON(`/api/hubs/${hubId}/projects/${projectId}/contents/${itemId}/versions`);\n    return versions.map(version => createTreeNode(`version|${version.id}`, version.attributes.createTime, 'icon-version'));\n}\n\nexport function initTree(selector, onSelectionChanged) {\n    // See http://inspire-tree.com\n    const tree = new InspireTree({\n        data: function (node) {\n            if (!node || !node.id) {\n                return getHubs();\n            } else {\n                const tokens = node.id.split('|');\n                switch (tokens[0]) {\n                    case 'hub': return getProjects(tokens[1]);\n                    case 'project': return getContents(tokens[1], tokens[2]);\n                    case 'folder': return getContents(tokens[1], tokens[2], tokens[3]);\n                    case 'item': return getVersions(tokens[1], tokens[2], tokens[3]);\n                    default: return [];\n                }\n            }\n        }\n    });\n    tree.on('node.click', function (event, node) {\n        event.preventTreeDefault();\n        const tokens = node.id.split('|');\n        if (tokens[0] === 'version') {\n            onSelectionChanged(tokens[1]);\n        }\n    });\n    return new InspireTreeDOM(tree, { target: selector });\n}\n")),(0,o.kt)("h2",{id:"application-logic"},"Application logic"),(0,o.kt)("p",null,"Now let's wire all the UI components together. Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"main.js")," file under\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"wwwroot")," folder, and populate it with the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/main.js"',title:'"wwwroot/main.js"'},"import { initViewer, loadModel } from './viewer.js';\nimport { initTree } from './sidebar.js';\n\nconst login = document.getElementById('login');\ntry {\n    const resp = await fetch('/api/auth/profile');\n    if (resp.ok) {\n        const user = await resp.json();\n        login.innerText = `Logout (${user.name})`;\n        login.onclick = () => window.location.replace('/api/auth/logout');\n        const viewer = await initViewer(document.getElementById('preview'));\n        initTree('#tree', (id) => loadModel(viewer, window.btoa(id).replace(/=/g, '')));\n    } else {\n        login.innerText = 'Login';\n        login.onclick = () => window.location.replace('/api/auth/login');\n    }\n    login.style.visibility = 'visible';\n} catch (err) {\n    alert('Could not initialize the application. See console for more details.');\n    console.error(err);\n}\n")),(0,o.kt)("p",null,"The script will first try and obtain user details to check whether we're logged in or not.\nIf we are, the code can then initialize the viewer as well as the tree-view component.\nThe callback function passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"initTree")," makes sure that when we click on a leaf node\nin the tree, the viewer will start loading the corresponding model."),(0,o.kt)("h2",{id:"user-interface"},"User interface"),(0,o.kt)("p",null,"And finally, let's build the UI of our application."),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"main.css")," file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"wwwroot")," subfolder, and populate it with the following CSS rules:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="wwwroot/main.css"',title:'"wwwroot/main.css"'},"body, html {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    font-family: ArtifaktElement;\n}\n\n#header, #sidebar, #preview {\n    position: absolute;\n}\n\n#header {\n    height: 3em;\n    width: 100%;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#sidebar {\n    width: 25%;\n    left: 0;\n    top: 3em;\n    bottom: 0;\n    overflow-y: scroll;\n}\n\n#preview {\n    width: 75%;\n    right: 0;\n    top: 3em;\n    bottom: 0;\n}\n\n#header > * {\n    height: 2em;\n    margin: 0 0.5em;\n}\n\n#login {\n    font-family: ArtifaktElement;\n    font-size: 1em;\n}\n\n#header .title {\n    height: auto;\n    margin-right: auto;\n}\n\n#tree {\n    margin: 0.5em;\n}\n\n@media (max-width: 768px) {\n    #sidebar {\n        width: 100%;\n        top: 3em;\n        bottom: 75%;\n    }\n    #preview {\n        width: 100%;\n        top: 25%;\n        bottom: 0;\n    }\n}\n\n.icon-hub:before {\n    background-image: url(https://raw.githubusercontent.com/primer/octicons/main/icons/apps-16.svg); /* or https://raw.githubusercontent.com/primer/octicons/main/icons/stack-16.svg */\n    background-size: cover;\n}\n\n.icon-project:before {\n    \n    background-image: url(https://raw.githubusercontent.com/primer/octicons/main/icons/project-16.svg); /* or https://raw.githubusercontent.com/primer/octicons/main/icons/organization-16.svg */\n    background-size: cover;\n}\n\n.icon-my-folder:before {\n    background-image: url(https://raw.githubusercontent.com/primer/octicons/main/icons/file-directory-16.svg);\n    background-size: cover;\n}\n\n.icon-item:before {\n    background-image: url(https://raw.githubusercontent.com/primer/octicons/main/icons/file-16.svg);\n    background-size: cover;\n}\n\n.icon-version:before {\n    background-image: url(https://raw.githubusercontent.com/primer/octicons/main/icons/clock-16.svg);\n    background-size: cover;\n}\n")),(0,o.kt)("p",null,"Then, create an ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," file in the same folder with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="wwwroot/index.html"',title:'"wwwroot/index.html"'},'<!doctype html>\n<html lang="en">\n\n<head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <link rel="icon" type="image/x-icon" href="https://cdn.autodesk.io/favicon.ico">\n    <link rel="stylesheet" href="https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/style.css">\n    <link rel="stylesheet" href="https://unpkg.com/inspire-tree-dom@4.0.6/dist/inspire-tree-light.min.css">\n    <link rel="stylesheet" href="/main.css">\n    <title>Autodesk Platform Services: Hubs Browser</title>\n</head>\n\n<body>\n    <div id="header">\n        <img class="logo" src="https://cdn.autodesk.io/logo/black/stacked.png" alt="Autodesk Platform Services">\n        <span class="title">Hubs Browser</span>\n        <button id="login" style="visibility: hidden;">Login</button>\n    </div>\n    <div id="sidebar">\n        <div id="tree"></div>\n    </div>\n    <div id="preview"></div>\n    <script src="https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/viewer3D.js"><\/script>\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"><\/script>\n    <script src="https://unpkg.com/inspire-tree@4.3.1/dist/inspire-tree.js"><\/script>\n    <script src="https://unpkg.com/inspire-tree-dom@4.0.6/dist/inspire-tree-dom.min.js"><\/script>\n    <script src="/main.js" type="module"><\/script>\n</body>\n\n</html>\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that since ",(0,o.kt)("inlineCode",{parentName:"p"},"main.js")," is also an ES6 module, we have to use ",(0,o.kt)("inlineCode",{parentName:"p"},'type="module"')," in its ",(0,o.kt)("inlineCode",{parentName:"p"},"<script>")," tag.")),(0,o.kt)("p",null,"The final folder structure of your application's source code should now look something like this:"),(0,o.kt)(i.Z,{NodeJsVsCode:s,DotNetVsCode:c,DotNetVs2022:d,mdxType:"EnvTabs"}),(0,o.kt)("h2",{id:"try-it-out"},"Try it out"),(0,o.kt)("p",null,"And that's it! Your application is now ready for action. Start it as usual, and when you go to\n",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080"),", you should be presented with a simple UI, with\na tree-view on the left side, and an empty viewer on the right. Try browsing through the tree,\nand select a specific version of one of your files. After that the corresponding model should be loaded\ninto the viewer."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please note that designs uploaded to Fusion Teams are not processed for viewing automatically.\nYou'll want to open these designs on the Fusion Teams website first, and when they're ready,\nyou can view them in your own Hubs Browser application.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Final App",src:n(496).Z,width:"1500",height:"929"})))}g.isMDXComponent=!0},250:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/final-folder-structure-42412a02045ec19280e1de75f86f4b03.webp"},84:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/final-folder-structure-f01a9897cde7f892841624f424607baf.webp"},496:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/final-app-1e0d6c1844633d2df80afee4bda73db3.webp"},8349:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/final-folder-structure-a885ed5544bdd8e633673283d39668c0.webp"}}]);