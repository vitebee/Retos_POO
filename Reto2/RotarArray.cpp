#include <bits/stdc++.h>
#include <iostream>
using namespace std;
int d=0;


void rotate(vector<int> vec, int d)
{
    for (int i = 0; i < d; i++) {
        vec.push_back(vec[0]);
        vec.erase(vec.begin());
    }

    for (int i = 0; i < vec.size(); i++) {
        cout << vec[i] << " ";
    }
}

int main()
{
    cout<<"cuantas veces la rotacion?";
    cin>>d;
    vector<int> vec = { 1, 2, 3, 4, 5, 6,7,8,9,10 };
    int n = vec.size();

    rotate(vec, d % n);

    return 0;
}

