"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[228],{9228:function(e,n,t){t.r(n),t.d(n,{default:function(){return ue}});var r,i,o=t(2791),a=t(168),s=t(7691),l=t(8311),c=(s.ZP.label(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),(0,s.ZP)(l.Z)(i||(i=(0,a.Z)(["\n  width: 300px;\n  margin-bottom: '10px';\n"])))),d=t(9434),u=t(1634),h=t(5095),m=t.n(h),x=t(3329);var p,f,Z=function(){var e=(0,d.I0)(),n=m()((function(n){var t=n.target.value;e((0,u.Tv)(t))}),500);return(0,x.jsx)(c,{id:"search",name:"search",label:"Find contacts by name",variant:"standard",sx:{marginBottom:"10px",width:"300px"},onChange:n})},v=t(1413),j=t(2797),g=t(7205),b=s.ZP.form(p||(p=(0,a.Z)(["\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),y=(0,s.ZP)(g.Z)(f||(f=(0,a.Z)(["\n  width: fit-content;\n"]))),C=t(2419),P=t(1134),w=t(4695),S=t(5985),I=t(6916),k=function(e){return e.contacts.items},_=function(e){return e.contacts.isLoading},q=function(e){return e.contacts.error},T=(0,I.P1)([k,function(e){return e.filter}],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),z=t(3634),F=j.Ry({name:j.Z_().min(3,"Minimum 3 letters!").required("This field is required!"),phone:j.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number is not valid!").max(13,"Maximum 13 numbers!").required("This field is required!")}).required();function O(){var e=(0,P.cI)({defaultValues:{name:"",phone:""},resolver:(0,w.X)(F)}),n=e.control,t=e.handleSubmit,r=e.reset,i=e.formState,a=i.errors,s=i.isSubmitSuccessful,c=(0,d.I0)(),u=(0,d.v9)(k);return o.useEffect((function(){s&&r()}),[s,r]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(b,{onSubmit:t((function(e){var n=e.name,t=e.phone,r={name:n,phone:t};u.find((function(e){return e.name===n}))?S.Am.warning("".concat(n," is already in contacts"),{}):c((0,z.uK)(r))}),(function(e){S.Am.error(e)})),children:[(0,x.jsx)(P.Qr,{name:"name",control:n,render:function(e){var n,t=e.field;return(0,x.jsx)(l.Z,(0,v.Z)((0,v.Z)({},t),{},{label:"Name",variant:"outlined",size:"small",error:a.name&&!0,helperText:null===(n=a.name)||void 0===n?void 0:n.message}))}}),(0,x.jsx)(P.Qr,{name:"phone",control:n,render:function(e){var n,t=e.field;return(0,x.jsx)(l.Z,(0,v.Z)((0,v.Z)({},t),{},{label:"Phone",variant:"outlined",size:"small",error:a.phone&&!0,helperText:null===(n=a.phone)||void 0===n?void 0:n.message}))}}),(0,x.jsx)(y,{type:"submit",variant:"outlined",startIcon:(0,x.jsx)(C.Z,{}),children:"Add contact"})]}),(0,x.jsx)(S.Ix,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})]})}var B,E,L=t(4476),M=t(885),Q=t(9963),W=t(1680),A=t(9827),D=t(807),G=t(9773),N=t(6650),R=t(5399),H=t(5450),K=t(7247),V=t(1286),X=t(4942),J=t(3651),U=t(1745),Y=t(277),$=(0,Y.ZP)(J.Z)((function(e){var n,t=e.theme;return n={},(0,X.Z)(n,"&.".concat(U.Z.head),{backgroundColor:t.palette.primary.main,color:t.palette.common.white,fontSize:t.typography.htmlFontSize,fontWeight:t.typography.fontWeightBold}),(0,X.Z)(n,"&.".concat(U.Z.body),{fontSize:t.typography.fontSize}),(0,X.Z)(n,"&.MuiTableCell-body:nth-of-type(2)",{fontWeight:t.typography.fontWeightBold}),n})),ee=(0,Y.ZP)(D.Z)((function(e){return{"&:nth-of-type(even)":{backgroundColor:e.theme.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}})),ne=s.ZP.form(B||(B=(0,a.Z)(["\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),te=(0,s.ZP)(g.Z)(E||(E=(0,a.Z)(["\n  width: fit-content;\n"]))),re=t(8763),ie=t(8074),oe=j.Ry({name:j.Z_().min(3,"Minimum 3 letters!").required("This field is required!"),phone:j.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number is not valid!").max(13,"Maximum 13 numbers!").required("This field is required!")}).required();function ae(e){var n=e.contact,t=e.setOpen,r=(0,P.cI)({defaultValues:{name:null===n||void 0===n?void 0:n.name,phone:null===n||void 0===n?void 0:n.phone},resolver:(0,w.X)(oe)}),i=r.control,a=r.handleSubmit,s=r.reset,c=r.formState,u=c.errors,h=c.isSubmitSuccessful,m=(0,d.I0)();return o.useEffect((function(){h&&s()}),[h,s]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(ie.Z,{variant:"h5",align:"center",gutterBottom:!0,children:"Edit contact"}),(0,x.jsxs)(ne,{onSubmit:a((function(e){var r=e.name,i=e.phone,o={id:n.id,name:r,phone:i};m((0,z.mP)(o)),t(!1)}),(function(e){S.Am.error(e)})),children:[(0,x.jsx)(P.Qr,{name:"name",control:i,render:function(e){var n,t=e.field;return(0,x.jsx)(l.Z,(0,v.Z)((0,v.Z)({},t),{},{label:"Name",variant:"outlined",size:"small",error:u.name&&!0,helperText:null===(n=u.name)||void 0===n?void 0:n.message}))}}),(0,x.jsx)(P.Qr,{name:"phone",control:i,render:function(e){var n,t=e.field;return(0,x.jsx)(l.Z,(0,v.Z)((0,v.Z)({},t),{},{label:"Phone",variant:"outlined",size:"small",error:u.phone&&!0,helperText:null===(n=u.phone)||void 0===n?void 0:n.message}))}}),(0,x.jsxs)(L.Z,{flexDirection:"row",gridGap:"10px",justifyContent:"end",children:[(0,x.jsx)(te,{variant:"contained",onClick:function(){return t(!1)},children:"Cancel"}),(0,x.jsx)(te,{type:"submit",variant:"outlined",startIcon:(0,x.jsx)(re.Z,{}),children:"Save"})]})]}),(0,x.jsx)(S.Ix,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})]})}var se=function(){var e=(0,d.I0)(),n=(0,o.useState)(!1),t=(0,M.Z)(n,2),r=t[0],i=t[1],a=(0,o.useState)(null),s=(0,M.Z)(a,2),l=s[0],c=s[1],u=(0,d.v9)(T);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Q.Z,{component:N.Z,sx:{maxWidth:"900px"},children:(0,x.jsxs)(W.Z,{"aria-label":"contacts table",children:[(0,x.jsx)(A.Z,{children:(0,x.jsxs)(D.Z,{children:[(0,x.jsx)($,{children:"Contact ID"}),(0,x.jsx)($,{align:"right",children:"Name"}),(0,x.jsx)($,{align:"right",children:"Phone"}),(0,x.jsx)($,{align:"right"})]})}),(0,x.jsx)(G.Z,{children:u.map((function(n){var t=n.id,r=n.name,o=n.phone;return(0,x.jsxs)(ee,{children:[(0,x.jsx)($,{scope:"row",children:t}),(0,x.jsx)($,{align:"right",children:r}),(0,x.jsx)($,{align:"right",children:o}),(0,x.jsx)($,{align:"right",children:(0,x.jsxs)(L.Z,{flexDirection:"row",gridGap:"5px",children:[(0,x.jsx)(g.Z,{variant:"outlined",startIcon:(0,x.jsx)(V.Z,{}),onClick:function(){return function(e){c(e),i(!0)}({id:t,name:r,phone:o})},children:"Edit"}),(0,x.jsx)(g.Z,{variant:"outlined",startIcon:(0,x.jsx)(K.Z,{}),onClick:function(){return function(n){var t=n.id;e((0,z.GK)(t))}({id:t})},children:"Delete"})]})})]},t)}))})]})}),(0,x.jsx)(R.Z,{open:r,children:(0,x.jsx)(H.Z,{children:(0,x.jsx)(ae,{contact:l,setOpen:i})})})]})},le=t(4142),ce=t(4746);function de(){var e=(0,le.Z)(),n=(0,d.I0)(),t=(0,d.v9)(_),r=(0,d.v9)(q),i=(0,d.v9)(ce.Qb);return(0,o.useEffect)((function(){i&&n((0,z.yF)())}),[n,i]),(0,x.jsxs)(L.Z,{children:[(0,x.jsx)(L.Z,{as:"h1",pt:"20px",pb:"10px",margin:"0 auto",color:e.palette.text.primary,children:"Phonebook"}),(0,x.jsx)(O,{}),(0,x.jsx)(L.Z,{as:"h2",mb:"0",color:e.palette.text.primary,children:"Contacts"}),(0,x.jsx)(Z,{}),t&&!r&&(0,x.jsx)("b",{children:"Request in progress..."}),(0,x.jsx)(se,{}),(0,x.jsx)(S.Ix,{position:"top-right",autoClose:2e3,theme:"colored"})]})}function ue(){return(0,x.jsx)(de,{})}}}]);
//# sourceMappingURL=228.c059573e.chunk.js.map