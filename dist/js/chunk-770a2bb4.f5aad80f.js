(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-770a2bb4"],{"25a5":function(e,t,n){"use strict";n.r(t);n("b0c0");var a=n("7a23"),o=Object(a["withScopeId"])("data-v-72084ab0");Object(a["pushScopeId"])("data-v-72084ab0");var r=Object(a["createTextVNode"])("初始密码为123456"),c=Object(a["createTextVNode"])("取消"),i=Object(a["createTextVNode"])("保存");Object(a["popScopeId"])();var l=o((function(e,t,n,l,u,s){var d=Object(a["resolveComponent"])("a-input"),b=Object(a["resolveComponent"])("a-form-item"),p=Object(a["resolveComponent"])("a-form"),f=Object(a["resolveComponent"])("a-button"),m=Object(a["resolveComponent"])("a-config-provider"),v=Object(a["resolveComponent"])("a-modal");return Object(a["openBlock"])(),Object(a["createBlock"])(v,{class:"main",title:e.props.isEdit?"编辑教师":"添加教师",visible:e.props.visible,"onUpdate:visible":t[3]||(t[3]=function(t){return e.props.visible=t}),onCancel:e.onCancel},{footer:o((function(){return[Object(a["createVNode"])(m,{"auto-insert-space-in-button":!1},{default:o((function(){return[Object(a["createVNode"])(f,{class:"btns-w-80",key:"back",type:"primary",ghost:"",onClick:e.onCancel},{default:o((function(){return[c]})),_:1},8,["onClick"])]})),_:1}),Object(a["createVNode"])(m,{"auto-insert-space-in-button":!1},{default:o((function(){return[Object(a["createVNode"])(f,{class:"btns-w-80",key:"submit",type:"primary",onClick:e.onSubmit},{default:o((function(){return[i]})),_:1},8,["onClick"])]})),_:1})]})),default:o((function(){return[Object(a["createVNode"])(p,{"label-col":e.labelCol,"wrapper-col":e.wrapperCol,model:e.formModel,rules:e.formRule},{default:o((function(){return[Object(a["createVNode"])(b,Object(a["mergeProps"])({label:"账号",name:"code"},e.validateInfos.code),{default:o((function(){return[Object(a["createVNode"])(d,{value:e.formModel.code,"onUpdate:value":t[1]||(t[1]=function(t){return e.formModel.code=t}),placeholder:"填写账号",maxlength:20,disabled:e.props.isEdit},null,8,["value","disabled"])]})),_:1},16),Object(a["createVNode"])(b,Object(a["mergeProps"])({label:"姓名",name:"name"},e.validateInfos.name),{default:o((function(){return[Object(a["createVNode"])(d,{value:e.formModel.name,"onUpdate:value":t[2]||(t[2]=function(t){return e.formModel.name=t}),placeholder:"填写姓名",maxlength:20},null,8,["value"])]})),_:1},16),Object(a["createVNode"])(b,{label:"密码"},{default:o((function(){return[r]})),_:1})]})),_:1},8,["label-col","wrapper-col","model","rules"])]})),_:1},8,["title","visible","onCancel"])})),u=(n("4d63"),n("ac1f"),n("25f0"),n("3b18"),n("f64c")),s=(n("96cf"),n("1da1")),d=(n("5704"),n("b558")),b=(n("f2ef"),n("3af3")),p=(n("6ba6"),n("5efb")),f=(n("d2a3"),n("4df5")),m=(n("cd17"),n("ed3b")),v=n("002b"),j=n("5502"),O=Object(a["defineComponent"])({components:{aModal:m["a"],aConfigProvider:f["a"],aButton:p["a"],aForm:b["a"],aFormItem:b["a"].Item,aInput:d["a"]},props:{isEdit:{type:Boolean,defalut:function(){return!1}},visible:{type:Boolean,defalut:function(){return!1}}},setup:function(e,t){var n=Object(j["b"])(),o=Object(a["reactive"])({name:void 0,code:void 0,classId:void 0,isTeacher:!0}),r=Object(a["reactive"])({name:[{required:!0,message:"请填写姓名",trigger:"blur"},{min:2,max:20,message:"用户名称应在2~20字之间",trigger:"blur"}],code:[{required:!0,message:"请填写账号",trigger:"blur"},{min:2,max:20,message:"账号应在2~20字之间",trigger:"blur"},{pattern:new RegExp(/^[0-9a-zA-Z]+$/),message:"账号只能为数字或英文",trigger:"change"}]}),c=Object(v["a"])(o,r),i=c.resetFields,l=c.validate,d=c.validateInfos,b=function(r){r.preventDefault(),l().then(Object(s["a"])(regeneratorRuntime.mark((function r(){var c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return c=e.isEdit?"user/changeUserInfo":"user/createUser",r.next=3,n.dispatch(c,Object(a["toRaw"])(o)).then((function(){u["a"].success(e.isEdit?"编辑成功":"添加成功"),i(),t.emit("on-submit")}));case 3:case"end":return r.stop()}}),r)}))))},p=function(){i(),t.emit("on-cancel")};return Object(a["watch"])((function(){return e.visible}),(function(){e.isEdit&&e.visible&&Object.assign(o,n.state.user.teacherInfo)}),{deep:!0}),{props:e,onSubmit:b,onCancel:p,formModel:o,formRule:r,validateInfos:d,labelCol:{span:5},wrapperCol:{span:17}}}});O.render=l,O.__scopeId="data-v-72084ab0";t["default"]=O},"8b79":function(e,t,n){},d2a3:function(e,t,n){"use strict";n("8b79")}}]);
//# sourceMappingURL=chunk-770a2bb4.f5aad80f.js.map