$(function(){$(document).ajaxComplete(function(e,t,s){try{var a=$.parseJSON(t.responseText);growl_response_message(a)}catch(r){}}),parent=$('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),child=parent.children(),scrollbar_w=child.innerWidth()-child.height(99).innerWidth(),parent.remove(),$(".row-statuses-wrapper").css("marginRight",scrollbar_w),new Modal_Projects($("#modal-projects"));var view_classes=Cookies.get("view");"undefined"!==view_classes&&$("body").addClass(view_classes);var populated_board_count=0;$(document).bind("/board/tasks/done/",function(e){populated_board_count++,populated_board_count==Object.keys(boards).length&&(update_url(),$("#page-loading").remove(),boards[current_board_id].$el.addClass("active"),"undefined"!=typeof url_params.search&&$("#board-search").val(url_params.search).trigger("keyup"),"undefined"!=typeof url_params.filters&&(boards[current_board_id].record.filters=url_params.filters,boards[current_board_id].apply_filters()))}),$(".template").each(function(){var e=$(this),s=e.attr("id");templates[s]=new t($("#"+s).html())});for(var board_id in boards)boards[board_id]=new Board(boards[board_id]);if("undefined"!=typeof url_params.col_index){var board=boards[current_board_id];board.status_cols_toggle(url_params.col_index)}$(window).resize(function(){on_window_resize()}),on_window_resize();var offset=5,col_tasks_sidebar_left=$(".col-tasks-sidebar-left").outerWidth()-offset,col_tasks_sidebar_right=$(".col-tasks-sidebar-right").outerWidth()-offset;$(window).mousemove(function(e){var t=Math.ceil(e.clientX/2-2*offset);0>t&&(t=0),is_dragging?$(".col-tasks-sidebar-left").css({left:"-"+col_tasks_sidebar_left+"px",opacity:".618"}):col_tasks_sidebar_left>t?$(".col-tasks-sidebar-left").css({left:-t+"px",opacity:"1"}):t>col_tasks_sidebar_left&&$(".col-tasks-sidebar-left").css({left:"-"+col_tasks_sidebar_left+"px",opacity:".618"});var s=window_w-e.clientX,s=Math.ceil(s/2-2*offset);0>s&&(s=0),is_dragging?$(".col-tasks-sidebar-right").css({right:"-"+col_tasks_sidebar_right+"px",opacity:".618"}):col_tasks_sidebar_right>s?$(".col-tasks-sidebar-right").css({right:-s+"px",opacity:"1"}):s>col_tasks_sidebar_right&&$(".col-tasks-sidebar-right").css({right:"-"+col_tasks_sidebar_right+"px",opacity:".618"})}),$("#btn-filter-modal-toggle").on("click",function(){$(this).attr("data-target","#modal-filter-"+current_board_id)}),$(".btn-filter-reset").on("click",function(){$(".btn-filter-reset").hide();var e=boards[current_board_id];$(".modal-filter option",e.$el).prop("selected",function(){return this.defaultSelected});for(var t in e.record.filters)e.record.filters[t]=null;return delete url_params.filters,update_url(),$(".task",e.$el).slideDown(),!1}),$("#btn-view-compact").on("click",function(){return $("body").toggleClass("board-view-compact"),cookie_views(),!1}),$("#btn-view-all-cols").on("click",function(){return $("body").toggleClass("board-view-all-cols"),cookie_views(),!1}),$("#board-search").on("keyup",function(){var board=boards[current_board_id],$input=$(this),$list=$(".task",board.$el),value=$input.val(),valueLower=$.trim(value.toLowerCase()),$reset=$("#board-search-clear");if(0===valueLower.length)return delete url_params.search,update_url(),$list.slideDown("fast",function(){all_match_col_h(),$reset.hide()}),!1;$reset.show(),url_params.search=valueLower,update_url();var $tasks_slideDown,$tasks_slideUp;return $list.each(function(){var to_search=[],$task=$(this);for(var i in board.record.search)to_search.push(eval(board.record.search[i]));var textLower=$.trim(to_search.join(" ").toLowerCase());textLower.search(valueLower)>-1?$tasks_slideDown="undefined"==typeof $tasks_slideDown?$task:$tasks_slideDown.add($task):$tasks_slideUp="undefined"==typeof $tasks_slideUp?$task:$tasks_slideUp.add($task)}),"undefined"!=typeof $tasks_slideDown&&$tasks_slideDown.slideDown("fast"),"undefined"!=typeof $tasks_slideUp&&$tasks_slideUp.slideUp("fast"),$(".task").promise().done(function(){all_match_col_h()}),!1}),$("#board-search-clear").on("click",function(){return $("#board-search").val("").trigger("keyup"),!1}),$("#page-footer").on("click",".navbar-toggle",function(){$("#page-footer").toggleClass("in")}),$("body").on("keydown",function(e){var t=$("input:focus, textarea:focus, [contenteditable]:focus"),s=boards[current_board_id];return 37===e.keyCode&&0===t.length&&e.shiftKey&&($(".col-tasks-sidebar-right",s.$el).hasClass("opened")?$(".col-tasks-sidebar-right",s.$el).trigger("click"):$(".col-tasks-sidebar-left",s.$el).hasClass("opened")||$(".col-tasks-sidebar-left",s.$el).trigger("click")),39===e.keyCode&&0===t.length&&e.shiftKey&&($(".col-tasks-sidebar-left",s.$el).hasClass("opened")?$(".col-tasks-sidebar-left",s.$el).trigger("click"):$(".col-tasks-sidebar-right",s.$el).hasClass("opened")||$(".col-tasks-sidebar-right",s.$el).trigger("click")),67===e.keyCode&&0===t.length&&e.shiftKey?($("#btn-view-compact").trigger("click"),!1):65===e.keyCode&&0===t.length&&e.shiftKey?($("#btn-view-all-cols").trigger("click"),!1):83===e.keyCode&&0===t.length&&e.shiftKey?($("#board-search").focus(),!1):70===e.keyCode&&0===t.length&&e.shiftKey?($(".modal-filter",s.$el).modal("toggle"),!1):80===e.keyCode&&0===t.length&&e.shiftKey?($("#modal-projects").modal("toggle"),!1):75===e.keyCode&&0===t.length&&e.shiftKey?($("#modal-keyboard-shortcuts").modal("toggle"),!1):void 0})});