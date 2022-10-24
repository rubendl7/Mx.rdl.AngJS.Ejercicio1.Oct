'use strict';
angular.
  module('appBody').
  component('appBody', {
    templateUrl: 'paginas/app-body/app-body.template.html',
    controller: ['AppBody', 
        
        function appBodyController(AppBody) {

          this.Complemento =   {
            "id": 0, "name": "", "username": "", "email": "",
            
            "address": {
              "street": "", "suite": "", "city": "", "zipcode": "", 
              "geo": { "lat": "", "lng": "" }
            },
          
            "phone": "", "website": "",

            "company": { "name": "", "catchPhrase": "", "bs": "" }
          };

          this.Cmpl = function (datos){
            this.Complemento = datos;
          }

          this.Blogs = {};
          this.Comenta = {};
          
          this.miRsp=AppBody.Usuarios();

          this.lstBlogs = function (datos){
            this.Complemento = datos;
            this.Blogs = AppBody.Blogs(datos.id);
          }

          this.lstPosts = function (idPost){
            this.Comenta = AppBody.Comentarios(idPost);
          }
        }

    ]    
  });

