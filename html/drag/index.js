document.getElementById('wrapper') && new IScroll('#wrapper', {
  mouseWheel: true,
  scrollbars: false
});
$('.mask').css('height', document.documentElement.clientHeight);
$('.safe_words span').unbind('click').click(function () {
  $(this).parent().remove()
});
$('.insure_select .right > span').unbind('click').click(function () {
  $(this).addClass('select').siblings().removeClass('select')
});
$('.down_list').unbind('click').click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  if (!$(this).attr('down')) {
    $(this).css('height', 'auto').addClass('down_list_rotate').attr('down', true);
  } else {
    $(this).css('height', 50).removeClass('down_list_rotate').removeAttr('down');
  }
});

$('.tab_header li').unbind('click').click(function () {
  $(this).addClass('show').siblings().removeClass('show');
  let index = $(this).index();
  $(this).parent().next().children('li').eq(index).addClass('show_detail').siblings().removeClass('show_detail');
});
$('.top_server_list>li').unbind('click').click(function () {
  if ($(this).parent().parent().attr('class') === 'move_box') {
    $(this).parent().parent().css('position', 'static');
  }
  $('.topServerList').addClass('show_mask');
  $(document.body).css('overflow', 'hidden');
});

$('.topServerList .mask_header').unbind('click').click(function () {
  $('.topServerList').removeClass('show_mask');
  $(document.body).css('overflow', 'visible');
  if ($(this).parent().parent().parent().parent().attr('class') === 'move_box') {
    $(this).parent().parent().parent().parent().css('position', 'relative');
  }
});
$('.work_type>.right').unbind('click').click(function () {
  if ($(this).parent().parent().attr('class') === 'move_box') {
    $(this).parent().parent().css('position', 'static');
  }
  $('.workType').addClass('show_mask');
  $(document.body).css('overflow', 'hidden');
});

$('.workType .mask_header').unbind('click').click(function () {
  $('.workType').removeClass('show_mask');
  $(document.body).css('overflow', 'visible');
  if ($(this).parent().parent().parent().parent().attr('class') === 'move_box') {
    $(this).parent().parent().parent().parent().css('position', 'relative');
  }
});
