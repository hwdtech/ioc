import _ from "lodash";
import IScope from "./IScope";
import Dependency from "./IDependency";
import ResolveError from "./ResolveError";

export class Store implements IScope {

    public dictionary = {};

    public get<P, T>(key: string): Dependency<T> {
        return _.get( this.dictionary, key, () => {
            throw new ResolveError(key);
        });
    }

    public set<P, T>(key: string, D: Dependency<T>) {
        _.set(this.dictionary, key, D);
    }
}

const store =  new Store();

export default store;
