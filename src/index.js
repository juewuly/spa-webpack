import {
    sync
} from "./components/sync"
import(/* webpackChunkName: "async-test" */ './components/async/index.js').then(_ => {
    _.default.init();
});
console.log("hello 123s");

sync()