"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[570],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return c}});var i=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=i.createContext({}),d=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},u=function(t){var e=d(t.components);return i.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},h=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),h=d(n),c=o,g=h["".concat(l,".").concat(c)]||h[c]||p[c]||a;return n?i.createElement(g,r(r({ref:e},u),{},{components:n})):i.createElement(g,r({ref:e},u))}));function c(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,r[1]=s;for(var d=2;d<a;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5331:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var i=n(7462),o=n(3366),a=(n(7294),n(3905)),r=["components"],s={},l="Data Grid",d={unversionedId:"tutorials/dashboard/grid",id:"tutorials/dashboard/grid",title:"Data Grid",description:"In this final step we will build a viewer extension that will provide a datagrid view",source:"@site/docs/tutorials/03-dashboard/04-grid.mdx",sourceDirName:"tutorials/03-dashboard",slug:"/tutorials/dashboard/grid",permalink:"/tutorials/dashboard/grid",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/master/docs/tutorials/03-dashboard/04-grid.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Histogram Charts",permalink:"/tutorials/dashboard/charts"},next:{title:"Learn More",permalink:"/learn-more"}},u={},p=[{value:"Extension skeleton",id:"extension-skeleton",level:2},{value:"Toolbar",id:"toolbar",level:2},{value:"Data grid",id:"data-grid-1",level:2},{value:"Try it out",id:"try-it-out",level:2}],h={toc:p};function c(t){var e=t.components,s=(0,o.Z)(t,r);return(0,a.kt)("wrapper",(0,i.Z)({},h,s,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"data-grid"},"Data Grid"),(0,a.kt)("p",null,"In this final step we will build a viewer extension that will provide a datagrid view\nof our design element properties using the open source ",(0,a.kt)("a",{parentName:"p",href:"http://tabulator.info"},"Tabulator")," library."),(0,a.kt)("h2",{id:"extension-skeleton"},"Extension skeleton"),(0,a.kt)("p",null,"As usual, let's create a new file under the ",(0,a.kt)("inlineCode",{parentName:"p"},"extensions")," subfolder, call it ",(0,a.kt)("inlineCode",{parentName:"p"},"DataGridExtension.js"),",\nand populate it with the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/extensions/DataGridExtension.js"',title:'"wwwroot/extensions/DataGridExtension.js"'},"import { BaseExtension } from './BaseExtension.js';\n\nclass DataGridExtension extends BaseExtension {\n    constructor(viewer, options) {\n        super(viewer, options);\n    }\n\n    async load() {\n        super.load();\n        await Promise.all([\n            this.loadScript('https://unpkg.com/tabulator-tables@4.9.3/dist/js/tabulator.min.js', 'Tabulator'),\n            this.loadStylesheet('https://unpkg.com/tabulator-tables@4.9.3/dist/css/tabulator.min.css')\n        ]);\n        console.log('DataGridExtension loaded.');\n        return true;\n    }\n\n    unload() {\n        super.unload();\n        console.log('DataGridExtension unloaded.');\n        return true;\n    }\n}\n\nAutodesk.Viewing.theExtensionManager.registerExtension('DataGridExtension', DataGridExtension);\n")),(0,a.kt)("p",null,"This time we're also loading multiple dependencies that are required by the Tabulator library."),(0,a.kt)("p",null,"Now let's import the JavaScript file to our application, and pass the extension ID to the viewer\nconstructor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import './extensions/LoggerExtension.js';\nimport './extensions/SummaryExtension.js';\nimport './extensions/HistogramExtension.js';\n// highlight-start\nimport './extensions/DataGridExtension.js';\n// highlight-end\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const config = {\n    extensions: [\n        'LoggerExtension',\n        'SummaryExtension',\n        'HistogramExtension',\n        // highlight-start\n        'DataGridExtension',\n        // highlight-end\n    ]\n};\nconst viewer = new Autodesk.Viewing.GuiViewer3D(container, config);\n")),(0,a.kt)("h2",{id:"toolbar"},"Toolbar"),(0,a.kt)("p",null,"Next, let's update the ",(0,a.kt)("inlineCode",{parentName:"p"},"DataGridExtension")," class so that it adds a new button to the viewer\ntoolbar when the extension gets loaded:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/extensions/DataGridExtension.js"',title:'"wwwroot/extensions/DataGridExtension.js"'},"import { BaseExtension } from './BaseExtension.js';\n\nclass DataGridExtension extends BaseExtension {\n    constructor(viewer, options) {\n        super(viewer, options);\n        // highlight-start\n        this._button = null;\n        // highlight-end\n    }\n\n    async load() {\n        super.load();\n        await Promise.all([\n            this.loadScript('https://unpkg.com/tabulator-tables@4.9.3/dist/js/tabulator.min.js', 'Tabulator'),\n            this.loadStylesheet('https://unpkg.com/tabulator-tables@4.9.3/dist/css/tabulator.min.css')\n        ]);\n        console.log('DataGridExtension loaded.');\n        return true;\n    }\n\n    unload() {\n        super.unload();\n        // highlight-start\n        if (this._button) {\n            this.removeToolbarButton(this._button);\n            this._button = null;\n        }\n        // highlight-end\n        console.log('DataGridExtension unloaded.');\n        return true;\n    }\n\n    // highlight-start\n    onToolbarCreated() {\n        this._button = this.createToolbarButton('dashboard-datagrid-button', 'https://img.icons8.com/small/32/activity-grid.png', 'Show Data Grid');\n        this._button.onClick = () => {\n            // TODO\n        };\n    }\n    // highlight-end\n}\n\nAutodesk.Viewing.theExtensionManager.registerExtension('DataGridExtension', DataGridExtension);\n")),(0,a.kt)("h2",{id:"data-grid-1"},"Data grid"),(0,a.kt)("p",null,"Now let's create a custom docking panel that will host the actual Tabulator grid. Create\na ",(0,a.kt)("inlineCode",{parentName:"p"},"DataGridPanel.js")," file in the same folder where ",(0,a.kt)("inlineCode",{parentName:"p"},"DataGridExtension.js")," is located, and\nadd the following code to it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/extensions/DataGridPanel.js"',title:'"wwwroot/extensions/DataGridPanel.js"'},"const DATAGRID_CONFIG = {\n    requiredProps: ['name', 'Volume', 'Level'], // Which properties should be requested for each object\n    columns: [ // Definition of individual grid columns (see http://tabulator.info for more details)\n        { title: 'ID', field: 'dbid' },\n        { title: 'Name', field: 'name', width: 150 },\n        { title: 'Volume', field: 'volume', hozAlign: 'left', formatter: 'progress' },\n        { title: 'Level', field: 'level' }\n    ],\n    groupBy: 'level', // Optional column to group by\n    createRow: (dbid, name, props) => { // Function generating grid rows based on recieved object properties\n        const volume = props.find(p => p.displayName === 'Volume')?.displayValue;\n        const level = props.find(p => p.displayName === 'Level' && p.displayCategory === 'Constraints')?.displayValue;\n        return { dbid, name, volume, level };\n    },\n    onRowClick: (row, viewer) => {\n        viewer.isolate([row.dbid]);\n        viewer.fitToView([row.dbid]);\n    }\n};\n\nexport class DataGridPanel extends Autodesk.Viewing.UI.DockingPanel {\n    constructor(extension, id, title, options) {\n        super(extension.viewer.container, id, title, options);\n        this.extension = extension;\n        this.container.style.left = (options.x || 0) + 'px';\n        this.container.style.top = (options.y || 0) + 'px';\n        this.container.style.width = (options.width || 500) + 'px';\n        this.container.style.height = (options.height || 400) + 'px';\n        this.container.style.resize = 'none';\n    }\n\n    initialize() {\n        this.title = this.createTitleBar(this.titleLabel || this.container.id);\n        this.initializeMoveHandlers(this.title);\n        this.container.appendChild(this.title);\n        this.content = document.createElement('div');\n        this.content.style.height = '350px';\n        this.content.style.backgroundColor = 'white';\n        this.content.innerHTML = `<div class=\"datagrid-container\" style=\"position: relative; height: 350px;\"></div>`;\n        this.container.appendChild(this.content);\n        // See http://tabulator.info\n        this.table = new Tabulator('.datagrid-container', {\n            height: '100%',\n            layout: 'fitColumns',\n            columns: DATAGRID_CONFIG.columns,\n            groupBy: DATAGRID_CONFIG.groupBy,\n            rowClick: (e, row) => DATAGRID_CONFIG.onRowClick(row.getData(), this.extension.viewer)\n        });\n    }\n\n    update(model, dbids) {\n        model.getBulkProperties(dbids, { propFilter: DATAGRID_CONFIG.requiredProps }, (results) => {\n            this.table.replaceData(results.map((result) => DATAGRID_CONFIG.createRow(result.dbId, result.name, result.properties)));\n        }, (err) => {\n            console.error(err);\n        });\n    }\n}\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"To keep things simple, the ",(0,a.kt)("inlineCode",{parentName:"p"},"DataGridPanel")," class is currently hard-coding the grid columns\nto only show a couple of specific properties of our design metadata (specifically the object ID,\nobject name, and ",(0,a.kt)("inlineCode",{parentName:"p"},"Volume")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Level")," properties). Depending on the type of design you will be\nloading into your application, you may want to change these."))),(0,a.kt)("p",null,"Finally, add the new panel to our extension:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/extensions/DataGridExtension.js"',title:'"wwwroot/extensions/DataGridExtension.js"'},"import { BaseExtension } from './BaseExtension.js';\n// highlight-start\nimport { DataGridPanel } from './DataGridPanel.js';\n// highlight-end\n\nclass DataGridExtension extends BaseExtension {\n    constructor(viewer, options) {\n        super(viewer, options);\n        this._button = null;\n        // highlight-start\n        this._panel = null;\n        // highlight-end\n    }\n\n    async load() {\n        super.load();\n        await Promise.all([\n            this.loadScript('https://unpkg.com/tabulator-tables@4.9.3/dist/js/tabulator.min.js', 'Tabulator'),\n            this.loadStylesheet('https://unpkg.com/tabulator-tables@4.9.3/dist/css/tabulator.min.css')\n        ]);\n        console.log('DataGridExtension loaded.');\n        return true;\n    }\n\n    unload() {\n        super.unload();\n        if (this._button) {\n            this.removeToolbarButton(this._button);\n            this._button = null;\n        }\n        // highlight-start\n        if (this._panel) {\n            this._panel.setVisible(false);\n            this._panel.uninitialize();\n            this._panel = null;\n        }\n        // highlight-end\n        console.log('DataGridExtension unloaded.');\n        return true;\n    }\n\n    onToolbarCreated() {\n        // highlight-start\n        this._panel = new DataGridPanel(this, 'dashboard-datagrid-panel', 'Data Grid', { x: 10, y: 10 });\n        // highlight-end\n        this._button = this.createToolbarButton('dashboard-datagrid-button', 'https://img.icons8.com/small/32/activity-grid.png', 'Show Data Grid');\n        this._button.onClick = () => {\n            // highlight-start\n            this._panel.setVisible(!this._panel.isVisible());\n            this._button.setState(this._panel.isVisible() ? Autodesk.Viewing.UI.Button.State.ACTIVE : Autodesk.Viewing.UI.Button.State.INACTIVE);\n            if (this._panel.isVisible() && this.viewer.model) {\n                this.update();\n            }\n            // highlight-end\n        };\n    }\n\n    // highlight-start\n    onModelLoaded(model) {\n        super.onModelLoaded(model);\n        if (this._panel && this._panel.isVisible()) {\n            this.update();\n        }\n    }\n    // highlight-end\n\n    // highlight-start\n    async update() {\n        const dbids = await this.findLeafNodes(this.viewer.model);\n        this._panel.update(this.viewer.model, dbids);\n    }\n    // highlight-end\n}\n\nAutodesk.Viewing.theExtensionManager.registerExtension('DataGridExtension', DataGridExtension);\n")),(0,a.kt)("h2",{id:"try-it-out"},"Try it out"),(0,a.kt)("p",null,"Click on the new toolbar button to bring up the datagrid panel. The grid should list selected\nproperties of all design elements, and clicking on any row in the grid should isolate the specific\ndesign element in the viewer."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Grid Result",src:n(1636).Z,width:"1500",height:"1063"})))}c.isMDXComponent=!0},1636:function(t,e,n){e.Z=n.p+"assets/images/grid-result-d42e49828b267f179c299a45654a334b.webp"}}]);