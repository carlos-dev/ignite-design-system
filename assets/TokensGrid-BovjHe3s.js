import{j as e}from"./jsx-runtime-j_jdvEMj.js";function i({tokens:t,hasRemValue:r}){return e.jsxs("table",{className:"tokens-grid",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"name"}),e.jsx("th",{children:"value"}),r&&e.jsx("th",{children:"Pixels"})]})}),e.jsx("tbody",{children:Object.entries(t).map(([s,n])=>e.jsxs("tr",{children:[e.jsx("td",{children:s}),e.jsx("td",{children:n}),r&&e.jsxs("td",{children:[Number(n.replace("rem",""))*16,"px"]})]},s))})]})}i.__docgenInfo={description:"",methods:[],displayName:"TokensGrid",props:{tokens:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""},hasRemValue:{required:!1,tsType:{name:"boolean"},description:""}}};export{i as T};
