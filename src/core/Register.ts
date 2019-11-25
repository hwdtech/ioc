import store from "./Store";
import D from "./IDependency";
import IDependency from "./IDependency";

export const registerF: IDependency<void> = (params: {key: string, dependency: D}) => {
    const {key, dependency} = params;
    store.set(key, dependency);
};
