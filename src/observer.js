// DIY Vue 首先就要实现双向绑定不是吗
let ArrayProxy = Object.create(Array.prototype);

function bind(obj, key, path, observer) {
  let val = obj[key],
    watchable = isWatchable(val),
    values = observer.values,
    fullKey = (path ? path + "." : "") + key;
  values[fullKey] = val;
}

function isWatchable(obj) {
  let type = typeof obj;
  return type === "Object" || type === "Array";
}
