function swap(selected) {
	// First do not display all div id contents
	document.getElementById('can').style.display = 'none';
	document.getElementById('bottle').style.display = 'none';
	document.getElementById('cup').style.display = 'none';
	document.getElementById('home').style.display = 'none';
    document.getElementById('gallery').style.display = 'none';
    document.getElementById('about').style.display = 'none';
	// Then display the selected div id contents	
	document.getElementById(selected).style.display = 'block';
    if(selected == 'cup'||selected == 'can'||selected == 'bottle'){
        document.getElementById('gallery').style.display = 'block';
    }
	
}