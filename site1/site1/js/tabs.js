jQuery.fn.makeTabset = function(o) {
	o = $.extend( {
		control : '.tabset a',
		add_parent_active : false,
		tab : '.tab',
		hash : false
	}, o);
	return this.each(function(){
		var _tabset = jQuery(this);	
		var _control = jQuery(o.control,_tabset);
		var _tabs = jQuery(o.tab, _tabset);
		var _add_parent_active = o.add_parent_active;
		var _hash = o.hash;

		_control.each(function(index){
			$(this).attr('href','#tab'+(index+1));
			$(this).bind('click',function(){
				if (!$(this).is('.active')) {
					_control.removeClass('active');
					$(this).addClass('active');
					if (_add_parent_active) {
						$(this).parent(_add_parent_active).addClass('active').siblings(_add_parent_active).removeClass('active');
					}
					_tabs.removeClass('active').eq(index).addClass('active');
					if (_hash) {
						window.location.hash = $(this).attr('href');
					}
				}
				return false;
			});
		});
		if (_hash) {
			$(window).on('hashchange', function() {
				_control.each(function(){
					if ($(this).attr('href') == window.location.hash) {
						$(this).trigger('click');
					}
				});
			});
			$(window).load(function() {
				_control.each(function(){
					if ($(this).attr('href') == window.location.hash) {
						$(this).trigger('click');
					}
				});
			});
		}
	});
};