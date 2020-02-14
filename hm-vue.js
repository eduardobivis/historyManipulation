<html>
    <head>
        <meta charset="UTF-8">
        <title>History Manipulation</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    </head>
    <body>
        <div clas="row" id="app">
            <div class="col-md-6 col-md-offset-3" style="padding-top: 30px;">
                <div class="panel panel-primary">
                    <div class="panel-heading">History Manipulation</div>
                    <div class="panel-body">
                        
                        <div v-if="tab == 1">
                            <div>Thats the First Page</div>
                        <button class="btn btn-primary pull-right" @click="changeTab"> Go to the Second Page</button>
                        </div>

                        <div v-if="tab == 2">
                            <div>Thats the Second Page - To return to First Page, use the Browser arrow</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Jquery -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.min.js"></script>

        <!-- Tabs -->
        <script>
            var app = new Vue({
                el: "#app",
                data: {
                    tab: 1
                },
                methods:{
                    changeTab: function(){
                        history.pushState({tab: 2}, "Page 2");
                        this.tab = 2;
                    }
                },
                mounted: function() {
                    var vm = this;
                    window.addEventListener('popstate', function(event) {
                        vm.tab = 1;
                    });
                }
            });
        </script>
    </body>
</html>
