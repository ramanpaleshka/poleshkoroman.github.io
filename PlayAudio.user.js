// ==UserScript==
// @name         PlayAudio
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  play audio in vk
// @author       Roman Poleshko
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.18.2/babel.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.16.0/polyfill.js
// @require		 https://poleshkoroman.github.io/VoiceAssistant.js
// @match        https://vk.com/audios194032004
// ==/UserScript==


var inline_src = (<><![CDATA[
	// let click = new Event('click');
	// document.getElementsByClassName('_audio_row__play_btn')[0].dispatchEvent(click);

    let data = [
		{
			questions: "Лёха",
			answer: "kto eto?",
			do: "again"
		},
		{
			questions: "Даша",
			answer: "darova malaya",
			do: "again"
		},
		{
			questions: "Рома",
			answer: "darova pidr",
			do: "again"
		},
		{
			questions: "Здорово",
			answer: "darov",
			do: "again"
		},
		{
			questions: "Включи музыку",
			answer: "kakuy",
			do: "again"
		},
		{
			questions: "YouTube",
			answer: "sek",
			do: "youtube"
		},
		{
			questions: "ВК",
			answer: "sek",
			do: "music"
		},
		{
			questions: "красавчик",
			answer: "pasiba",
			do: "again"
		},
		{
			questions: "Спасибо",
			answer: "ne za chto braatan",
			do: "again"
		},
		{
			questions: "что по погоде",
			answer: "sek",
			do: "weather"
		},
		{
			questions: "погода",
			answer: "sek",
			do: "weather"
		},
		{
			questions: "переводчик",
			answer: "sek",
			do: "translate"
		},
		{
			questions: "Как дела",
			answer: "kak vsegda za ebis",
			do: "again"
		},
		{
			questions: "понял",
			answer: "krasava",
			do: "again"
		},
		{
			questions: "вырубай",
			answer: "bb",
			do: "off"
		},
		{
			questions: "ничего",
			answer: "kek",
			do: "again"
		},
		{
			answer: "ne ponyal",
			do: "again"
		}
	]

	const recognizer = new webkitSpeechRecognition();
	recognizer.interimResults = true;
	recognizer.lang = 'ru-Ru';

	const speech = () => {
		recognizer.onresult = (event) => {
		    const result = event.results[event.resultIndex];
		    if (result.isFinal) {
		   		caseEvent(result[0].transcript, recognizer);
			}
	  	};
	};
	const caseEvent = (text) => {
		console.log(text);
		data.forEach((item) => {
			if (item.questions === text) {
				const synth = speechSynthesis;
	  			const utterance = new SpeechSynthesisUtterance(item.answer);
	  			synth.speak(utterance);
		  		doSomething(item.do);
			}
		})
	};
	const doSomething = (dosomething) => {
		switch (dosomething) {
			case "again" : {
				speech();
				break;
			}
			case "music" : {
				let click = new Event("click");
				document.getElementsByClassName("_audio_row__play_btn")[0].dispatchEvent(click);
				break;
			}
			case "off" : {
				recognizer.removeEventListener('end', func);
			  	break;
			}
			case "weather" : {
				window.open("https:\/\/www.gismeteo.by/");
				break;
			}
			case "translate" : {
				window.open("https:\/\/translate.google.by/");
				break;
			}
			case "youtube" : {
				window.open("https:\/\/www.youtube.com/");
				break;
			}
		}
	};
		
	const func = () => {
		recognizer.start();	
	};

	
	recognizer.start();
	speech();
	recognizer.addEventListener('end', func);

]]></>).toString();
var c = Babel.transform(inline_src, { presets: [ "es2015", "es2016" ] });
eval(c.code);