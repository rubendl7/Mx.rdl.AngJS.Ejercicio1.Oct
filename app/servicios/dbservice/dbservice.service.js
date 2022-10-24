'use strict';

angular.
  module('db.service').
    factory('AppBody', ['$http', 
      function($http) {
          var misDatos = [];   
          var misBlogs = [];
          var misCmt = [];       

          var rsp = $http.get("https://jsonplaceholder.typicode.com/users/")
          .then(function (response) {
                response.data.forEach(function(valor){
                  misDatos.push(valor);
                })
                return response.data;
          })        
          .catch(function (err) {
                console.log(" [Error] " + JSON.stringify(err));
                return [];
          });        

          var Interfaz = {
            Usuarios : function ConsultaUsuarios() { return misDatos; },

            Blogs : function ConsultaBlogs(Usuario) { 
              misBlogs = [];
              var rsp2 = $http.get("https://jsonplaceholder.typicode.com/posts?userId=" + Usuario)
              .then(function (response) {
                    response.data.forEach(function(valor){
                      misBlogs.push(valor);
                    })
                    return response.data;
              })        
              .catch(function (err) {
                    console.log(" [Error] " + JSON.stringify(err));
                    return [];
              });                               
              return misBlogs; 
            },

            Comentarios : function ConsultaComentarios(idPost) { 
              misCmt = [];
              var rsp2 = $http.get("https://jsonplaceholder.typicode.com/comments?postId=" + idPost)
              .then(function (response) {
                    response.data.forEach(function(valor){
                      misCmt.push(valor);
                    })
                    return response.data;
              })        
              .catch(function (err) {
                    console.log(" [Error] " + JSON.stringify(err));
                    return [];
              });                               
              return misCmt; 
              

              return misDatos; 
            }
          }


          return Interfaz;
      }
    ]);
