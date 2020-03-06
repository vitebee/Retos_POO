def bubbleSort(x):
    n = len(x)
    for i in range(n):
        for j in range(0, n-i-1):
            if x[j] > x[j+1] :
                x[j], x[j+1] = x[j+1], x[j]

x = [1,2,3,4,6,7,8,9,10,25]
temp=0
n=len(x)
bubbleSort(x)
i=0
for i in range(n-1):
    contador=x[i]
    contador=contador+1
    if contador != x[i+1]:
        print("El numero faltante es ")
        print(contador)
"Puntos extras profe haha"