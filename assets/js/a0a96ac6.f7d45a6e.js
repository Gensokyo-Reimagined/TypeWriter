"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3210],{13382:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=r(74848),t=r(28453);const s={},d="Query Entries",a={id:"develop/adapters/querying",title:"Query Entries",description:"Sometimes you need to find an entry by any of it's fields or by type. This can be done with the Query class.",source:"@site/versioned_docs/version-0.4.1/develop/02-adapters/04-querying.mdx",sourceDirName:"develop/02-adapters",slug:"/develop/adapters/querying",permalink:"/TypeWriter/develop/adapters/querying",draft:!1,unlisted:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/main/documentation/versioned_docs/version-0.4.1/develop/02-adapters/04-querying.mdx",tags:[],version:"0.4.1",sidebarPosition:4,frontMatter:{},sidebar:"develop",previous:{title:"EventEntry",permalink:"/TypeWriter/develop/adapters/entries/trigger/event"},next:{title:"Triggering Entries",permalink:"/TypeWriter/develop/adapters/triggering"}},o={},l=[];function c(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"query-entries",children:"Query Entries"}),"\n",(0,i.jsxs)(n.p,{children:["Sometimes you need to find an entry by any of it's fields or by type. This can be done with the ",(0,i.jsx)(n.code,{children:"Query"})," class."]}),"\n",(0,i.jsx)(n.p,{children:"If you need to find all entries of a specific type:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val entries = Query.find<MyEntry>()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sometimes you need it by a specific criteria:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val entries = Query.findWhere<MyEntry> {\n    it.someField == "some value"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"You can also find a single entry:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val entry = Query.findFirstWhere<MyEntry> {\n    it.someField == "some value"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sometimes you need to find an entry by it's id:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val entry = Query.findById<MyEntry>(id)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Other times you need to find entries by their page:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val entries = Query.findWhereFromPage<MyEntry>(pageId) {\n    it.someField == "some value"\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);