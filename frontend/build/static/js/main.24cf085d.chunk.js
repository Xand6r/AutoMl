(this.webpackJsonpspeakspire=this.webpackJsonpspeakspire||[]).push([[0],{100:function(e,a,t){e.exports=t.p+"static/media/profileIcon.3af9fdcb.svg"},101:function(e,a,t){e.exports=t.p+"static/media/notification.51629ca4.svg"},137:function(e,a,t){e.exports=t(233)},142:function(e,a,t){},143:function(e,a,t){},148:function(e,a,t){},149:function(e,a,t){},151:function(e,a,t){},152:function(e,a,t){},185:function(e,a,t){},187:function(e,a,t){},204:function(e,a,t){},205:function(e,a,t){},206:function(e,a,t){},219:function(e,a,t){},233:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),c=t.n(r),s=t(5),i=(t(142),t(4)),o=t(7),m=t(12);t(143);var d=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"navigation"},l.a.createElement(s.b,{className:"link",to:"/"},l.a.createElement("div",{className:"navigation__logo"},"Auto",l.a.createElement("span",null,"Model"))),l.a.createElement("div",{className:"navigation__menu"},l.a.createElement(s.b,{className:"link",to:"/"},l.a.createElement("div",{className:"navigation__menu__item --item"}," Models ")),l.a.createElement(s.b,{className:"link",to:"/train"},l.a.createElement("div",{className:"navigation__menu__item --item"}," Train ")),l.a.createElement(s.b,{className:"link",to:"/login"},l.a.createElement("div",{className:"navigation__menu__item --outlinedbutton"}," Sign In ")),l.a.createElement(s.b,{className:"link",to:"/category"},l.a.createElement("div",{className:"navigation__menu__item --filledbutton"}," Sign Up")))))},u=(t(148),function(e){var a=e.index,t=e.text,n=e.active,r=e.changeTab;return l.a.createElement("div",{onClick:function(){r(a)},className:"sectiontab ".concat(n?"--selected":"--unselected")},l.a.createElement("div",{className:"sectiontab__icon"},a+1),l.a.createElement("div",{className:"sectiontab__text"},t))}),p=(t(149),t(98)),_=t.n(p),v=t(99),E=t.n(v),f=t(100),g=t.n(f);function b(e){e.fullname,e.company,e.position,e.skills,e.image;return l.a.createElement("div",null,l.a.createElement("div",{className:"speakercard"},l.a.createElement("div",{className:"speakercard__tag --premium"}),l.a.createElement("div",{className:"speakercard__profile"},l.a.createElement("div",{className:"speakercard__profile__picturewrapper"}),l.a.createElement("div",{className:"speakercard__profile__name"}),l.a.createElement("div",{className:"speakercard__profile__position"}),l.a.createElement("hr",{className:"--divider"}),l.a.createElement("div",{className:"speakercard__profile__footer"},l.a.createElement("img",{src:g.a,alt:""}),l.a.createElement("img",{src:E.a,alt:""})))))}b.defaultProps={fullname:"Emeka Chukwuma",company:"Emeks Enterprises",position:"Chief Executive Officer",skills:["business","leadership","management","startup advisory","aquisitions"],image:_.a};var h=b,N=t(33),y=t.n(N),w=t(44),x=t(43),k=t(125),O=(t(151),function(e){var a=e.option,t=e.active,n=e.changeTab,r=e.index;return l.a.createElement("div",{onClick:function(){n(r)},className:"gendertab ".concat(t?"--selected":"--unselected")},l.a.createElement("div",{className:"gendertab__text"},a))}),j=t(237),C=t(238),S=t(22),M=t(101),T=t.n(M),F=(t(152),t(153),["File Upload","URL"]);function R(e){var a=e.stateChanger,t=e.state,r=Object(n.useState)(1),c=Object(m.a)(r,2),i=c[0],d=(c[1],Object(n.useState)(!1)),u=Object(m.a)(d,2),p=u[0],_=u[1],v=function(e){var n=e.target,l=n.name,r=n.value;a(Object(o.a)({},t,Object(x.a)({},l,r)))},E=function(){var e=Object(w.a)(y.a.mark((function e(){var n,l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_(!0),t.url){e.next=4;break}return _(!1),e.abrupt("return");case 4:return e.prev=4,e.next=7,k.a(t.url);case 7:(n=e.sent)&&"<!DOCTYPE html>"!==n.columns[0]?(l=n.columns.map((function(e){return{value:e,label:e}})),j.b.success("csv validated",5),a(Object(o.a)({},t,{target_options:l}))):(j.b.error("please enter a valid csv file link",5),a(Object(o.a)({},t,{url:""}))),_(!1),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(4),console.log("error"),j.b.error("please enter a valid csv file link",5),a(Object(o.a)({},t,{url:""})),_(!1);case 18:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(){return e.apply(this,arguments)}}(),f=function(){return t.model_name&&t.target&&(t.url||t.file)};return l.a.createElement("div",{className:"personaldetails"},l.a.createElement("div",{className:"personaldetails__heading"},l.a.createElement("div",{className:"personaldetails__heading__header"},"General Details"),l.a.createElement("div",{className:"personaldetails__heading__subheading"},"Enter in the general details of the model")),l.a.createElement("div",{className:"personaldetails__formsection"},l.a.createElement("div",{className:"--wrapper",onClick:function(){j.b.warning("Only one project can be created for now")}},l.a.createElement("label",{htmlFor:"fullname"},"Model Name"),l.a.createElement("input",{disabled:!0,maxLength:"30",type:"text",id:"model_name",name:"model_name",onChange:v,value:t.model_name})),l.a.createElement("div",{className:"--wrapper"},l.a.createElement("label",{htmlFor:"fullname"},"File Upload Option"),l.a.createElement("div",{className:"--gendersection"},F.map((function(e,a){return l.a.createElement(O,{key:Math.random(),option:e,index:a,active:a===i,changeTab:function(){j.b.warning("file uploads disabled for now, please use a link")}})})))),0===i?l.a.createElement("div",{className:"--wrapper"},l.a.createElement("label",{htmlFor:"email"},"Upload file"),l.a.createElement("input",{type:"file",id:"file",name:"file",placeholder:"Upload our file",onChange:function(e){a(Object(o.a)({},t,{file:e.target.files[0]})),console.log(t)}})):l.a.createElement("div",{className:"--wrapper"},l.a.createElement("label",{htmlFor:"location"},"Url"),l.a.createElement("input",{type:"url",id:"url",name:"url",placeholder:"Enter The URL of you data",onChange:v,value:t.url,onBlur:E})),l.a.createElement("div",{className:"--wrapper --select"},l.a.createElement("label",{htmlFor:"fullname"},"Select your target variable"),l.a.createElement("div",{className:"--singleselect"},l.a.createElement(S.a,{options:t.target_options,isSearchable:!0,placeholder:"Target variable",className:"--item",value:t.target,onChange:function(e){a(Object(o.a)({},t,{target:e}))},onFocus:function(){E()}})))),l.a.createElement("div",{className:"personaldetails__footer"},l.a.createElement("div",{className:"--notification"},l.a.createElement("img",{src:T.a,alt:""}),l.a.createElement("div",{className:"--text"},"By uploading your data you agree to the",l.a.createElement("span",null," Terms and Conditions")," and our ",l.a.createElement("span",null,"Privacy Policy"))),l.a.createElement(C.a,{spinning:p,tip:"Loading csv headers"},l.a.createElement("div",{className:"--button_group"},l.a.createElement("div",{className:"cancel"},"Cancel"),l.a.createElement(s.b,{className:"link",to:f()?"/train/2":"/train/1",onClick:function(){f()||j.b.error("please fill in all fields before moving on")}},l.a.createElement("div",{className:"next"},"Next"))))))}t(185),t(186),t(187);function A(e){var a=e.stateChanger,t=e.state,r=["Auto","Manual"],c=function(){return"Auto"===t.preprocessing_action||t.encoding&&t.normalisation&&t.balancing},i=Object(n.useState)(0),d=Object(m.a)(i,2),u=d[0],p=(d[1],function(e){j.b.info("we currently only support auto parameter tuning")});return l.a.createElement("div",{className:"expertise"},l.a.createElement("div",{className:"personaldetails__heading"},l.a.createElement("div",{className:"personaldetails__heading__header"},"Preprocessing")),l.a.createElement("div",{className:"expertise__formsection"},l.a.createElement("div",{className:"expertise__formsection__section"},l.a.createElement("div",{className:"expertise__formsection__section__header"},l.a.createElement("div",{className:"--heading"},"Preprocessing Parameters")),l.a.createElement("div",{className:"expertise__formsection__section__form"},l.a.createElement("div",{className:"--input_wrapper --select"},l.a.createElement("label",{class:"double",htmlFor:"position"},"Select model training technique",l.a.createElement("span",null,"Automatically train the model on the platform or manually select parameters.")),l.a.createElement("div",{className:"--gendersection"},r.map((function(e,a){return l.a.createElement(O,{key:Math.random(),option:e,index:a,active:a===u,changeTab:p})}))))),0===u?"":l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"expertise__formsection__section__form"},l.a.createElement("div",{className:"--input_wrapper --select"},l.a.createElement("label",{class:"double",htmlFor:"position"},"Encoding technique",l.a.createElement("span",null,"The Encoding techniques which are available.")),l.a.createElement("div",{className:"--singleselect"},l.a.createElement(S.a,{options:[{value:"binary",label:"Binary encoder"},{value:"onehot",label:"Onehot encoder"},{value:"sumencoder",label:"Sum encoder"}],isSearchable:!0,placeholder:"Encode your data",className:"--item",value:t.encoding,onChange:function(e){a(Object(o.a)({},t,{encoding:e}))}})))),l.a.createElement("div",{className:"expertise__formsection__section__form"},l.a.createElement("div",{className:"--input_wrapper --select"},l.a.createElement("label",{class:"double",htmlFor:"position"},"Scaling and Normalisation technique",l.a.createElement("span",null,"The scaling and normalisation techniques which are available.")),l.a.createElement("div",{className:"--singleselect"},l.a.createElement(S.a,{options:[{value:"standard",label:"Standard scaler"},{value:"robust",label:"Robust scaler"},{value:"minmax",label:"Minmax scaler"}],isSearchable:!0,placeholder:"Normalise your data",className:"--item",value:t.normalisation,onChange:function(e){a(Object(o.a)({},t,{normalisation:e}))}})))),l.a.createElement("div",{className:"expertise__formsection__section__form"},l.a.createElement("div",{className:"--input_wrapper --select"},l.a.createElement("label",{class:"double",htmlFor:"position"},"Data Balancing technique",l.a.createElement("span",null,"The Technique to use to balance the dataset")),l.a.createElement("div",{className:"--singleselect"},l.a.createElement(S.a,{options:[{value:"up_sample_minority_class",label:"Minority Upsample"},{value:"random_over_sampling",label:"Random Oversampling"},{value:"down_sample_majority_class",label:"Majority Downsample"},{value:"random_under_sampling",label:"Random Undersampling"}],isSearchable:!0,placeholder:"Balance your data",className:"--item",value:t.balancing,onChange:function(e){a(Object(o.a)({},t,{balancing:e}))}}))))))),l.a.createElement("div",{className:"expertise__footer"},l.a.createElement("div",{className:"--button_group"},l.a.createElement(s.b,{className:"link",to:"/train/1"},l.a.createElement("div",{className:"cancel"},"Back")),l.a.createElement(s.b,{to:c()?"/train/3":"/train/2",className:"link",onClick:function(){console.log(t),c()||j.b.error("please fill in all fields before moving on")}},l.a.createElement("div",{className:"next"},"Next")))))}function L(e){var a=e.stateChanger,t=e.state,n=[[{value:"logistic_regression",label:"Logistic Regression"}],[{value:"linear_regression",label:"Linear Regression"},{value:"ridge_regression",label:"Ridge Regression"},{value:"lasso_regression",label:"Lasso Regression"},{value:"elastic_net_regression",label:"ELastic Net Regression"},{value:"random_forest",label:"Random Forest Regressor"},{value:"Support_vector_regression",label:"Support Vector Regression"}]],r=["Classification","Regression"],c=function(){return t.use_case&&"Auto"===t.action||t.use_case&&"Manual"===t.action&&t.model_type};return l.a.createElement("div",{className:"expertise"},l.a.createElement("div",{className:"personaldetails__heading"},l.a.createElement("div",{className:"personaldetails__heading__header"},"Model")),l.a.createElement("div",{className:"expertise__formsection"},l.a.createElement("div",{className:"expertise__formsection__section"},l.a.createElement("div",{className:"expertise__formsection__section__header"},l.a.createElement("div",{className:"--heading"},"Model Selection")),l.a.createElement("div",{className:"expertise__formsection__section__form"},l.a.createElement("div",{className:"--input_wrapper --select"},l.a.createElement("label",{class:"double",htmlFor:"position"},"Select Model Use Case",l.a.createElement("span",null,"Select classification or regression use case")),l.a.createElement("div",{className:"--gendersection"},r.map((function(e,a){return l.a.createElement(O,{key:Math.random(),option:e,index:a,active:e===t.use_case,changeTab:function(){j.b.info("only classification as allowed for now")}})}))))),l.a.createElement("div",{className:"expertise__formsection__section__form"},l.a.createElement("div",{className:"--input_wrapper --select"},l.a.createElement("label",{class:"double",htmlFor:"position"},"Select model",l.a.createElement("span",null,"Automatic model selection or manual model selection")),l.a.createElement("div",{className:"--gendersection"},["Auto","Manual"].map((function(e,a){return l.a.createElement(O,{key:Math.random(),option:e,index:a,active:t.action===e,changeTab:function(){j.b.info("only manual model is allowed as allowed for now")}})}))))),"Auto"===t.action?"":l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"expertise__formsection__section__form"},l.a.createElement("div",{className:"--input_wrapper --select"},l.a.createElement("label",{class:"double",htmlFor:"position"},"Model Type",l.a.createElement("span",null,"The Types of models which are available to train data with.")),l.a.createElement("div",{className:"--singleselect"},l.a.createElement(S.a,{options:n[r.indexOf(t.use_case)],isSearchable:!0,placeholder:"Select your model",className:"--item",onChange:function(e){a(Object(o.a)({},t,{model_type:e.value}))}}))))))),l.a.createElement("div",{className:"expertise__footer"},l.a.createElement("div",{className:"--button_group"},l.a.createElement(s.b,{className:"link",to:"/train/3"},l.a.createElement("div",{className:"cancel"},"Back")),l.a.createElement(s.b,{className:"link",to:c()?"/train/4":"/train/3",onClick:function(){c()||j.b.error("please fill in all fields before moving on")}},l.a.createElement("div",{className:"next"},"Next")))))}var U=t(115),P=t.n(U).a.create({baseURL:"http://104.248.19.124",timeout:1e3});t(204);function B(e){var a=e.state,t=function(e){return["model_name","model_type","url","target","use_case"].every((function(a){return e[a]}))},n=function(){var e=Object(w.a)(y.a.mark((function e(){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t(a)){e.next=3;break}return j.b.error("kindly fill all fields in the form"),e.abrupt("return");case 3:console.log(t(a)),n={name:a.model_name,model_name:a.model_type,file_link:a.url,target:a.target.value,model_type:a.use_case.toLowerCase()},P.post("aiml/projects/create/",n).then((function(e){j.b.success(e.data.message,10),window.location.replace("/")})).catch((function(e){j.b.error("there was an error ".concat(e.message),10),window.location.replace("/train/1")}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"expertise"},l.a.createElement("div",{className:"expertise__train_button",onClick:n},"TRAIN"))}t(205);var q=["General Details","Preprocessing","Model Selection","Train"],I={model_name:"Project One",url:"https://res.cloudinary.com/xand6r/raw/upload/v1597574095/datasets/iris_gudrhr.csv",file:"",target_options:[],target:""},D={preprocessing_action:"Auto",encoding:"",normalisation:"",balancing:""},G={use_case:"Classification",action:"Manual",model_type:null};var J=function(e){var a=e.location,t=Object(n.useState)(0),r=Object(m.a)(t,2),c=r[0],p=r[1],_=Object(n.useState)(!1),v=Object(m.a)(_,2),E=v[0],f=v[1],g=Object(n.useState)(I),b=Object(m.a)(g,2),N=b[0],y=b[1],w=Object(n.useState)(D),x=Object(m.a)(w,2),k=x[0],O=x[1],j=Object(n.useState)(G),C=Object(m.a)(j,2),S=C[0],M=C[1],T=Object(o.a)({},N,{},k,{},S);Object(n.useEffect)((function(){var e=a.pathname.split("/")[2];p(e?Number(e)-1:0)}),[p,a]);var F=function(e){p(e)};return l.a.createElement("div",{className:"register"},l.a.createElement(d,null),l.a.createElement("div",{className:"register__activetab"},q.map((function(e,a){return l.a.createElement(s.b,{key:Math.random(),className:"link"},l.a.createElement(u,{index:a,text:e,active:a===c,changeTab:F}))}))),l.a.createElement("div",{className:"register__content"},l.a.createElement("div",null,l.a.createElement("div",{className:"register__content__preview ".concat(E?"--small":"--large")},l.a.createElement("div",{className:"register__content__preview__header"},l.a.createElement("span",null,"Model Preview"),l.a.createElement("i",{onClick:function(){f(!E)},className:E?"fa fa-eye":"fa fa-eye-slash"})),E?"":l.a.createElement("div",{className:"register__content__preview__card"},l.a.createElement(h,null)),l.a.createElement("div",{className:"register__content__preview__footer"},"preview the basic model based on the selected parameters parameters"))),l.a.createElement("div",{className:"register__content__form"},l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/train/(1)?",exact:!0,render:function(e){return l.a.createElement(R,Object.assign({},e,{stateChanger:y,state:N}))}}),l.a.createElement(i.a,{path:"/train/2",exact:!0,render:function(e){return l.a.createElement(A,Object.assign({},e,{state:k,stateChanger:O}))}}),l.a.createElement(i.a,{path:"/train/3",exact:!0,render:function(e){return l.a.createElement(L,Object.assign({},e,{state:S,stateChanger:M}))}}),l.a.createElement(i.a,{path:"/train/4",exact:!0,render:function(e){return l.a.createElement(B,Object.assign({},e,{state:T}))}})))))},W=t(240),K=t(241),V=t(236),Y=(t(206),{classification:["recall","precision","f1_score"]}),$=function(e){var a=e.title,t=e.metrics,n=e.type;return console.log(t),l.a.createElement("div",null,l.a.createElement("div",{className:"panel"},l.a.createElement("div",{className:"panel__tag"},n),l.a.createElement("div",{className:"panel__title"},a),l.a.createElement("div",{className:"panel__statistics"},Y[n].map((function(e){return l.a.createElement(V.a,{title:e.toUpperCase(),value:t?t[e]:0})})))))},z=t(235),H=t(239),Q=(t(219),z.a.Panel),X=l.a.createElement("p",{style:{paddingLeft:24}},"Further statistics will be displayed here .... coming soon");var Z=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1],c=function(){window.location.reload()},s=Object(n.useCallback)((function(){var e="open".concat(Date.now());H.a.open({message:"Error Fetching Models",description:"errormessage".concat(".\n we would keep trying, kindly check your internet"),key:e,onClose:c})}),[]);return Object(n.useEffect)((function(){P.get("/aiml/models/all/").then((function(e){var a=e.data.data.sort((function(e,a){return a.id-e.id}));r(a)})).catch((function(e){s(e.message)}))}),[s]),l.a.createElement("div",{className:"model"},l.a.createElement(d,null),l.a.createElement("div",{className:"--heading"},l.a.createElement("div",{className:"model__header"},l.a.createElement("span",null,"Models"),l.a.createElement(W.a,{twoToneColor:"#162359"})),l.a.createElement("div",{className:"model__subheader"},"Find the models which have been trained under your project here")),l.a.createElement(C.a,{tip:"Loading models",spinning:!t.length,delay:500},l.a.createElement("div",{className:"model__collapse"},l.a.createElement(z.a,{bordered:!1,defaultActiveKey:["1"],expandIcon:function(e){var a=e.isActive;return l.a.createElement(K.a,{rotate:a?90:0})},className:"site-collapse-custom-collapse"},t.map((function(e,a){return l.a.createElement(Q,{header:l.a.createElement(C.a,{tip:"Model Currently Training ",spinning:"MODEL_TRAINING"===e.status},l.a.createElement($,{title:e.name,metrics:e.metrics,type:e.type})),key:e.id,className:"site-collapse-custom-panel"},l.a.createElement("p",null,X))}))),",")))};var ee=function(){return l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:Z}),l.a.createElement(i.a,{path:"/train",component:J}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s.a,null,l.a.createElement(ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},98:function(e,a,t){e.exports=t.p+"static/media/samplepicture.5b586866.svg"},99:function(e,a,t){e.exports=t.p+"static/media/playIcon.038ce551.svg"}},[[137,1,2]]]);
//# sourceMappingURL=main.24cf085d.chunk.js.map