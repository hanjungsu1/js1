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