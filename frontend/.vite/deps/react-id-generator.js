import {
  require_react
} from "./chunk-67XTWVEJ.js";
import {
  __commonJS
} from "./chunk-5WWUZCGV.js";

// node_modules/react-id-generator/lib/index.js
var require_lib = __commonJS({
  "node_modules/react-id-generator/lib/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var React = require_react();
    function _interopDefaultLegacy(e) {
      return e && typeof e === "object" && "default" in e ? e : { "default": e };
    }
    var React__default = _interopDefaultLegacy(React);
    var globalPrefix = "id";
    var lastId = 0;
    function nextId(localPrefix) {
      lastId++;
      return "".concat(localPrefix || globalPrefix).concat(lastId);
    }
    var resetId = function resetId2() {
      lastId = 0;
    };
    var setPrefix = function setPrefix2(newPrefix) {
      globalPrefix = newPrefix;
    };
    var getIds = function getIds2(count, prefix) {
      var ids = [];
      for (var i = 0; i < count; i++) {
        ids.push(nextId(prefix));
      }
      return ids;
    };
    function usePrevious(value) {
      var ref = React__default["default"].useRef();
      React__default["default"].useEffect(function() {
        ref.current = value;
      });
      return ref.current;
    }
    function useId() {
      var count = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
      var prefix = arguments.length > 1 ? arguments[1] : void 0;
      var idsListRef = React__default["default"].useRef([]);
      var prevCount = usePrevious(count);
      var prevPrefix = usePrevious(prefix);
      if (count !== prevCount || prevPrefix !== prefix) {
        idsListRef.current = getIds(count, prefix);
      }
      return idsListRef.current;
    }
    exports["default"] = nextId;
    exports.resetId = resetId;
    exports.setPrefix = setPrefix;
    exports.useId = useId;
  }
});
export default require_lib();
//# sourceMappingURL=react-id-generator.js.map
