import Key from "./IKey";
import store from "./Store";
import D from "./Dependency";

const Register = <P, T>(key: string, d: D<P, T> ) => {
    store.set(key, d);
    return {d: key} as Key<P, T>;
};

export default Register;
