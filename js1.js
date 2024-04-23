document.write("<HR>");
document.write("안녕하세요..");
document.write("<HR>");
a = 10 + 1.2;
b = 10 - 1.2;
c = 10 * 1.2;
d = 10 / 1.2;
e = 10 % 1.2;
document.write ("a의 값은 : " + a + "<BR>");
document.write ("b의 값은 : " + b+ "<BR>");
document.write ("c의 값은 : " + c+ "<BR>");
document.write ("d의 값은 : " + d+ "<BR>");
document.write ("e의 값은 : " + e+ "<BR>");
f = ++a;
g = --a;
document.write ("f의 값은 : " + f+ "<BR>");
document.write ("g의 값은 : " + g+ "<BR>");
h = --a + b++ + b++ * 2 + 3 * --a ;
document.write ("h의 값은 : " + h+ "<BR>");
document.write ("a > b :" + a > b );
document.write("<BR>");
document.write ("'A' > a :" + "A" > a );
document.write("<BR>");
document.write ("'A' < 'a' :" + "A" < "a" );
document.write("<BR>");
document.write ("'A' > 'B' :" + "A" > "B" );
document.write("<BR>");
document.write ("'ABC' < 'ABD' :" + "ABC" < "ABD" );
document.write("<BR>");
document.write ("'AB' > 'ABD' :" + "AB" > "ABD" );
document.write("<BR>");
if (a > b) {
    document.write("b보다 a가 큽니다.");
}
else
    document.write("a보다 b가 큽니다.");
document.write("<BR>");
document.write("a:" + a + 'b:' + b);
i = 75;
switch ( (i - (i % 10))/10) {
    case 10 :
    case 9 : 
        if (i >= 95) {document.write ('A+'); }
        else document.write ('A');
        break;
    case 8 : 
        if (i >= 85) {document.write ('B+'); }
        else document.write ('B');
        break;
    case 7 : 
        if (i >= 75) {document.write ('C+'); }
        else document.write ('C');
        break;
    case 6 : 
        if (i >= 65) {document.write ('D+'); }
        else document.write ('D');
        break;
    default : document.write ('F 학점');
}
document.write ("<BR>");
document.write ("<HR>");
j = 1;
sum = 0;
while (j<=10) {
    sum = sum + j;
    document.write (j+"까지의 합"+sum);
    document.write ("<BR>");
    j++;
}
document.write("<HR>");
while (true) {
    sum = sum + j;
    if (j!=1) document.write("+");
    document.write(a);
    j++;
    if (j>10) break;
}
document.write (" = "+sum);
document.write ("<HR>");
do {
    k = 1;
    while (k <= j) {
        document.write ("*");
        k++;
    }
    document.write ("<BR>");
    j++;
} while ( j < 5 )
document.write ("<HR>");
for (l=1; l<5; l++) {
    for (m=1; m<5-l; m++) document.write ("&nbsp;");
    for (l=1; m<l; m++) document.write ("*");
    document.write ("<BR>");
}
document.write ("<HR>");
threetimesum = 0;
twotimesum = 0;
remainsum = 0;
for (l=1; l<100; l++) {
    if (l % 2 == 0 && l % 3 == 0) {
        twotimesum = twotimesum + l;
        threetimesum += l;
        continue;
    }
    if (l % 2 == 0) {
        twotimesum = twotimesum + l;
        continue;
    }
    if (l % 3 == 0) {
        threetimesum = threetimesum + l;
        continue;
    }
    remainsum += l;
}
document.write ("2의 배수의 합 : " + twotimesum + "<br>");
document.write ("3의 배수의 합 : " + threetimesum + "<br>");
document.write ("나머지 숫자의 합 : " + remainsum + "<br>");

alert("안녕하세요. 반갑습니다. |n아래의 확인 버튼을 클릭하여 이 창을 닫으세요..");
sel = confirm("confrim 함수입니다.");
if (sel == true) alert("확인버튼을 클릭하셨군요..");
else alert("취소버튼을 클릭하셨군요..");
user = prompt("당신의 ID를 입력하세요..", "ID");
if (user == null) alert("취소 버튼을 클릭하셨군요..");
else alert("당신의 ID는 " + User + "입니다.");

