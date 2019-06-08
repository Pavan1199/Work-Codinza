var telegram = require('telegram-bot-api');
var mongojs = require('mongojs')
let request = require('request')
let cheerio = require('cheerio')
// let $ = cheerio.load('https://www.amrita.edu/events')

var eventsList = [];
var facultyList = []
var api = new telegram({
        token: '818075560:AAF_8i7MILmxR_4DRG5SEaDIX50DhEQ6Zmw',
        updates: {
        	enabled: true
    	}		
});

var db = mongojs('mongodb://user:user@cluster0-shard-00-00-nakc6.mongodb.net:27017/Amrita?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', ['Quotes'])
var bd1 = mongojs('mongodb://pa1:pa1@cluster0-shard-00-00-jlsfv.mongodb.net:27017/bb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', ['bb'])
var bd2 = mongojs('mongodb://pa1:pa1@cluster0-shard-00-00-jlsfv.mongodb.net:27017/p1?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', ['p1'])
var bd3 = mongojs('mongodb://pa1:pa1@cluster0-shard-00-00-jlsfv.mongodb.net:27017/p2?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', ['p2'])


// asas

var bd4 = mongojs('mongodb://pa1:pa1@cluster0-shard-00-00-jlsfv.mongodb.net:27017/asasp1?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', ['asasp1'])
var bd5 = mongojs('mongodb://pa1:pa1@cluster0-shard-00-00-jlsfv.mongodb.net:27017/asasp2?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', ['asasp2'])
var bd6 = mongojs('mongodb://pa1:pa1@cluster0-shard-00-00-jlsfv.mongodb.net:27017/asassem?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', ['asassem'])



console.log('Bot has started..');


