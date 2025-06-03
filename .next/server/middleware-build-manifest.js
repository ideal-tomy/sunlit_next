self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [],
  "pages": {
    "/": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/index.js"
    ],
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ],
    "/acupuncture": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/acupuncture.js"
    ],
    "/contact": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/contact.js"
    ],
    "/instagram": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/instagram.js"
    ],
    "/insurance": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/insurance.js"
    ],
    "/private-treatment": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/private-treatment.js"
    ],
    "/staff": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/staff.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];