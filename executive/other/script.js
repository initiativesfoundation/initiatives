const persons=[{name:"Syed Taisur Rahman Fayaz",photo:"img/executives/Fayaz.png",title:"Chief Executive Officer",institute:"Ideal School and College",bio:"<p>Life is a game, explore until it ends</p>",social:{facebook:"https://www.facebook.com/syedtaisurrahman.fayaz",instagram:"https://www.instagram.com/eximatronfyz",email:"mailto:syedtaisurrahmanfayaz@gmail.com"}},{name:"Maruf Islam Munna",photo:"img/executives/munna.png",title:"Chief Management Officer",institute:"Khilgaon Govt High School",bio:"<p>Don't trust anyone, remember that the devil was once an angel🖤</p>",social:{facebook:"https://www.facebook.com/marufislam.munna.94",instagram:"www.instagram.com/maruf_islam_munna",email:"mailto:imaruf338@gmail.com"}},{name:"Aritree Gayen",photo:"./img/executives/aritree.png",title:"Chief Administrative Officer",institute:"Holy Cross College",bio:"<p>Life is like a game, play it until it ends.</p>",social:{facebook:"https://www.facebook.com/nafis.akbar.54966",instagram:"https://www.instagram.com/nafis._.22/",email:"mailto:aritree1234@gmail.com"}},{name:"Shrabonti Hossain Shifa",photo:"./img/executives/shrabonti.png",title:"Chief Public Relation Officer",institute:"Tikatuli Kamrunnesa Gov't High Shool",bio:"<p>Life is like a game, play it until it ends.</p>",social:{facebook:"https://www.facebook.com/nafis.akbar.54966",instagram:"https://www.instagram.com/nafis._.22/",email:"mailto:shrabontihossainshifa.22@gmail.com"}},{name:"Rafi Ibna Osmani",photo:"img/executives/rio.png",title:"Academic Secretary",institute:"SUST",bio:"<p>Vivacious</p>",social:{facebook:"https://www.facebook.com/sriza.mirza.1",instagram:"https://instagram.com/r.i.o.rafin27",email:"mailto:riorafin27@gmail.com"}},{name:"Sadia Sarwar Kimty",photo:"img/executives/kimty.png",title:"Sub Secretary Of Academics",institute:"Viqarunnisa Noon School And College",bio:"<p>Pera Nai Chill</p>",social:{facebook:"https://www.facebook.com/sadia.sarwarkimty",instagram:"https://instagram.com/sadia_kimty",email:"mailto:sadiasarwarkimty@gmail.com"}},{name:"Umme Roshni sinthia",photo:"img/executives/sinthia.png",title:"Secretary Of Graphics and Web development",institute:"Monipur Uchcha Vidyalaya & College ",bio:"<p>The hardest choices require the strongest wills! </p>",social:{facebook:"https://www.facebook.com/tazrintahmin.oyshe.9",instagram:"#",email:"mailto:sinthiaroshni1722@gmail.com"}},{name:"Syeeda Jihan Muntasin",photo:"img/executives/tunna.png",title:"Marketing Secretary",institute:"CMP College",bio:"<p></p>",social:{facebook:"https://www.facebook.com/Xunayed.12",instagram:"https://instagram.com/x_unayed_shelby.12?igshid=kcidswrcl65y",email:"mailto:safamarowa06@gmail.com"}},{name:"Nusrat Jahan Tisha",photo:"img/executives/tisha.png",title:"Cultural Secretary",institute:"Birshreshtha Noor Mohammad Public College ",bio:"<p>Presenting a new me in every phase of life</p>",social:{facebook:"https://www.facebook.com/azmim.islamminu.1",instagram:"https://www.instagram.com/aymaann._",email:"mailto:azmimislam1810@gmail.com"}},{name:"Zawad Ullah Bhuiyan",photo:"img/executives/zawad.png",title:"IT Secretary",institute:"Mohmmadpur preparatory school and college",bio:"<p></p>",social:{facebook:"https://www.facebook.com/arnabmondal0056/",instagram:"https://www.instagram.com/_ravanious__/",email:"mailto:zawadullahbhuiyan@gmail.com"}}];const app=new Vue({el:"#app",data(){return{persons:persons,selectedPersonIndex:null,isSelected:false,selectedPerson:null,inlineStyles:null,isReady:false,isOk:false,selectedPersonData:{name:null,title:null,photo:null,social:{facebook:null,instagram:null,email:null}}};},methods:{selectPerson(index,el){if(!this.isOk){this.selectedPersonIndex=index;this.isSelected=true;el.target.parentElement.className=="person-details"?(this.selectedPerson=el.target.parentElement.parentElement):(this.selectedPerson=el.target.parentElement);this.selectedPerson.classList.add("person-selected");this.selectedPerson.setAttribute("style",`width:${this.selectedPerson.offsetWidth}px;`);this.selectedPersonData=this.persons[index];window.setTimeout(()=>{this.inlineStyles=`width:${this.selectedPerson.offsetWidth}px;height:${this.selectedPerson.offsetHeight}px;left:${this.selectedPerson.offsetLeft}px;top:${this.selectedPerson.offsetTop}px;position:fixed`;this.selectedPerson.setAttribute("style",this.inlineStyles);},400);window.setTimeout(()=>{this.isReady=true;this.isOk=true;},420);}else{this.reset();}},reset(){this.isReady=false;window.setTimeout(()=>{this.selectedPerson.classList.add("person-back");},280);window.setTimeout(()=>{this.selectedPerson.setAttribute("style","");},340);window.setTimeout(()=>{this.isSelected=false;this.selectedPerson.classList.remove("person-back","person-selected");this.isOk=false;},400);}}});function showorhide(){var element=document.querySelector("#tcont");if(element.classList.contains("hidden")){var e2=document.getElementById("tcont");e2.classList.remove("hidden");}
else{var e2=document.getElementById("tcont");e2.classList.add("hidden");}
var element=document.querySelector("#tcont2");if(element.classList.contains("hidden")){var e2=document.getElementById("tcont2");e2.classList.remove("hidden");}
else{var e2=document.getElementById("tcont2");e2.classList.add("hidden");}
var element=document.querySelector("#tcont3");if(element.classList.contains("hidden")){var e2=document.getElementById("tcont3");e2.classList.remove("hidden");}
else{var e2=document.getElementById("tcont3");e2.classList.add("hidden");}}
