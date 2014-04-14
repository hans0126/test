/*ver 0.1 20140305*/
  $.fn.cfocus = function (options) {

      var defaults = {
          reverse: true,
          move_range: 1
      };

      var set = $.extend(defaults, options);

      var reverse_range = set.reverse ? -1 : 1;

      return this.each(function (i) {

          var thisObj = $(this);
          var parent_elem = $(window);
          var position_info = {
              oPosX: 0,
              oPosY: 0,
              mPosX: parent_elem.innerWidth() / 2,
              mPosY: parent_elem.innerHeight() / 2
          };

          var xRange = 0;
          var yRange = 0;

          parent_elem.resize(function () {
              position_info.mPosX = parent_elem.innerWidth() / 2;
              position_info.mPosY = parent_elem.innerHeight() / 2;

              position_info.oPosX = position_info.mPosX - (thisObj.width() / 2);
              position_info.oPosY = position_info.mPosY - (thisObj.height() / 2);
              thisObj.css({
                  "left": position_info.oPosX,
                  "top": position_info.oPosY
              });
          })
          /**/
          $(document).mousemove(function (event) {
              //debugArea.html(event.pageX+"/"+event.pageY);
              xRange = Math.floor(event.pageX / position_info.mPosX * 100) - 100;
              yRange = Math.floor(event.pageY / position_info.mPosY * 100) - 100;

              var posX = position_info.oPosX + (xRange * set.move_range * reverse_range);
              var posY = position_info.oPosY + (yRange * set.move_range * reverse_range);
              thisObj.css({
                  "left": posX,
                  "top": posY
              });

          })




      })

  }