api.on('message', function(message){

	var msg = message.text.toLowerCase()

    if(msg == 'hi' || msg == 'hello' || msg == 'hey' ){
    	api.sendMessage({
		chat_id: message.chat.id,
		text: 'Hello, how may i help you? ' 		
		});

    }
    else if(msg.includes('ksrtc')){

    	if(msg.includes('karunagappally') || msg.includes('kply') || msg.includes('knp')){
	    	var ksrtclist = []
			var url = 'https://www.aanavandi.com/search/results/source/vallikkavu-(amritapuri)/destination/karunagappally-(knp)/timing/all'
			request(url, function(err, resp, body) {
			    if (err)
			        throw err;
			    $ = cheerio.load(body);
			    // console.log($);
			    $('.trip.wow.fadeIn').each(function(index, element) {

			        schedule = $(element).find('.schedule').text()
			        departure = $(element).find('.departure').text()
			        arrival = $(element).find('.arrival').text()
			        service = $(element).find('.classofservice').text()
			        // var header = $(element).find('.detailbtn');
			        details = $(element).find('a').attr('href')
			        
			        if(schedule != ''){
			            // console.log(schedule + " : " + departure + " => " + arrival +" " + service.trim() )
			            bus = schedule + " : \n" + departure + " => " + arrival +"\n" + service.trim().replace(/\t/g, '').replace(/\n/g, '') + '\nRoute Details : aanavandi.com/' + details +'\n\n' 
			        }
			        
			        ksrtclist.push(bus)
			        // var faculty = facultyName + "\n" + facultyPos +"\n" + facultyDesc +"\namrita.edu" + facultyLink+ "\n"
			        // // console.log(fac)
			        // // var event = eventTitle + " : " + eventDate +"\nDescription: " + eventDesc +"\namrita.edu" + eventLink+ "\n"
			        // facultyList.push(faculty)
			        
			    });
			    console.log(ksrtclist.length)
			    api.sendMessage({
				chat_id: message.chat.id,
				text: 'vallikkavu (amritapuri) TO karunagappally (knp)\n\n'.toUpperCase() + ksrtclist.join('')
				});
			    // console.log(eventsList	);
			    // console.log(ksrtclist);

			});


			var ksrtclist2 = []
			var url = 'https://www.aanavandi.com/search/results/source/karunagappally-(knp)/destination/vallikkavu-(amritapuri)/timing/all'
			request(url, function(err, resp, body) {
			    if (err)
			        throw err;
			    $ = cheerio.load(body);
			    // console.log($);
			    $('.trip.wow.fadeIn').each(function(index, element) {

			        schedule = $(element).find('.schedule').text()
			        departure = $(element).find('.departure').text()
			        arrival = $(element).find('.arrival').text()
			        service = $(element).find('.classofservice').text()
			        // var header = $(element).find('.detailbtn');
			        details = $(element).find('a').attr('href')
			        
			        if(schedule != ''){
			            // console.log(schedule + " : " + departure + " => " + arrival +" " + service.trim() )
			            bus = schedule + " : \n" + departure + " => " + arrival +"\n" + service.trim().replace(/\t/g, '').replace(/\n/g, '') + '\nRoute Details : aanavandi.com/' + details +'\n\n' 
			        }
			        
			        ksrtclist2.push(bus)
			        // var faculty = facultyName + "\n" + facultyPos +"\n" + facultyDesc +"\namrita.edu" + facultyLink+ "\n"
			        // // console.log(fac)
			        // // var event = eventTitle + " : " + eventDate +"\nDescription: " + eventDesc +"\namrita.edu" + eventLink+ "\n"
			        // facultyList.push(faculty)
			        
			    });
			    
			    api.sendMessage({
				chat_id: message.chat.id,
				text: 'karunagappally (knp) TO vallikkavu (amritapuri)\n\n'.toUpperCase() + ksrtclist2.join('')
				});
			    // console.log(eventsList	);
			    // console.log(ksrtclist2);

			});
		}
		else if(msg.includes('KAYAMKULAM'.toLowerCase()) || msg.includes('kylm') || msg.includes('kym') || msg.includes('kyj')){
	    	var ksrtclist = []
			var url = 'https://www.aanavandi.com/search/results/source/kayamkulam-(kym)/destination/vallikkavu-(amritapuri)/timing/all'
			request(url, function(err, resp, body) {
			    if (err)
			        throw err;
			    $ = cheerio.load(body);
			    // console.log($);
			    $('.trip.wow.fadeIn').each(function(index, element) {

			        schedule = $(element).find('.schedule').text()
			        departure = $(element).find('.departure').text()
			        arrival = $(element).find('.arrival').text()
			        service = $(element).find('.classofservice').text()
			        // var header = $(element).find('.detailbtn');
			        details = $(element).find('a').attr('href')
			        
			        if(schedule != ''){
			            // console.log(schedule + " : " + departure + " => " + arrival +" " + service.trim() )
			            bus = schedule + " : \n" + departure + " => " + arrival +"\n" + service.trim().replace(/\t/g, '').replace(/\n/g, '') + '\nRoute Details : aanavandi.com/' + details +'\n\n' 
			        }
			        
			        ksrtclist.push(bus)
			        // var faculty = facultyName + "\n" + facultyPos +"\n" + facultyDesc +"\namrita.edu" + facultyLink+ "\n"
			        // // console.log(fac)
			        // // var event = eventTitle + " : " + eventDate +"\nDescription: " + eventDesc +"\namrita.edu" + eventLink+ "\n"
			        // facultyList.push(faculty)
			        
			    });
			    // console.log(ksrtclist.length)
			    api.sendMessage({
				chat_id: message.chat.id,
				text: 'kayamkulam (kym) TO vallikkavu (amritapuri)\n\n'.toUpperCase() + ksrtclist.join('')
				});
			    // console.log(eventsList	);
			    // console.log(ksrtclist);

			});


			var ksrtclist2 = []
			var url = 'https://www.aanavandi.com/search/results/source/vallikkavu-(amritapuri)/destination/kayamkulam-(kym)/timing/all'
			request(url, function(err, resp, body) {
			    if (err)
			        throw err;
			    $ = cheerio.load(body);
			    // console.log($);
			    $('.trip.wow.fadeIn').each(function(index, element) {

			        schedule = $(element).find('.schedule').text()
			        departure = $(element).find('.departure').text()
			        arrival = $(element).find('.arrival').text()
			        service = $(element).find('.classofservice').text()
			        // var header = $(element).find('.detailbtn');
			        details = $(element).find('a').attr('href')
			        
			        if(schedule != ''){
			            // console.log(schedule + " : " + departure + " => " + arrival +" " + service.trim() )
			            bus = schedule + " : \n" + departure + " => " + arrival +"\n" + service.trim().replace(/\t/g, '').replace(/\n/g, '') + '\nRoute Details : aanavandi.com/' + details +'\n\n' 
			        }
			        
			        ksrtclist2.push(bus)
			        // var faculty = facultyName + "\n" + facultyPos +"\n" + facultyDesc +"\namrita.edu" + facultyLink+ "\n"
			        // // console.log(fac)
			        // // var event = eventTitle + " : " + eventDate +"\nDescription: " + eventDesc +"\namrita.edu" + eventLink+ "\n"
			        // facultyList.push(faculty)
			        
			    });
			    
			    api.sendMessage({
				chat_id: message.chat.id,
				text: 'vallikkavu (amritapuri) TO kayamkulam (kym)\n\n'.toUpperCase() + ksrtclist2.join('')
				});
			    // console.log(eventsList	);
			    // console.log(ksrtclist2);

			});
		}
    }
    else if(msg.includes('location') ){
    	api.sendMessage({
		chat_id: message.chat.id,
		text: 'location module ' 		
		});

    }


	else if(msg.includes('event') || msg.includes('workshop')){
		var url = 'https://www.amrita.edu/events'
		request(url, function(err, resp, body) {
		    if (err)
		        throw err;
		    $ = cheerio.load(body);
		    // console.log($);
		    $('.tab-content #2019 .view-content .views-row').each(function(index, element) {

		       	eventImage = $(element).find('img').attr('src')
		        eventTitle = $(element).find('.views-field-title').text().trim();
		        eventDate = $(element).find('.views-field-field-start-date-event').text().trim();
		        eventDesc = $(element).find('.views-field-field-description-event').text().trim();

		        var header = $(element).find('.views-field-title');
		        eventLink = $(header).find('.views-field-title .field-content a').attr('href')
		        
		        var event = eventTitle + " : " + eventDate +"\n\nDescription: " + eventDesc +"\namrita.edu" + eventLink+ "\n"
		        eventsList.push(event+'\n')
		        api.sendPhoto({
				    chat_id: message.chat.id,
				    caption: event,
				    photo: eventImage
				})
		    });
		    
		 //    api.sendMessage({
			// chat_id: message.chat.id,
			// text: 'Upcoming Events and Workshops :\n\n' + eventsList.join('')
			// });
		 //    console.log(eventsList	);

		});


    }


    else if(msg.includes('ase sem exam time table s1'.toLowerCase()) || msg.includes('ase sem exam time table s2'.toLowerCase()) || msg.includes('ase sem exam time table s3'.toLowerCase())||msg.includes('ase sem exam time table s4'.toLowerCase())     || msg.includes('ase sem exam time table s5'.toLowerCase())    || msg.includes('ase sem exam time table s6'.toLowerCase())      || msg.includes('ase sem exam time table s7'.toLowerCase())   || msg.includes('ase sem exam time table s8'.toLowerCase())){
    	var a = msg.split(" ")
    	var b= a[5]
    
		
    	bd1.bb.find({}, function(err,data){
			
			
    		if (b=='s1') {
    			api.sendMessage({
			chat_id: message.chat.id,
			text:data[0].s1	
			});
    		}

    		else if (b=='s2') {
    			api.sendMessage({
			chat_id: message.chat.id,
			text:data[1].s2	
			});
    		}
    		else if(b=='s3'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[2].s3	
			});
    		}
    		else if(b=='s4'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[3].s4	
			});
    		}


    		else if(b=='s5'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[4].s5	
			});
    		}
    		

    		else if(b=='s6'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[5].s6	
			});
    		}
    		

    		else if(b=='s7'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[6].s7	
			});
    		}

    		else if(b=='s8'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[7].s8	
			});
    		}
    		
    		
    		

			
	 
			
		})

    }






    else if(msg.includes('ase p1 exam time table s1'.toLowerCase()) || msg.includes('ase p1 exam time table s2'.toLowerCase()) || msg.includes('ase p1 exam time table s3'.toLowerCase())||msg.includes('ase p1 exam time table s4'.toLowerCase())     || msg.includes('ase p1 exam time table s5'.toLowerCase())    || msg.includes('ase p1 exam time table s6'.toLowerCase())      || msg.includes('ase p1 exam time table s7'.toLowerCase())   || msg.includes('ase p1 exam time table s8'.toLowerCase())                                  ){
    	var a = msg.split(" ")
    	var b= a[5]
    
		
    	bd2.p1.find({}, function(err,data){
			
			
    		if (b=='s1') {
    			api.sendMessage({
			chat_id: message.chat.id,
			text:data[0].s1	
			});
    		}

    		else if (b=='s2') {
    			api.sendMessage({
			chat_id: message.chat.id,
			text:data[1].s2	
			});
    		}
    		else if(b=='s3'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[2].s3	
			});
    		}
    		else if(b=='s4'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[3].s4	
			});
    		}


    		else if(b=='s5'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[4].s5	
			});
    		}
    		

    		else if(b=='s6'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[5].s6	
			});
    		}
    		

    		else if(b=='s7'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[6].s7	
			});
    		}

    		else if(b=='s8'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[7].s8	
			});
    		}
    		
	 
			
		})


    }







    else if(msg.includes('ase p2 exam time table s1'.toLowerCase()) || msg.includes('ase p2 exam time table s2'.toLowerCase()) || msg.includes('ase p2 exam time table s3'.toLowerCase())||msg.includes('ase p2 exam time table s4'.toLowerCase())     || msg.includes('ase p2 exam time table s5'.toLowerCase())    || msg.includes('ase p2 exam time table s6'.toLowerCase())      || msg.includes('ase p2 exam time table s7'.toLowerCase())   || msg.includes('ase p2 exam time table s8'.toLowerCase())                                  ){
    	var a = msg.split(" ")
    	var b= a[5]
    
		
    	bd3.p2.find({}, function(err,data){
			
			
    		if (b=='s1') {
    			api.sendMessage({
			chat_id: message.chat.id,
			text:data[0].s1	
			});
    		}

    		else if (b=='s2') {
    			api.sendMessage({
			chat_id: message.chat.id,
			text:data[1].s2	
			});
    		}
    		else if(b=='s3'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[2].s3	
			});
    		}
    		else if(b=='s4'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[3].s4	
			});
    		}


    		else if(b=='s5'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[4].s5	
			});
    		}
    		

    		else if(b=='s6'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[5].s6	
			});
    		}
    		

    		else if(b=='s7'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[6].s7	
			});
    		}

    		else if(b=='s8'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[7].s8	
			});
    		}
    		
	 
			
		})


    }


