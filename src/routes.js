const routes=[
    {path:"/",redirect:"/home"},
    {
        path: "/home",
        name:"home",
        component:()=>import("./view/home/index")
    },
    {
        path:"/blog",
        name:"blog",
        redirect: {name:"blogList"},
        component:()=>import("./view/blog/index"),
        children:[
            {
            path:"list",
            name:"blogList",
            component:()=>import("./view/blog/BolgList"),
            },
            {
                path:"view/:id",
                name:"blogView",
                props:true,
                component:()=>import("./view/blog/BlogDetail"),
            }]
    },
    {
        path: "/question",
        name:"question",
        component:()=>import("./view/question/index"),
    },
    {
        path: "/baidu",
        name:"baidu",
        component:()=>import("./view/baidu/index"),
        // redirect: "https://baidu.com"
    },
    {
        path: "/shop",
        name:"shop",
        component:()=>import("./view/shop/index")
    },
    {
        path: "/personal",
        name:"personal",
        component:()=>import("./view/personal/index")
    },
];
export default routes;
