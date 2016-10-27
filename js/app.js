"use strict";

//(function(){
  //angular.module("wdinstagram", [])
//})();


let postData = [
  {entry: "Testing", photo_url: "www.msn.com", author: "Pop", body:"post"},
  {entry: "Testings", photo_url: "www.youtube.com", author: "Raw", body:"post"}
]


angular
.module("wdinstagram", [
    "ui.router"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("GrumbleIndexController", [
    GrumbleIndexControllerFunction
  ]);

  function GrumbleIndexControllerFunction(){
    this.wdinstagrams = postData
    this.showWdinstigram = function() {
    let wdinstagrams = {entry: this.newWdinstagram }

  }

  function RouterFunction($stateProvider){
    $stateProvider
    .state("wdinstagramIndex", {
      url: "/wdinstagrams",
      templateUrl: "js/ng-views/index.html",
      controller: "wdinstagramIndexController",
      controllerAs: "vm"
    })
    .state("wdinstagramShow", {
      url: "/wdinstagrams/:id",
      templateUrl: "js/ng-views/show.html"
    });
  }
}
