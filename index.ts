import D from "./src/core/IDependency";
import store from "./src/core/Store";
import Register from "./src/strict/Register";
import Resolve from "./src/strict/Resolve";

function IoC<P, T>(key: TemplateStringsArray): D<T> {
    return store.get<P, T>(key[0]);
}

export const strict = {Register, Resolve};

export default IoC;
