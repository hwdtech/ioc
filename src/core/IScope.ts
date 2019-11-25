import Dependency from "./IDependency";

export interface IScope {
    get<P, T>(key: string): Dependency<T>;
    set<P, T>(key: string, D: Dependency<T>): void;
}
export default IScope;
