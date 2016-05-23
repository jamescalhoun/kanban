function get_screen_size(){return $("#screen-size div:visible:first").attr("data-size")}function on_window_resize(){window_w=$("body").width(),window_h=$("body").height(),screen_size=get_screen_size()}function cookie_views(){var e=$("body").attr("class"),r=e.split(" "),t=[];for(var n in r)r[n].startsWith("board-view-")&&t.push(r[n]);Cookies.set("view",t.join(" "))}function all_match_col_h(){for(var e in boards){var r=boards[e];r.match_col_h()}}function build_url(){var e=window.location.href,r=e.split("?"),t=r[0]+"?"+decodeURIComponent($.param(url_params));return t}function update_url(){var e=build_url();window.history.replaceState("","",e),update_page_title()}function update_page_title(){if("undefined"!=typeof url_params.board_id){var e=boards[url_params.board_id];if("undefined"==typeof e)return!1;document.title="{0} | {1}".sprintf(e.record.title(),text.kanban)}}function usurp(e){for(var r=e,t=e.childNodes.length-1;t>=0;t--){var n=e.removeChild(e.childNodes[t]);e.parentNode.insertBefore(n,r),r=n}e.parentNode.removeChild(e)}function sanitize(e){for(var r=Array.prototype.slice.apply(e.getElementsByTagName("*"),[0]),t=0;t<r.length;t++)-1==ALLOWED_TAGS.indexOf(r[t].nodeName)&&usurp(r[t])}function sanitize_string(e){var r=document.createElement("div");return r.innerHTML=e,sanitize(r),r.innerHTML}function encode_emails(e){if("undefined"==typeof e)return e;if(""==e)return e;var r=/(<a href(?:(?!<\/a\s*>).)*)?([\w.-]+@[\w.-]+\.[\w.-]+)/gi;return e.replace(r,function(e,r){return r?e:'<a href="mailto:'+e+'"  contenteditable="false">'+e+"</a>"})}function encode_urls(e){if("undefined"==typeof e)return e;if(""==e)return e;var r=/(<a href(?:(?!<\/a\s*>).)*)?(http[^\s\<]+)/gi;return e.replace(r,function(e,r){return e=e.replace("&nbsp;",""),r?e:'<a href="'+$.trim(e)+'"  contenteditable="false" target="_blank">'+$.trim(e)+"</a>"})}function encode_urls_emails(e){e.html(encode_emails(e.html())),e.html(encode_urls(e.html()))}function growl_response_message(e){try{growl(e.data.message)}catch(r){}}function growl(e){$.bootstrapGrowl(e,{type:"info",allow_dismiss:!0})}function format_hours(e){if(0>=e)return"0 <sub>h</sub> ";var r=Math.round(60*e),t=Math.floor(r/480),n=r%480,i=Math.floor(n/60),o=n%60,a=Math.floor(o),s="";return t>0&&(s+="{0} <sub>d</sub> ".sprintf(t)),i>0&&(s+="{0} <sub>h</sub> ".sprintf(i)),a>0&&(s+="{0} <sub>m</sub> ".sprintf(a)),""===s&&(s=format_hours(0)),s}String.prototype.sprintf=function(){var e=this;for(var r in arguments)e=e.replace("{"+r+"}",arguments[r]);return e};var ALLOWED_TAGS=["STRONG","EM","BR"];