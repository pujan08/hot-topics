const btns = document.querySelectorAll('.controls button'); 
const newContent = document.querySelector('.bgmain');

function addContent(ev){
    
    let clickedButton = ev.target;
    
    for(let btn of btns){
        if(btn.hasAttribute('id')){
            
            btn.removeAttribute('id');
        }
    }
   
    clickedButton.id='active';
    
    if(clickedButton.value === 'home'){
		
			fetch('data/home.html').then(function (rsp){
			return rsp.text();
	
		})
	.then(function (data){
		newContent.innerHTML = data;
	
	});
       
    
        
       
    } else if(clickedButton.value === 'portfolio'){
		
		
				fetch('data/portfolio.html').then(function (rsp){
				return rsp.text();
	
		})
	.then(function (data){
		newContent.innerHTML = data;
	
	});        
         
    } 	
	
}
    

for(let btn of btns){
  btn.addEventListener('click', addContent);
}
