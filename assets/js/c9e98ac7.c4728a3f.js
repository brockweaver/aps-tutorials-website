"use strict";(self.webpackChunkaps_samples_docs=self.webpackChunkaps_samples_docs||[]).push([[515],{5770:(e,t,a)=>{a.d(t,{Z:()=>n});var i=a(7294),o=a(2004);const r="wrapper_emgM",s="player_m1gG";function n(e){let{src:t}=e;return i.createElement("div",{className:r},i.createElement(o.Z,{className:s,url:t,playing:!0,loop:!0,width:"100%",height:"100%"}))}},4659:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>u});var i=a(7462),o=(a(7294),a(3905)),r=a(5770);const s=a.p+"assets/medias/dashboards-5acd36af18cb1de6a1f35ce57a89baa1.mp4",n={},l="Dashboard",d={unversionedId:"tutorials/dashboard/index",id:"tutorials/dashboard/index",title:"Dashboard",description:"Introduction",source:"@site/docs/tutorials/03-dashboard/index.mdx",sourceDirName:"tutorials/03-dashboard",slug:"/tutorials/dashboard/",permalink:"/tutorials/dashboard/",draft:!1,editUrl:"https://github.com/autodesk-platform-services/aps-tutorials-website/edit/master/docs/tutorials/03-dashboard/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Viewer & UI",permalink:"/tutorials/hubs-browser/viewer"},next:{title:"Basic Extension",permalink:"/tutorials/dashboard/basic"}},p={},u=[{value:"Introduction",id:"introduction",level:2}],m={toc:u};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dashboard"},"Dashboard"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In this tutorial we will enhance the ",(0,o.kt)("a",{parentName:"p",href:"../simple-viewer"},"Simple Viewer")," application\nwith dashboard-like functionality, for example, retrieving and aggregating information\nfrom our design metadata, displaying the results in charts and data grids, and controlling\nthe state of the viewer based on the interaction with these new visuals."),(0,o.kt)("p",null,"All the functionality in this tutorial is implemented as viewer extensions, and will only use\nthe viewer UI, so you're free to use any APS application you want as your starting point.\nNote however that the names of folders, and the way you import JavaScript files into your\nweb application, might be a little bit different."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Some parts of this tutorial's code assume that your design elements contain specific properties\nsuch as ",(0,o.kt)("em",{parentName:"p"},"Volume"),", ",(0,o.kt)("em",{parentName:"p"},"Level"),", or ",(0,o.kt)("em",{parentName:"p"},"Price"),". If you have a specific design you want to work with, you can\nof course modify the code to use other properties, otherwise we recommend using one of the official\n",(0,o.kt)("a",{parentName:"p",href:"https://knowledge.autodesk.com/support/revit/getting-started/caas/CloudHelp/cloudhelp/2022/ENU/Revit-GetStarted/files/GUID-61EF2F22-3A1F-4317-B925-1E85F138BE88-htm.html"},"Revit 2022 sample project files"),"\nwhere these properties are always present.")),(0,o.kt)(r.Z,{src:s,mdxType:"ResponsiveVideo"}),(0,o.kt)("p",null,"We will be using the ",(0,o.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/en/docs/viewer/v7/developers_guide/overview"},"Viewer"),"\nAPI and its various features such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Creating and loading viewer extensions"),(0,o.kt)("li",{parentName:"ul"},"Querying metadata of loaded models"),(0,o.kt)("li",{parentName:"ul"},"Reacting to viewer events"),(0,o.kt)("li",{parentName:"ul"},"Controlling the state of the viewer"),(0,o.kt)("li",{parentName:"ul"},"Customizing the viewer toolbar"),(0,o.kt)("li",{parentName:"ul"},"Creating custom UI elements")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Complete implementation of this tutorial is available in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/autodesk-forge/forge-simple-viewer-nodejs/tree/dashboards"},"dashboard"),"\nbranch of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/autodesk-forge/forge-simple-viewer-nodejs"},"https://github.com/autodesk-forge/forge-simple-viewer-nodejs"),".")),(0,o.kt)("p",null,"Alright, let's get started!"))}h.isMDXComponent=!0}}]);