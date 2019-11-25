import D from "./src/core/IDependency";
import store from "./src/core/Store";
import _ from "lodash"
import Register from "./src/strict/Register"
import Resolve from "./src/strict/Resolve"
import Store from "./src/strict/Store"

function IoC<T>(key: TemplateStringsArray): D<T> {
    return store.get<T>(key[0]);
}


let strictStore: Store

export function useStrict() {
    strictStore = new Store()
    const register = _.bind(Register, strictStore)
    const resolve = _.bind(Resolve, strictStore)
    return {resolve, register}
}

export default IoC;
