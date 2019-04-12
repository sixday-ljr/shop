$('.bottom-right-inner>a').click(function(){
$('.show-form').slideToggle(300)
return false
})
$('.apply').click(function(){
	$('.apply-show').slideToggle(200)
	return false
})
$(document).scroll(function(){
	var max = $(document).scrollTop()/10
	var top = '0 '+(-45+ max )+'px'
	if (max < 45) {$('.banner').css('background-position',top)}
	else{max=45}

})
$('.leader-right .gouwu-search li:nth-child(1) a').mouseenter(function(){
	$('.show-shopping').stop().fadeIn(200)
})
$('.leader-right .gouwu-search li:nth-child(1)').mouseleave(function(){
	$('.show-shopping').stop().fadeOut(200)
})
$('.consult li:nth-child(3)>span>a:nth-child(1)').click(function(){
	$('.consult>li:nth-child(3)>ul').fadeToggle(200)
	return false
})
/*购物车Jquery*/
$('.list>li:nth-child(2) a').mouseenter(function(){
	$('.list .pages-list').stop().fadeIn(100)
})
$('.list>li:nth-child(2)').mouseleave(function(){
	$('.list .pages-list').stop().fadeOut(100)
})
/*放大镜Jquery*/
$('.leader-right .gouwu-search li:nth-child(2) svg').click(function(){
	$('.micro-show').fadeToggle(300)
	if($('.micro-show').hasClass('top-change')){$('.micro-show').removeClass('top-change')}
	else{$('.micro-show').addClass('top-change')}
})
/*colthes Jquery*/
$('.list>li:nth-child(3) a').mouseenter(function(){
	$('.show-clothes').stop().fadeIn(200)
})
$('.list>li:nth-child(3)').mouseleave(function(){
	$('.show-clothes').stop().fadeOut(200)
})
/*collections Jquery*/
$('.list>li:nth-child(4) a').mouseenter(function(){
	$('.show-collections').stop().fadeIn(200)
})
$('.list>li:nth-child(4)').mouseleave(function(){
	$('.show-collections').stop().fadeOut(200)
})
/*promo样式*/
$('.show-promo-inner-left').mouseenter(function(){
	$('.letter-inner p:nth-child(3)').addClass('change-promo-color')
})
$('.show-promo-inner-left').mouseleave(function(){
	$('.letter-inner p:nth-child(3)').removeClass('change-promo-color')
})
$('.show-promo-inner-right').mouseenter(function(){
	$('.show-promo-inner-right p:nth-child(2)').addClass('change-promo-color')
})
$('.show-promo-inner-right').mouseleave(function(){
	$('.show-promo-inner-right p:nth-child(2)').removeClass('change-promo-color')
})
$('.list>li:nth-child(5) a').mouseenter(function(){
	$('.show-promo').stop().fadeIn(200)
})
$('.list>li:nth-child(5)').mouseleave(function(){
	$('.show-promo').stop().fadeOut(200)
})
/*catalogue样式*/
$('.list>li:nth-child(6) a').mouseenter(function(){
	$('.show-catalogue').stop().fadeIn(200)
})
$('.list>li:nth-child(6)').mouseleave(function(){
	$('.show-catalogue').stop().fadeOut(200)
})
/*sales样式*/
$('.list>li:nth-child(7) a').mouseenter(function(){
	$('.show-sales').stop().fadeIn(200)
})
$('.list>li:nth-child(7)').mouseleave(function(){
	$('.show-sales').stop().fadeOut(200)
})
/*底部提示框Jquery*/
$('.footer-inner-bottom> .dialog-img:nth-child(2) img').mouseenter(function(){
	$('.footer-inner-bottom>.dialog-img:nth-child(2) .dialog ').stop().fadeIn(200)
})
$('.footer-inner-bottom> .dialog-img:nth-child(2) img').mouseleave(function(){
	$('.footer-inner-bottom>.dialog-img:nth-child(2) .dialog').stop().fadeOut(200)
})
$('.footer-inner-bottom> .dialog-img:nth-child(3) img').mouseenter(function(){
	$('.footer-inner-bottom>.dialog-img:nth-child(3) .dialog ').stop().fadeIn(200)
})
$('.footer-inner-bottom> .dialog-img:nth-child(3) img').mouseleave(function(){
	$('.footer-inner-bottom>.dialog-img:nth-child(3) .dialog').stop().fadeOut(200)
})
$('.footer-inner-bottom> .dialog-img:nth-child(4) img').mouseenter(function(){
	$('.footer-inner-bottom>.dialog-img:nth-child(4) .dialog ').stop().fadeIn(200)
})
$('.footer-inner-bottom> .dialog-img:nth-child(4) img').mouseleave(function(){
	$('.footer-inner-bottom>.dialog-img:nth-child(4) .dialog').stop().fadeOut(200)
})
$('.footer-inner-bottom> .dialog-img:nth-child(5) img').mouseenter(function(){
	$('.footer-inner-bottom>.dialog-img:nth-child(5) .dialog ').stop().fadeIn(200)
})
$('.footer-inner-bottom> .dialog-img:nth-child(5) img').mouseleave(function(){
	$('.footer-inner-bottom>.dialog-img:nth-child(5) .dialog').stop().fadeOut(200)
})
$('.footer-inner-bottom> .dialog-img:nth-child(6) img').mouseenter(function(){
	$('.footer-inner-bottom>.dialog-img:nth-child(6) .dialog ').stop().fadeIn(200)
})
$('.footer-inner-bottom> .dialog-img:nth-child(6) img').mouseleave(function(){
	$('.footer-inner-bottom>.dialog-img:nth-child(6) .dialog').stop().fadeOut(200)
})
$('.footer-inner-bottom> .dialog-img:nth-child(7) img').mouseenter(function(){
	$('.footer-inner-bottom>.dialog-img:nth-child(7) .dialog ').stop().fadeIn(200)
})
$('.footer-inner-bottom> .dialog-img:nth-child(7) img').mouseleave(function(){
	$('.footer-inner-bottom>.dialog-img:nth-child(7) .dialog').stop().fadeOut(200)
})
/*QTY部分Jquery*/
$('.good1>.good-number>a:nth-child(2)').click(function(event){
	event.preventDefault()
    var obj = Number($('.good1>.good-number>.span1').text())
    obj = obj + 1
    $('.good1>.good-number>.span1').text(obj)
})
$('.good1>.good-number>a:nth-child(3)').click(function(event){
	event.preventDefault()
    var obj = Number($('.good1>.good-number>.span1').text())
    obj = obj - 1
        if(obj > 0)
    {$('.good1>.good-number>.span1').text(obj)}
else{
	$('.good1>.good-number>.span1').text(0)
}
})
$('.good2>.good-number>a:nth-child(2)').click(function(event){
	event.preventDefault()
    var obj = Number($('.good2>.good-number>.span1').text())
    obj = obj + 1
    $('.good2>.good-number>.span1').text(obj)
})
$('.good2>.good-number>a:nth-child(3)').click(function(event){
	event.preventDefault()
    var obj = Number($('.good2>.good-number>.span1').text())
    obj = obj - 1
        if(obj > 0)
    {$('.good2>.good-number>.span1').text(obj)}
else{
	$('.good2>.good-number>.span1').text(0)
}
})
$('.good3>.good-number>a:nth-child(2)').click(function(event){
	event.preventDefault()
    var obj = Number($('.good3>.good-number>.span1').text())
    obj = obj + 1
    $('.good3>.good-number>.span1').text(obj)
})
$('.good3>.good-number>a:nth-child(3)').click(function(event){
	event.preventDefault()
    var obj = Number($('.good3>.good-number>.span1').text())
    obj = obj - 1
        if(obj > 0)
    {$('.good3>.good-number>.span1').text(obj)}
else{
	$('.good3>.good-number>.span1').text(0)
}
})
