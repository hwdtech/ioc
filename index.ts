import IoC from "./src/IoC";
import IScope from "./src/Scope";

const RootScope: IScope = {
    body: {},
    id: 0
};

const ioc = new IoC(RootScope);
export default ioc;
