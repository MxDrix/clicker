(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* \nReset\n*/\n    :root{\n        --max-width: 90rem;\n        --max-marge: 6rem;\n        --med-marge: 3rem;\n        --min-marge: 1.5rem;\n        --dark-color: black;\n        --med-color: grey;\n        --custom-color: #CD2235;\n        --light-color: white;\n        --error-color: red;\n        --success-color: green;\n    }\n    *{\n        margin: 0;\n        padding: 0;\n        -ms-box-sizing: border-box;\n        -o-box-sizing: border-box;\n        box-sizing: border-box;\n    }\n    app-home-page, app-form-response{\n        display: block;\n    }\n    html{\n        font-size: 62.5%;\n        font-family: sans-serif;\n        font-weight: 100;\n        line-height: 1.5;\n    }\n    body{\n        font-size: 1.6rem;\n    }\n    a{\n        text-decoration: none;\n        color: inherit;\n    }\n    input:not([type=\"checkbox\"]), input:not([type=\"radio\"]), label, [type=\"submit\"]{\n        display: block;\n        width: 100%;\n        background: transparent;\n    }\n    label{\n        font-size: 1.1rem;\n        font-weight: 900;\n        text-transform: uppercase;\n    }\n    input{\n        font-size: 2rem;\n        padding: var(--min-marge);\n        border: none;\n        border-bottom: .1rem solid var(--med-color);\n        margin-bottom: var(--med-marge);\n    }\n    button{\n        border: none;\n        background: transparent;\n    }\n    [type=\"submit\"]{\n        text-transform: uppercase;\n        font-weight: 900;\n        padding: var(--min-marge);\n        border: .1rem solid var(--med-color);\n        \n        transition: all .3s;\n        -webkit-transition: all .3s;\n        -moz-transition: all .3s;\n        -ms-transition: all .3s;\n        -o-transition: all .3s;\n    }\n    [type=\"submit\"][disabled]{\n        opacity: .5;\n    }\n    [type=\"submit\"]:not([disabled]):hover{\n        color: var(--light-color);\n        background-color: var(--dark-color);\n    }\n    /**/\n    /* \nCommon\n*/\n    .maxWidth{\n        max-width: var(--max-width);\n        margin-left: auto;\n        margin-right: auto;\n        padding-left: var(--med-marge);\n        padding-right: var(--med-marge);\n    }\n    .marginBottomForFixedFooter {\n        margin-bottom: 40px;\n    }\n    .maxWidth100 {\n        max-width: 100%;\n    }\n    .flexBox{\n        display: -moz-flex;\n        display: -ms-flex;\n        display: -o-flex;\n        display: flex;\n    }\n    .spaceBetween{\n        -moz-justify-content: space-between;\n        -ms-justify-content: space-between;\n        -o-justify-content: space-between;\n        justify-content: space-between;\n    }\n    .alignItemsCenter {\n        align-items: center;\n    }\n    .errorMessage {\n        background-color: #FFBABA;\n        border-top: 1px solid #D8000C;\n        z-index: 1000;\n    }\n    .successMessage {\n        background-color: #D4EDDA;\n        border-top: 1px solid #C3E6CB;\n        z-index: 1000;\n    }\n    .warningMessage {\n        background-color: #FFF3CD;\n        border-top: 1px solid #FFEEBA;\n        z-index: 1000;\n    }\n    .marginBoTo10 {\n        margin: 10px 0;\n    }\n    .divCenter {\n        display: block;\n        margin: 0 auto;\n    }\n    .textCenter {\n        text-align: center;\n    }\n    progress[value] {\n        /* Reset the default appearance */\n        -webkit-appearance: none;\n         -moz-appearance: none;\n             appearance: none;\n      \n        width: 100%;\n        height: 20px;\n    }\n    .italicFt12 {\n        font-style: italic;\n        font-size: 12px;\n    }\n    /**/\n    /* \nHeader\n*/\n    @media(max-width: 850px) {\n        header{\n            padding: var(--med-marge) 0;\n            border-bottom-left-radius: 10px;\n            border-bottom-right-radius: 10px;\n            box-shadow: -4px 0 10px #CCC,\n                        0 4px 10px #CCC,\n                        4px 0 10px #CCC;\n            text-align: center;\n            margin-bottom: 20px;\n        }\n    \n        header h1 {\n            font-family: 'Righteous', cursive;\n            font-size: 10vw;\n        }\n    \n        header h1 span {\n            color: #CD2235;\n        }\n    \n        header p {\n            font-size: 4vw;\n        }\n    }\n    nav{\n        margin: var(--min-marge) 0;\n    }\n    nav li{\n        color: var(--light-color);\n        display: inline-block;\n        background-color: var(--custom-color);\n        line-height: 1.7;\n        \n        transition: all .3s;\n        -webkit-transition: all .3s;\n        -moz-transition: all .3s;\n        -ms-transition: all .3s;\n        -o-transition: all .3s;\n    }\n    nav li:not(:last-child){\n        margin-right: var(--min-marge);\n    }\n    nav li:hover{\n        background-color: var(--dark-color);\n    }\n    nav a{\n        font-size: 1rem;\n        font-weight: 900;\n        text-transform: uppercase;\n        padding: 0 var(--min-marge);\n    }\n    #flashMessage {\n        position: fixed;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        padding: 10px 30px;\n        z-index: 50000;\n        visibility: hidden;\n    }\n    /**/\n    /* \nComponents\n*/\n    /* app-home-page */\n    app-home-page article{\n        width: calc(50% - var(--med-marge));\n    }\n    /* app-form-response */\n    app-form-response{\n        border: .1rem solid var(--med-color);\n        padding: var(--min-marge);\n        position: relative;\n    }\n    app-form-response.error{\n        border-color: var(--error-color);\n    }\n    app-form-response.success{\n        border-color: var(--success-color);\n    }\n    app-form-response button{\n        font-size: 2rem;\n        padding: .5rem;\n        position: absolute;\n        top: 0;\n        right: 0;\n    }\n    /**/\n    /*\nHome\n*/\n    @media (max-width: 850px) {\n        .homePage {\n            flex-direction: column;\n        }\n\n        app-home-page article {\n            width: 100%;\n        }\n\n        #toggleRegisterForm, #toggleLoginForm {\n            border: 1px solid #CD2235;\n            padding-left: 15px;\n        }\n\n        #containerLoginForm, #containerRegisterForm {\n            background: #FAFAFA;\n        }\n\n        #containerLoginForm form, #containerRegisterForm {\n            padding: 10px;\n        }\n\n        #containerLoginForm input:not([type=\"submit\"]), #containerRegisterForm input:not([type=\"submit\"]) {\n            border: 1px solid #dcd7d7;\n            border-radius: 11px;\n            color: black;\n            height: 40px;\n            margin-top: 10px;\n            background-color: #FFF;\n        }\n    }\n    /**/\n    /*\nLeaderboard\n*/\n    #leaderboard li {\n        list-style-type: none;\n        border-bottom: 1px solid #c8c8c8;\n        padding: 5px 0;\n    }\n    #leaderboard li div:first-child {\n        font-weight: bold;\n        width: 25%;\n    }\n    #leaderboard li div:last-child {\n        width: 75%;\n    }\n    /**/\n    /*\nFooter\n*/\n    footer {\n        position: fixed;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        font-size: 12px;\n        border-top: 1px solid #c8c8c8;\n        border-bottom: 1px solid #c8c8c8;\n        background-color: #FAFAFA;\n        padding: 5px 0;\n        text-align: center;\n    }\n    /**/\n    /*\nProgressBar\n*/\n    .wrapper {\n        width: 100%;\n    }\n    .progress-bar {\n        width: 100%;\n        background-color: #e0e0e0;\n        padding: 3px;\n        border-radius: 3px;\n        box-shadow: inset 0 1px 3px rgba(0, 0, 0, .2);\n    }\n    .progress-bar-fill {\n        display: block;\n        height: 22px;\n        background-color: #659cef;\n        border-radius: 3px;\n        \n        transition: width 500ms ease-in-out;\n    }\n    /**/\n/*# sourceMappingURL=data:application/json;base64,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ZTtRQUNmLG1CQUFtQjtLQUN0QjtJQUVMLElBQUk7SUFFSjs7RUFFRTtJQUVFO1FBQ0ksWUFBWTtLQUNmO0lBRUQ7UUFDSSxZQUFZO1FBQ1osMEJBQTBCO1FBQzFCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsOENBQThDO0tBQ2pEO0lBRUQ7UUFDSSxlQUFlO1FBQ2YsYUFBYTtRQUNiLDBCQUEwQjtRQUMxQixtQkFBbUI7O1FBRW5CLG9DQUFvQztLQUN2QztJQUVMLElBQUkiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcblJlc2V0XG4qL1xuICAgIDpyb290e1xuICAgICAgICAtLW1heC13aWR0aDogOTByZW07XG4gICAgICAgIC0tbWF4LW1hcmdlOiA2cmVtO1xuICAgICAgICAtLW1lZC1tYXJnZTogM3JlbTtcbiAgICAgICAgLS1taW4tbWFyZ2U6IDEuNXJlbTtcbiAgICAgICAgLS1kYXJrLWNvbG9yOiBibGFjaztcbiAgICAgICAgLS1tZWQtY29sb3I6IGdyZXk7XG4gICAgICAgIC0tY3VzdG9tLWNvbG9yOiAjQ0QyMjM1O1xuICAgICAgICAtLWxpZ2h0LWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgLS1lcnJvci1jb2xvcjogcmVkO1xuICAgICAgICAtLXN1Y2Nlc3MtY29sb3I6IGdyZWVuO1xuICAgIH1cblxuICAgICp7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuXG4gICAgYXBwLWhvbWUtcGFnZSwgYXBwLWZvcm0tcmVzcG9uc2V7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIGh0bWx7XG4gICAgICAgIGZvbnQtc2l6ZTogNjIuNSU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIH1cblxuICAgIGJvZHl7XG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIH1cblxuICAgIGF7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuXG4gICAgaW5wdXQ6bm90KFt0eXBlPVwiY2hlY2tib3hcIl0pLCBpbnB1dDpub3QoW3R5cGU9XCJyYWRpb1wiXSksIGxhYmVsLCBbdHlwZT1cInN1Ym1pdFwiXXtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICBsYWJlbHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuXG4gICAgaW5wdXR7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbWluLW1hcmdlKTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItYm90dG9tOiAuMXJlbSBzb2xpZCB2YXIoLS1tZWQtY29sb3IpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tZWQtbWFyZ2UpO1xuICAgIH1cblxuICAgIGJ1dHRvbntcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICBbdHlwZT1cInN1Ym1pdFwiXXtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbWluLW1hcmdlKTtcbiAgICAgICAgYm9yZGVyOiAuMXJlbSBzb2xpZCB2YXIoLS1tZWQtY29sb3IpO1xuICAgICAgICBcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuM3M7XG4gICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgIH1cblxuICAgIFt0eXBlPVwic3VibWl0XCJdW2Rpc2FibGVkXXtcbiAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgfVxuXG4gICAgW3R5cGU9XCJzdWJtaXRcIl06bm90KFtkaXNhYmxlZF0pOmhvdmVye1xuICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcbiAgICB9XG4vKiovXG5cbi8qIFxuQ29tbW9uXG4qL1xuICAgIC5tYXhXaWR0aHtcbiAgICAgICAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLW1lZC1tYXJnZSk7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLW1lZC1tYXJnZSk7XG4gICAgfVxuXG4gICAgLm1hcmdpbkJvdHRvbUZvckZpeGVkRm9vdGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICB9XG5cbiAgICAubWF4V2lkdGgxMDAge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmZsZXhCb3h7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogLW1vei1mbGV4O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgICAgICAgZGlzcGxheTogLW8tZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAuc3BhY2VCZXR3ZWVue1xuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIC1vLWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgIC5hbGlnbkl0ZW1zQ2VudGVyIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuZXJyb3JNZXNzYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQkFCQTtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEODAwMEM7XG4gICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgfVxuICAgIFxuICAgIC5zdWNjZXNzTWVzc2FnZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNENEVEREE7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQzNFNkNCO1xuICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgIH1cbiAgICBcbiAgICAud2FybmluZ01lc3NhZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGM0NEO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0ZGRUVCQTtcbiAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICB9XG5cbiAgICAubWFyZ2luQm9UbzEwIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgfVxuXG4gICAgLmRpdkNlbnRlciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgXG4gICAgLnRleHRDZW50ZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgcHJvZ3Jlc3NbdmFsdWVdIHtcbiAgICAgICAgLyogUmVzZXQgdGhlIGRlZmF1bHQgYXBwZWFyYW5jZSAqL1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgfVxuXG4gICAgLml0YWxpY0Z0MTIge1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4vKiovXG5cbi8qIFxuSGVhZGVyXG4qL1xuICAgIEBtZWRpYShtYXgtd2lkdGg6IDg1MHB4KSB7XG4gICAgICAgIGhlYWRlcntcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLW1lZC1tYXJnZSkgMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC00cHggMCAxMHB4ICNDQ0MsXG4gICAgICAgICAgICAgICAgICAgICAgICAwIDRweCAxMHB4ICNDQ0MsXG4gICAgICAgICAgICAgICAgICAgICAgICA0cHggMCAxMHB4ICNDQ0M7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGhlYWRlciBoMSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwdnc7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaGVhZGVyIGgxIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6ICNDRDIyMzU7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaGVhZGVyIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0dnc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuYXZ7XG4gICAgICAgIG1hcmdpbjogdmFyKC0tbWluLW1hcmdlKSAwO1xuICAgIH1cblxuICAgIG5hdiBsaXtcbiAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdXN0b20tY29sb3IpO1xuICAgICAgICBsaW5lLWhlaWdodDogMS43O1xuICAgICAgICBcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuM3M7XG4gICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgIH1cblxuICAgIG5hdiBsaTpub3QoOmxhc3QtY2hpbGQpe1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLW1pbi1tYXJnZSk7XG4gICAgfVxuXG4gICAgbmF2IGxpOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcbiAgICB9XG5cbiAgICBuYXYgYXtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBwYWRkaW5nOiAwIHZhcigtLW1pbi1tYXJnZSk7XG4gICAgfVxuXG4gICAgI2ZsYXNoTWVzc2FnZSB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgICAgICB6LWluZGV4OiA1MDAwMDtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cbi8qKi9cblxuXG4vKiBcbkNvbXBvbmVudHNcbiovXG4gICAgLyogYXBwLWhvbWUtcGFnZSAqL1xuICAgIGFwcC1ob21lLXBhZ2UgYXJ0aWNsZXtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gdmFyKC0tbWVkLW1hcmdlKSk7XG4gICAgfVxuXG4gICAgLyogYXBwLWZvcm0tcmVzcG9uc2UgKi9cbiAgICBhcHAtZm9ybS1yZXNwb25zZXtcbiAgICAgICAgYm9yZGVyOiAuMXJlbSBzb2xpZCB2YXIoLS1tZWQtY29sb3IpO1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1taW4tbWFyZ2UpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgYXBwLWZvcm0tcmVzcG9uc2UuZXJyb3J7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xuICAgIH1cblxuICAgIGFwcC1mb3JtLXJlc3BvbnNlLnN1Y2Nlc3N7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tc3VjY2Vzcy1jb2xvcik7XG4gICAgfVxuXG4gICAgYXBwLWZvcm0tcmVzcG9uc2UgYnV0dG9ue1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuLyoqL1xuXG4vKlxuSG9tZVxuKi9cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xuICAgICAgICAuaG9tZVBhZ2Uge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGFwcC1ob21lLXBhZ2UgYXJ0aWNsZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgICN0b2dnbGVSZWdpc3RlckZvcm0sICN0b2dnbGVMb2dpbkZvcm0ge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0NEMjIzNTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICNjb250YWluZXJMb2dpbkZvcm0sICNjb250YWluZXJSZWdpc3RlckZvcm0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZBRkFGQTtcbiAgICAgICAgfVxuXG4gICAgICAgICNjb250YWluZXJMb2dpbkZvcm0gZm9ybSwgI2NvbnRhaW5lclJlZ2lzdGVyRm9ybSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgI2NvbnRhaW5lckxvZ2luRm9ybSBpbnB1dDpub3QoW3R5cGU9XCJzdWJtaXRcIl0pLCAjY29udGFpbmVyUmVnaXN0ZXJGb3JtIGlucHV0Om5vdChbdHlwZT1cInN1Ym1pdFwiXSkge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RjZDdkNztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICAgICAgfVxuICAgIH1cbi8qKi9cblxuLypcbkxlYWRlcmJvYXJkXG4qL1xuXG4gICAgI2xlYWRlcmJvYXJkIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M4YzhjODtcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgfVxuXG4gICAgI2xlYWRlcmJvYXJkIGxpIGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgIH1cblxuICAgICNsZWFkZXJib2FyZCBsaSBkaXY6bGFzdC1jaGlsZCB7XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgfVxuXG4vKiovXG5cbi8qXG5Gb290ZXJcbiovXG5cbiAgICBmb290ZXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjOGM4Yzg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzhjOGM4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuLyoqL1xuXG4vKlxuUHJvZ3Jlc3NCYXJcbiovXG5cbiAgICAud3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5wcm9ncmVzcy1iYXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICB9XG5cbiAgICAucHJvZ3Jlc3MtYmFyLWZpbGwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjU5Y2VmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIFxuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCA1MDBtcyBlYXNlLWluLW91dDtcbiAgICB9XG5cbi8qKi8iXX0= */", '', '']]

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

module.exports = __webpack_require__(/*! D:\Developpements\Javascript\Clicker\ANGclient\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map