		var sec=0;
		var min=0;
		var ms=0;
		var clear;
		//Timer pauses if the page is minimized
		//startTime() starts the timer
		function startTime()
		{
			clear=setInterval(function(){update();},100);	
		}
		//update() updates minutes,seconds,milliseconds
		function update()
		{
			ms=ms+10;
			if(ms>99)
			{
				sec++;
				ms=0;
			}
			if(sec>59)
			{
				min++;
				sec=0;
			}
			display();
		}
		//display() displays minutes,seconds,milliseconds by apending "0" if necessary
		function display()
		{	
			if(min<10 && min>=0)
				document.getElementById("minutes").value="0"+min;
			else
				document.getElementById("minutes").value=min;
			if(sec<10 && sec>=0)
				document.getElementById("seconds").value="0"+sec;
			else
				document.getElementById("seconds").value=sec;
			if(ms<10 && ms>=0)
				document.getElementById("millisec").value="0"+ms;
			else
				document.getElementById("millisec").value=ms;
		}
		//reset() resets the timer
		function reset()
		{
			clearInterval(clear);
			ms=0;
			sec=0;
			min=0;
			display();
		}
		//stop() stops the timer
		function stop()
		{
			clearInterval(clear);
		}