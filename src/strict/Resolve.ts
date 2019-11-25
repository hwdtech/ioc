import store from "./Store";
import D from "./Dependency";
import Key from "./IKey";

function Resolve<P, T>(this: store, key: Key<P, T>): D<P, T> {
    return this.get<P, T>(key.d);
}

export default Resolve;
