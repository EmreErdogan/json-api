(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./docs/40-HOCS.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return i}));var o=t("../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(t("../../node_modules/react/index.js"),t("../../node_modules/@mdx-js/react/dist/esm.js")),s=t("./src/utils/Parameters.tsx"),a={};function i(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object.assign({},a,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"high-order-components"},"High Order Components"),Object(r.b)("h2",{id:"withautorequest"},"withAutoRequest()"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"withAutoRequest")," triggers and manages JasonAPI actions. With it, you get caching,\nloading status management, and error handling."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import { withAutoRequest, WithAutoRequestInjectedProps } from 'jason-api';\nimport { fetchUser } from './yourActions';\n\ninterface User extends WithAutoRequestInjectedProps<UserResource> {\n    id: string;\n}\n\nconst User = ({\n    request,\n    refetch, // Re-run your queryFactory.\n}) => {\n    const { status, response } = request;\n    return status === \"loading\" ? (\n        <p>Loading...</p>\n    ) : status === \"success\" ? (\n        <div>\n            <h1>\n                {response.data.attributes.firstName}\n                {response.data.attributes.lastName}\n            </h1>\n            <p>{response.data.attributes.email}</p>\n        </div>\n    ) : null;\n}\n\nconst enhance = withAutoRequest({\n    // fetchUser should return a JasonAPI request action.\n    actionFactory: ({ id }) => fetchUser(id),\n    expandResourceObjects: true,\n    propsToWatch: ['id'],\n});\n\nconst EnhancedUser = enhance(User);\n")),Object(r.b)("p",null,"Now, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"EnhancedUser")," component wherever you may need them.\n",Object(r.b)("inlineCode",{parentName:"p"},'<EnhancedUser id="12345" />'),"."),Object(r.b)("h3",{id:"options"},"Options"),Object(r.b)(s.a,{parameters:[{name:"queryFactory",required:!0,description:"A function that receives the Component' s props and returns a `jasonApiRequest()` action."},{name:"cacheScheme",required:!1,description:"How requests should be cached.",default:"cacheFirst"},{name:"expandResourceObjects",required:!1,description:"\n                By default, response data will only include the `type` and `id` of the\n                resource object. This helps in optimization. If you would like to include\n                the full response, set this to `true`.\n            ",default:"false"},{name:"onError",required:!1,description:""},{name:"onSuccess",required:!1,description:""}],mdxType:"Parameters"}),Object(r.b)("h2",{id:"withitem"},"withItem()"),Object(r.b)("p",null,"Grab a previously fetched, single resource object from the JasonAPI redux store.\nYou can either explicity state the type and id of the resouce object you want\nto grab, or you can pass in a simplified resource object via the ",Object(r.b)("inlineCode",{parentName:"p"},"data")," prop\nto get the expanded resource object."),Object(r.b)("p",null,"Your Component will receive your resource object in the ",Object(r.b)("inlineCode",{parentName:"p"},"data")," prop, similar\nto ",Object(r.b)("inlineCode",{parentName:"p"},"withAutoRequest")," above. However, you will not receive ",Object(r.b)("inlineCode",{parentName:"p"},"isLoading"),", etc., since\n",Object(r.b)("inlineCode",{parentName:"p"},"withItem")," does not trigger an async request."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import { withItem } from 'jason-api';\n\nconst enhance = withItem<UserResource>({\n    // Optional if using the `data` prop method.\n    resourceType: 'users',\n\n    // Optional if you want to use the `id` or `data` prop methods shown below.\n    resourceId: '12345',\n});\n\nconst EnhancedUser = enhance(YourUserComponent);\n\n// If you included `resourceId` in your options.\n<EnhancedUser />\n\n// If you did not include `resourceId` in your options,\n// or you want to overwrite it.\n<EnhancedUser id=\"12345\" />\n\n// Useful for iterating over the Resource Identifiers\n// returned from a `withAutoRequest()` collection response.\n<EnhancedUser data={{ type: 'users', id: '12345' }} />\n")),Object(r.b)("h2",{id:"withcollection"},"withCollection()"),Object(r.b)("h3",{id:"basic-usage"},"Basic Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import { withCollection, WithCollectionInjectedProps } from 'jason-api';\nimport { User } from './your-components';\nimport { UserResource } from './your-types';\n\ntype UserListProps = WithCollectionInjectedProps<UserResource>;\n\nconst UserList: React.FunctionComponent<UserListProps> = ({\n    data,\n}) => (\n    <div>\n        <h1>Users</h1>\n\n        {data.map(user => (\n            <User key={user.id} data={user} />\n        ))}\n    </div>\n);\n\nconst EnhancedUserList = withCollection({ resourceType: 'users' })(UserList);\n\n")),Object(r.b)("h3",{id:"options-1"},"Options"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"const enhance = withCollection({\n    resourceType: 'users',\n\n    // Optional if you want to set it dynamically with\n    // the `ids` prop on your enhanced Component.\n    ids: ['12345', '54321'],\n\n    // Unless set to `true`, your resource objects will be simplified\n    // and returned with only the `type` and `id` props. You will get\n    // more effecient React renders if you iterate over these and use\n    // `withItem` to fetch the complete data on the item-level.\n    expandResourceObjects: false,\n});\n\nconst EnhancedUsers = enhance(Users);\n\n// If you included `ids` in your options above, those will be returned.\n// If not, all resource objects of the given type will be returned.\n<EnhancedUsers />\n\n// If you want to set id's dynamically.\n<EnhancedUsers ids={['12345', '54321']} />\n")))}i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/40-HOCS.mdx"}}),i.isMDXComponent=!0},"./src/utils/Parameters.tsx":function(e,n,t){"use strict";var o=t("../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),r=t("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),s=t("../../node_modules/react/index.js"),a=t.n(s);function i(){var e=Object(o.a)(["\n    td {\n        padding: 1em;\n    }\n\n    thead {\n        font-weight: bold;\n\n        td {\n            background-color: #808080;\n            color: #fff;\n        }\n    }\n\n    tbody {\n        td {\n            background-color: #f7f7f7;\n        }\n\n        tr:nth-child(even) td {\n            background-color: #f0f0f0;\n        }\n    }\n"]);return i=function(){return e},e}var c=function(e){var n=e.parameters,t=n.some((function(e){return void 0!==e.default})),o=n.some((function(e){return void 0!==e.required}));return a.a.createElement(u,null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("td",null,"Name"),a.a.createElement("td",null,"Description"),o&&a.a.createElement("td",null,"Required"),t&&a.a.createElement("td",null,"Default"))),a.a.createElement("tbody",null,n.map((function(e){return a.a.createElement("tr",null,a.a.createElement("td",null,e.name),a.a.createElement("td",null,e.description),o&&a.a.createElement("td",null,e.required?"Yes":"No"),t&&a.a.createElement("td",null,e.default))}))))};n.a=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Parameters",filename:"src/utils/Parameters.tsx"}});var u=r.d.table(i())}}]);
//# sourceMappingURL=docs-40-hocs.16b8c019bc314385df31.js.map