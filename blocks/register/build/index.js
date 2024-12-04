(()=>{"use strict";const e=window.wp.blocks,s=window.wp.element,a=window.wp.blockEditor,i=window.wp.components,l=window.ReactJSXRuntime;(0,e.registerBlockType)("plz/register",{title:"Register",category:"widgets",icon:"admin-users",attributes:{title:{source:"html",selector:"h1",default:"Register"},nameLabel:{type:"string",default:"Name"},emailLabel:{type:"string",default:"Email"},passwordLabel:{type:"string",default:"Password"},text:{source:"html",selector:"p"}},styles:[{name:"light",label:"Light Mode",isDefault:!0},{name:"dark",label:"Dark Mode",isDefault:!0}],edit:e=>{const{className:t,attributes:n,setAttributes:r}=e,{title:m,nameLabel:o,emailLabel:c,passwordLabel:d,text:x}=n,[p,u]=(0,s.useState)(x);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.InspectorControls,{children:(0,l.jsx)(i.Panel,{children:(0,l.jsxs)(i.PanelBody,{title:"Labels",initialOpen:!0,children:[(0,l.jsx)(i.TextControl,{label:"Name Label",value:o,onChange:e=>r({nameLabel:e})}),(0,l.jsx)(i.TextControl,{label:"Email Label",value:c,onChange:e=>r({emailLabel:e})}),(0,l.jsx)(i.TextControl,{label:"Password Label",value:d,onChange:e=>r({passwordLabel:e})})]})})}),(0,l.jsx)(a.BlockControls,{controls:[{icon:"text",title:"Add text",isActive:x||p,onClick:()=>u(!p)}]}),(0,l.jsx)("div",{className:t,children:(0,l.jsxs)("div",{className:"signin__container",children:[(0,l.jsx)(a.RichText,{tagName:"h1",placeholder:"Escribi un titulo",className:"sigin__titulo",value:m,onChange:e=>r({title:e})}),(x||p)&&(0,l.jsx)(a.RichText,{tagName:"p",placeholder:"Escribi un parrafo",value:x,onChange:e=>r({text:e})}),(0,l.jsxs)("form",{className:"signin__form",id:"signup",children:[(0,l.jsxs)("div",{className:"signin__name name--campo",children:[(0,l.jsx)("label",{for:"Name",children:o}),(0,l.jsx)("input",{name:"name",type:"text",id:"Name"})]}),(0,l.jsxs)("div",{className:"signin__email name--campo",children:[(0,l.jsx)("label",{for:"email",children:c}),(0,l.jsx)("input",{name:"email",type:"email",id:"email"})]}),(0,l.jsxs)("div",{className:"signin__pass name--campo",children:[(0,l.jsx)("label",{for:"password",children:d}),(0,l.jsx)("input",{name:"password",type:"password",id:"password"})]}),(0,l.jsx)("div",{className:"signin__submit",children:(0,l.jsx)("input",{type:"submit",value:"Create"})}),(0,l.jsx)("div",{className:"msg"})]})]})})]})},save:e=>{const{className:s,attributes:i}=e,{title:t,nameLabel:n,emailLabel:r,passwordLabel:m,text:o}=i;return(0,l.jsx)("div",{className:s,children:(0,l.jsxs)("div",{className:"signin__container",children:[(0,l.jsx)(a.RichText.Content,{tagName:"h1",className:"sigin__titulo",value:t}),o&&(0,l.jsx)(a.RichText.Content,{tagName:"p",value:o}),(0,l.jsxs)("form",{className:"signin__form",id:"signup",children:[(0,l.jsxs)("div",{className:"signin__name name--campo",children:[(0,l.jsx)("label",{for:"Name",children:n}),(0,l.jsx)("input",{name:"name",type:"text",id:"Name"})]}),(0,l.jsxs)("div",{className:"signin__email name--campo",children:[(0,l.jsx)("label",{for:"email",children:r}),(0,l.jsx)("input",{name:"email",type:"email",id:"email"})]}),(0,l.jsxs)("div",{className:"signin__pass name--campo",children:[(0,l.jsx)("label",{for:"password",children:m}),(0,l.jsx)("input",{name:"password",type:"password",id:"password"})]}),(0,l.jsx)("div",{className:"signin__submit",children:(0,l.jsx)("input",{type:"submit",value:"Create"})}),(0,l.jsx)("div",{className:"msg"})]})]})})}})})();