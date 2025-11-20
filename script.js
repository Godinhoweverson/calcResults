let ul = document.getElementById("marks");

let subjects = Number(prompt("How many subjects do you have?"));
let marks = [];
let index = 1
while(subjects > 0){
    let mark = Number(prompt(`Type your mark in each subject between 0  - 100. Mark:${index}`));
    if(mark === null){
        break;
    }
    marks.push(mark);
    index++
    subjects--
}

for(let i = 0; i <marks.length; i++){
    let mark;
   
    if(marks[i] >= 90){
       mark = "A";
    }else if(marks[i] >= 80){
       mark = "B";
    }else if(marks[i] >= 70){
       mark = "C";
    }else if(marks[i] >= 60){
       mark = "D";
    }else{
        mark = "F"
    }

    let li = document.createElement("li");
    li.textContent = `Mark: ${marks[i]} - Grade: ${mark}!`
    ul.appendChild(li);
    ul.style.display = "flex";
}


