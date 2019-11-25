import _ from "lodash";
import IScope from "../core/IScope";
import Dependency from "./Dependency";
import ResolveError from "../core/ResolveError";

export class Store implements IScope {

    public dictionary = {};

    public get<P, T>(key: string): Dependency<P, T> {
        return _.get( this.dictionary, key, () => {
            throw new ResolveError(key);
        });
    }

    public set<P, T>(key: string, D: Dependency<P, T>) {
        _.set(this.dictionary, key, D);
    }
}

const store =  new Store();

export default store;
