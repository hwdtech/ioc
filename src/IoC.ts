import Dependency from "./Dependency";
import Scope, {newScope} from "./Scope";

class IoC {
    private scope: Scope;

    constructor(scope: Scope) {
        this.scope = scope;
    }

    public register(key: string, dependency: Dependency) {
        this.scope.body[key] = dependency;
    }

    public resolve<T>(key: string, params?: any): T {
        try {
            const dependency = this.scope.body[key];
            if (!dependency) {
                throw Error(`dependency "${key}" is undefined`);
            } else {
                return dependency(params) as T;
            }
        } catch (ex) {
            throw ex;
        }
    }

    public new(field: (IoC: IoC) => void) {
        const childScope = newScope(this.scope);
        const child = new IoC(childScope);
        try {
            field(child);
        } catch (ex) {
            throw ex;
        }
    }

    public delete(key: string) {
        this.scope.body[key] = undefined;
    }
}

export default IoC;
