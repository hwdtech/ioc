import store from "./Store";
import D from "./IDependency";
import IDependency from "./IDependency";

export const registerF: IDependency<void> = (params: {key: string, d: D}) => {
    const {key, d} = params;
    store.set(key, d);
};
