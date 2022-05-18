"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[116],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294);function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7462),o=n(7294),i=n(2389),a=n(7556),l=n(6010),s="tabItem_LplD";function c(e){var t,n,i,c=e.lazy,u=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,a.lx)(w,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=h[0])?void 0:i.props.value;if(null!==v&&!w.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,a.UB)(),k=b.tabGroupChoices,y=b.setTabGroupChoices,N=(0,o.useState)(v),j=N[0],T=N[1],C=[],x=(0,a.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var I=k[m];null!=I&&I!==j&&w.some((function(e){return e.value===I}))&&T(I)}var E=function(e){var t=e.currentTarget,n=C.indexOf(t),r=w[n].value;r!==j&&(x(t),T(r),null!=m&&y(m,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.currentTarget)+1;n=C[r]||C[0];break;case"ArrowLeft":var o=C.indexOf(e.currentTarget)-1;n=C[o]||C[C.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},f)},w.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return C.push(e)},onKeyDown:D,onFocus:E,onClick:E},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),c?(0,o.cloneElement)(h.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function u(e){var t=(0,i.Z)();return o.createElement(c,(0,r.Z)({key:String(t)},e))}},9381:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294),o=n(9877),i=n(8215);function a(e){var t=e.NodeJsVsCode,n=e.DotNetVsCode,a=e.DotNetVs2022;return r.createElement(o.Z,{groupId:"development-environment"},r.createElement(i.Z,{value:"nodejs-vscode",label:"Node.js & VSCode",default:!0},r.createElement(t,null)),r.createElement(i.Z,{value:"dotnet-vscode",label:".NET 6 & VSCode"},r.createElement(n,null)),r.createElement(i.Z,{value:"dotnet-vs2022",label:".NET 6 & VS2022"},r.createElement(a,null)))}},5304:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return v},default:function(){return j},frontMatter:function(){return g},metadata:function(){return b},toc:function(){return y}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=n(9381),l=["components"],s={toc:[]};function c(e){var t=e.components,a=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Final folder structure",src:n(6955).Z,width:"1200",height:"930"})))}c.isMDXComponent=!0;var u=["components"],d={toc:[]};function p(e){var t=e.components,a=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Final folder structure",src:n(4466).Z,width:"1500",height:"1162"})))}p.isMDXComponent=!0;var m=["components"],f={toc:[]};function h(e){var t=e.components,a=(0,o.Z)(e,m);return(0,i.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Final folder structure",src:n(355).Z,width:"1107",height:"700"})))}h.isMDXComponent=!0;var w=["components"],g={},v="Viewer & UI",b={unversionedId:"tutorials/hubs-browser/viewer",id:"tutorials/hubs-browser/viewer",title:"Viewer & UI",description:"Finally, we're ready to build the client-side piece of our application.",source:"@site/docs/tutorials/02-hubs-browser/04-viewer.mdx",sourceDirName:"tutorials/02-hubs-browser",slug:"/tutorials/hubs-browser/viewer",permalink:"/tutorials/hubs-browser/viewer",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/master/docs/tutorials/02-hubs-browser/04-viewer.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data Browsing",permalink:"/tutorials/hubs-browser/data"},next:{title:"Dashboard",permalink:"/tutorials/dashboard/"}},k={},y=[{value:"Viewer logic",id:"viewer-logic",level:2},{value:"Sidebar logic",id:"sidebar-logic",level:2},{value:"Application logic",id:"application-logic",level:2},{value:"User interface",id:"user-interface",level:2},{value:"Try it out",id:"try-it-out",level:2}],N={toc:y};function j(e){var t=e.components,l=(0,o.Z)(e,w);return(0,i.kt)("wrapper",(0,r.Z)({},N,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"viewer--ui"},"Viewer & UI"),(0,i.kt)("p",null,"Finally, we're ready to build the client-side piece of our application."),(0,i.kt)("h2",{id:"viewer-logic"},"Viewer logic"),(0,i.kt)("p",null,"Let's start by implementing the Forge Viewer functionality of our application.\nCreate a ",(0,i.kt)("inlineCode",{parentName:"p"},"viewer.js")," file under the ",(0,i.kt)("inlineCode",{parentName:"p"},"wwwroot")," subfolder with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/viewer.js"',title:'"wwwroot/viewer.js"'},"/// import * as Autodesk from \"@types/forge-viewer\";\n\nasync function getAccessToken(callback) {\n    try {\n        const resp = await fetch('/api/auth/token');\n        if (!resp.ok)\n            throw new Error(await resp.text());\n        const { access_token, expires_in } = await resp.json();\n        callback(access_token, expires_in);\n    } catch (err) {\n        alert('Could not obtain access token. See the console for more details.');\n        console.error(err);        \n    }\n}\n\nexport function initViewer(container) {\n    return new Promise(function (resolve, reject) {\n        Autodesk.Viewing.Initializer({ getAccessToken }, async function () {\n            const viewer = new Autodesk.Viewing.GuiViewer3D(container);\n            viewer.start();\n            viewer.setTheme('light-theme');\n            resolve(viewer);\n        });\n    });\n}\n\nexport function loadModel(viewer, urn) {\n    function onDocumentLoadSuccess(doc) {\n        viewer.loadDocumentNode(doc, doc.getRoot().getDefaultGeometry());\n    }\n    function onDocumentLoadFailure(code, message) {\n        alert('Could not load model. See console for more details.');\n        console.error(message);\n    }\n    Autodesk.Viewing.Document.load('urn:' + urn, onDocumentLoadSuccess, onDocumentLoadFailure);\n}\n")),(0,i.kt)("p",null,"The script is an ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"},"ES6 module"),"\nthat exports two functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initViewer")," will create a new instance of Forge Viewer in the specified DOM container"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"loadModel")," for loading a specific model to the viewer")),(0,i.kt)("h2",{id:"sidebar-logic"},"Sidebar logic"),(0,i.kt)("p",null,"Next we'll implement the behavior of a sidebar where we're going to display\nall the hubs, projects, folders, items, and versions in a 3rd party tree-view component.\nCreate a ",(0,i.kt)("inlineCode",{parentName:"p"},"sidebar.js")," file under the ",(0,i.kt)("inlineCode",{parentName:"p"},"wwwroot")," subfolder with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/sidebar.js"',title:'"wwwroot/sidebar.js"'},"async function getJSON(url) {\n    const resp = await fetch(url);\n    if (!resp.ok) {\n        alert('Could not load tree data. See console for more details.');\n        console.error(await resp.text());\n        return [];\n    }\n    return resp.json();\n}\n\nfunction createTreeNode(id, text, icon, children = false) {\n    return { id, text, children, itree: { icon } };\n}\n\nasync function getHubs() {\n    const hubs = await getJSON('/api/hubs');\n    return hubs.map(hub => createTreeNode(`hub|${hub.id}`, hub.attributes.name, 'icon-hub', true));\n}\n\nasync function getProjects(hubId) {\n    const projects = await getJSON(`/api/hubs/${hubId}/projects`);\n    return projects.map(project => createTreeNode(`project|${hubId}|${project.id}`, project.attributes.name, 'icon-project', true));\n}\n\nasync function getContents(hubId, projectId, folderId = null) {\n    const contents = await getJSON(`/api/hubs/${hubId}/projects/${projectId}/contents` + (folderId ? `?folder_id=${folderId}` : ''));\n    return contents.map(item => {\n        if (item.type === 'folders') {\n            return createTreeNode(`folder|${hubId}|${projectId}|${item.id}`, item.attributes.displayName, 'icon-my-folder', true);\n        } else {\n            return createTreeNode(`item|${hubId}|${projectId}|${item.id}`, item.attributes.displayName, 'icon-item', true);\n        }\n    });\n}\n\nasync function getVersions(hubId, projectId, itemId) {\n    const versions = await getJSON(`/api/hubs/${hubId}/projects/${projectId}/contents/${itemId}/versions`);\n    return versions.map(version => createTreeNode(`version|${version.id}`, version.attributes.createTime, 'icon-version'));\n}\n\nexport function initTree(selector, onSelectionChanged) {\n    // See http://inspire-tree.com\n    const tree = new InspireTree({\n        data: function (node) {\n            if (!node || !node.id) {\n                return getHubs();\n            } else {\n                const tokens = node.id.split('|');\n                switch (tokens[0]) {\n                    case 'hub': return getProjects(tokens[1]);\n                    case 'project': return getContents(tokens[1], tokens[2]);\n                    case 'folder': return getContents(tokens[1], tokens[2], tokens[3]);\n                    case 'item': return getVersions(tokens[1], tokens[2], tokens[3]);\n                    default: return [];\n                }\n            }\n        }\n    });\n    tree.on('node.click', function (event, node) {\n        event.preventTreeDefault();\n        const tokens = node.id.split('|');\n        if (tokens[0] === 'version') {\n            onSelectionChanged(tokens[1]);\n        }\n    });\n    return new InspireTreeDOM(tree, { target: selector });\n}\n")),(0,i.kt)("h2",{id:"application-logic"},"Application logic"),(0,i.kt)("p",null,"Now let's wire all the UI components together. Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"main.js")," file under\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"wwwroot")," folder, and populate it with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/main.js"',title:'"wwwroot/main.js"'},"import { initViewer, loadModel } from './viewer.js';\nimport { initTree } from './sidebar.js';\n\nconst login = document.getElementById('login');\ntry {\n    const resp = await fetch('/api/auth/profile');\n    if (resp.ok) {\n        const user = await resp.json();\n        login.innerText = `Logout (${user.name})`;\n        login.onclick = () => window.location.replace('/api/auth/logout');\n        const viewer = await initViewer(document.getElementById('preview'));\n        initTree('#tree', (id) => loadModel(viewer, window.btoa(id).replace(/=/g, '')));\n    } else {\n        login.innerText = 'Login';\n        login.onclick = () => window.location.replace('/api/auth/login');\n    }\n    login.style.visibility = 'visible';\n} catch (err) {\n    alert('Could not initialize the application. See console for more details.');\n    console.error(err);\n}\n")),(0,i.kt)("p",null,"The script will first try and obtain user details to check whether we're logged in or not.\nIf we are, the code can then initialize the viewer as well as the tree-view component.\nThe callback function passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"initTree")," makes sure that when we click on a leaf node\nin the tree, the viewer will start loading the corresponding Forge model."),(0,i.kt)("h2",{id:"user-interface"},"User interface"),(0,i.kt)("p",null,"And finally, let's build the UI of our application."),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"main.css")," file under the ",(0,i.kt)("inlineCode",{parentName:"p"},"wwwroot")," subfolder, and populate it with the following CSS rules:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="wwwroot/main.css"',title:'"wwwroot/main.css"'},"body, html {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    font-family: ArtifaktElement;\n}\n\n#header, #sidebar, #preview {\n    position: absolute;\n}\n\n#header {\n    height: 3em;\n    width: 100%;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#sidebar {\n    width: 25%;\n    left: 0;\n    top: 3em;\n    bottom: 0;\n    overflow-y: scroll;\n}\n\n#preview {\n    width: 75%;\n    right: 0;\n    top: 3em;\n    bottom: 0;\n}\n\n#header > * {\n    height: 2em;\n    margin: 0 0.5em;\n}\n\n#login {\n    font-family: ArtifaktElement;\n    font-size: 1em;\n}\n\n#header .title {\n    height: auto;\n    margin-right: auto;\n}\n\n#tree {\n    margin: 0.5em;\n}\n\n@media (max-width: 768px) {\n    #sidebar {\n        width: 100%;\n        top: 3em;\n        bottom: 75%;\n    }\n    #preview {\n        width: 100%;\n        top: 25%;\n        bottom: 0;\n    }\n}\n\n.icon-hub:before {\n    background-image: url(https://raw.githubusercontent.com/primer/octicons/main/icons/apps-16.svg); /* or https://raw.githubusercontent.com/primer/octicons/main/icons/stack-16.svg */\n    background-size: cover;\n}\n\n.icon-project:before {\n    \n    background-image: url(https://raw.githubusercontent.com/primer/octicons/main/icons/project-16.svg); /* or https://raw.githubusercontent.com/primer/octicons/main/icons/organization-16.svg */\n    background-size: cover;\n}\n\n.icon-my-folder:before {\n    background-image: url(https://raw.githubusercontent.com/primer/octicons/main/icons/file-directory-16.svg);\n    background-size: cover;\n}\n\n.icon-item:before {\n    background-image: url(https://raw.githubusercontent.com/primer/octicons/main/icons/file-16.svg);\n    background-size: cover;\n}\n\n.icon-version:before {\n    background-image: url(https://raw.githubusercontent.com/primer/octicons/main/icons/clock-16.svg);\n    background-size: cover;\n}\n")),(0,i.kt)("p",null,"Then, create an ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," file in the same folder with the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="wwwroot/index.html"',title:'"wwwroot/index.html"'},'<!doctype html>\n<html lang="en">\n\n<head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <link rel="stylesheet" href="https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/style.css">\n    <link rel="stylesheet" href="https://unpkg.com/inspire-tree-dom@4.0.6/dist/inspire-tree-light.min.css">\n    <link rel="stylesheet" href="/main.css">\n    <title>Autodesk Forge: Hubs Browser</title>\n</head>\n\n<body>\n    <div id="header">\n        <img class="logo" src="/logo.png" alt="Autodesk Forge">\n        <span class="title">Hubs Browser</span>\n        <button id="login" style="visibility: hidden;">Login</button>\n    </div>\n    <div id="sidebar">\n        <div id="tree"></div>\n    </div>\n    <div id="preview"></div>\n    <script src="https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/viewer3D.js"><\/script>\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"><\/script>\n    <script src="https://unpkg.com/inspire-tree@4.3.1/dist/inspire-tree.js"><\/script>\n    <script src="https://unpkg.com/inspire-tree-dom@4.0.6/dist/inspire-tree-dom.min.js"><\/script>\n    <script src="/main.js" type="module"><\/script>\n</body>\n\n</html>\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note that since ",(0,i.kt)("inlineCode",{parentName:"p"},"main.js")," is also an ES6 module, we have to use ",(0,i.kt)("inlineCode",{parentName:"p"},'type="module"')," in its ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," tag.")),(0,i.kt)("p",null,"The application will look for ",(0,i.kt)("inlineCode",{parentName:"p"},"favicon.ico")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"logo.png")," images under the ",(0,i.kt)("inlineCode",{parentName:"p"},"wwwroot")," folder\nto use as the website's icon and logo. If you don't have any images of your own, feel free\nto download them from one of our samples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/petrbroz/forge-simple-viewer-nodejs/develop/wwwroot/favicon.ico"},"https://raw.githubusercontent.com/petrbroz/forge-simple-viewer-nodejs/develop/wwwroot/favicon.ico")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/petrbroz/forge-simple-viewer-nodejs/develop/wwwroot/logo.png"},"https://raw.githubusercontent.com/petrbroz/forge-simple-viewer-nodejs/develop/wwwroot/logo.png"))),(0,i.kt)("p",null,"The final folder structure of your application's source code should now look something like this:"),(0,i.kt)(a.Z,{NodeJsVsCode:c,DotNetVsCode:p,DotNetVs2022:h,mdxType:"EnvTabs"}),(0,i.kt)("h2",{id:"try-it-out"},"Try it out"),(0,i.kt)("p",null,"And that's it! Your application is now ready for action. Start it as usual, and when you go to\n",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080"),", you should be presented with a simple UI, with\na tree-view on the left side, and an empty viewer on the right. Try browsing through the tree,\nand select a specific version of one of your files. After that the corresponding model should be loaded\ninto the viewer."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Final App",src:n(3248).Z,width:"1500",height:"929"})))}j.isMDXComponent=!0},355:function(e,t,n){t.Z=n.p+"assets/images/final-folder-structure-42412a02045ec19280e1de75f86f4b03.webp"},4466:function(e,t,n){t.Z=n.p+"assets/images/final-folder-structure-f01a9897cde7f892841624f424607baf.webp"},3248:function(e,t,n){t.Z=n.p+"assets/images/final-app-1e0d6c1844633d2df80afee4bda73db3.webp"},6955:function(e,t,n){t.Z=n.p+"assets/images/final-folder-structure-a885ed5544bdd8e633673283d39668c0.webp"}}]);