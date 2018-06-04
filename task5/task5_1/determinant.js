function find_determinant() {
     var a1 = Number(document.getElementById('a1').value);
     var a2 = Number(document.getElementById('a2').value);
     var a3 = Number(document.getElementById('a3').value);
     var b1 = Number(document.getElementById('b1').value);
     var b2 = Number(document.getElementById('b2').value);
     var b3 = Number(document.getElementById('b3').value);
     var c1 = Number(document.getElementById('c1').value);
     var c2 = Number(document.getElementById('c2').value);
     var c3 = Number(document.getElementById('c3').value);
     var a = a1*(b2*c3-b3*c2)-a2*(b1*c3-b3*c1)+a3*(b1*c2-b2*c1);
     var answer;
     answer = document.getElementById('answer');
     answer.innerHTML = a;
}
