class ResolveError extends Error {
    constructor(dependency: string) {
        super(`dependency ${dependency} not found`);
        this.name = "ResolveError";
        Object.setPrototypeOf(this, ResolveError.prototype);
    }
}

export default ResolveError;
