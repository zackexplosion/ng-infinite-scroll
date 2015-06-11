angular
.module('zackexplosion-ng-infinite-scroll',[])
.run(
[         '$rootScope', '$interval', 
function ( $rootScope,   $interval){
    var load_next_page = $interval(function(){

        var window_height = "innerHeight" in window 
               ? window.innerHeight
               : document.documentElement.offsetHeight; 

        var threshold = window_height + window.pageYOffset;
        
        var offset_height = document.body.offsetHeight * 0.9;

        // minimal offset_height
        if( offset_height < window_height) offset_height = window_height;

        // console.log('threshold : ' + threshold);
        // console.log('offset_height : ' + offset_height);

        // if ( threshold > offset_height && $scope.loading_next === false){
        if ( threshold > offset_height){
            $rootScope.$broadcast('scrollToBottom');
            // $scope.$broadcast('someEvent', [1,2,3]);
            // $scope.loadNextPage(load_next_page);1
        }        
    }, 1);
}])