import "/@/theme/index.scss"
import "/@/assets/iconfont/iconfont.css"
import LButton from "./components/LButton";
import LInput from "./components/LInput";

// 所有组件列表
const components = [LButton, LInput];
// 定义 install 方法
const install = (app) => {
	for (const component of components) {
		app.component(component.name, component)
	}
}
export { LButton, LInput }; //实现按需引入

export default install//实现全局引入
