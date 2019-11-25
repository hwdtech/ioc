import _ from "lodash";
import IScope from "./IScope";
import Dependency from "./IDependency";
import ResolveError from "./ResolveError";
import { registerF } from "./Register";

export class Store implements IScope {

    public dictionary = {};

    public get<T>(key: string): Dependency<T> {
        return _.get( this.dictionary, key, () => {
            throw new ResolveError(key);
        });
    }

    public set<T>(key: string, D: Dependency<T>) {
        _.set(this.dictionary, key, D);
    }
}

const store =  new Store();
store.set("register", registerF)

export default store;
