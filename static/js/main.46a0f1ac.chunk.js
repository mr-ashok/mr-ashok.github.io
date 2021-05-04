(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,function(e,s,n){},function(e,s,n){},,function(e,s,n){},function(e,s,n){},function(e,s,n){},function(e,s,n){},function(e,s,n){},function(e,s,n){"use strict";n.r(s);var c=n(1),t=n.n(c),i=n(3),a=n.n(i),l=(n(9),n(4)),o=(n(10),n(0)),r=[{link:"#aboutMe",content:"About Me"},{link:"#skills",content:"Skills"},{link:"#workAndEducation",content:"Work & Education"}],d=function(){var e=Object(c.useState)(!1),s=Object(l.a)(e,2),n=s[0],t=s[1],i=void 0,a=0;return window.addEventListener("scroll",(function(){var e=window.scrollY;if(t(e>=50),i||(i=document.querySelectorAll(".navLink")),0===a){var s,n=document.getElementById("navContainer");a=null!==(s=null===n||void 0===n?void 0:n.offsetHeight)&&void 0!==s?s:0}var c=e+a;i.forEach((function(e){var s=document.querySelector(e.hash);s&&s.offsetTop<=c&&s.offsetTop+s.offsetHeight>c?e.classList.add("active"):e.classList.remove("active")}))})),Object(o.jsx)("nav",{className:n?"scrolled":"",children:Object(o.jsxs)("section",{id:"navContainer",children:[Object(o.jsxs)("a",{href:"/#",className:"navLogo",children:["Mr - ",Object(o.jsx)("span",{className:"acentColor",children:"Ashok"})]}),Object(o.jsx)("section",{children:r.map((function(e){return Object(o.jsx)("a",{href:e.link,className:"navLink",children:e.content})}))})]})})},j=(n(12),n(13),n.p+"static/media/about_preview.d77f9f1b.png"),h=Object(o.jsx)("section",{className:"pageSection",id:"aboutMe",children:Object(o.jsxs)("section",{className:"container",children:[Object(o.jsx)("h2",{className:"title",children:"About Me"}),Object(o.jsx)("img",{src:j,className:"aboutPreview",alt:"About preview",width:"65.625%"}),Object(o.jsx)("section",{className:"aboutDetails",children:"Hi, I am Ashok. I am from Pune, India.I am an full-time working Android developer with a love for JavaScript and TypeScript. In my free time, I like to learn new things by myself and explore things as much as possible. I am self learned JavaScript, TypeScript and Python developer. I like puzzles and like to solve the unsolvable tasks as a challenge. I like mystery and detective movies/series. I am both Marvel and DC fan (I am sorry if that offend you \ud83d\ude02)."})]})}),b=function(){return h},m=(n(14),n.p+"static/media/profilePic.1405010f.png"),u=Object(o.jsx)("section",{className:"pageSection heroBackground",children:Object(o.jsxs)("section",{className:"container",children:[Object(o.jsx)("img",{src:m,alt:"Profile",className:"profilePic"}),Object(o.jsxs)("section",{className:"introduction",children:[Object(o.jsxs)("h1",{children:["I\u2019m ",Object(o.jsx)("span",{className:"acentColor",children:"Ashok"})," Chaudhari"]}),Object(o.jsx)("h2",{children:"Creative Full-stack developer"})]})]})}),x=function(){return u},O=(n(15),Object(o.jsx)("section",{className:"pageSection",id:"skills",children:Object(o.jsxs)("section",{className:"container",children:[Object(o.jsx)("h2",{className:"title",children:"Skills"}),Object(o.jsx)("section",{className:"skillsDetails",children:[{name:"Programming Languages",skills:["C","C++","Android","Java","Kotlin","C#","Python","JavaScript","TypeScript","HTML","CSS","PHP"]},{name:"Frameworks",skills:["Android Espresso","ExpressJs","ReactJs","ChaiJs","MochaJs","Bootstrap","SCSS","TailwindCSS"]},{name:"Tools",skills:["Docker","Nginx","Figma","Gradle","Webpack","Rollup"]},{name:"DB",skills:["SQL","MongoDB","PostgreSQL","Firebase Realtime DB","SQLite"]},{name:"Project Management",skills:["JIRA","Trello"]},{name:"Operating system",skills:["Windows","Linux (Ubuntu, Fedora, Kali, Raspbian)","MacOs"]},{name:"Cloud hosting",skills:["Firebase","Heroku","AWS","GoDaddy","Hostinger"]}].map((function(e){return Object(o.jsxs)("section",{className:"skill",children:[Object(o.jsx)("b",{children:e.name}),Object(o.jsx)("section",{className:"skillsList",children:e.skills.map((function(e,s){return Object(o.jsx)("span",{className:"chip variant".concat(s%3+1),children:e})}))})]})}))})]})})),p=function(){return O},f=(n(16),n.p+"static/media/WorkAndEducationPreview.97d95992.png"),k=Object(o.jsx)("section",{className:"pageSection",id:"workAndEducation",children:Object(o.jsxs)("section",{className:"container",children:[Object(o.jsx)("h2",{className:"title",children:"Work & Education"}),Object(o.jsx)("img",{src:f,className:"workAndEducationPreview",alt:"work And Education preview",width:"51.667%"}),Object(o.jsxs)("section",{className:"workAndEducationDetails",children:[Object(o.jsx)("strong",{children:"Experience"}),Object(o.jsx)("ol",{className:"timeline",children:Object(o.jsxs)("li",{children:[Object(o.jsxs)("b",{children:[Object(o.jsx)("span",{className:"acentColor",children:"Raja Software Labs"})," - Android Developer (Jul 2017 - Present)"]}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Team lead"}),Object(o.jsx)("li",{children:"Android Developer on LinkedIn project"})]})]})}),Object(o.jsx)("strong",{children:"Education"}),Object(o.jsxs)("ol",{className:"timeline",children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("b",{children:Object(o.jsx)("span",{className:"acentColor",children:"Bachelor Engineering"})}),"(Pune Vidyarthi Griha's College of Engineering) - May 2017"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("b",{children:Object(o.jsx)("span",{className:"acentColor",children:"H.S.C."})}),"(Poona College Of Arts, Science and Commerce) - May 2013"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("b",{children:Object(o.jsx)("span",{className:"acentColor",children:"S.S.C."})}),"(Sarathi Madhyamik Vidyalaya) - May 2011"]})]})]})]})}),v=function(){return k},g=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{}),Object(o.jsx)(x,{}),Object(o.jsx)(b,{}),Object(o.jsx)(p,{}),Object(o.jsx)(v,{})]})};a.a.render(Object(o.jsx)(t.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.46a0f1ac.chunk.js.map