// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module(globalSettings.appName, ['ionic', 'pascalprecht.translate'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('login', {
                url: '/login',
                templateUrl: 'js/login/templates/login.html',
                controller: 'loginController'
            })


            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            // Each tab has its own nav history stack:


            .state('tab.tweet', {
                url: '/tweet',
                views: {
                    'tab-tweet': {
                        templateUrl: 'js/tweet/templates/tweet.html',
                        controller: 'tweetController'
                    }
                }
            })

            .state('tab.tweet-detail', {
                url: '/tweet/:tweetId',
                views: {
                    'tab-tweet': {
                        templateUrl: 'js/tweet/templates/tweet-detail.html',
                        controller: 'tweetDetailController'
                    }
                }
            })

            .state('tab.contacts', {
                url: '/contacts',
                views: {
                    'tab-contacts': {
                        templateUrl: 'js/contacts/templates/contacts.html',
                        controller: 'contactsController'
                    }
                }
            })
            .state('tab.contact-detail', {
                url: '/contacts/:chatId',
                views: {
                    'tab-contacts': {
                        templateUrl: 'js/contacts/templates/contact-detail.html',
                        controller: 'contactDetailController'
                    }
                }
            })

            .state('tab.setting', {
                url: '/setting',
                views: {
                    'tab-setting': {
                        templateUrl: 'js/setting/templates/setting.html',
                        controller: 'settingController'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/login');

    })

    .config(function ($translateProvider) {

        //translate
        $translateProvider.translations('en', {
            login: {
                userName: 'UserName',
                password: 'Password',
                language: 'Language',
                login: 'Login',
                error: ''
            },
            tweet: {
                tweetName: 'Tweet',
                like:'Like',
                comments:'Comments',
                comment:'Comment',
                share:'Share'
            },
            contacts: {
                contactsName: 'Contacts'
            },
            setting: {
                settingName: 'Setting'
            }
        });

        $translateProvider.translations('cn', {
            login: {
                userName: '用户名',
                password: '密码',
                language: '语言',
                login: '登录',
                error: ''
            },
            tweet: {
                tweetName: '推特',
                like:'赞',
                comments:'评论',
                comment:'评论',
                share:'分享'
            },
            contacts: {
                contactsName: '通讯录'
            },
            setting: {
                settingName: '设置'
            }
        });

        var key = 'en';
        $translateProvider.preferredLanguage(key);
    });
