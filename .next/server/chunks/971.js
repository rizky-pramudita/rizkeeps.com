exports.id = 971;
exports.ids = [971];
exports.modules = {

/***/ 4081:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9550))

/***/ }),

/***/ 4123:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23))

/***/ }),

/***/ 5303:
/***/ (() => {



/***/ }),

/***/ 9550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbars)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5505);
/* harmony import */ var _tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Navbars() {
    const currentRoute = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "navbar sticky top-0",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "navbar-start",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "dropdown",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                tabIndex: 0,
                                className: "btn btn-ghost lg:hidden",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M4 6h16M4 12h8m-8 6h16"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                tabIndex: 0,
                                className: "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/",
                                            className: currentRoute === "/" ? "bg-grey px-4 py-2 rounded-lg text-yellow font-bold" : "text-white font-regular px-4 py-2",
                                            children: "home"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/thoughts",
                                            className: currentRoute === "/thoughts" ? "bg-grey px-4 py-2 rounded-lg text-yellow font-bold" : "text-white font-regular px-4 py-2",
                                            children: "thoughts"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/about",
                                            className: currentRoute === "/about" ? "bg-grey px-4 py-2 rounded-lg text-yellow font-bold" : "text-white font-regular px-4 py-2",
                                            children: "about"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: "btn btn-ghost normal-case text-xl flex flex-row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/logo.png",
                                alt: "geladeri-logo",
                                className: "h-8 w-8"
                            }),
                            "rizkeeps"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "navbar-center hidden lg:flex",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "menu menu-horizontal px-1 gap-8",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                className: currentRoute === "/" ? "bg-grey px-4 py-2 rounded-lg text-yellow font-bold" : "text-white font-regular px-4 py-2",
                                children: "home"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/thoughts",
                                className: currentRoute === "/thoughts" ? "bg-grey px-4 py-2 rounded-lg text-yellow font-bold" : "text-white font-regular px-4 py-2",
                                children: "thoughts"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/about",
                                className: currentRoute === "/about" ? "bg-grey px-4 py-2 rounded-lg text-yellow font-bold" : "text-white font-regular px-4 py-2",
                                children: "about"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "navbar-end invisible sm:visible",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "btn",
                    children: "\uD83D\uDCEA Contact Me!"
                })
            })
        ]
    });
}


/***/ }),

/***/ 3372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6931);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./components/layout/navbar.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/rizkypramudita/Documents/DEV/rizkeeps.com/components/layout/navbar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const navbar = (__default__);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react-experimental/react.shared-subset.js
var react_shared_subset = __webpack_require__(9100);
;// CONCATENATED MODULE: ./src/app/layout.tsx





const metadata = {
    title: "rizkeeps.com",
    description: "Generated by create next app"
};
async function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Rizkeeps"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                content: "width=device-width, initial-scale=1",
                name: "viewport"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: "Generated by create next app"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                href: "/favicon.ico"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                className: "bg-blackbg ${inter.className}  bg-no-repeat",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(navbar, {}),
                    children
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5505:
/***/ (() => {



/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;