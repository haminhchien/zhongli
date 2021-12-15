(this.webpackJsonpclient_admin=this.webpackJsonpclient_admin||[]).push([[8],{301:function(e,t,n){"use strict";n.d(t,"g",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return p}));var r=n(37),u=n(64).a.injectEndpoints({endpoints:function(e){return{searchMentors:e.mutation({query:function(e){return{url:"/group",method:"GET",params:{query:e||"",groupType:"MENTORGROUP"}}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return{type:r.f,id:e.groupId}}))}}),getMentorInfo:e.query({query:function(e){return{url:"/mentor/info",method:"GET",params:{groupId:e}}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{type:r.f,id:e.groupId}]}}),getMentorGroupStudents:e.query({query:function(e){return{url:"/group/user",method:"GET",params:{groupId:e,role:"STUDENT"}}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>2?arguments[2]:void 0;return e.map((function(e){return{type:r.h,id:e.userId}})).concat([{type:r.i,id:t}])}}),addNewMentorGroup:e.mutation({query:function(e){return{url:"/mentor",method:"POST",body:{mentorId:e.mentorId,groupName:e.groupName}}},invalidatesTags:function(){var e=arguments.length>2?arguments[2]:void 0;return[{type:r.g,id:e.mentorId}]}}),removeMentorGroup:e.mutation({query:function(e){return{url:"/group",method:"DELETE",params:{groupId:e.groupId}}},invalidatesTags:function(){var e=arguments.length>2?arguments[2]:void 0;return[{type:r.f,id:e.groupId}]}}),changeGroupName:e.mutation({query:function(e){return{url:"/group",method:"PUT",body:{groupId:e.groupId,groupName:e.groupName}}},invalidatesTags:function(e,t,n){return[{type:r.f,id:n.groupId}]}}),changeMentorId:e.mutation({query:function(e){var t=e.groupId;e.currentMentorId;return{url:"/mentor",method:"PUT",body:{groupId:t,mentorId:e.newMentorId}}},invalidatesTags:function(e,t,n){return[{type:r.f,id:n.groupId},{type:r.g,id:n.currentMentorId},{type:r.g,id:n.newMentorId}]}})}}}),a=u.useSearchMentorsMutation,o=u.useGetMentorGroupStudentsQuery,c=u.useGetMentorInfoQuery,i=u.useAddNewMentorGroupMutation,s=u.useRemoveMentorGroupMutation,d=u.useChangeGroupNameMutation,p=u.useChangeMentorIdMutation},302:function(e,t,n){"use strict";n.d(t,"h",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"g",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"b",(function(){return l}));var r=n(37),u=n(64).a.injectEndpoints({endpoints:function(e){return{searchCourses:e.mutation({query:function(e){return{url:"/group",method:"GET",params:{query:e||"",groupType:"COURSE"}}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return{type:r.a,id:e.groupId}}))}}),getCourseInfo:e.query({query:function(e){return{url:"/course/info",method:"GET",params:{groupId:e}}},providesTags:function(e,t,n){return[{type:r.a,id:n}]}}),getCourseStudents:e.query({query:function(e){return{url:"/group/user",method:"GET",params:{groupId:e,role:"STUDENT"}}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>2?arguments[2]:void 0;return e.map((function(e){return{type:r.h,id:e.userId}})).concat([{type:r.i,id:t}])}}),addNewCourse:e.mutation({query:function(e){return{url:"/course",method:"POST",body:{courseName:e.courseName,timeSlot:e.timeSlot,lecturerId:e.lecturerId}}},invalidatesTags:function(){var e=arguments.length>2?arguments[2]:void 0;return[{type:r.b,id:e.lecturerId}]}}),removeCourse:e.mutation({query:function(e){return{url:"/group",method:"DELETE",params:{groupId:e.groupId}}},invalidatesTags:function(){var e=arguments.length>2?arguments[2]:void 0;return[{type:r.a,id:e.groupId}]}}),changeCourseName:e.mutation({query:function(e){return{url:"/group",method:"PUT",body:{groupId:e.groupId,groupName:e.groupName}}},invalidatesTags:function(e,t,n){return[{type:r.a,id:n.groupId}]}}),changeCourseTimeSlot:e.mutation({query:function(e){return{url:"/course/timeslot",method:"PUT",body:{groupId:e.groupId,timeSlot:e.timeSlot}}},invalidatesTags:function(e,t,n){return[{type:r.a,id:n.groupId}]}}),changeCourseLecturer:e.mutation({query:function(e){var t=e.groupId;e.currentLecturerId;return{url:"/course/lecturer",method:"PUT",body:{groupId:t,lecturerId:e.newLecturerId}}},invalidatesTags:function(e,t,n){return[{type:r.a,id:n.groupId},{type:r.b,id:n.currentLecturerId},{type:r.b,id:n.newLecturerId}]}})}}}),a=u.useSearchCoursesMutation,o=u.useGetCourseInfoQuery,c=u.useGetCourseStudentsQuery,i=u.useAddNewCourseMutation,s=u.useRemoveCourseMutation,d=u.useChangeCourseNameMutation,p=u.useChangeCourseTimeSlotMutation,l=u.useChangeCourseLecturerMutation},347:function(e,t,n){"use strict";n.r(t);var r=n(299),u=n(40),a=n(344),o=n(155),c=n(10),i=n(0),s=n(15),d=n(300),p=n(296),l=n(39),f=n.n(l),m=n(53),b=n(72),h=n(54),j=n(346),g=n(71),O=n(283),I=n(286),y=n(95),v=n(292),w=n(295),x=n(1),S=b.b().shape({id:b.c().required("This field is required."),name:b.c().required("This field is required."),password:b.c().required("This field is required."),passwordConfirmation:b.c().test("passwords-match","Passwords must match",(function(e){return this.parent.password===e})),address:b.c().required("This field is required."),facultyId:b.c().required("This field is required.")}),C={id:"",name:"",password:"",passwordConfirmation:"",address:"",facultyId:""},T=function(e){var t=e.show,n=e.handleClose,r=Object(s.d)(),a=Object(w.g)(),o=Object(c.a)(a,1)[0],i=Object(d.a)(),p=Object(c.a)(i,1)[0],l=function(){var e=Object(m.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(t).unwrap();case 2:return n=e.sent,e.abrupt("return",n.map((function(e){return{value:e.groupId,label:e.groupName}})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(m.a)(f.a.mark((function e(t,a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(t);case 3:n(),r(Object(u.n)(t.id)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(x.jsxs)(j.a,{show:t,onHide:n,children:[Object(x.jsx)(j.a.Header,{closeButton:!0,children:Object(x.jsx)(j.a.Title,{children:"Add new student"})}),Object(x.jsx)(h.c,{initialValues:C,onSubmit:b,validationSchema:S,children:function(e){return Object(x.jsxs)(g.a,{noValidate:!0,onSubmit:e.handleSubmit,onReset:e.handleReset,children:[Object(x.jsxs)(j.a.Body,{children:[Object(x.jsx)(h.b,{name:"id",component:y.a,label:"Student ID",placeholder:"ITITIU18302..."}),Object(x.jsx)(h.b,{name:"name",component:y.a,label:"Name",placeholder:"Le Van A..."}),Object(x.jsx)(h.b,{name:"address",component:y.a,label:"Address",placeholder:"District 5, Ho Chi Minh City..."}),Object(x.jsx)(h.b,{name:"password",component:y.a,placeholder:"New password...",type:"password",label:"Password"}),Object(x.jsx)(h.b,{name:"passwordConfirmation",component:y.a,placeholder:"Type password again...",type:"password",label:"Password confirmation"}),Object(x.jsx)(h.b,{name:"facultyId",component:v.a,loadOptions:l,label:"Faculty"})]}),Object(x.jsxs)(j.a.Footer,{children:[Object(x.jsx)(O.a,{variant:"secondary",onClick:n,children:"Cancel"}),Object(x.jsxs)(O.a,{variant:"primary",type:"submit",children:[e.isSubmitting&&Object(x.jsx)(I.a,{animation:"border",as:"span",role:"status",size:"sm"}),"Submit"]})]})]})}})]})},M=function(){var e=Object(s.d)(),t=Object(d.m)(),n=Object(c.a)(t,2),r=n[0],a=n[1].data,o=Object(s.e)(u.i),l=Object(i.useState)(!1),f=Object(c.a)(l,2),m=f[0],b=f[1];return Object(x.jsxs)(i.Fragment,{children:[Object(x.jsx)(p.a,{label:"Student",items:a,selectedItemKey:o,keySelector:function(e){return e.id},nameSelector:function(e){return e.name},showKey:!0,onSearch:function(e){return r(e)},onAdd:function(){return b(!0)},onSelect:function(t){return e(Object(u.n)(t.id))}}),Object(x.jsx)(T,{show:m,handleClose:function(){return b(!1)}})]})},q=n(301),N=n(297),k=n(314),G=n(291),E=n(315),F=n(293),P=function(e){var t=e.selectedStudentId,n=Object(d.j)(t),r=n.data,a=n.isFetching,o=Object(d.h)(t),p=o.data,l=o.isFetching,b=Object(d.i)(t),h=b.data,j=b.isFetching,g=Object(d.l)(),O=Object(c.a)(g,1)[0],I=Object(d.d)(),y=Object(c.a)(I,1)[0],v=Object(d.f)(),S=Object(c.a)(v,1)[0],C=Object(d.e)(),T=Object(c.a)(C,1)[0],M=Object(d.c)(),P=Object(c.a)(M,1)[0],R=Object(w.g)(),U=Object(c.a)(R,1)[0],L=Object(q.g)(),A=Object(c.a)(L,1)[0],D=Object(i.useState)(!1),Q=Object(c.a)(D,2),V=Q[0],B=Q[1],H=Object(i.useState)(!1),J=Object(c.a)(H,2),K=J[0],_=J[1],z=Object(i.useState)(!1),W=Object(c.a)(z,2),X=W[0],Y=W[1],Z=Object(i.useState)(!1),$=Object(c.a)(Z,2),ee=$[0],te=$[1],ne=Object(i.useState)(!1),re=Object(c.a)(ne,2),ue=re[0],ae=re[1],oe=a||l||j,ce=Object(s.d)();return oe?Object(x.jsx)(x.Fragment,{}):Object(x.jsxs)(i.Fragment,{children:[Object(x.jsx)(N.a,{label:"Student",fields:[{label:"Name",content:h.name},{label:"ID",content:h.id},{label:"PSID",content:h.psid},{label:"Address",content:h.address}],links:[{label:"Mentor",content:"".concat(r.mentorName," (").concat(r.groupName,")"),destination:"/mentor/".concat(r.groupId||"")},{label:"Faculty",content:p.facultyName,destination:"/faculty/".concat(p.groupId||"")}],buttons:[{label:"Edit basic info",onClick:function(){_(!0)}},{label:"Change password",onClick:function(){Y(!0)}},{label:"Change mentor",onClick:function(){te(!0)}},{label:"Change faculty",onClick:function(){ae(!0)}},{label:"Remove student",onClick:function(){B(!0)}}]}),Object(x.jsx)(E.a,{title:"Edit student info",show:K,handleClose:function(){_(!1)},handleSubmit:function(){var e=Object(m.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.address,e.next=3,y({id:h.id,name:n,address:r});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),initialValues:{name:h.name,address:h.address}}),Object(x.jsx)(k.a,{title:"Change student password",show:X,handleClose:function(){Y(!1)},handleSubmit:function(){var e=Object(m.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S({userId:h.id,password:t});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),Object(x.jsx)(F.a,{title:"Change mentor group",show:ee,handleClose:function(){te(!1)},handleSubmit:function(){var e=Object(m.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T({id:h.id,currentMentorGroupId:r.groupId,newMentorGroupId:t});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),handleSearchItems:function(){var e=Object(m.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t).unwrap();case 2:return n=e.sent,e.abrupt("return",n.map((function(e){return{value:e.groupId,label:e.groupName}})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),Object(x.jsx)(F.a,{title:"Change student faculty",show:ue,handleClose:function(){ae(!1)},handleSubmit:function(){var e=Object(m.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P({id:h.id,currentFacultyId:p.groupId,newFacultyId:t});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),handleSearchItems:function(){var e=Object(m.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(t).unwrap();case 2:return n=e.sent,e.abrupt("return",n.map((function(e){return{value:e.groupId,label:e.groupName}})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),Object(x.jsx)(G.a,{title:"Remove student?",content:"Information related to this student cannot be recovered.",show:V,handleClose:function(){return B(!1)},handleSubmit:Object(m.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ce(Object(u.n)(null)),e.next=3,O({userId:h.id}).unwrap();case 3:case"end":return e.stop()}}),e)})))})]})},R=n(302),U=n(298),L=function(e){var t=e.selectedStudentId,n=Object(d.g)(t),r=n.data,u=n.isFetching,a=Object(d.k)(),o=Object(c.a)(a,1)[0],i=Object(d.b)(),s=Object(c.a)(i,1)[0],p=Object(R.h)(),l=Object(c.a)(p,1)[0];return u?Object(x.jsx)(x.Fragment,{}):Object(x.jsx)(U.a,{label:"Course",items:r,keySelector:function(e){return e.groupId},nameSelector:function(e){return e.courseName},linkSelector:function(e){return"/course/".concat(e.groupId)},showButtons:!0,handleRemove:function(){var e=Object(m.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o({userId:t,groupId:n.groupId}).unwrap();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),handleAdd:function(){var e=Object(m.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({userId:t,groupId:n}).unwrap();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),handleSearchItems:function(){var e=Object(m.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t).unwrap();case 2:return n=e.sent,e.abrupt("return",n.map((function(e){return{value:e.groupId,label:e.groupName}})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})};t.default=function(){var e=Object(s.d)(),t=Object(s.e)(u.i);return Object(r.a)({selectedItemId:t,setSelectedItemId:function(t){e(Object(u.n)(t))}}),Object(x.jsxs)(a.a,{className:"justify-content-md-center my-3",children:[Object(x.jsx)(o.a,{md:"3",children:Object(x.jsx)(M,{})}),t?Object(x.jsxs)(i.Fragment,{children:[Object(x.jsx)(o.a,{md:"4",children:Object(x.jsx)(P,{selectedStudentId:t})}),Object(x.jsx)(o.a,{md:"4",children:Object(x.jsx)(L,{selectedStudentId:t})})]}):Object(x.jsxs)(i.Fragment,{children:[Object(x.jsx)(o.a,{md:"4"}),Object(x.jsx)(o.a,{md:"4"})]})]})}}}]);
//# sourceMappingURL=8.791d34a6.chunk.js.map