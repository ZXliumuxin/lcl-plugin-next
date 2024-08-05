# Button 按钮

常用的操作按钮

# 基础用法

使用 type 来定义按钮的样式

::: demo
button/base
:::

# 禁用状态

使用 disabled 来定义按钮的禁用状态

::: demo
button/disabled
:::

# 控制大小

使用 size 来定义按钮的大小，默认三种大小：large、medium、small

::: demo
button/size
:::

# Button 方法

## Button 属性

| 参数     | 说明     | 类型    | 可选值                                        | 默认值 |
| -------- | -------- | ------- | --------------------------------------------- | ------ |
| type     | 按钮类型 | String  | primary、success、warning、danger、info、text | -      |
| size     | 按钮大小 | String  | large、medium、small                          | medium |
| disabled | 是否禁用 | Boolean | true、false                                   | false  |

## Button 插槽

| 插槽名  | 说明     |
| ------- | -------- |
| default | 按钮内容 |

## Button 方法

| 方法名 | 说明     | 类型     | 返回值 |
| ------ | -------- | -------- | ------ |
| click  | 点击事件 | function | event  |
