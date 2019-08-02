import Dependency from "./Dependency";

export interface IScope {
    readonly id: number;
    readonly parent?: IScope;
    body: {
        [k: string]: Dependency | undefined
    };
}

export function newScope(other: IScope) {
    const child = {
        body: Object.assign({}, other.body),
        id: 1 + other.id,
        parent: other
    };
    return child;
}

export default IScope;
