#include <iostream>
#include <vector>
#include <bits/stdc++.h>
using namespace std;

int solution(vector<int> A){
    sort(A.begin(), A.end());
    int count = 0;
    int lenA=A.size();
        for(int i=0; i <= lenA; i++){
            if (A[i]==i+1){
                count=count+1;
            }
            if (A[i]!=i+1){
                int a=0;
            }
        }
        if (count == lenA){
            cout << 1;
        }
        else {
            cout<<0;
        }
}

int main()
{
    solution({4,1,3});
}

