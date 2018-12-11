console.clear();

const line = document.getElementById('line');
const rightHandle = document.getElementById('rightHandle');
const leftHandle = document.getElementById('leftHandle');

rightHandle.addEventListener('click', (e) => {
	
	line.classList.remove('left');
	line.classList.add('right');
	
		if(!e.target.classList.contains('active')){
			leftHandle.classList.remove('active','show');
			
			setTimeout( () =>{
				e.target.classList.add('active');
			},300);
			
			setTimeout( () =>{
				e.target.classList.add('show');
			},600);
			
		}
});

leftHandle.addEventListener('click', (e) => {
	
	line.classList.remove('right');
	line.classList.add('left');
	
		if(!e.target.classList.contains('active')){
			
			rightHandle.classList.remove('active','show');
			
			setTimeout( () =>{
				e.target.classList.add('active');
			},300);
			
			setTimeout( () =>{
				e.target.classList.add('show');
			},600);
			
		}
});