// asas

	else if(msg.includes('asas p1 exam time table s1'.toLowerCase()) || msg.includes('asas p1 exam time table s2'.toLowerCase()) || msg.includes('asas p1 exam time table s3'.toLowerCase())||msg.includes('asas p1 exam time table s4'.toLowerCase())     || msg.includes('asas p1 exam time table s5'.toLowerCase())    || msg.includes('asas p1 exam time table s6'.toLowerCase())      || msg.includes('asas p1 exam time table s7'.toLowerCase())   || msg.includes('asas p1 exam time table s8'.toLowerCase())           || msg.includes('asas sem exam time table s9'.toLowerCase())   || msg.includes('asas sem exam time table s10'.toLowerCase())                        ){
    	var a = msg.split(" ")
    	var b= a[5]
    
		
    	bd4.asasp1.find({}, function(err,data){
			
			
    		if (b=='s1') {
    			api.sendMessage({
			chat_id: message.chat.id,
			text:data[0].s1	
			});
    		}

    		else if (b=='s2') {
    			api.sendMessage({
			chat_id: message.chat.id,
			text:data[1].s2	
			});
    		}
    		else if(b=='s3'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[2].s3	
			});
    		}
    		else if(b=='s4'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[3].s4	
			});
    		}


    		else if(b=='s5'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[4].s5	
			});
    		}
    		

    		else if(b=='s6'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[5].s6	
			});
    		}
    		

    		else if(b=='s7'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[6].s7	
			});
    		}

    		else if(b=='s8'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[7].s8	
			});
    		}


    		    		else if(b=='s8'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[7].s8	
			});
    		}
    		
	 
    		else if(b=='s9'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[8].s9	
			});
    		}


    		else if(b=='s10'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[9].s10	
			});
    		}
    		
	 
			
		})


    }





    else if(msg.includes('asas p2 exam time table s1'.toLowerCase()) || msg.includes('asas p2 exam time table s2'.toLowerCase()) || msg.includes('asas p2 exam time table s3'.toLowerCase())||msg.includes('asas p2 exam time table s4'.toLowerCase())     || msg.includes('asas p2 exam time table s5'.toLowerCase())    || msg.includes('asas p2 exam time table s6'.toLowerCase())      || msg.includes('asas p2 exam time table s7'.toLowerCase())   || msg.includes('asas p2 exam time table s8'.toLowerCase())     || msg.includes('asas sem exam time table s9'.toLowerCase())   || msg.includes('asas sem exam time table s10'.toLowerCase())                              ){
    	var a = msg.split(" ")
    	var b= a[5]
    
		
    	bd5.asasp2.find({}, function(err,data){
			
			
    		if (b=='s1') {
    			api.sendMessage({
			chat_id: message.chat.id,
			text:data[0].s1	
			});
    		}

    		else if (b=='s2') {
    			api.sendMessage({
			chat_id: message.chat.id,
			text:data[1].s2	
			});
    		}
    		else if(b=='s3'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[2].s3	
			});
    		}
    		else if(b=='s4'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[3].s4	
			});
    		}


    		else if(b=='s5'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[4].s5	
			});
    		}
    		

    		else if(b=='s6'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[5].s6	
			});
    		}
    		

    		else if(b=='s7'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[6].s7	
			});
    		}

    		else if(b=='s8'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[7].s8	
			});
    		}
    		
	 
    		else if(b=='s9'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[8].s9	
			});
    		}


    		else if(b=='s10'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[9].s10	
			});
    		}


			
		})


    }




        else if(msg.includes('asas sem exam time table s1'.toLowerCase()) || msg.includes('asas sem exam time table s2'.toLowerCase()) || msg.includes('asas sem exam time table s3'.toLowerCase())||msg.includes('asas sem exam time table s4'.toLowerCase())     || msg.includes('asas sem exam time table s5'.toLowerCase())    || msg.includes('asas sem exam time table s6'.toLowerCase())      || msg.includes('asas sem exam time table s7'.toLowerCase())   || msg.includes('asas sem exam time table s8'.toLowerCase())  || msg.includes('asas sem exam time table s9'.toLowerCase())   || msg.includes('asas sem exam time table s10'.toLowerCase())                                ){
    	var a = msg.split(" ")
    	var b= a[5]
    
		
    	bd6.asassem.find({}, function(err,data){
			
			
    		if (b=='s1') {
    			api.sendMessage({
			chat_id: message.chat.id,
			text:data[0].s1	
			});
    		}

    		else if (b=='s2') {
    			api.sendMessage({
			chat_id: message.chat.id,
			text:data[1].s2	
			});
    		}
    		else if(b=='s3'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[2].s3	
			});
    		}
    		else if(b=='s4'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[3].s4	
			});
    		}


    		else if(b=='s5'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[4].s5	
			});
    		}
    		

    		else if(b=='s6'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[5].s6	
			});
    		}
    		

    		else if(b=='s7'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[6].s7	
			});
    		}

    		else if(b=='s8'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[7].s8	
			});
    		}


    		    		else if(b=='s8'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[7].s8	
			});
    		}
    		
	 
    		else if(b=='s9'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[8].s9	
			});
    		}


    		else if(b=='s10'){
    			api.sendMessage({
				chat_id: message.chat.id,
				text: data[9].s10	
			});
    		}
    		
	 
			
		})


    }


















    
    else if(msg.includes('quote')){

    	var quote
    	db.Quotes.find({}, function(err,data){
			quote = data[Math.floor(Math.random() * data.length)]
			// console.log(quote)
			api.sendMessage({
			chat_id: message.chat.id,
			text: quote.quote	
			});
		})
		
    	// console.log(quotes)
    	 
    }

    else if(msg.includes('faculty')){
    	// facultyname =  msg.split(" ")
    	if(msg.includes('all')){


    		for(var i = 0; i< 22; i++){
    			if (i == 0){
    				var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=All&field_faculty_campus_tid=52&field_faculty_department_main_tid=All&field_center_name_tid=All'
    			}
    			else{
    				var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=All&field_faculty_campus_tid=52&field_faculty_department_main_tid=All&field_center_name_tid=All&page='+ i
    			}
    			// console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\npage " +i +"\n"+url)
				request(url, function(err, resp, body) {
				    if (err)
				        throw err;
				    $ = cheerio.load(body);
				    // console.log($);
				    var faculties = []
				    $('.row .row-margin-top').each(function(index, element) {

				        facultyImage = $(element).find('img').attr('src')
				        facultyName = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10').text().trim();
				        facultyPos = $(element).find('.view.view-position-field-collection-view .view-content .field-content').text().trim();
				        facultyDesc = $(element).find('p').text().trim();
				        var header = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10');
				        facultyLink = $(header).find('a').attr('href')
				        // console.log()
				        // var faculty = facultyName + " " + facultyPos +" " +facultyDesc+ " amrita.edu" + facultyLink+ 
				        var faculty = facultyName + "\n" + facultyPos +"\n" + " amrita.edu" + facultyLink+ "\n\n"
				        // console.log(fac)
				        // var event = eventTitle + " : " + eventDate +"\nDescription: " + eventDesc +"\namrita.edu" + eventLink+ "\n"
				         faculties.push(faculty)

				   
				  //       api.sendPhoto({
						//     chat_id: message.chat.id,
						//     caption: faculty,

						//     // first you upload image on a url and send url as a parameter
						//     photo: facultyImage
						// })
						// console.log(faculty)
				    });
				       api.sendMessage({
						chat_id: message.chat.id,
						text: "\n"+ faculties.join('')		
						});
				     // console.log(faculties)
				     faculties = []
				    
				     
				})
				
    		}

    			
    	}
    	else if(msg.includes('asas')|| msg.includes('arts')){
    		for(var i = 0; i< 4; i++){
    			if (i == 0){
    				var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=39&field_faculty_designation_tid=All&field_faculty_campus_tid=52&field_faculty_department_main_tid=All&field_center_name_tid=All'
    			}
    			else{
    				var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=39&field_faculty_designation_tid=All&field_faculty_campus_tid=52&field_faculty_department_main_tid=All&field_center_name_tid=All&page='+ i
    			}
    			// console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\npage " +i +"\n"+url)
				request(url, function(err, resp, body) {
				    if (err)
				        throw err;
				    $ = cheerio.load(body);
				    // console.log($);
				    var faculties = []
				    $('.row .row-margin-top').each(function(index, element) {

				        facultyImage = $(element).find('img').attr('src')
				        facultyName = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10').text().trim();
				        facultyPos = $(element).find('.view.view-position-field-collection-view .view-content .field-content').text().trim();
				        facultyDesc = $(element).find('p').text().trim();
				        var header = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10');
				        facultyLink = $(header).find('a').attr('href')
				        // console.log()
				        // var faculty = facultyName + " " + facultyPos +" " +facultyDesc+ " amrita.edu" + facultyLink+ 
				        var faculty = facultyName + "\n" + facultyPos +"\n" + " amrita.edu" + facultyLink+ "\n\n"
				        // console.log(fac)
				        // var event = eventTitle + " : " + eventDate +"\nDescription: " + eventDesc +"\namrita.edu" + eventLink+ "\n"
				         faculties.push(faculty)

				   
				  //       api.sendPhoto({
						//     chat_id: message.chat.id,
						//     caption: faculty,

						//     // first you upload image on a url and send url as a parameter
						//     photo: facultyImage
						// })
						// console.log(faculty)
				    });
				       api.sendMessage({
						chat_id: message.chat.id,
						text: "\n"+ faculties.join('')		
						});
				     // console.log(faculties)
				     faculties = []
				    
				     
				})
				
    		}

    	}
    	else if(msg.includes('bio')|| msg.includes('biotech')){
    		for(var i = 0; i< 3; i++){
    			if (i == 0){
    				var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=31&field_faculty_designation_tid=All&field_faculty_campus_tid=52&field_faculty_department_main_tid=All&field_center_name_tid=All'
    			}
    			else{
    				var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=31&field_faculty_designation_tid=All&field_faculty_campus_tid=52&field_faculty_department_main_tid=All&field_center_name_tid=All&page='+ i
    			}
    			// console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\npage " +i +"\n"+url)
				request(url, function(err, resp, body) {
				    if (err)
				        throw err;
				    $ = cheerio.load(body);
				    // console.log($);
				    var faculties = []
				    $('.row .row-margin-top').each(function(index, element) {

				        facultyImage = $(element).find('img').attr('src')
				        facultyName = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10').text().trim();
				        facultyPos = $(element).find('.view.view-position-field-collection-view .view-content .field-content').text().trim();
				        facultyDesc = $(element).find('p').text().trim();
				        var header = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10');
				        facultyLink = $(header).find('a').attr('href')
				        // console.log()
				        // var faculty = facultyName + " " + facultyPos +" " +facultyDesc+ " amrita.edu" + facultyLink+ 
				        var faculty = facultyName + "\n" + facultyPos +"\n" + " amrita.edu" + facultyLink+ "\n\n"
				        // console.log(fac)
				        // var event = eventTitle + " : " + eventDate +"\nDescription: " + eventDesc +"\namrita.edu" + eventLink+ "\n"
				         faculties.push(faculty)

				   
				  //       api.sendPhoto({
						//     chat_id: message.chat.id,
						//     caption: faculty,

						//     // first you upload image on a url and send url as a parameter
						//     photo: facultyImage
						// })
						// console.log(faculty)
				    });
				       api.sendMessage({
						chat_id: message.chat.id,
						text: "\n"+ faculties.join('')		
						});
				     // console.log(faculties)
				     faculties = []
				    
				     
				})
				
    		}

    	}
    	else if(msg.includes('engine')){
    		for(var i = 0; i< 7; i++){
    			if (i == 0){
    				var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=38&field_faculty_designation_tid=All&field_faculty_campus_tid=52&field_faculty_department_main_tid=All&field_center_name_tid=All'
    			}
    			else{
    				var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=38&field_faculty_designation_tid=All&field_faculty_campus_tid=52&field_faculty_department_main_tid=All&field_center_name_tid=All&page='+ i
    			}
    			// console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\npage " +i +"\n"+url)
				request(url, function(err, resp, body) {
				    if (err)
				        throw err;
				    $ = cheerio.load(body);
				    // console.log($);
				    var faculties = []
				    $('.row .row-margin-top').each(function(index, element) {

				        facultyImage = $(element).find('img').attr('src')
				        facultyName = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10').text().trim();
				        facultyPos = $(element).find('.view.view-position-field-collection-view .view-content .field-content').text().trim();
				        facultyDesc = $(element).find('p').text().trim();
				        var header = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10');
				        facultyLink = $(header).find('a').attr('href')
				        // console.log()
				        // var faculty = facultyName + " " + facultyPos +" " +facultyDesc+ " amrita.edu" + facultyLink+ 
				        var faculty = facultyName + "\n" + facultyPos +"\n" + " amrita.edu" + facultyLink+ "\n\n"
				        // console.log(fac)
				        // var event = eventTitle + " : " + eventDate +"\nDescription: " + eventDesc +"\namrita.edu" + eventLink+ "\n"
				         faculties.push(faculty)

				   
				  //       api.sendPhoto({
						//     chat_id: message.chat.id,
						//     caption: faculty,

						//     // first you upload image on a url and send url as a parameter
						//     photo: facultyImage
						// })
						// console.log(faculty)
				    });
				       api.sendMessage({
						chat_id: message.chat.id,
						text: "\n"+ faculties.join('')		
						});
				     // console.log(faculties)
				     faculties = []
				    
				     
				})
				
    		}

    	}
    	else if(msg.includes('csa')||msg.includes('cse')){
    		if(msg.includes('chair')||msg.includes('hod')){
    			for(var i = 0; i<2; i++){
    				if(i ==0){
    					var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=96&field_faculty_campus_tid=52&field_faculty_department_main_tid=101&field_center_name_tid=All'
    				}else{
    					var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=142&field_faculty_campus_tid=52&field_faculty_department_main_tid=101&field_center_name_tid=All'
    				}
    				request(url, function(err, resp, body) {
					    if (err)
					        throw err;
					    $ = cheerio.load(body);
					    // console.log($);
					    var faculties = []
					    $('.row .row-margin-top').each(function(index, element) {

					        facultyImage = $(element).find('img').attr('src')
					        facultyName = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10').text().trim();
					        facultyPos = $(element).find('.view.view-position-field-collection-view .view-content .field-content').text().trim();
					        facultyDesc = $(element).find('p').text().trim();
					        var header = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10');
					        facultyLink = $(header).find('a').attr('href')
					        // console.log()
					        // var faculty = facultyName + " " + facultyPos +" " +facultyDesc+ " amrita.edu" + facultyLink+ 
					        var faculty = facultyName + "\n" + facultyPos +"\n" + facultyDesc +"\namrita.edu" + facultyLink+ "\n"

					        api.sendPhoto({
							    chat_id: message.chat.id,
							    caption: faculty,
							    photo: facultyImage
							})
							// console.log(faculty)
					    });

					})

    			}
    				
    		}
    		else{
	    		for(var i = 0; i< 3; i++){
	    			if (i == 0){
	    				var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=All&field_faculty_campus_tid=52&field_faculty_department_main_tid=101&field_center_name_tid=All'
	    			}
	    			else{
	    				var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=All&field_faculty_campus_tid=52&field_faculty_department_main_tid=101&field_center_name_tid=All&page='+ i
	    			}
	    			
					request(url, function(err, resp, body) {
					    if (err)
					        throw err;
					    $ = cheerio.load(body);
					    // console.log($);
					    var faculties = []
					    $('.row .row-margin-top').each(function(index, element) {

					        facultyImage = $(element).find('img').attr('src')
					        facultyName = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10').text().trim();
					        facultyPos = $(element).find('.view.view-position-field-collection-view .view-content .field-content').text().trim();
					        facultyDesc = $(element).find('p').text().trim();
					        var header = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10');
					        facultyLink = $(header).find('a').attr('href')
					        var faculty = facultyName + "\n" + facultyPos +"\n" + facultyDesc +"\namrita.edu" + facultyLink+ "\n"
					        
					        api.sendPhoto({
							    chat_id: message.chat.id,
							    caption: faculty,
							    photo: facultyImage
							})
							console.log(faculty)
					    });

					})
					
	    		}
    		}
    	}


    	else if(msg.includes('ece'.toLowerCase())){
    		if(msg.includes('chair')||msg.includes('hod')){
    			for(var i = 0; i<2; i++){
    				if(i ==0){
    					var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=96&field_faculty_campus_tid=52&field_faculty_department_main_tid=102&field_center_name_tid=All'
    				}else{
    					var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=142&field_faculty_campus_tid=52&field_faculty_department_main_tid=102&field_center_name_tid=All'
    				}
    				request(url, function(err, resp, body) {
					    if (err)
					        throw err;
					    $ = cheerio.load(body);
					    // console.log($);
					    var faculties = []
					    $('.row .row-margin-top').each(function(index, element) {

					        facultyImage = $(element).find('img').attr('src')
					        facultyName = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10').text().trim();
					        facultyPos = $(element).find('.view.view-position-field-collection-view .view-content .field-content').text().trim();
					        facultyDesc = $(element).find('p').text().trim();
					        var header = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10');
					        facultyLink = $(header).find('a').attr('href')
					        // console.log()
					        // var faculty = facultyName + " " + facultyPos +" " +facultyDesc+ " amrita.edu" + facultyLink+ 
					        var faculty = facultyName + "\n" + facultyPos +"\n" + facultyDesc +"\namrita.edu" + facultyLink+ "\n"

					        api.sendPhoto({
							    chat_id: message.chat.id,
							    caption: faculty,
							    photo: facultyImage
							})
							// console.log(faculty)
					    });

					})

    			}
    				
    		}
    		else{
	    		for(var i = 0; i< 2; i++){
	    			if (i == 0){
	    				var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=All&field_faculty_campus_tid=52&field_faculty_department_main_tid=102&field_center_name_tid=All'
	    			}
	    			else{
	    				var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=All&field_faculty_campus_tid=52&field_faculty_department_main_tid=102&field_center_name_tid=All&page='+ i
	    			}
	    			
					request(url, function(err, resp, body) {
					    if (err)
					        throw err;
					    $ = cheerio.load(body);
					    // console.log($);
					    var faculties = []
					    $('.row .row-margin-top').each(function(index, element) {

					        facultyImage = $(element).find('img').attr('src')
					        facultyName = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10').text().trim();
					        facultyPos = $(element).find('.view.view-position-field-collection-view .view-content .field-content').text().trim();
					        facultyDesc = $(element).find('p').text().trim();
					        var header = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10');
					        facultyLink = $(header).find('a').attr('href')
					        var faculty = facultyName + "\n" + facultyPos +"\n" + facultyDesc +"\namrita.edu" + facultyLink+ "\n"
					        
					        api.sendPhoto({
							    chat_id: message.chat.id,
							    caption: faculty,
							    photo: facultyImage
							})
							console.log(faculty)
					    });

					})
					
	    		}
    		}
    	}


    	else if(msg.includes('eee'.toLowerCase())){
    		if(msg.includes('chair')||msg.includes('hod')){
    			for(var i = 0; i<2; i++){
    				if(i ==0){
    					var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=96&field_faculty_campus_tid=52&field_faculty_department_main_tid=103&field_center_name_tid=All'
    				}else{
    					var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=142&field_faculty_campus_tid=52&field_faculty_department_main_tid=103&field_center_name_tid=All'    				}
    				request(url, function(err, resp, body) {
					    if (err)
					        throw err;
					    $ = cheerio.load(body);
					    // console.log($);
					    var faculties = []
					    $('.row .row-margin-top').each(function(index, element) {

					        facultyImage = $(element).find('img').attr('src')
					        facultyName = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10').text().trim();
					        facultyPos = $(element).find('.view.view-position-field-collection-view .view-content .field-content').text().trim();
					        facultyDesc = $(element).find('p').text().trim();
					        var header = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10');
					        facultyLink = $(header).find('a').attr('href')
					        // console.log()
					        // var faculty = facultyName + " " + facultyPos +" " +facultyDesc+ " amrita.edu" + facultyLink+ 
					        var faculty = facultyName + "\n" + facultyPos +"\n" + facultyDesc +"\namrita.edu" + facultyLink+ "\n"

					        api.sendPhoto({
							    chat_id: message.chat.id,
							    caption: faculty,
							    photo: facultyImage
							})
							// console.log(faculty)
					    });

					})

    			}
    				
    		}
    		else{
	    		for(var i = 0; i< 2; i++){
	    			if (i == 0){
	    				var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=98&field_faculty_campus_tid=52&field_faculty_department_main_tid=103&field_center_name_tid=All'
	    			}
	    			else{
	    				var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=98&field_faculty_campus_tid=52&field_faculty_department_main_tid=103&field_center_name_tid=All&page='+ i
	    			}
	    			
					request(url, function(err, resp, body) {
					    if (err)
					        throw err;
					    $ = cheerio.load(body);
					    // console.log($);
					    var faculties = []
					    $('.row .row-margin-top').each(function(index, element) {

					        facultyImage = $(element).find('img').attr('src')
					        facultyName = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10').text().trim();
					        facultyPos = $(element).find('.view.view-position-field-collection-view .view-content .field-content').text().trim();
					        facultyDesc = $(element).find('p').text().trim();
					        var header = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10');
					        facultyLink = $(header).find('a').attr('href')
					        var faculty = facultyName + "\n" + facultyPos +"\n" + facultyDesc +"\namrita.edu" + facultyLink+ "\n"
					        
					        api.sendPhoto({
							    chat_id: message.chat.id,
							    caption: faculty,
							    photo: facultyImage
							})
							console.log(faculty)
					    });

					})
					
	    		}
    		}
    	}



    	else if(msg.includes('mechanical'.toLowerCase()) || msg.includes('mec'.toLowerCase()) || msg.includes('mech'.toLowerCase())){
    		if(msg.includes('chair')||msg.includes('hod')){
    			for(var i = 0; i<2; i++){
    				if(i ==0){
    					var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=96&field_faculty_campus_tid=52&field_faculty_department_main_tid=104&field_center_name_tid=All'
    				}else{
    					var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=142&field_faculty_campus_tid=52&field_faculty_department_main_tid=104&field_center_name_tid=All'
    				}
    				request(url, function(err, resp, body) {
					    if (err)
					        throw err;
					    $ = cheerio.load(body);
					    // console.log($);
					    var faculties = []
					    $('.row .row-margin-top').each(function(index, element) {

					        facultyImage = $(element).find('img').attr('src')
					        facultyName = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10').text().trim();
					        facultyPos = $(element).find('.view.view-position-field-collection-view .view-content .field-content').text().trim();
					        facultyDesc = $(element).find('p').text().trim();
					        var header = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10');
					        facultyLink = $(header).find('a').attr('href')
					        // console.log()
					        // var faculty = facultyName + " " + facultyPos +" " +facultyDesc+ " amrita.edu" + facultyLink+ 
					        var faculty = facultyName + "\n" + facultyPos +"\n" + facultyDesc +"\namrita.edu" + facultyLink+ "\n"

					        api.sendPhoto({
							    chat_id: message.chat.id,
							    caption: faculty,
							    photo: facultyImage
							})
							// console.log(faculty)
					    });

					})

    			}
    				
    		}
    		else{
	    		for(var i = 0; i< 2; i++){
	    			if (i == 0){
	    				var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=98&field_faculty_campus_tid=52&field_faculty_department_main_tid=104&field_center_name_tid=All'
	    			}
	    			else{
	    				var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=98&field_faculty_campus_tid=52&field_faculty_department_main_tid=104&field_center_name_tid=All&page='+ i
	    			}
	    			
					request(url, function(err, resp, body) {
					    if (err)
					        throw err;
					    $ = cheerio.load(body);
					    // console.log($);
					    var faculties = []
					    $('.row .row-margin-top').each(function(index, element) {

					        facultyImage = $(element).find('img').attr('src')
					        facultyName = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10').text().trim();
					        facultyPos = $(element).find('.view.view-position-field-collection-view .view-content .field-content').text().trim();
					        facultyDesc = $(element).find('p').text().trim();
					        var header = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10');
					        facultyLink = $(header).find('a').attr('href')
					        var faculty = facultyName + "\n" + facultyPos +"\n" + facultyDesc +"\namrita.edu" + facultyLink+ "\n"
					        
					        api.sendPhoto({
							    chat_id: message.chat.id,
							    caption: faculty,
							    photo: facultyImage
							})
							console.log(faculty)
					    });

					})
					
	    		}
    		}
    	}


    	else if(msg.includes('eng'.toLowerCase()) || msg.includes('english'.toLowerCase()) || msg.includes('engli'.toLowerCase())){
    		if(msg.includes('chair')||msg.includes('hod')){
    			for(var i = 0; i<1; i++){
    				if(i ==0){
    					var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=96&field_faculty_campus_tid=52&field_faculty_department_main_tid=139&field_center_name_tid=All'
    				}
    				request(url, function(err, resp, body) {
					    if (err)
					        throw err;
					    $ = cheerio.load(body);
					    // console.log($);
					    var faculties = []
					    $('.row .row-margin-top').each(function(index, element) {

					        facultyImage = $(element).find('img').attr('src')
					        facultyName = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10').text().trim();
					        facultyPos = $(element).find('.view.view-position-field-collection-view .view-content .field-content').text().trim();
					        facultyDesc = $(element).find('p').text().trim();
					        var header = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10');
					        facultyLink = $(header).find('a').attr('href')
					        // console.log()
					        // var faculty = facultyName + " " + facultyPos +" " +facultyDesc+ " amrita.edu" + facultyLink+ 
					        var faculty = facultyName + "\n" + facultyPos +"\n" + facultyDesc +"\namrita.edu" + facultyLink+ "\n"

					        api.sendPhoto({
							    chat_id: message.chat.id,
							    caption: faculty,
							    photo: facultyImage
							})
							// console.log(faculty)
					    });

					})

    			}
    				
    		}
    		else{
	    		for(var i = 0; i< 2; i++){
	    			if (i == 0){
	    				var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=98&field_faculty_campus_tid=52&field_faculty_department_main_tid=139&field_center_name_tid=All'
	    			}
	    			else{
	    				var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=98&field_faculty_campus_tid=52&field_faculty_department_main_tid=139&field_center_name_tid=All&page='+ i
	    			}
	    			
					request(url, function(err, resp, body) {
					    if (err)
					        throw err;
					    $ = cheerio.load(body);
					    // console.log($);
					    var faculties = []
					    $('.row .row-margin-top').each(function(index, element) {

					        facultyImage = $(element).find('img').attr('src')
					        facultyName = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10').text().trim();
					        facultyPos = $(element).find('.view.view-position-field-collection-view .view-content .field-content').text().trim();
					        facultyDesc = $(element).find('p').text().trim();
					        var header = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10');
					        facultyLink = $(header).find('a').attr('href')
					        var faculty = facultyName + "\n" + facultyPos +"\n" + facultyDesc +"\namrita.edu" + facultyLink+ "\n"
					        
					        api.sendPhoto({
							    chat_id: message.chat.id,
							    caption: faculty,
							    photo: facultyImage
							})
							console.log(faculty)
					    });

					})
					
	    		}
    		}
    	}


	else if(msg.includes('math'.toLowerCase()) || msg.includes('maths'.toLowerCase()) || msg.includes('Mathematics'.toLowerCase())){
    		if(msg.includes('chair')||msg.includes('hod')){
    			for(var i = 0; i<1; i++){
    				if(i ==0){
    					var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=96&field_faculty_campus_tid=52&field_faculty_department_main_tid=105&field_center_name_tid=All'    				}
    				request(url, function(err, resp, body) {
					    if (err)
					        throw err;
					    $ = cheerio.load(body);
					    // console.log($);
					    var faculties = []
					    $('.row .row-margin-top').each(function(index, element) {

					        facultyImage = $(element).find('img').attr('src')
					        facultyName = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10').text().trim();
					        facultyPos = $(element).find('.view.view-position-field-collection-view .view-content .field-content').text().trim();
					        facultyDesc = $(element).find('p').text().trim();
					        var header = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10');
					        facultyLink = $(header).find('a').attr('href')
					        // console.log()
					        // var faculty = facultyName + " " + facultyPos +" " +facultyDesc+ " amrita.edu" + facultyLink+ 
					        var faculty = facultyName + "\n" + facultyPos +"\n" + facultyDesc +"\namrita.edu" + facultyLink+ "\n"

					        api.sendPhoto({
							    chat_id: message.chat.id,
							    caption: faculty,
							    photo: facultyImage
							})
							// console.log(faculty)
					    });

					})

    			}
    				
    		}
    		else{
	    		for(var i = 0; i< 2; i++){
	    			if (i == 0){
	    				var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=98&field_faculty_campus_tid=52&field_faculty_department_main_tid=105&field_center_name_tid=All'
	    			}
	    			else{
	    				var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=98&field_faculty_campus_tid=52&field_faculty_department_main_tid=105&field_center_name_tid=All&page='+ i
	    			}
	    			
					request(url, function(err, resp, body) {
					    if (err)
					        throw err;
					    $ = cheerio.load(body);
					    // console.log($);
					    var faculties = []
					    $('.row .row-margin-top').each(function(index, element) {

					        facultyImage = $(element).find('img').attr('src')
					        facultyName = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10').text().trim();
					        facultyPos = $(element).find('.view.view-position-field-collection-view .view-content .field-content').text().trim();
					        facultyDesc = $(element).find('p').text().trim();
					        var header = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10');
					        facultyLink = $(header).find('a').attr('href')
					        var faculty = facultyName + "\n" + facultyPos +"\n" + facultyDesc +"\namrita.edu" + facultyLink+ "\n"
					        
					        api.sendPhoto({
							    chat_id: message.chat.id,
							    caption: faculty,
							    photo: facultyImage
							})
							console.log(faculty)
					    });

					})
					
	    		}
    		}
    	}



	else if(msg.includes('phy'.toLowerCase()) || msg.includes('Physics'.toLowerCase()) || msg.includes('phys'.toLowerCase())){
    		if(msg.includes('chair')||msg.includes('hod')){
    			for(var i = 0; i<1; i++){
    				if(i ==0){
    					var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=96&field_faculty_campus_tid=52&field_faculty_department_main_tid=106&field_center_name_tid=All'    				}
    				request(url, function(err, resp, body) {
					    if (err)
					        throw err;
					    $ = cheerio.load(body);
					    // console.log($);
					    var faculties = []
					    $('.row .row-margin-top').each(function(index, element) {

					        facultyImage = $(element).find('img').attr('src')
					        facultyName = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10').text().trim();
					        facultyPos = $(element).find('.view.view-position-field-collection-view .view-content .field-content').text().trim();
					        facultyDesc = $(element).find('p').text().trim();
					        var header = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10');
					        facultyLink = $(header).find('a').attr('href')
					        // console.log()
					        // var faculty = facultyName + " " + facultyPos +" " +facultyDesc+ " amrita.edu" + facultyLink+ 
					        var faculty = facultyName + "\n" + facultyPos +"\n" + facultyDesc +"\namrita.edu" + facultyLink+ "\n"

					        api.sendPhoto({
							    chat_id: message.chat.id,
							    caption: faculty,
							    photo: facultyImage
							})
							// console.log(faculty)
					    });

					})

    			}
    				
    		}
    		else{
	    		for(var i = 0; i< 2; i++){
	    			if (i == 0){
	    				var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=98&field_faculty_campus_tid=52&field_faculty_department_main_tid=106&field_center_name_tid=All'
	    			}
	    			else{
	    				var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=98&field_faculty_campus_tid=52&field_faculty_department_main_tid=106&field_center_name_tid=All&page='+ i
	    			}
	    			
					request(url, function(err, resp, body) {
					    if (err)
					        throw err;
					    $ = cheerio.load(body);
					    // console.log($);
					    var faculties = []
					    $('.row .row-margin-top').each(function(index, element) {

					        facultyImage = $(element).find('img').attr('src')
					        facultyName = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10').text().trim();
					        facultyPos = $(element).find('.view.view-position-field-collection-view .view-content .field-content').text().trim();
					        facultyDesc = $(element).find('p').text().trim();
					        var header = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10');
					        facultyLink = $(header).find('a').attr('href')
					        var faculty = facultyName + "\n" + facultyPos +"\n" + facultyDesc +"\namrita.edu" + facultyLink+ "\n"
					        
					        api.sendPhoto({
							    chat_id: message.chat.id,
							    caption: faculty,
							    photo: facultyImage
							})
							console.log(faculty)
					    });

					})
					
	    		}
    		}
    	}


    	else if(msg.includes('chem'.toLowerCase()) || msg.includes('chemistry'.toLowerCase()) || msg.includes('chemi'.toLowerCase())){
    		if(msg.includes('chair')||msg.includes('hod')){
    			for(var i = 0; i<1; i++){
    				if(i ==0){
    					var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=96&field_faculty_campus_tid=52&field_faculty_department_main_tid=107&field_center_name_tid=All'    				}
    				request(url, function(err, resp, body) {
					    if (err)
					        throw err;
					    $ = cheerio.load(body);
					    // console.log($);
					    var faculties = []
					    $('.row .row-margin-top').each(function(index, element) {

					        facultyImage = $(element).find('img').attr('src')
					        facultyName = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10').text().trim();
					        facultyPos = $(element).find('.view.view-position-field-collection-view .view-content .field-content').text().trim();
					        facultyDesc = $(element).find('p').text().trim();
					        var header = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10');
					        facultyLink = $(header).find('a').attr('href')
					        // console.log()
					        // var faculty = facultyName + " " + facultyPos +" " +facultyDesc+ " amrita.edu" + facultyLink+ 
					        var faculty = facultyName + "\n" + facultyPos +"\n" + facultyDesc +"\namrita.edu" + facultyLink+ "\n"

					        api.sendPhoto({
							    chat_id: message.chat.id,
							    caption: faculty,
							    photo: facultyImage
							})
							// console.log(faculty)
					    });

					})

    			}
    				
    		}
    		else{
	    		for(var i = 0; i< 2; i++){
	    			if (i == 0){
	    				var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=98&field_faculty_campus_tid=52&field_faculty_department_main_tid=107&field_center_name_tid=All'
	    			}
	    			else{
	    				var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=98&field_faculty_campus_tid=52&field_faculty_department_main_tid=107&field_center_name_tid=All&page='+ i
	    			}
	    			
					request(url, function(err, resp, body) {
					    if (err)
					        throw err;
					    $ = cheerio.load(body);
					    // console.log($);
					    var faculties = []
					    $('.row .row-margin-top').each(function(index, element) {

					        facultyImage = $(element).find('img').attr('src')
					        facultyName = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10').text().trim();
					        facultyPos = $(element).find('.view.view-position-field-collection-view .view-content .field-content').text().trim();
					        facultyDesc = $(element).find('p').text().trim();
					        var header = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10');
					        facultyLink = $(header).find('a').attr('href')
					        var faculty = facultyName + "\n" + facultyPos +"\n" + facultyDesc +"\namrita.edu" + facultyLink+ "\n"
					        
					        api.sendPhoto({
							    chat_id: message.chat.id,
							    caption: faculty,
							    photo: facultyImage
							})
							console.log(faculty)
					    });

					})
					
	    		}
    		}
    	}





else if(msg.includes('bba'.toLowerCase()) || msg.includes('management'.toLowerCase()) || msg.includes('Bachelor of Business Administration'.toLowerCase())){
    		if(msg.includes('chair')||msg.includes('hod')){
    			for(var i = 0; i<1; i++){
    				if(i ==0){
    					var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=96&field_faculty_campus_tid=52&field_faculty_department_main_tid=4241&field_center_name_tid=All'    				}
    				request(url, function(err, resp, body) {
					    if (err)
					        throw err;
					    $ = cheerio.load(body);
					    // console.log($);
					    var faculties = []
					    $('.row .row-margin-top').each(function(index, element) {

					        facultyImage = $(element).find('img').attr('src')
					        facultyName = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10').text().trim();
					        facultyPos = $(element).find('.view.view-position-field-collection-view .view-content .field-content').text().trim();
					        facultyDesc = $(element).find('p').text().trim();
					        var header = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10');
					        facultyLink = $(header).find('a').attr('href')
					        // console.log()
					        // var faculty = facultyName + " " + facultyPos +" " +facultyDesc+ " amrita.edu" + facultyLink+ 
					        var faculty = facultyName + "\n" + facultyPos +"\n" + facultyDesc +"\namrita.edu" + facultyLink+ "\n"

					        api.sendPhoto({
							    chat_id: message.chat.id,
							    caption: faculty,
							    photo: facultyImage
							})
							// console.log(faculty)
					    });

					})

    			}
    				
    		}
    		else{
	    		for(var i = 0; i< 2; i++){
	    			if (i == 0){
	    				var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=98&field_faculty_campus_tid=52&field_faculty_department_main_tid=4241&field_center_name_tid=All'
	    			}
	    			else{
	    				var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=98&field_faculty_campus_tid=52&field_faculty_department_main_tid=4241&field_center_name_tid=All&page='+ i
	    			}
	    			
					request(url, function(err, resp, body) {
					    if (err)
					        throw err;
					    $ = cheerio.load(body);
					    // console.log($);
					    var faculties = []
					    $('.row .row-margin-top').each(function(index, element) {

					        facultyImage = $(element).find('img').attr('src')
					        facultyName = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10').text().trim();
					        facultyPos = $(element).find('.view.view-position-field-collection-view .view-content .field-content').text().trim();
					        facultyDesc = $(element).find('p').text().trim();
					        var header = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10');
					        facultyLink = $(header).find('a').attr('href')
					        var faculty = facultyName + "\n" + facultyPos +"\n" + facultyDesc +"\namrita.edu" + facultyLink+ "\n"
					        
					        api.sendPhoto({
							    chat_id: message.chat.id,
							    caption: faculty,
							    photo: facultyImage
							})
							console.log(faculty)
					    });

					})
					
	    		}
    		}
    	}


// else if(msg.includes('biotechnology'.toLowerCase()) || msg.includes('biotech'.toLowerCase()) || msg.includes('School of Biotechnology'.toLowerCase())){
//     		if(msg.includes('chair')||msg.includes('hod')){
//     			for(var i = 0; i<1; i++){
//     				if(i ==0){
//     					var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=All&field_faculty_campus_tid=52&field_faculty_department_main_tid=3132&field_center_name_tid=All'    				}
//     				request(url, function(err, resp, body) {
// 					    if (err)
// 					        throw err;
// 					    $ = cheerio.load(body);
// 					    // console.log($);
// 					    var faculties = []
// 					    $('.row .row-margin-top').each(function(index, element) {

// 					        facultyImage = $(element).find('img').attr('src')
// 					        facultyName = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10').text().trim();
// 					        facultyPos = $(element).find('.view.view-position-field-collection-view .view-content .field-content').text().trim();
// 					        facultyDesc = $(element).find('p').text().trim();
// 					        var header = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10');
// 					        facultyLink = $(header).find('a').attr('href')
// 					        // console.log()
// 					        // var faculty = facultyName + " " + facultyPos +" " +facultyDesc+ " amrita.edu" + facultyLink+ 
// 					        var faculty = facultyName + "\n" + facultyPos +"\n" + facultyDesc +"\namrita.edu" + facultyLink+ "\n"

// 					        api.sendPhoto({
// 							    chat_id: message.chat.id,
// 							    caption: faculty,
// 							    photo: facultyImage
// 							})
// 							// console.log(faculty)
// 					    });

// 					})

//     			}
    				
//     		}
//     		else{
// 	    		for(var i = 0; i< 2; i++){
// 	    			if (i == 0){
// 	    				var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=All&field_faculty_campus_tid=52&field_faculty_department_main_tid=3132&field_center_name_tid=All'
// 	    			}
// 	    			else{
// 	    				var url = 'https://www.amrita.edu/faculty?field_faculty_department_tid=All&field_faculty_designation_tid=All&field_faculty_campus_tid=52&field_faculty_department_main_tid=3132&field_center_name_tid=All&page='+ i
// 	    			}
	    			
// 					request(url, function(err, resp, body) {
// 					    if (err)
// 					        throw err;
// 					    $ = cheerio.load(body);
// 					    // console.log($);
// 					    var faculties = []
// 					    $('.row .row-margin-top').each(function(index, element) {

// 					        facultyImage = $(element).find('img').attr('src')
// 					        facultyName = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10').text().trim();
// 					        facultyPos = $(element).find('.view.view-position-field-collection-view .view-content .field-content').text().trim();
// 					        facultyDesc = $(element).find('p').text().trim();
// 					        var header = $(element).find('.text-color-inherit.no-top-margin.margin-bottom-10');
// 					        facultyLink = $(header).find('a').attr('href')
// 					        var faculty = facultyName + "\n" + facultyPos +"\n" + facultyDesc +"\namrita.edu" + facultyLink+ "\n"
					        
// 					        api.sendPhoto({
// 							    chat_id: message.chat.id,
// 							    caption: faculty,
// 							    photo: facultyImage
// 							})
// 							console.log(faculty)
// 					    });

// 					})
					
// 	    		}
//     		}
//     	}



    	else{
	    	facultyname = facultyname[1]
	    	api.sendMessage({
			chat_id: message.chat.id,
			text: facultyname 		
			}); 
    	}
    }

    else if(msg.includes('bus'.toLowerCase())){
    	if(msg.includes('oachira'.toLowerCase())){
    		api.sendMessage({
			chat_id: message.chat.id,
			text: 'Oachira to kayamkulam side\n'+'\n'+'Time - Starting point - Type\n'+'\n'+'*Morning to Afternoon\n'+'5.10'+' '+'AM - Ernakulam - Transport\n'+'6.40'+' '+'AM - Oachira - Private\n'+'7.25'+' '+'AM - Oachira - Private\n'+'8.10'+' '+'AM - Oachira - Private\n'+'8.20'+' '+'AM - Alappuzha - Transport\n'+'8.30'+' '+'AM - Oachira - Private\n'+'8.50 '+' '+'AM- Oachira - Private\n'+'9.05'+' '+'AM - Oachira - Private\n'+'9.10'+' '+'AM - Oachira - Private\n'+'9.40'+' '+'AM - Oachira - Private\n'+'10.30'+' '+'AM - Oachira - Private\n'+'11.00'+' '+'AM - Oachira - Private\n'+'11.35'+' '+'AM - Oachira - Private\n'+'11.55'+' '+'AM - Oachira - Private\n'+'\n'+'*Afternoon to Evening\n'+'12.40'+' '+'PM - Oachira - Private\n'+'1.10'+' '+'PM - Oachira - Private\n'+'1.30'+' '+'PM - Oachira - Private\n'+'1.45'+' '+'PM - Oachira - Private\n'+'2.30'+' '+'PM - Oachira - Private\n'+'2.55'+' '+'PM - Oachira - Private\n'+'3.40'+' '+'PM - Oachira - Private\n'+'3.55'+' '+'PM - Oachira - Private\n'+'4.50'+' '+'PM - Oachira - Private\n'+'\n'+'*Evening to Night\n'+'5.10'+' '+'PM - Oachira - Private\n'+'5.30'+' '+'PM - Oachira - Private\n'+'5.40'+' '+'PM - Oachira - Private\n'+'5.55'+' '+'PM - Oachira - Private\n'+'6.20 '+' '+'PM- Oachira - Private\n'+'7.05'+' '+'PM - Oachira - Private\n'+'7.55'+' '+'PM - Oachira - Amrita sethu\n' 		
			}); 
    	}
    	else if(msg.includes('karunagapally') || msg.includes('kply')){
    		api.sendMessage({
			chat_id: message.chat.id,
			text: 'Bus timing karunagapally\n'+'\n'+'Time - Starting point - Type\n'+'\n'+'*Morning to Afternoon\n'+'5.00'+' '+'AM - karunagapally,Kollam - Transport\n'+'5.15'+' '+'AM - Trivandrum fast - Transport\n'+'6.30'+' '+'AM - karunagapally  - Private\n'+'7.00'+' '+'AM - karunagapally - Private\n'+'7.10'+' '+'AM - karunagapally - Private\n'+'7.35'+' '+'AM - karunagapally - Private\n'+'7.55'+' '+'AM - karunagapally - Private\n'+'8.05'+' '+'AM - karunagapally - Private\n'+'8.10'+' '+'AM - karunagapally - Transport\n'+'8.45'+' '+'AM - karunagapally - Private\n'+'9.10'+' '+'AM - karunagapally - Transport\n'+'9.30'+' '+'AM - karunagapally - Private\n'+'9.40'+' '+'AM - karunagapally - Private\n'+'9.45'+' '+'AM - karunagapally - Private\n'+'10.00'+' '+'AM - karunagapally - Private\n'+'10.25'+' '+'AM - karunagapally - Transport\n'+'10.45'+' '+'AM - karunagapally - Private\n'+'11.05'+' '+'AM - karunagapally - Private\n'+'11.55'+' '+'AM - karunagapally - Private\n'+'12.20'+' '+'PM- karunagapally - Private\n' +'\n'+'*Afternoon to Evening\n'+'12.25'+' '+'PM- karunagapally - Transport\n'+'12.30'+' '+'PM - karunagapally - Private\n'+'1.00'+' '+'PM - karunagapally - Private\n'+'1.25'+' '+'PM- karunagapally - Private\n'+'1.40'+' '+'PM- karunagapally - Private\n'+'2.00'+' '+'PM - karunagapally - Private\n'+'2.25'+' '+'PM - karunagapally - Private\n'+'2.40'+' '+'PM - karunagapally - Private\n'+'3.10'+' '+'PM - karunagapally - Private\n'+'3.30'+' '+'PM - karunagapally - Transport\n'+'3.45'+' '+'PM - karunagapally - Private\n'+'4.30'+' '+'PM - karunagapally - Transport\n'+'4.45'+' '+'PM- karunagapally - Private\n'  +'\n'+'*Evening to Night\n' +  '5.30'+' '+'PM - karunagapally - Private\n'+'5.30'+' '+'PM - karunagapally - Transport\n'+'5.45'+' '+'PM - karunagapally - Private\n'+'6.00'+' '+'PM - karunagapally - Private\n'+'6.30'+' '+'PM - karunagapally - Transport\n'+'7.10'+' '+'PM - karunagapally - Private\n'+'8.35'+' '+'PM - karunagapally - Transport\n' 		
			}); 
    	}
    	else
    	{
    		api.sendMessage({
			chat_id: message.chat.id,
			text: 'not available' 		
			}); 
    	}
    }

    else if(msg.includes('auto'))
    {
    	api.sendMessage({
		chat_id: message.chat.id,
		text: 'Auto Numbers: \n\n'+'Name'+' '+'-'+' '+'Contact Number\n'+'Abish'+' '+'-'+' '+'9846127124\n'+'Anil'+' '+'-'+' '+'9995641900\n'+'Rashid'+' '+'-'+' '+'9995140161\n'+'Sambel'+' '+'-'+' '+'8129861091\n'+'Santosh'+' '+'-'+' '+'9895256655\n'		
		}); 
    }

    else if(msg.includes('helpline')){
    	api.sendMessage({
		chat_id: message.chat.id,
		text: 'Ambulance‎: ‎108 \nPolice Helpline‎: ‎0471-324 3000/4000/5000 \nPolice station‎: ‎100 \nFire: ' 		
		}); 

    }

    else if(msg.includes('bug')){
    	api.sendMessage({
		chat_id: message.chat.id,  
		text: 'Contact Team @\n\n'+'abhilashsaj@gmail.com\n\n'+'vaddepavan99@gmail.com\n\n'+'vivekkallummoodan@gmail.com\n\n'+'sarathjnair99@gmail.com\n\n'+'madirisriramteja@gmail.com' 		
		}); 

    }


    



    else{
    	api.sendMessage({
		chat_id: message.chat.id,
		text: "Sorry Couldn't understand you.. \n Check list of commands and try again" 		
		}); 
    }
})