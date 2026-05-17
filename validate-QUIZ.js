
function validate()
{
  
   var error = "";
   var result = 0;  
  
   // check name
    if(document.forms[0].UserInfo.value == "")
    {
      
	  error += "Name field is required \n";
	 document.getElementById("UserInfo").style.backgroundColor="yellow";
	  
  
    }
	else
	{
	   //if the answer is added then return background to white
	    document.getElementById("UserInfo").style.backgroundColor=" white ";
	    var name = document.forms[0].UserInfo.value;// put the name value in the name variable 
	}
	
	//----------------------------------------------------------------------
	//checking the qustion 1
    if(document.forms[0].Q1.value == "")
    {
      error += "Please answer the question 1 \n";
	  document.getElementById("Q1").style.backgroundColor=" yellow ";
   }
	
	else
	{
	  //if the answer is added then return background to white
	  document.getElementById("Q1").style.backgroundColor=" white ";
	  if(document.forms[0].Q1.value == "c")
	  result = result + 1; 
	  
	}
	 //Check Q2
	var tick = 0;
	if(document.forms[0].Q2a.checked == false)
		tick++;
	if(document.forms[0].Q2b.checked == false)
		tick++;
	if(document.forms[0].Q2c.checked == false)
		tick++;
	if(document.forms[0].Q2d.checked == false)
		tick++;
		
    if(tick > 2 )
    {
	  
	    error += "choose at least two answer for the question 2\n";
		document.getElementById("Q2").style.backgroundColor=" yellow ";
    
    }
	else
	{  
	 
	
	   document.getElementById("Q2").style.backgroundColor=" white ";
	   
	  
	   var node_list = document.forms[0].elements;
      
       for (var i = 0; i < node_list.length; i++) 
	    {   
           var node = node_list[i];
             
            if (node.getAttribute('type') == 'checkbox') 
		    {
	            
     			if(node_list[i].checked== true)
			   {
	                var answer2 = new Array(node_list[i].id);
	              
	
                }
            }
        } 
	   if(document.forms[0].Q2a.checked == true)
	   result = result + 1;
	 
		
	   if(document.forms[0].Q2b.checked == true)
	    
		result = result - 0.5;
		
	   if(document.forms[0].Q2c.checked == true)
	   
		result = result + 1;
		
	   if(document.forms[0].Q2d.checked == true)
	    
		result = result - 0.5;
	   
	}
	
	//_____________________________________________________________________________________
	//checking the qustion 3
	
		if((document.forms[0].Q3a.checked==false)&&(document.forms[0].Q3b.checked==false)&&
		(document.forms[0].Q3c.checked==false)&&(document.forms[0].Q3a.checked==false))
		{

			error +="choose an aption to q3: \n";
			document.getElementById("Q3").style.backgroundColor="yellow";
		} else {
			if(document.getElementById("Q3").style.backgroundColor="white");
			result +=1;
		}



	//__________________________________________________________________________________
	//checking the qustion 4
		if(document.forms[0].Q4.value=="")
{
    error += "type the correct answer for Q4: \n";
    document.getElementById("Q3").style.backgroundColor=" yellow "
}
else
{
    if(document.forms[0].Q4.value.toLowerCase()=="vexillology"){
		document.getElementById("Q3").style.backgroundColor="white";
		result +=1;
	}

}




	//___________________________________________________________________________________
	document.forms[0].thisScore.value = result ;
	if (error =="") 
	{
       
	 alert('Your score: ' + result+'  out of 5 \n The answers and score will be sent to the server'); 
	  return true; 
     
	} else {
	alert(error);
	return false;
	}
   
}
         
  


