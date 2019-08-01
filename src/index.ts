import IoC from "./IoC";
import Scope from "./Scope";

const RootScope: Scope = {
    body: {},
    id: 0
};

const ioc = new IoC(RootScope);
export default ioc;