a = "a";
if (isNaN(a) == true) document.write(a + "는 숫자가 아닙니다.<br>");
else document.write (a + "는 숫자입니다.<br>");
a = "10";
if (isNaN(a) == true) document.write(a + "는 숫자가 아닙니다.<br>");
else document.write (a + "는 숫자입니다.<br>");
a = "10 + 5";
if (isNaN(a) == true) document.write(a + "는 숫자가 아닙니다.<br>");
else document.write (a + "는 숫자입니다.<br>");
a = "1ab";
if (isNaN(a) == true) document.write(a + "는 숫자가 아닙니다.<br>");
else document.write (a + "는 숫자입니다.<br>");

document.write( "3 = " + eval("3") + "<br>");
document.write( "3 * 5 + 4 = " + eval("3 * 5 + 4") + "<br>");
document.write( "a = " + eval("a") + "<br>");
usein = prompt("수식을 입력하세요");
if (usein == null) document.write("취소를 클릭하셨군요...");
else document.write(eval(usein) + "<br>");

document.write( parselnt("3") + "<br>");
document.write( parseFloat("3") + "<br>");
document.write( parselnt("5.5") + "<br>");
document.write( parseFloat("5.5") + "<br>");
document.write( parselnt("3+5") + "<br>");
document.write( parselnt("3abc") + "<br>");
document.write( parselnt("abc") + "<br>");

document.write(escape("a")+"<br>");
document.write(escape("%&")+"<br>");
document.write(escape("가")+"<br>");
document.write(escape("%97")+"<br>");
document.write(escape("%25%26")+"<br>");
document.write(escape("%uAC00")+"<br>");

setTimeout("alert('이제 네이버로 이동합니다.'); location.herf = 'http://www.naver.co.kr'", 5000);

id = setInterval("curtime = new Date(); window.status='현재 시간 : ' " 
    + " + curtime.getHours() + '시 ' + curtime.getMinutes() + '분 ' " 
    + " + curtime.getSeconds() + '초 '", 1000);
clearTimeout(id);

function greeting() {
    document.write ("안녕하세요.<br>");
}
greeting();
greeting();

function factiorial(number) {
    if (number <= 0) document.write ("0보다 작거나 작은 수 입니다.<br>");
    else {
        fac = 1;
        for (i=1; i<=number; i++) fac=fac * i;
        document.write (number+"의 factorial 값은 " + fac + "입니다.<br>");
    }
}
factiorial(5); factiorial(3); factiorial(-1);

function eval(op, opr1, opr2) {
    if (op == "+") result = opr1 + opr2;
    if (op == "-") result = opr1 - opr2;
    if (op == "*") result = opr1 * opr2;
    if (op == "/") 
        if (opr2 != 0) result = opr1 / opr2;
        else if (opr1 != 0) result = "불능";
        else result = "부정"
    document.write (opr1 + op + opr2 + "=" + result + "<br>");
}
eval("+", 4, 5);
eval("*", 4, 5);
eval("-", 4, 0);
eval("/", 4, 0);

function isprime(number) {
    if (number <= 1) return false;
    for (i=2; i<number; i++)
        if (number % i == 0) return false;
    return true;
}
result = isprime(4);
document.write ("4 : " + result + "<br>");
document.write ("7 : " + isprime(7) + "<br>");

function ismo(no1, no2) {
    if (no1 % no2 == 0) return true;
    return false;
}
function yaksu(number) {
    document.write (number + "의 약수는?");
    if (number <= 1) return false;
    for (i=1; i<=number; i++)
        if (ismo(number, i)==true) document.write(" " + i + " ");
    return true;
}
yaksu(8);

function ppn(curno) {
    if (curno <= 0) return;
    for (i=curno; i > 0; i--)
        document.write(" " + i);
}
ppn(3);

function test() {
    var j;
    document.write ("함수 안의 i값 : " + i + "<br>");
    document.write ("함수 안의 j값 : " + j + "<br>");
}
i = 1;
document.write ("함수 밖의 i값 : " + i + "<br>");
j = 10;
document.write ("함수 밖의 j값 : " + j + "<br>");
test();

function increment(i, j) {
    i ++;
    j ++;
    document.write("함수 안의 i값 : " + i + "함수 안의 j값 : " + j + "<BR>");
}
i = 1;
j = 10;
document.write("함수 밖의 i값 : " + i + "함수 밖의 j값 : " + j + "<BR>");
increment(i,j);
document.write("함수 밖의 i값 : " + i + "함수 밖의 j값 : " + j + "<BR>");