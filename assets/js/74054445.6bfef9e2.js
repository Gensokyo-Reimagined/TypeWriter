"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1414],{22840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(74848),s=n(28453),a=n(58362);const r={},o="First Interaction",l={id:"docs/first-story/interactions",title:"First Interaction",description:"This section currently is outdated and maybe contains images/videos that are not in the latest release",source:"@site/docs/docs/03-first-story/01-interactions.mdx",sourceDirName:"docs/03-first-story",slug:"/docs/first-story/interactions",permalink:"/TypeWriter/beta/docs/first-story/interactions",draft:!1,unlisted:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/main/documentation/docs/docs/03-first-story/01-interactions.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation Guide",permalink:"/TypeWriter/beta/docs/getting-started/installation"},next:{title:"First Cinematic",permalink:"/TypeWriter/beta/docs/first-story/cinematics"}},c={},d=[{value:"Opening the Web Panel",id:"opening-the-web-panel",level:2},{value:"Creating a page",id:"creating-a-page",level:2},{value:"Panel layout",id:"panel-layout",level:2},{value:"Creating first entry",id:"creating-first-entry",level:2},{value:"Creating an option",id:"creating-an-option",level:2},{value:"Adding a speaker",id:"adding-a-speaker",level:3},{value:"Connecting the entries",id:"connecting-the-entries",level:2},{value:"Testing the interaction",id:"testing-the-interaction",level:2},{value:"Smelling flower",id:"smelling-flower",level:2},{value:"Adding dialogue",id:"adding-dialogue",level:3},{value:"Adding a conditional dialogue",id:"adding-a-conditional-dialogue",level:3},{value:"What are facts?",id:"what-are-facts",level:4},{value:"Creating a fact",id:"creating-a-fact",level:4},{value:"Adding criteria to the dialogue",id:"adding-criteria-to-the-dialogue",level:4},{value:"Adding additional dialogue",id:"adding-additional-dialogue",level:2},{value:"Next steps",id:"next-steps",level:2}];function h(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"first-interaction",children:"First Interaction"}),"\n",(0,i.jsx)(t.admonition,{title:"Outdated",type:"danger",children:(0,i.jsx)(t.p,{children:"This section currently is outdated and maybe contains images/videos that are not in the latest release"})}),"\n",(0,i.jsx)(t.admonition,{title:"Basic Adapter required",type:"info",children:(0,i.jsxs)(t.p,{children:["This guide uses the ",(0,i.jsx)(t.a,{href:"/TypeWriter/beta/adapters/BasicAdapter/",children:"Basic Adapter"}),", hence it must be installed before following this guide."]})}),"\n",(0,i.jsx)(t.p,{children:"Let's create our first interaction. Our example interaction will look like this:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"The player clicks on a flower."}),"\n",(0,i.jsxs)(t.li,{children:["A chat dialogue is opened, and the player is given two options.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Smelling the flower"}),"\n",(0,i.jsx)(t.li,{children:"Touching the flower"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Both options lead to some dialogue. But some behavior changes depending on the option.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Smelling the flower will have different dialogue the second time."}),"\n",(0,i.jsx)(t.li,{children:"Touching the flower will give the player a flower one time."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["If at any point you get stuck, feel free to ask for help on our ",(0,i.jsx)(t.a,{href:"https://discord.gg/HtbKyuDDBw",children:"Discord"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"opening-the-web-panel",children:"Opening the Web Panel"}),"\n",(0,i.jsxs)(t.p,{children:["Before we begin creating our interaction, we need to open the web panel.\nTo do this, run ",(0,i.jsx)(t.code,{children:"/typewriter connect"})," in game. Then clicking the link that is given to you."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"connect-command",src:n(11510).A+"",width:"352",height:"42"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"connect-book",src:n(55143).A+"",width:"445",height:"545"})}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:['If you\'re getting a message along the lines of "The server is not hosting the websocket. Try enabling it in the config", please refer to ',(0,i.jsx)(t.a,{href:"/TypeWriter/beta/docs/getting-started/installation#configuring-the-web-panel",children:"Configuring the Web Panel"})]})}),"\n",(0,i.jsx)(t.p,{children:"This will give you a link to the web panel. Once you have opened the web panel, it should look something like\nthis:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"panel-empty",src:n(34653).A+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(t.h2,{id:"creating-a-page",children:"Creating a page"}),"\n",(0,i.jsx)(t.p,{children:"Pages in typewriter represent a self-contained unit of content. Pages can be used to create a story, or to\ncreate a quest."}),"\n",(0,i.jsxs)(t.p,{children:["Let's create a page. To do this, click on the ",(0,i.jsx)(t.code,{children:"Add Page"})," button. This will open a modal where you can create a\npage. Pages need a name which is used to identify the page and must be unique. We will call our page ",(0,i.jsx)(t.code,{children:"flower"}),".\nPage names are written in ",(0,i.jsx)(t.code,{children:"snake_case"}),", just like any other identifier in Typewriter.",(0,i.jsx)(t.br,{}),"\n","For now, we will leave the page type on ",(0,i.jsx)(t.code,{children:"Sequence"}),"."]}),"\n",(0,i.jsx)(a.A,{url:n(71382).A}),"\n",(0,i.jsx)(t.h2,{id:"panel-layout",children:"Panel layout"}),"\n",(0,i.jsx)(t.p,{children:"Let's have a look at everything that is on the panel."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"panel-layout",src:n(16970).A+"",width:"1920",height:"1080"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"The page lists"}),": This is where you can see all the pages that you have created. You can also create new\npages here."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"The graph editor"}),": This is where you can create the flow of your interaction. You can drag & zoom the\ngraph editor to make it easier to work with."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"The inspector"}),": This is where you can edit the properties of the selected node. This is where the magic\nhappens."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"The action bar"}),": There are multiple actions that we can click on. Let's check them out from left to right","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Staging indicator"}),": This indicates whether you have staging changes. If the indicator is orange, it means\nthat you have changes that are not active on the server. When green, it means that the changes are active on the\nserver. We will learn more about this ",(0,i.jsx)(t.a,{href:"#testing-the-interaction",children:"Here"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Search bar"}),": This is where you can search for entries or create new ones. We will learn more about this\n",(0,i.jsx)(t.a,{href:"#creating-first-entry",children:"Here"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Add button"}),": This is where you can add new entries. This opens the search bar where you can create new\nentries."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"creating-first-entry",children:"Creating first entry"}),"\n",(0,i.jsxs)(t.p,{children:["Let's actually start working on the interaction. To do this, we need to create an entry. An entry is a single\nunit of something. It can be a ",(0,i.jsx)(t.code,{children:"dialogue"}),", an ",(0,i.jsx)(t.code,{children:"event"}),", an ",(0,i.jsx)(t.code,{children:"action"}),", or anything else."]}),"\n",(0,i.jsxs)(t.p,{children:["Let's create an ",(0,i.jsx)(t.code,{children:"event"})," entry that will be triggered when we click on a red tulip. To do this, click on the ",(0,i.jsx)(t.code,{children:"+"}),"\nbutton in the action bar.\nThis will open the search bar.\nThe search bar is smart and can filter for specific actions such as creating a new entry.\nTo create the event, type ",(0,i.jsx)(t.code,{children:"on interact with block"}),".\nThis will show you a list of entries that you can create.\nClick on the ",(0,i.jsx)(t.code,{children:"Add On Interact With Block"})," entry.\nThis will create a new ",(0,i.jsx)(t.code,{children:"event"})," entry."]}),"\n",(0,i.jsx)(a.A,{url:n(22426).A}),"\n",(0,i.jsxs)(t.p,{children:["As you can see, the inspector auto selected the entry that we just created. In the inspector, there are several\nthings that we can change. Let's change the name of the entry to ",(0,i.jsx)(t.code,{children:"on_flower_click"}),". We can also change the block\nthat we want to interact with. To do this, click on the ",(0,i.jsx)(t.code,{children:"Block"})," field. This will open a modal where you can\nselect a block. Let's select the red tulip. After this the inspector should look like this:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"inspector-1",src:n(48670).A+"",width:"579",height:"990"})}),"\n",(0,i.jsx)(t.h2,{id:"creating-an-option",children:"Creating an option"}),"\n",(0,i.jsxs)(t.p,{children:["Currently, when we click on the red tulip, nothing happens. This is because there is no entry that gets\ntriggered when a player click on a red tulip. Let's change that. To do this, we need to create an ",(0,i.jsx)(t.code,{children:"Option"}),". An\n",(0,i.jsx)(t.code,{children:"Option"})," is a dialogue that allows the player to make a choice. Let's create an ",(0,i.jsx)(t.code,{children:"Option"})," that will be shown when we click on the red\ntulip. To do this, click on the ",(0,i.jsx)(t.code,{children:"+"})," button in the action bar, and add an ",(0,i.jsx)(t.code,{children:"option"})," entry."]}),"\n",(0,i.jsxs)(t.p,{children:["Then change the name of the entry to ",(0,i.jsx)(t.code,{children:"inspect_flower"}),". Then change the text of the option to ",(0,i.jsx)(t.code,{children:"What do you want to do?"}),". After this the inspector should look like this:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"inspector-2",src:n(69045).A+"",width:"511",height:"899"})}),"\n",(0,i.jsx)(t.h3,{id:"adding-a-speaker",children:"Adding a speaker"}),"\n",(0,i.jsxs)(t.p,{children:["Every dialogue needs a speaker. Speakers have a display name and can play a Minecraft sound when they are triggered.\nSpeakers are something called ",(0,i.jsx)(t.code,{children:"static"})," entries. ",(0,i.jsx)(t.code,{children:"Static"})," entries are entries that are not triggered by anything.\nThey are always active, and can be used to reference things."]}),"\n",(0,i.jsxs)(t.p,{children:["To create static entries, we must make a special page called a ",(0,i.jsx)(t.code,{children:"Static"})," page. Let's create a static page called ",(0,i.jsx)(t.code,{children:"Flower Static"}),". Then, inside of it, create a ",(0,i.jsx)(t.code,{children:"simple_speaker"})," which is the most\nbasic version of a speaker. Give it the name of ",(0,i.jsx)(t.code,{children:"flower"}),", and let its display name be ",(0,i.jsx)(t.code,{children:"<red><bold>Flower"}),".\nThis will make the display name of the speaker red and bold using the ",(0,i.jsx)(t.a,{href:"https://docs.adventure.kyori.net/minimessage/format.html",children:"Adventure Library"}),".\nIt should look like this:"]}),"\n",(0,i.jsx)(a.A,{url:n(23539).A}),"\n",(0,i.jsxs)(t.p,{children:["After that, we still need to go back to the ",(0,i.jsx)(t.code,{children:"flower"})," page, and select the new speaker in\nthe ",(0,i.jsx)(t.code,{children:"Inspect Flower"})," entry. To do this, click on the ",(0,i.jsx)(t.code,{children:"Speaker"})," field. This will open a modal where you can select a speaker.\nSelect the ",(0,i.jsx)(t.code,{children:"flower"})," speaker. It should look like this:"]}),"\n",(0,i.jsx)(a.A,{url:n(31).A}),"\n",(0,i.jsxs)(t.p,{children:["Now we only need to put in the different options that we want the player to be able to use. Click on the ",(0,i.jsx)(t.code,{children:"+"}),"\nnext to the options drop down to add a new option. Then change the text of the option to ",(0,i.jsx)(t.code,{children:"Smell the flower"}),",\nthen add another option with the text ",(0,i.jsx)(t.code,{children:"Touch the flower"}),". After this the inspector\nshould look like this:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"inspector-3",src:n(57420).A+"",width:"515",height:"806"})}),"\n",(0,i.jsx)(t.h2,{id:"connecting-the-entries",children:"Connecting the entries"}),"\n",(0,i.jsx)(t.p,{children:"As you can see in the graph page, the entries are not yet connected. Entries can trigger next entries by\nclicking on the purple selection next to the triggers field. This will put in a mode where you can select all\nthe entries that you want to trigger. When you are done you can click finish to connect them up. It should look\nsomething like:"}),"\n",(0,i.jsx)(a.A,{url:n(20696).A}),"\n",(0,i.jsx)(t.h2,{id:"testing-the-interaction",children:"Testing the interaction"}),"\n",(0,i.jsx)(t.p,{children:"To test our changes we need to publish them to the server. We can do this by hovering over the staging button"}),"\n",(0,i.jsx)(t.p,{children:"and clicking the publish button."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"publish-changes",src:n(91005).A+"",width:"194",height:"52"})}),"\n",(0,i.jsx)(t.admonition,{title:"Note",type:"info",children:(0,i.jsxs)(t.p,{children:["We do ",(0,i.jsx)(t.strong,{children:"not"})," have to restart the server. Publishing changes is instant and will be active immediately."]})}),"\n",(0,i.jsx)(t.p,{children:"If we now go in-game we will see the following when we click on a red tulip it will show us the two options:"}),"\n",(0,i.jsx)(a.A,{url:n(31039).A}),"\n",(0,i.jsx)(t.h2,{id:"smelling-flower",children:"Smelling flower"}),"\n",(0,i.jsx)(t.h3,{id:"adding-dialogue",children:"Adding dialogue"}),"\n",(0,i.jsxs)(t.p,{children:["When the player wants to smell the flower, we want to display some dialogue. Try to add a ",(0,i.jsx)(t.code,{children:"spoken"})," dialogue\nentry. Rename it to ",(0,i.jsx)(t.code,{children:"smell_flower_initially"}),", add the text ",(0,i.jsx)(t.code,{children:"You smell the flower. It smells <blue><bold>fragrant</bold></blue>."}),"\nselect our ",(0,i.jsx)(t.code,{children:"flower"})," speaker we created earlier, and finally specify a duration of ",(0,i.jsx)(t.code,{children:"1s"})," for one second that the\nmessage will be animated. Finally, connect the ",(0,i.jsx)(t.code,{children:"smell_flower_initially"})," entry to the ",(0,i.jsx)(t.code,{children:"inspect_flower"})," entry."]}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["It is important that you use the specific trigger from the correct option. The first ",(0,i.jsx)(t.code,{children:"triggers"})," field are for\nglobal triggers."]})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"inspector-4",src:n(6819).A+"",width:"506",height:"673"})}),"\n",(0,i.jsx)(t.p,{children:"When you publish the changes in the game, it should look something like this:"}),"\n",(0,i.jsx)(a.A,{url:n(65374).A}),"\n",(0,i.jsx)(t.h3,{id:"adding-a-conditional-dialogue",children:"Adding a conditional dialogue"}),"\n",(0,i.jsxs)(t.p,{children:["Currently, every time we pick the ",(0,i.jsx)(t.code,{children:"Smell the flower"})," option, we will get the same dialogue. This will get\nboring very quickly. Let's fix it by introducing a new concept called ",(0,i.jsx)(t.code,{children:"Facts"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"what-are-facts",children:"What are facts?"}),"\n",(0,i.jsx)(t.p,{children:"Facts are a way to store information for each player. Every fact is a separate entry and can only store one\nnumber per player. When an entry gets triggered we can check if a player meets a certain criteria for a given\nfact. Only if the player meets the criteria, will the entry get triggered. Then an entry can modify the same or different facts\nfor that player."}),"\n",(0,i.jsxs)(t.p,{children:['There are different types of facts. Each type of fact changes when a player "forgets" a fact. Aka when a player\nlogs out, after a certain amount of time, or never. When a player forgets a fact, the value of the fact will be\nreset to the default value ',(0,i.jsx)(t.code,{children:"0"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"creating-a-fact",children:"Creating a fact"}),"\n",(0,i.jsxs)(t.p,{children:["To create a fact, head over to a static page such as ",(0,i.jsx)(t.code,{children:"Flower Static"}),", click on the ",(0,i.jsx)(t.code,{children:"+"})," button in the action bar, and add a ",(0,i.jsx)(t.code,{children:"permanent_fact"})," entry. Then change the name\nof the entry to ",(0,i.jsx)(t.code,{children:"smelled_flower"}),". We can add a comment describing the fact and how it is used. After this the\ninspector should look like this:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"inspector-5",src:n(16986).A+"",width:"509",height:"493"})}),"\n",(0,i.jsx)(t.h4,{id:"adding-criteria-to-the-dialogue",children:"Adding criteria to the dialogue"}),"\n",(0,i.jsxs)(t.p,{children:["Now that we have created the fact we want to add a criterion to the dialogue. A criterion is a condition that\nneeds to be met for the dialogue to be triggered. To add a criterion, click on the ",(0,i.jsx)(t.code,{children:"+"})," button next to the\ncriteria drop down. Then select the ",(0,i.jsx)(t.code,{children:"smelled_flower"})," fact, and keep the rest the same. We also want to modify\nthis fact when the dialogue gets triggered. To do this, click on the ",(0,i.jsx)(t.code,{children:"+"})," button next to the modifications drop\ndown. Then select the ",(0,i.jsx)(t.code,{children:"smelled_flower"})," fact, make the modification ",(0,i.jsx)(t.code,{children:"="})," and the value ",(0,i.jsx)(t.code,{children:"1"}),". After this the\ninspector should look like this:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"inspector-6",src:n(76881).A+"",width:"423",height:"820"})}),"\n",(0,i.jsxs)(t.p,{children:["Now we can create a new ",(0,i.jsx)(t.code,{children:"spoken"})," dialogue entry that will be triggered when the player smells the flower for\nsubsequent times. Rename it to ",(0,i.jsx)(t.code,{children:"smell_flower_second_time"}),", add the text ",(0,i.jsx)(t.code,{children:"You smell the flower again. It still smells <blue><bold>fragrant</bold></blue>."}),", select our ",(0,i.jsx)(t.code,{children:"flower"})," speaker we created earlier, and finally specify a\nduration of ",(0,i.jsx)(t.code,{children:"1s"})," that the message will be animated. Connect it to the ",(0,i.jsx)(t.code,{children:"inspect_flower"})," entry as a trigger for\nthe ",(0,i.jsx)(t.code,{children:"smell the flower"})," option."]}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsxs)(t.p,{children:["We actually don't need to set any criteria on the ",(0,i.jsx)(t.code,{children:"smell_flower_second_time"})," dialogue entry. Typewriter picks the next\ndialogue to be the dialogue by sorting all the next dialogue entries from most amount of criteria to least. Then picking the first one which has all the criteria met.\nIn this case ",(0,i.jsx)(t.code,{children:"smell_flower_initialy"})," has one criterion, and ",(0,i.jsx)(t.code,{children:"smell_flower_second_time"})," has none."]}),(0,i.jsxs)(t.p,{children:["So ",(0,i.jsx)(t.code,{children:"smell_flower_initialy"})," will be picked when the player has not smelled the flower."]})]}),"\n",(0,i.jsx)(t.p,{children:"The UI should look something like this:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"panel-looked",src:n(24386).A+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(t.p,{children:"When you publish the changes. In the game it should look something like this:"}),"\n",(0,i.jsx)(a.A,{url:n(90365).A}),"\n",(0,i.jsx)(t.h2,{id:"adding-additional-dialogue",children:"Adding additional dialogue"}),"\n",(0,i.jsx)(t.p,{children:"Now that we have added the first two dialogue entries, we can add the rest of the dialogue. We can add the\nfollowing dialogue entries:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"touch_flower"})," - ",(0,i.jsx)(t.code,{children:"You touch the flower. It feels <yellow><bold>soft</bold></yellow>"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["With the ",(0,i.jsx)(t.code,{children:"touch_flower"})," you can add a ",(0,i.jsx)(t.code,{children:"give_item"})," entry after it, which gives the player a ",(0,i.jsx)(t.code,{children:"red_tulip"}),".\nIf you add another ",(0,i.jsx)(t.code,{children:"fact"})," named ",(0,i.jsx)(t.code,{children:"given_flower"})," and add a criterion & modifier to the ",(0,i.jsx)(t.code,{children:"give_item"})," entry, you can\nmake it so that the player can only get the flower once."]}),"\n",(0,i.jsxs)(t.p,{children:["If you are not able to make it work, try reading parts again or go to our\n",(0,i.jsx)(t.a,{href:"https://discord.gg/HtbKyuDDBw",children:"Discord"})," and ask for help."]}),"\n",(0,i.jsx)(t.p,{children:"Finally, the UI should look something like this:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"panel-final",src:n(94818).A+"",width:"1920",height:"952"})}),"\n",(0,i.jsx)(t.p,{children:"When you publish the changes. In the game it should look something like this:"}),"\n",(0,i.jsx)(a.A,{url:n(61316).A}),"\n",(0,i.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,i.jsxs)(t.p,{children:["Now that you understand the basics of TypeWriter and have made your first interaction, it's time to spice up your interaction by adding a ",(0,i.jsx)(t.code,{children:"cinematic"}),". Read the ",(0,i.jsx)(t.a,{href:"/TypeWriter/beta/docs/first-story/cinematics",children:"Cinematics"})," guide to learn more!"]}),"\n",(0,i.jsxs)(t.p,{children:["If you have any questions, feel free to ask them in the ",(0,i.jsx)(t.a,{href:"https://discord.gg/HtbKyuDDBw",children:"Discord"}),"."]})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},58362:(e,t,n)=>{n.d(t,{A:()=>l});var i=n(96540),s=n(13554),a=n.n(s);const r={player:"player_DXFF",bar:"bar_YnB5",progress:"progress_ekEV"};var o=n(74848);function l(e){let{url:t}=e,[n,s]=(0,i.useState)(0);return(0,o.jsxs)("div",{className:r.player,children:[(0,o.jsx)(c,{progress:n}),(0,o.jsx)(a(),{url:t,playing:!0,loop:!0,muted:!0,width:"100%",height:"100%",progressInterval:100,onProgress:e=>s(100*e.played),className:r.player})]})}function c(e){let{progress:t}=e;return(0,o.jsx)("div",{className:r.bar,children:(0,o.jsx)("div",{className:r.progress,style:{width:`${t}%`}})})}},71382:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/medias/add-page-4f88104b0f78c4fa6316127f2fa59779.webm"},20696:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/medias/connect-entries-51f5d502c85ae09572abb3402433d20d.webm"},22426:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/medias/create-event-4fddad9fceeaa72b41212571770fb831.webm"},23539:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/medias/create-speaker-3affb21482e30b9abb47692d6c90784a.webm"},31039:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/medias/game-1-6aa9f5161242b41ac6cf710d9f64138c.webm"},65374:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/medias/game-2-ba053cff5089aa13f1377af637a2ab9d.webm"},90365:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/medias/game-3-12b1c4a542b72d616c1be1b9397615d8.webm"},61316:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/medias/game-4-6ccff31f6d44e28303f2452fddf63180.webm"},31:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/medias/select-speaker-acae54299532f9c44fe6fc7b502723e8.webm"},55143:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/connect-book-1c4fb811f5ead6dfbb164e5c7dc22889.png"},11510:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/connect-command-00f3ad6eb18bd0022adde6278b4cfab7.gif"},48670:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/inspector-1-d0ba27ae7392dbf1b76f0c7a49284252.png"},69045:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/inspector-2-d6995a4ba3a7ed8f143e40ce0c03a1d8.png"},57420:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/inspector-3-3c39d56c90e11e1c652ea9a66d133e14.png"},6819:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/inspector-4-f31031a9c941f1a1bb7361f27a45edc1.png"},16986:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/inspector-5-103e4f6c9224c503f1de35cbfe0d26a4.png"},76881:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/inspector-6-1ba8fe94e257b005f3f4c70db19065b2.png"},34653:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/panel-empty-090e4c584cd67549e2597dcfdbee9c2d.png"},94818:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/panel-final-9978ead94c8383a3547fcd252d99957d.png"},16970:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/panel-layout-00899412d8a68b5de1de9ed6008b0253.png"},24386:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/panel-looked-9c9368d8716d4882d2b67cb941689dc7.png"},91005:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/publish-changes-499b1597059faeadd744ccc83854213f.gif"}}]);