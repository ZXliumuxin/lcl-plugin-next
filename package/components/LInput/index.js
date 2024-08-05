import LInput from "./index.vue"
LInput.install = (app) => {
    app.component(LInput.name, LInput)
    return app
}
export default LInput