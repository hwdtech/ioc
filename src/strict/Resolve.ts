import store from "../core/Store";
import D from "./Dependency";
import Key from "./IKey";

function Resolve<P, T>(key: Key<P, T>): D<P, T> {
    return store.get<P, T>(key.d);
}

export default Resolve;
