"use strict";var e=require("react"),t=require("@radix-ui/react-dialog"),a=require("@radix-ui/react-icons"),r=require("@wds-utilities/cn");function o(e){var t=Object.create(null);return e&&Object.keys(e).forEach((function(a){if("default"!==a){var r=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(t,a,r.get?r:{enumerable:!0,get:function(){return e[a]}})}})),t.default=e,Object.freeze(t)}var n=o(e),s=o(t),l=function(){return l=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var o in t=arguments[a])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)};function i(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(a[r[o]]=e[r[o]])}return a}"function"==typeof SuppressedError&&SuppressedError;var c=s.Root,d=s.Trigger,f=function(e){var t=i(e,[]);return n.createElement(s.Portal,l({},t))};f.displayName=s.Portal.displayName;var u=n.forwardRef((function(e,t){var a=e.className,o=i(e,["className"]);return n.createElement(s.Overlay,l({ref:t,className:r.cn("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a)},o))}));u.displayName=s.Overlay.displayName;var m=n.forwardRef((function(e,t){return n.createElement(s.Close,l({ref:t},e))})),p=n.forwardRef((function(e,t){var o=e.className,c=e.children,d=i(e,["className","children"]);return n.createElement(f,null,n.createElement(u,null),n.createElement(s.Content,l({ref:t,className:r.cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",o)},d),c,n.createElement(m,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"},n.createElement(a.Cross2Icon,{className:"h-4 w-4"}),n.createElement("span",{className:"sr-only"},"Close"))))}));p.displayName=s.Content.displayName;var g=function(e){var t=e.className,a=i(e,["className"]);return n.createElement("div",l({className:r.cn("flex flex-col space-y-1.5 text-center sm:text-left",t)},a))};g.displayName="DialogHeader";var y=function(e){var t=e.className,a=i(e,["className"]);return n.createElement("div",l({className:r.cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t)},a))};y.displayName="DialogFooter";var N=n.forwardRef((function(e,t){var a=e.className,o=i(e,["className"]);return n.createElement(s.Title,l({ref:t,className:r.cn("text-lg font-semibold leading-none tracking-tight",a)},o))}));N.displayName=s.Title.displayName;var v=n.forwardRef((function(e,t){var a=e.className,o=i(e,["className"]);return n.createElement(s.Description,l({ref:t,className:r.cn("text-sm text-muted-foreground",a)},o))}));v.displayName=s.Description.displayName,exports.Dialog=c,exports.DialogContent=p,exports.DialogDescription=v,exports.DialogFooter=y,exports.DialogHeader=g,exports.DialogTitle=N,exports.DialogTrigger=d;
//# sourceMappingURL=index.js.map
