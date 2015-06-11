angular
.module('zackexplosion-ng-infinite-scroll',[])
.run(
[         '$rootScope', '$interval', 
function ( $rootScope,   $interval){
	// 因為 mobile 瀏覽器 對於 scrollTop 事件的支援度不太高，所以只好用一個時間非常短的interval來檢查目前滑動的位置
    var load_next_page = $interval(function(){
		
        // 螢幕的高度，為了各種瀏覽器，所以弄的很複雜，這是從stackoverflow上找來的，有點忘記原始連結了
        var window_height = "innerHeight" in window 
               ? window.innerHeight
               : document.documentElement.offsetHeight; 
		
        // 設定事件觸發的門檻 window.pageYOffset 代表使用者現在滑動的距離
        var threshold = window_height + window.pageYOffset;
        
        // body tag 的高度。預設乘以 0.9 故意會比 window.pageYOffset 小一點
        var offset_height = document.body.offsetHeight  * 0.9;

        // minimal offset_height
        if( offset_height < window_height) offset_height = window_height;

        // console.log('threshold : ' + threshold);
        // console.log('offset_height : ' + offset_height);
		
        // 當門檻超過 offset_height 的高度，觸發事件
        if ( threshold > offset_height){
            $rootScope.$broadcast('scrollToBottom');
        }        
    }, 1);
}])
