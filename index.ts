import IoC from "./src/IoC";
import Scope from "./src/Scope";

const RootScope: Scope = {
    body: {},
    id: 0
};

console.log("da")

const ioc = new IoC(RootScope);
export default ioc;
