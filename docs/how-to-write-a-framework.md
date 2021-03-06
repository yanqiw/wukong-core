悟空框架创建过程记录
====

# 思考
## 框架要解决什么问题
随着微服务的出现，后端API的原子化，与前端展现层相关的业务层放在什么地方，变得开始诡异起来。 __《微服务设计》__中提到`针对前端的后端`的概念。希望借助一个小型的后端整合原子化的API，使前端摆脱API的海洋。但这个小后端的厚度，却仁者见仁智者见智。是采用针对每个前端做一个后端的策略，还是对所有相关业务的前端做一个通用后端。在工程实践中，根据不同情况，有不同的最佳实践。越独立的小后端，业务层的逻辑可以针对前端的特殊需求变更厚，前端越不需要业务层；相对的越通用的后端，业务的逻辑层会越薄，相应的一部分业务层会被放在前端代码中。但归根结底，为前端展现提供业务层服务的部分是要放在某个地方的。
悟空要解决的问题就是，当后端的业务层很薄，展现层的业务需要放在前端的情况下，如何管理好这个厚重的层，使前端代码结构更清晰，可维护性更高，同时不增加太多的新概念。


## 要带给开发者什么样的开发体验，方式，规则
一个框架，最终的归宿是在工程项目中。对于工程项目来说，低技术门槛，高开发效率，高稳定性，高可扩展性，高可维护性同等重要。
所以，框架带给开发者的并不只是封装复杂概念，降低入门难度。它更多的是带给开发者一种开发方式，一种统一的开发规则，提高开发者之间的合作效率，使项目的可维护性更高。同时，还要控制框架本身的复杂性，已提高稳定性。最后，适当的位置提供安全的可挂在扩展的钩子，让框架更加具有扩展性。

- 在抽象复杂概念层面，`悟空`希望封装redux, sage中的复杂概念给开发者提供更直观的view + control + model模型的框架。并解决redux消息监听模型中`消息和接口定义`低耦合带来的，接口不直观的问题。
- 在开发方式层面，`悟空`希望能通过统一的开发理念，规范化的目录规则和命名规则来使项目的分层清晰，开发规范的项目。
- 在稳定性层面， `悟空`尽量少的引入第三方包，并使用一种type（typescript或flow）技术来做类型检查。
- 在扩展层面，`悟空`希望已勾子的形式，在特定的环节给开发者安全的嵌入回调函数的机会，来统一的扩悟空框架的能力。

## 采用什么设计理念


## 如何选择技术
