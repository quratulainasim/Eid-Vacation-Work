// Q4: Create a program to check a student's grade and percentage.

const percentage:number=78;


if(percentage >=70 && percentage <=80 ){
    console.log("Student grade is A");
}

else if (percentage >=60 && percentage < 70){
    console.log("Student grade is B");
}

else if(percentage >=50 && percentage < 60 ){

    console.log("Student grade is C");
}

else if (percentage>= 0 && percentage < 50) {
    console.log("Student is fail");
} else {
    console.log("invalid grade");
}