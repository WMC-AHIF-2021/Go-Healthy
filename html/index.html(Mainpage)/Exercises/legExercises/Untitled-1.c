#include <stdio.h>

/*void sortAscending(int*x, int*y, int*z){
    if(*x > *y && *x > *z){
        *z = *x;
    }
    else if(*y > *x && *y > *z){
        *z = *y;
    }
    
}

void swap(int*a, int*b){
    int temp;
    temp = *a;
    *a = *b;
    *b = temp;
}
*/

int main(){
    int zahl = 5;
    int*ptr = &zahl;
    *ptr = 10;
    printf("zahl: %d", zahl);
}



void swap(int*a, int*b){
    int temp;
    temp = *a;
    *a = *b;
    *b = temp;
}


void sortAscending(int*x, int*y, int*z){
    if(*x > *y)
    {
        swap(x, y);
    }
    if(*y > *z)
    {
        swap(y, z);
    }
    if(*x > *y)
    {
        swap(x, y);
    }
    
    
}

void swapCharacters(char swapChar, char sourceChar, char* charArr){
    size_t i = 0;
    while (charArr[i] != '\0') {      
        if(charArr[i] == sourceChar){
            charArr[i] = swapChar;
        }
        i++;
    }
}


int main(){
    int a,b,c;
    a = 3;
    b = 2;
    c = 1;
    int*a_ptr = &a;
    int*b_ptr = &b;
    int*c_ptr = &c;
    sortAscending(a_ptr, b_ptr, c_ptr);
    printf("%d %d %d", a, b, c);
}




