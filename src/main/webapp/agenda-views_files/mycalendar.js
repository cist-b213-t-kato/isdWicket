
	$(document).ready(function() {

        var newId = 0;

		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next',
				center: 'title',
				right: 'month,agendaWeek'
//				right: 'month,agendaWeek,agendaDay'
			},
            defaultView: 'agendaWeek',
			editable: true,
			eventLimit: true, // allow "more" link when too many events
            monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            monthNamesShort: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
            dayNamesShort: ['日','月','火','水','木','金','土'],
            titleFormat: {
                day: 'YYYY年 M月 D日',
                month: 'YYYY年 M月',
                week: 'YYYY年 M月'
            },
            timeFormat:{
                month: 'H:mm',
                week: 'H:mm',
                agenda: 'H:mm'
            },
            allDaySlot: false,
            slotDuration: '00:15:00', //イベント設定の時間の単位
            snapDuration: '00:15:00', //イベント選択の時間の単位
            minTime: '08:00:00',
            maxTime: '21:00:00',
            buttonText: {},

			events: [
				{
                    id: 'a',
					title: 'Projectroom ProjectMember',
					start: '2016-02-15T16:45:00',
					end: '2016-02-15T18:15:00'
				},
				{
                    id: 'b',
					title: 'プロジェクトルーム  プロジェクトメンバー',
					start: '2016-02-22T16:45:00',
					end: '2016-02-22T18:15:00',
//					url: 'http://google.com/'
					editable: false
				},
            ],

            //クリックでイベントを作る D&Dで移動できないほうがいい？
            //http://samandlinda.blogspot.jp/2013/03/jquery-plugin-fullcalendar.html
            selectable: true,
            selectHelper: true,
            select: function(start, end, allDay){
                var title = prompt('件名を入力してください');
                if(title){
                    newId++;
                    $('#calendar').fullCalendar('renderEvent',
                        {
                            id: newId,
                            title: title,
                            start: start,
                            end: end,
                        },
                        true //これなんだっけ？
                    );

                }
                $('#calendar').fullCalendar('unselect');

            },

            //イベントの編集、削除
            eventClick:function(event, jsEvent){
            	if(event.editable==false) return;
                var title = prompt('予定を入力してください:', event.title);
                if(title && title!=""){
                    event.title = title;
                    $('#calendar').fullCalendar('updateEvent', event); //イベント（予定）の修正
                }else if(title == ""){ // 件名消すと削除される
                    $('#calendar').fullCalendar("removeEvents", event.id); //イベント（予定）の削除
                } //キャンセルボタンのときは何もしない
            },

//            eventMouseover: function(calEvent, jsEvent) {
//                $('body').prepend('<div id="tooltip">'+calEvent.title+'</div>');
//
//                $('#tooltip')
//                .css('top', (jsEvent.clientY - 200) + 'px')
//                .css('left', (jsEvent.clientX) + 'px')
//                .fadeIn();
//            },
//
//            eventMouseout: function(calEvent, jsEvent) {
//                $('#tooltip').remove();
//            }




		});

	});
