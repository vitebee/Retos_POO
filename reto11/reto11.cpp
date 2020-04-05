#include<iostream>
using namespace std;

int solution(int A, int B, int K){
    int count = 0;
    for (int i = A; i <= B; i++){
        if (i % K == 0){
            count = count +1;
        }
        else {}
    }
    cout<<count;
}

int main(){
    int A,B,K = 0;
    cout << "Ingresa el valor de A ";
    cin >> A;
    cout << "Ingresa el valor de B ";
    cin >> B;
    cout << "Ingresa el valor de K ";
    cin >> K;
    solution(A,B,K);
}
