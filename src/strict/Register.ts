import Key from "./IKey";
import store from "./Store";
import D from "./Dependency";

function Register<P, T>(this: store, key: string, d: D<P, T> ) {
    this.set(key, d);
    return {d: key} as Key<P, T>;
};

export default Register;
