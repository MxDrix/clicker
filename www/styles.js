(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* \r\nReset\r\n*/\r\n    :root{\r\n        --max-width: 90rem;\r\n        --max-marge: 6rem;\r\n        --med-marge: 3rem;\r\n        --min-marge: 1.5rem;\r\n        --dark-color: black;\r\n        --med-color: grey;\r\n        --custom-color: #CD2235;\r\n        --light-color: white;\r\n        --error-color: red;\r\n        --success-color: green;\r\n    }\r\n    *{\r\n        margin: 0;\r\n        padding: 0;\r\n        -ms-box-sizing: border-box;\r\n        -o-box-sizing: border-box;\r\n        box-sizing: border-box;\r\n    }\r\n    app-home-page, app-form-response{\r\n        display: block;\r\n    }\r\n    html{\r\n        font-size: 62.5%;\r\n        font-family: sans-serif;\r\n        font-weight: 100;\r\n        line-height: 1.5;\r\n    }\r\n    body{\r\n        font-size: 1.6rem;\r\n    }\r\n    a{\r\n        text-decoration: none;\r\n        color: inherit;\r\n    }\r\n    input:not([type=\"checkbox\"]), input:not([type=\"radio\"]), label, [type=\"submit\"]{\r\n        display: block;\r\n        width: 100%;\r\n        background: transparent;\r\n    }\r\n    label{\r\n        font-size: 1.1rem;\r\n        font-weight: 900;\r\n        text-transform: uppercase;\r\n    }\r\n    input{\r\n        font-size: 2rem;\r\n        padding: var(--min-marge);\r\n        border: none;\r\n        border-bottom: .1rem solid var(--med-color);\r\n        margin-bottom: var(--med-marge);\r\n    }\r\n    button{\r\n        border: none;\r\n        background: transparent;\r\n    }\r\n    [type=\"submit\"]{\r\n        text-transform: uppercase;\r\n        font-weight: 900;\r\n        padding: var(--min-marge);\r\n        border: .1rem solid var(--med-color);\r\n        \r\n        transition: all .3s;\r\n        -webkit-transition: all .3s;\r\n        -moz-transition: all .3s;\r\n        -ms-transition: all .3s;\r\n        -o-transition: all .3s;\r\n    }\r\n    [type=\"submit\"][disabled]{\r\n        opacity: .5;\r\n    }\r\n    [type=\"submit\"]:not([disabled]):hover{\r\n        color: var(--light-color);\r\n        background-color: var(--dark-color);\r\n    }\r\n    /**/\r\n    /* \r\nCommon\r\n*/\r\n    .maxWidth{\r\n        max-width: var(--max-width);\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        padding-left: var(--med-marge);\r\n        padding-right: var(--med-marge);\r\n    }\r\n    .marginBottomForFixedFooter {\r\n        margin-bottom: 40px;\r\n    }\r\n    .maxWidth100 {\r\n        max-width: 100%;\r\n    }\r\n    .flexBox{\r\n        display: -moz-flex;\r\n        display: -ms-flex;\r\n        display: -o-flex;\r\n        display: flex;\r\n    }\r\n    .spaceBetween{\r\n        -moz-justify-content: space-between;\r\n        -ms-justify-content: space-between;\r\n        -o-justify-content: space-between;\r\n        justify-content: space-between;\r\n    }\r\n    .alignItemsCenter {\r\n        align-items: center;\r\n    }\r\n    .errorMessage {\r\n        background-color: #FFBABA;\r\n        border-top: 1px solid #D8000C;\r\n        z-index: 1000;\r\n    }\r\n    .successMessage {\r\n        background-color: #D4EDDA;\r\n        border-top: 1px solid #C3E6CB;\r\n        z-index: 1000;\r\n    }\r\n    .warningMessage {\r\n        background-color: #FFF3CD;\r\n        border-top: 1px solid #FFEEBA;\r\n        z-index: 1000;\r\n    }\r\n    .marginBoTo10 {\r\n        margin: 10px 0;\r\n    }\r\n    .divCenter {\r\n        display: block;\r\n        margin: 0 auto;\r\n    }\r\n    .textCenter {\r\n        text-align: center;\r\n    }\r\n    progress[value] {\r\n        /* Reset the default appearance */\r\n        -webkit-appearance: none;\r\n         -moz-appearance: none;\r\n             appearance: none;\r\n      \r\n        width: 100%;\r\n        height: 20px;\r\n    }\r\n    .italicFt12 {\r\n        font-style: italic;\r\n        font-size: 12px;\r\n    }\r\n    /**/\r\n    /* \r\nHeader\r\n*/\r\n    @media(max-width: 850px) {\r\n        header{\r\n            padding: var(--med-marge) 0;\r\n            border-bottom-left-radius: 10px;\r\n            border-bottom-right-radius: 10px;\r\n            box-shadow: -4px 0 10px #CCC,\r\n                        0 4px 10px #CCC,\r\n                        4px 0 10px #CCC;\r\n            text-align: center;\r\n            margin-bottom: 20px;\r\n        }\r\n    \r\n        header h1 {\r\n            font-family: 'Righteous', cursive;\r\n            font-size: 10vw;\r\n        }\r\n    \r\n        header h1 span {\r\n            color: #CD2235;\r\n        }\r\n    \r\n        header p {\r\n            font-size: 4vw;\r\n        }\r\n    }\r\n    nav{\r\n        margin: var(--min-marge) 0;\r\n    }\r\n    nav li{\r\n        color: var(--light-color);\r\n        display: inline-block;\r\n        background-color: var(--custom-color);\r\n        line-height: 1.7;\r\n        \r\n        transition: all .3s;\r\n        -webkit-transition: all .3s;\r\n        -moz-transition: all .3s;\r\n        -ms-transition: all .3s;\r\n        -o-transition: all .3s;\r\n    }\r\n    nav li:not(:last-child){\r\n        margin-right: var(--min-marge);\r\n    }\r\n    nav li:hover{\r\n        background-color: var(--dark-color);\r\n    }\r\n    nav a{\r\n        font-size: 1rem;\r\n        font-weight: 900;\r\n        text-transform: uppercase;\r\n        padding: 0 var(--min-marge);\r\n    }\r\n    #flashMessage {\r\n        position: fixed;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        padding: 10px 30px;\r\n        z-index: 50000;\r\n        visibility: hidden;\r\n    }\r\n    /**/\r\n    /* \r\nComponents\r\n*/\r\n    /* app-home-page */\r\n    app-home-page article{\r\n        width: calc(50% - var(--med-marge));\r\n    }\r\n    /* app-form-response */\r\n    app-form-response{\r\n        border: .1rem solid var(--med-color);\r\n        padding: var(--min-marge);\r\n        position: relative;\r\n    }\r\n    app-form-response.error{\r\n        border-color: var(--error-color);\r\n    }\r\n    app-form-response.success{\r\n        border-color: var(--success-color);\r\n    }\r\n    app-form-response button{\r\n        font-size: 2rem;\r\n        padding: .5rem;\r\n        position: absolute;\r\n        top: 0;\r\n        right: 0;\r\n    }\r\n    /**/\r\n    /*\r\nHome\r\n*/\r\n    @media (max-width: 850px) {\r\n        .homePage {\r\n            flex-direction: column;\r\n        }\r\n\r\n        app-home-page article {\r\n            width: 100%;\r\n        }\r\n\r\n        #toggleRegisterForm, #toggleLoginForm {\r\n            border: 1px solid #CD2235;\r\n            padding-left: 15px;\r\n        }\r\n\r\n        #containerLoginForm, #containerRegisterForm {\r\n            background: #FAFAFA;\r\n        }\r\n\r\n        #containerLoginForm form, #containerRegisterForm {\r\n            padding: 10px;\r\n        }\r\n\r\n        #containerLoginForm input:not([type=\"submit\"]), #containerRegisterForm input:not([type=\"submit\"]) {\r\n            border: 1px solid #dcd7d7;\r\n            border-radius: 11px;\r\n            color: black;\r\n            height: 40px;\r\n            margin-top: 10px;\r\n            background-color: #FFF;\r\n        }\r\n    }\r\n    /**/\r\n    /*\r\nLeaderboard\r\n*/\r\n    #leaderboard li {\r\n        list-style-type: none;\r\n        border-bottom: 1px solid #c8c8c8;\r\n        padding: 5px 0;\r\n    }\r\n    #leaderboard li div:first-child {\r\n        font-weight: bold;\r\n        width: 25%;\r\n    }\r\n    #leaderboard li div:last-child {\r\n        width: 75%;\r\n    }\r\n    /**/\r\n    /*\r\nFooter\r\n*/\r\n    footer {\r\n        position: fixed;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        font-size: 12px;\r\n        border-top: 1px solid #c8c8c8;\r\n        border-bottom: 1px solid #c8c8c8;\r\n        background-color: #FAFAFA;\r\n        padding: 5px 0;\r\n        text-align: center;\r\n    }\r\n    /**/\r\n    /*\r\nProgressBar\r\n*/\r\n    .wrapper {\r\n        width: 100%;\r\n    }\r\n    .progress-bar {\r\n        width: 100%;\r\n        background-color: #e0e0e0;\r\n        padding: 3px;\r\n        border-radius: 3px;\r\n        box-shadow: inset 0 1px 3px rgba(0, 0, 0, .2);\r\n    }\r\n    .progress-bar-fill {\r\n        display: block;\r\n        height: 22px;\r\n        background-color: #659cef;\r\n        border-radius: 3px;\r\n        \r\n        transition: width 500ms ease-in-out;\r\n    }\r\n    /**/\r\n/*# sourceMappingURL=data:application/json;base64,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LEdBQUc7SUFFSDs7Q0FFQztJQUVHO1FBQ0ksV0FBVztJQUNmO0lBRUE7UUFDSSxXQUFXO1FBQ1gseUJBQXlCO1FBQ3pCLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsNkNBQTZDO0lBQ2pEO0lBRUE7UUFDSSxjQUFjO1FBQ2QsWUFBWTtRQUNaLHlCQUF5QjtRQUN6QixrQkFBa0I7O1FBRWxCLG1DQUFtQztJQUN2QztJQUVKLEdBQUciLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcclxuUmVzZXRcclxuKi9cclxuICAgIDpyb290e1xyXG4gICAgICAgIC0tbWF4LXdpZHRoOiA5MHJlbTtcclxuICAgICAgICAtLW1heC1tYXJnZTogNnJlbTtcclxuICAgICAgICAtLW1lZC1tYXJnZTogM3JlbTtcclxuICAgICAgICAtLW1pbi1tYXJnZTogMS41cmVtO1xyXG4gICAgICAgIC0tZGFyay1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgLS1tZWQtY29sb3I6IGdyZXk7XHJcbiAgICAgICAgLS1jdXN0b20tY29sb3I6ICNDRDIyMzU7XHJcbiAgICAgICAgLS1saWdodC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgLS1lcnJvci1jb2xvcjogcmVkO1xyXG4gICAgICAgIC0tc3VjY2Vzcy1jb2xvcjogZ3JlZW47XHJcbiAgICB9XHJcblxyXG4gICAgKntcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwLWhvbWUtcGFnZSwgYXBwLWZvcm0tcmVzcG9uc2V7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgaHRtbHtcclxuICAgICAgICBmb250LXNpemU6IDYyLjUlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIH1cclxuXHJcbiAgICBib2R5e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGF7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0Om5vdChbdHlwZT1cImNoZWNrYm94XCJdKSwgaW5wdXQ6bm90KFt0eXBlPVwicmFkaW9cIl0pLCBsYWJlbCwgW3R5cGU9XCJzdWJtaXRcIl17XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1taW4tbWFyZ2UpO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAuMXJlbSBzb2xpZCB2YXIoLS1tZWQtY29sb3IpO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLW1lZC1tYXJnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICBbdHlwZT1cInN1Ym1pdFwiXXtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbWluLW1hcmdlKTtcclxuICAgICAgICBib3JkZXI6IC4xcmVtIHNvbGlkIHZhcigtLW1lZC1jb2xvcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICB9XHJcblxyXG4gICAgW3R5cGU9XCJzdWJtaXRcIl1bZGlzYWJsZWRde1xyXG4gICAgICAgIG9wYWNpdHk6IC41O1xyXG4gICAgfVxyXG5cclxuICAgIFt0eXBlPVwic3VibWl0XCJdOm5vdChbZGlzYWJsZWRdKTpob3ZlcntcclxuICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xyXG4gICAgfVxyXG4vKiovXHJcblxyXG4vKiBcclxuQ29tbW9uXHJcbiovXHJcbiAgICAubWF4V2lkdGh7XHJcbiAgICAgICAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLW1lZC1tYXJnZSk7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tbWVkLW1hcmdlKTtcclxuICAgIH1cclxuXHJcbiAgICAubWFyZ2luQm90dG9tRm9yRml4ZWRGb290ZXIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1heFdpZHRoMTAwIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmZsZXhCb3h7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICAgIGRpc3BsYXk6IC1tb3otZmxleDtcclxuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleDtcclxuICAgICAgICBkaXNwbGF5OiAtby1mbGV4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNwYWNlQmV0d2VlbntcclxuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAtbW96LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAtbXMtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIC1vLWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcblxyXG4gICAgLmFsaWduSXRlbXNDZW50ZXIge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmVycm9yTWVzc2FnZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQkFCQTtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0Q4MDAwQztcclxuICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc3VjY2Vzc01lc3NhZ2Uge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNENEVEREE7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDM0U2Q0I7XHJcbiAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLndhcm5pbmdNZXNzYWdlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGM0NEO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRkZFRUJBO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hcmdpbkJvVG8xMCB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdkNlbnRlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50ZXh0Q2VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvZ3Jlc3NbdmFsdWVdIHtcclxuICAgICAgICAvKiBSZXNldCB0aGUgZGVmYXVsdCBhcHBlYXJhbmNlICovXHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICBcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLml0YWxpY0Z0MTIge1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbi8qKi9cclxuXHJcbi8qIFxyXG5IZWFkZXJcclxuKi9cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICAgICAgaGVhZGVye1xyXG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1tZWQtbWFyZ2UpIDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAtNHB4IDAgMTBweCAjQ0NDLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwIDRweCAxMHB4ICNDQ0MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDRweCAwIDEwcHggI0NDQztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGhlYWRlciBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHZ3O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGhlYWRlciBoMSBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6ICNDRDIyMzU7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgaGVhZGVyIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDR2dztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmF2e1xyXG4gICAgICAgIG1hcmdpbjogdmFyKC0tbWluLW1hcmdlKSAwO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdiBsaXtcclxuICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdXN0b20tY29sb3IpO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2IGxpOm5vdCg6bGFzdC1jaGlsZCl7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1taW4tbWFyZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdiBsaTpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBuYXYgYXtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgdmFyKC0tbWluLW1hcmdlKTtcclxuICAgIH1cclxuXHJcbiAgICAjZmxhc2hNZXNzYWdlIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDUwMDAwO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuLyoqL1xyXG5cclxuXHJcbi8qIFxyXG5Db21wb25lbnRzXHJcbiovXHJcbiAgICAvKiBhcHAtaG9tZS1wYWdlICovXHJcbiAgICBhcHAtaG9tZS1wYWdlIGFydGljbGV7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gdmFyKC0tbWVkLW1hcmdlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogYXBwLWZvcm0tcmVzcG9uc2UgKi9cclxuICAgIGFwcC1mb3JtLXJlc3BvbnNle1xyXG4gICAgICAgIGJvcmRlcjogLjFyZW0gc29saWQgdmFyKC0tbWVkLWNvbG9yKTtcclxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1taW4tbWFyZ2UpO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICBhcHAtZm9ybS1yZXNwb25zZS5lcnJvcntcclxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBhcHAtZm9ybS1yZXNwb25zZS5zdWNjZXNze1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tc3VjY2Vzcy1jb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwLWZvcm0tcmVzcG9uc2UgYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICBwYWRkaW5nOiAuNXJlbTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4vKiovXHJcblxyXG4vKlxyXG5Ib21lXHJcbiovXHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICAgICAgLmhvbWVQYWdlIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFwcC1ob21lLXBhZ2UgYXJ0aWNsZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3RvZ2dsZVJlZ2lzdGVyRm9ybSwgI3RvZ2dsZUxvZ2luRm9ybSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDRDIyMzU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNjb250YWluZXJMb2dpbkZvcm0sICNjb250YWluZXJSZWdpc3RlckZvcm0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2NvbnRhaW5lckxvZ2luRm9ybSBmb3JtLCAjY29udGFpbmVyUmVnaXN0ZXJGb3JtIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNjb250YWluZXJMb2dpbkZvcm0gaW5wdXQ6bm90KFt0eXBlPVwic3VibWl0XCJdKSwgI2NvbnRhaW5lclJlZ2lzdGVyRm9ybSBpbnB1dDpub3QoW3R5cGU9XCJzdWJtaXRcIl0pIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RjZDdkNztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTFweDtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4vKiovXHJcblxyXG4vKlxyXG5MZWFkZXJib2FyZFxyXG4qL1xyXG5cclxuICAgICNsZWFkZXJib2FyZCBsaSB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzhjOGM4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgfVxyXG5cclxuICAgICNsZWFkZXJib2FyZCBsaSBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICB9XHJcblxyXG4gICAgI2xlYWRlcmJvYXJkIGxpIGRpdjpsYXN0LWNoaWxkIHtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgfVxyXG5cclxuLyoqL1xyXG5cclxuLypcclxuRm9vdGVyXHJcbiovXHJcblxyXG4gICAgZm9vdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYzhjOGM4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzhjOGM4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuLyoqL1xyXG5cclxuLypcclxuUHJvZ3Jlc3NCYXJcclxuKi9cclxuXHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2dyZXNzLWJhciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxuICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZ3Jlc3MtYmFyLWZpbGwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjU5Y2VmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBcclxuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCA1MDBtcyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuXHJcbi8qKi8iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ECV DIGITAL\DEV\clicker\ANGclient\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map