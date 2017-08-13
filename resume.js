var displayed = {};  /*for decision making - if element currently displayed*/
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
	<hr>
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

	<hr>
	</div>`); 


/*Education*/
hiddenText['education'] = getParagraph
	(`<ul> 
		<h3>Tufts University</h3>
		<h4>School of Engineering</h4>
		<li>B.S. Computer Science</li>
		<li>B.A. Applied Math</li>
		<li>09/2016 - 05/2020</li>
		<li>GPA: 3.96/4.00</li>

		<br></br>

		<h3>Marin Academy</h3>
		<li>High School Diploma</li>
		<li>08/2012 - 06/2016</li>
		<li>GPA: 3.96/4.00</li>
	<hr>
	</ul>`); 

/*Projecs*/
hiddenText['projects'] = getParagraph
	(`<ul> 
	<hr>
	</ul>`); 

/*Research*/
hiddenText['research'] = getParagraph
	(`<ul> 
	<hr>
	</ul>`); 

/*Programming Languages*/
hiddenText['languages'] = getParagraph
	(`<ul> 
		<li>Java</li>
		<ul><li>Proficient</li></ul>
		<li>C/C++</li>
		<ul><li>Proficient</li></ul>
		<li>Python, Tensorflow</li>
		<ul><li>Proficient</li></ul>
		<li>Go (golang)</li>
		<ul><li>Knowledgeable</li></ul>
		<li>Solidity</li>
		<ul><li>Knowledgeable</li></ul>
		<li>Javascript, HTML, CSS</li>
		<ul><li>Intermediate</li></ul>
	<hr>
	</ul>`); 

/*Add appropriate html to page*/
function render(target, flag) {
	element =  this.document.getElementById(target);
	processElement(target, element, flag)
}

function processElement(target, element, flag) {
	if (!displayed[target]){
		element.appendChild(hiddenText[target]);
		displayed[target] = true;
	}
	else{
		element.removeChild(element.childNodes[0]);
		displayed[target] = false;
	}
}