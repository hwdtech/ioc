interface IDependency {
    invoke(params?: any): any;
}

export type depType = "value" | "function" | "dependency";

export function wrap(type: depType, dependency: any) {
    if (type === "function") {
        return {
            invoke(params?: any) {
                return dependency(params);
            }
        };
    }
    if (type === "dependency") {

        return dependency;
    }
    if (type === "value") {

        return {
            invoke() {
                return dependency;
            }
        };
    }
    return null;
}

export default IDependency;
