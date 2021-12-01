"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7777],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1739:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(7462),i=n(3366),s=(n(7294),n(3905)),o=["components"],r={id:"gator",title:"The gator CLI"},l=void 0,p={unversionedId:"gator",id:"version-v3.7.x/gator",isDocsHomePage:!1,title:"The gator CLI",description:"The gator CLI is a tool for evaluating Gatekeeper ConstraintTemplates and",source:"@site/versioned_docs/version-v3.7.x/gator.md",sourceDirName:".",slug:"/gator",permalink:"/gatekeeper/website/docs/gator",editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.7.x/gator.md",tags:[],version:"v3.7.x",frontMatter:{id:"gator",title:"The gator CLI"},sidebar:"version-v3.7.x/docs",previous:{title:"External Data",permalink:"/gatekeeper/website/docs/externaldata"},next:{title:"Want to help?",permalink:"/gatekeeper/website/docs/help"}},c=[{value:"Installation",id:"installation",children:[],level:2},{value:"The <code>gator test</code> subcommand",id:"the-gator-test-subcommand",children:[{value:"Writing Test Suites",id:"writing-test-suites",children:[],level:3},{value:"Suites",id:"suites",children:[],level:3},{value:"Tests",id:"tests",children:[],level:3},{value:"Cases",id:"cases",children:[],level:3},{value:"Usage",id:"usage",children:[],level:3}],level:2},{value:"Gotchas",id:"gotchas",children:[{value:"Duplicate violation messages",id:"duplicate-violation-messages",children:[],level:3},{value:"Matching is case-sensitive",id:"matching-is-case-sensitive",children:[],level:3},{value:"Referential constraints and Namespace-scoped resources",id:"referential-constraints-and-namespace-scoped-resources",children:[],level:3}],level:2},{value:"Platform Compatibility",id:"platform-compatibility",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"gator")," CLI is a tool for evaluating Gatekeeper ConstraintTemplates and\nConstraints in a local environment."),(0,s.kt)("p",null,"For now, the only subcommand is ",(0,s.kt)("inlineCode",{parentName:"p"},"gator test"),", which allows writing unit tests\nfor Constraints. We plan on adding more subcommands in the future."),(0,s.kt)("h2",{id:"installation"},"Installation"),(0,s.kt)("p",null,"To install ",(0,s.kt)("inlineCode",{parentName:"p"},"gator"),", you may either\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/releases"},"download the binary"),"\nrelevant to your system or build it directly from source."),(0,s.kt)("p",null,"To build from source:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"go get github.com/open-policy-agent/gatekeeper/cmd/gator\n")),(0,s.kt)("h2",{id:"the-gator-test-subcommand"},"The ",(0,s.kt)("inlineCode",{parentName:"h2"},"gator test")," subcommand"),(0,s.kt)("h3",{id:"writing-test-suites"},"Writing Test Suites"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"gator test")," organizes tests into three levels: Suites, Tests, and Cases:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"A Suite is a file which defines Tests."),(0,s.kt)("li",{parentName:"ul"},"A Test declares a ConstraintTemplate, a Constraint, and Cases to test the\nConstraint."),(0,s.kt)("li",{parentName:"ul"},"A Case defines an object to validate and whether the object is expected to\npass validation.")),(0,s.kt)("p",null,"Any file paths declared in a Suite are assumed to be relative to the Suite\nitself. Absolute paths are not allowed. Thus, it is possible to move around a\ndirectory containing a Suite, and the files it uses for tests."),(0,s.kt)("h3",{id:"suites"},"Suites"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper-library/blob/8765ec11c12a523688ed77485c7a458df84266d6/library/general/allowedrepos/suite.yaml"},"An example Suite file"),"."),(0,s.kt)("p",null,"To be valid, a Suite file must declare:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Suite\napiVersion: test.gatekeeper.sh/v1alpha1\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"gator test")," silently ignores files which do not declare these. A Suite may\ndeclare multiple Tests, each containing different Templates and Constraints.\nEach Test in a Suite is independent."),(0,s.kt)("h3",{id:"tests"},"Tests"),(0,s.kt)("p",null,"Each Suite contains a list of Tests under the ",(0,s.kt)("inlineCode",{parentName:"p"},"tests")," field."),(0,s.kt)("p",null,"A Test compiles a ConstraintTemplate, and instantiates a Constraint for the\nConstraintTemplate. It is an error for the Constraint to have a different type\nthan that defined in the ConstraintTemplate spec.crd.spec.names.kind, or for the\nConstraintTemplate to not compile."),(0,s.kt)("h3",{id:"cases"},"Cases"),(0,s.kt)("p",null,"Each Test contains a list of Cases under the ",(0,s.kt)("inlineCode",{parentName:"p"},"cases")," field."),(0,s.kt)("p",null,"A Case validates an object against a Constraint. The case may specify that the\nobject is expected to pass or fail validation, and may make assertions about\nthe returned violations (if any)."),(0,s.kt)("p",null,"A Case must specify ",(0,s.kt)("inlineCode",{parentName:"p"},"assertions")," and whether it expects violations. The simplest\nway to declare this is:"),(0,s.kt)("p",null,"The Case expects at least one violation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"assertions:\n- violations: yes\n")),(0,s.kt)("p",null,"The Case expects no violations:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"assertions:\n- violations: no\n")),(0,s.kt)("p",null,"Assertions contain the following fields, acting as conditions for each assertion\nto check."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"violations"),' is either "yes", "no", or a non-negative integer.',(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},'If "yes", at least one violation must otherwise match the assertion.'),(0,s.kt)("li",{parentName:"ul"},'If "no", then no violation messages must otherwise match the assertion.'),(0,s.kt)("li",{parentName:"ul"},'If a nonnegative integer, then exactly that many violations must match.\nDefaults to "yes".'))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"message")," matches violations containing the exact string specified. ",(0,s.kt)("inlineCode",{parentName:"li"},"message"),"\nis case-sensitive. If not specified or explicitly set to empty string, all\nmessages returned by the Constraint are considered matching.")),(0,s.kt)("p",null,"A Case may specify multiple assertions. For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"  - name: both-disallowed\n    object: samples/repo-must-be-openpolicyagent/disallowed_both.yaml\n    assertions:\n    - violations: 2\n    - message: initContainer\n      violations: 1\n    - message: container\n      violations: 1\n")),(0,s.kt)("p",null,"This Case specifies:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"There are exactly two violations."),(0,s.kt)("li",{parentName:"ul"},'There is exactly one violation containing "initContainer".'),(0,s.kt)("li",{parentName:"ul"},'There is exactly one violation containing "container".')),(0,s.kt)("p",null,"It is valid to assert that no violations match a specified message. For example,\nthe below is valid:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"- violations: yes\n- violations: no\n  message: foobar\n")),(0,s.kt)("p",null,'This Case specifies that there is at least one violation, and no violations\ncontain the string "foobar".'),(0,s.kt)("p",null,"More examples of working ",(0,s.kt)("inlineCode",{parentName:"p"},"gator test")," suites are available in the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper-library/tree/master/library"},"gatekeeper-library"),"\nrepository."),(0,s.kt)("h3",{id:"usage"},"Usage"),(0,s.kt)("p",null,"To run a specific suite:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"gator test suite.yaml\n")),(0,s.kt)("p",null,"To run all suites in the current directory and all child directories\nrecursively"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"gator test ./...\n")),(0,s.kt)("p",null,"To only run tests whose full names contain a match for a regular expression, use\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"run")," flag:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'gator test path/to/suites/... --run "disallowed"\n')),(0,s.kt)("p",null,"Run ",(0,s.kt)("inlineCode",{parentName:"p"},"gator test --help")," for more information."),(0,s.kt)("h2",{id:"gotchas"},"Gotchas"),(0,s.kt)("h3",{id:"duplicate-violation-messages"},"Duplicate violation messages"),(0,s.kt)("p",null,"Rego de-duplicates identical violation messages. If you want to be sure that\na test returns multiple violations, use a unique message for each violation.\nOtherwise, if you specify an exact number of violations, the test may fail."),(0,s.kt)("h3",{id:"matching-is-case-sensitive"},"Matching is case-sensitive"),(0,s.kt)("p",null,"Message declarations are case-sensitive. If a test fails, check that the\nexpected message's capitalization exactly matches the one in the template."),(0,s.kt)("h3",{id:"referential-constraints-and-namespace-scoped-resources"},"Referential constraints and Namespace-scoped resources"),(0,s.kt)("p",null,"Gator cannot determine if a type is Namespace-scoped or not, so it does not\nassign objects to the default Namespace automatically. Always specify\n",(0,s.kt)("inlineCode",{parentName:"p"},"metadata.namespace")," for Namespace-scoped objects to prevent test failures, or\nto keep from specifying templates which will fail in a real cluster."),(0,s.kt)("h2",{id:"platform-compatibility"},"Platform Compatibility"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"gator")," is only automatically tested on Linux for each commit. If you want to\nuse ",(0,s.kt)("inlineCode",{parentName:"p"},"gator")," on other systems, let us know by replying to\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/issues/1655"},"this issue"),"."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"gator test")," has been manually tested on Windows and works as of\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/commit/b3ed94406583c85f3102c54a32f362d27f76da96"},"this commit"),".\nContinued functionality is not guaranteed."),(0,s.kt)("p",null,"File paths which include backslashes are not portable, so suites using such\npaths will not work as intended on Windows."))}d.isMDXComponent=!0}}]);