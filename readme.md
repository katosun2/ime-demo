#### 模拟键盘输入 v 1.2 

By Ryu

###### 注意事项：

	- 仅支持 type="text" 、type="password" 的input 标签
	- 支持 textarea 标签
	- 务必在标签上添加属性 readonly=""，避免手机原生输入法弹出
    - 如果使用vue, input 务必将id和v-model值统一，并保持在 $data 第一层

###### DEMO:

[http://katosun2.github.io/ime-demo/](http://katosun2.github.io/ime-demo/)

###### 用法：

	var ime = IME(opts):
    
###### opts对象参数：

| 参数名 | 类型 | 可选 | 默认 | 说明 |
|--------|--------|--------|--------|--------|
|  putWrap     |   Object     |   是     |  $(document) | 所有输入框的外容器 |
|  imeWrap     |   Object     |   否     |  无 | 输入法外容器 |
|  targets     |   Array     |   是     |  ['input[type="text"]', 'input[type="text"]', 'textarea'] | 需要支持模拟输入的输入框类合集， |
|  isCycle     |   Boolean     |   是     |  false | 下一个，上一个是否循环跳转 |
|  eventName     |   String     |   是     |  click | 按钮点击事件名 |
|  result     |   Function     |   是     |  无 | 新值回值，返回(key, val) |
|  ok     |   Function     |   是     |  无 | 计算按钮处理，需要自定义功能 |
|  vueObj     |   Object     |   是     |  无 | 如果实例是一个vue，需要传入来 |


###### 用例：
	var ime = IME({
        putWrap: $(document),
        imeWrap: $('#ime'),
        eventName: 'click',
        ok: function(){
            /*console.log(333);*/
        },
        result: function(key, val){
            /*console.log(key, val);*/
        }
    });

###### BUG：

1. 当输入的长度超过输入框的大小的时候，无法获取光标位置



