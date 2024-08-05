import LButton from "./index.vue"
LButton.install = (app) => {
    app.component(LButton.name, LButton)
    return app
}
export default LButton