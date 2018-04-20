# wukong-core
wukong is a react + redux + saga framework. It used to build react and react native application under a unified standard.

`wukong-core` includes the core logic of the framework. It handle the namespace of redux and saga, loader of the business module. 

# Why I should use it?
Normally,  we start a react project from a simple `react + redux` sturcture. As the business growing, you find that the business logic is splited in react and redux, you want to find a elegent way to manage those code. The Saga is introduced to the project, and you can get a cup of cofee to review the beautiful code. The business growing fast, you find that even with saga,  but the action type is hard to manage, and define the action creator, which is a kind of interfact, became
very important, as react layer need to know which action should be call, and what's kind of payload need to be passed to saga layer, and u lost in the react, sage, action, reducer files, as you need to open all of them to know what's going on, and how to handle one simple business logic.

`WuKong` is the framwork to simplify those things. You can just define the interface, and wukong will help u to manage the other things, includes manage the namespace of one business module, manage the type of saga and reducer, manage the business module loading to the app. 

