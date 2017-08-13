var displayed = {};  /*for decision making - if element currently displayed*/
var stayClosed = {};
var hiddenText = {}; /*hidden text mapped to "target" from html/


/*Define all html to add*/
function getParagraph(html){
	var paragraph = document.createElement("P")
	paragraph.innerHTML = html;
	return paragraph
}

/*Contact Info*/
hiddenText['contact'] = getParagraph
	(
	`
	<div class = "contact"> 
	<ul> 
		<li>Phone Number: 415-261-8149</li> 
		<li>Location: San Francisco | Boston</li> 
		<li>Email: <a href='mailto:sebastian.coates@tufts.edu'>Sebastian.Coates@tufts.edu</a></li>
	</ul>
	</div>`); 

/*Work Experience*/
hiddenText['experience'] = getParagraph
	(`
	<div class = "experience">
	<h3>Summer Tech Analyst</h3>
	<h4>Bank of America</h4>	
	<h5>06/2017 - 08/2017</h5>
	<h6>Charlotte, NC</h6>
	<ul> 
		<li>Effective research and creativity allowed for implementation 
			of various innovation projects related to blockchain and machine learning tech.
		<li>Participated in Agile training.</li> 
	</ul>

	<br> </br>

	<h3>Math TA | CS Teacher</h3>
	<h4>Aim High for High School</h4>	
	<h5>06/2016 - 07/2016</h5>
	<h6>San Rafael, CA</h6>
	<ul> 
		<li>Teaching ability and applied practical understanding of 
		CS enabled beginning programmers to create original Scratch 
		games after 10 classes. </li>

	</ul>

	<br> </br>

	<h3>Intern | Tutor</h3>
	<h4>Next Generation Scholars</h4>	
	<h5>05/2016 - 06/2016</h5>
	<h6>San Rafael, CA</h6>
	<ul> 
		<li>I conducted a data analysis project of the attitudes of 
		students and faculty at Marin Academy relating to race and 
		education. </li>
		<li> Analyzing the climate of education technology, I created a 
		plan to develop more equitable technology. </li>

	</ul>

	</div>`); 


/*Education*/
hiddenText['education'] = getParagraph
	(`<ul> 
		<li>Phone Number: 415-261-8149</li> 
		<li>Location: San Francisco | Boston</li> 
		<li><a href='mailto:sebastian.coates@tufts.edu'>Sebastian.Coates@tufts.edu</a></li>
	</ul>`); 

/*Projecs*/
hiddenText['projects'] = getParagraph
	(`<ul> 
		<li>Phone Number: 415-261-8149</li> 
		<li>Location: San Francisco | Boston</li> 
		<li><a href='mailto:sebastian.coates@tufts.edu'>Sebastian.Coates@tufts.edu</a></li>
	</ul>`); 

/*Research*/
hiddenText['research'] = getParagraph
	(`<ul> 
		<li>Phone Number: 415-261-8149</li> 
		<li>Location: San Francisco | Boston</li> 
		<li><a href='mailto:sebastian.coates@tufts.edu'>Sebastian.Coates@tufts.edu</a></li>
	</ul>`); 

/*Programming Languages*/
hiddenText['languages'] = getParagraph
	(`<ul> 
		<li>Phone Number: 415-261-8149</li> 
		<li>Location: San Francisco | Boston</li> 
		<li><a href='mailto:sebastian.coates@tufts.edu'>Sebastian.Coates@tufts.edu</a></li>
	</ul>`); 

/*Add appropriate html to page*/
function render(target, flag) {
	element =  this.document.getElementById(target);
	processElement(target, element, flag)
}

function processElement(target, element, flag) {
	if (!displayed[target]){
		if (!stayClosed[target] || flag == 'c'){
			element.appendChild(hiddenText[target]);
			displayed[target] = true;
		}
	}
	else{
		if (flag === 'c'){
			element.removeChild(element.childNodes[0]);
			displayed[target] = false;
		}
		else {
			stayClosed[target] = true;
		}
	}
}