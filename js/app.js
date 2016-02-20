$(document).ready(function(){
	
	$('.answer').hide();
	var questions = [
		{
			question: "Which film set in Rick's Cafe starred Humphrey Bogart and Ingrid Bergman?",
			answers: ["The African Queen", "Casablanca", "Notorious"],
			correctAnswer: "Casablanca",
			info: "Casablanca is a 1942 American romantic drama film directed by Michael Curtiz and based on Murray Burnett and Joan Alison's unproduced stage play Everybody Comes to Rick's. The film stars Humphrey Bogart, Ingrid Bergman, and Paul Henreid; it also features Claude Rains, Conrad Veidt, Sydney Greenstreet, Peter Lorre, and Dooley Wilson. Set during World War II, it focuses on an American expatriate who must choose between his love for a woman and helping her Czech Resistance leader husband escape the Vichy-controlled city of Casablanca to continue his fight against the Nazis."
		},
		{
			question: "Who played James Bond in 'Live and Let Die'?",
			answers: ["Roger Moore", "Sean Connery", "Pierce Brosnan"],
			correctAnswer: "Roger Moore",
			info: "After Diamonds Are Forever, Broccoli and Saltzman tried to convince Sean Connery to return as Bond, but he declined. After considering Jeremy Brett, Michael Billington and Julian Glover, the two producers finally turned to Roger Moore, who they had previously discussed for On Her Majesty's Secret Service, but who had been unavailable, and he was ultimately cast to play Bond in Live and Let Die. At the time Moore was an established television actor, known for his performances as Simon Templar in The Saint and Lord Brett Sinclair in The Persuaders!: in both of which he played a 'charming, debonair, international playboy'.When playing Bond, Moore tried not to imitate either Connery or his previous roles, and screenwriter Tom Mankiewicz fitted the screenplay around Moore's persona by giving more comedy scenes and a light-hearted feel to Bond, an approach that led Raymond Benson to describe Moore's Bond as 'a rather smarmy, eyebrow-raising international playboy who never seemed to get hurt'."
		},
		{
			question: "In the film 'Shrek', what is the name of Shrek's wife?",
			answers: ["Maya", "Mary", "Fiona"],
			correctAnswer: "Fiona",
			info: "Princess Fiona is a fictional main character who serves as the female lead in DreamWorks' animated Shrek film series. She made her first appearance in the first film in the franchise, Shrek (2001), voiced by American actress Cameron Diaz."
		},
		{
			question: "What was the title of the film that Whitney Houston starred in alongside Kevin Costner?",
			answers: ["The Bodyguard", "Night Queen", "Someone to care"],
			correctAnswer: "The Bodyguard",
			info: "The Bodyguard is a 1992 American romantic thriller film directed by Mick Jackson, written by Lawrence Kasdan, and starring Kevin Costner and Whitney Houston. Costner stars as a former Secret Service agent-turned-bodyguard who is hired to protect Houston's character, a music star, from an unknown stalker. Kasdan wrote the film in the mid 1970s, originally as a vehicle for Ryan O'Neal and Diana Ross."
		},
		{
			question: "Who played Forrest Gump?",
			answers: ["Mel Gibson", "Sean Penn", "Tom Hanks"],
			correctAnswer: "Tom Hanks",
			info: "Forrest Gump is a 1994 American epic romantic-comedy-drama film based on the 1986 novel of the same name by Winston Groom. The film was directed by Robert Zemeckis and stars Tom Hanks, Robin Wright, Gary Sinise, Mykelti Williamson, and Sally Field. The story depicts several decades in the life of Forrest Gump, a slow-witted and naïve, but good-hearted and athletically prodigious man from Alabama who witnesses, and in some cases influences, some of the defining events of the latter half of the 20th century in the United States; more specifically, the period between Forrest's birth in 1944 and 1982."
		}
	];

	questionsNumber = questions.length;
	questionsCounter = 0;

	var numbers = [];

	for(var k=1; k<=questionsNumber; k++){
		numbers[k-1] = k;
		$('.number-list').append('<li id=question-number'+k+'>'+k+'</li>');
	}

	getQuestion(questionsCounter);

	$(document).on('click', '.answer-item', function(){
		$(this).siblings("li").removeClass("answer-selected");		
		if($(this).hasClass("answer-selected")){
			$(this).removeClass("answer-selected");
		}
		else{
			$(this).addClass("answer-selected");
		}	
	});

	$(document).on('click', '.submit', function(){
		var answer = $('.answer-selected').text();
		var rightAnswer = questions[questionsCounter].correctAnswer;
		showAnswer(answer, rightAnswer, questionsCounter);
		questionsCounter++;
	});

	$(document).on('click','.nextQuestion', function(){
		if(questionsCounter<questionsNumber){
			$('.question-title').show();
			$('section').show();
			$('.answer').hide();
			getQuestion(questionsCounter);
		}
		else{
			$('.answer').html('<div class="info"><h3>Conqratulations! You have successfully finished the Movie Quiz!</h3><p>You have answered correctly x out of y questions!</p><p class="playAgain">Play again the quiz!</p></div>');
		}
	});

	$(document).on('click','.playAgain', function(){
		location.reload(true);
	});
	function showAnswer(answer, rightAnswer, questionsNumber){
		if( answer == rightAnswer ){
			$('.answer').html("<div class='info'><h3>That's Right!</h3><p>"+ questions[questionsNumber].info + "</p><p class='nextQuestion'>Next Question</p></div>");
		}
		else{ 
			$('.answer').html("<div class='info'><h3>Sorry! The right answer is <span><font color='red'>'" + rightAnswer +"'</font></span>.</h3><p>"+ questions[questionsNumber].info + "</p><p class='nextQuestion'>Next Question</p></div>");
		}
		$('.question-title').hide();
			$('section').hide();
			$('.answer').show();
	}
	function getQuestion(Num){
		if(Num<questionsNumber){
			$('.question-title').text(questions[Num].question);
			$('.answer-item').remove();
			for(var y=0; y<3;++y){
				$('.answer-list').append("<li class='answer-item'>" + questions[Num].answers[y] + "</li>");
			}
			var questionNumber= Num + 1;
			var currentQuestionId = "#question-number"+ questionNumber; 
			console.log(currentQuestionId);
			$('.number-list li').removeClass();
			$(currentQuestionId).addClass('current-question-number').show();
		}
		else{

		}

		
	}
});