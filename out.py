import pydotplus
import pyparsing
import pygraphviz as pgv
import networkx as nx
import json
import pandas as pd
import numpy as np
from scipy.spatial.distance import pdist, squareform
from scipy.sparse.csgraph import dijkstra
import smacofSphere
import matplotlib.pyplot as plt
from math import cos, sin
from mpl_toolkits.mplot3d import Axes3D
from sklearn import preprocessing

folder="test4nodes/"

def toCounterClockwise(x):
    s = 0
    i = 0
    while(i < len(x)-1):
        # print(float(x[i][0]))
        #(x2-x1)(y2-y1)
        s += (float(x[i+1][0]) - float(x[i][0]))*(float(x[i+1][1]) + float(x[i][1]))
        i = i+2
    if(s < 0):
        return x
    else:
        x.reverse()
        return x
    
def stereo(v):
#     R = np.linalg.norm([x,y,z])
#     x,y,z = preprocessing.normalize(np.asarray(v).reshape(1, -1), norm='l2')[0]
    x,y,z = np.asarray(v)
    return np.asarray([x/(1-z), y/(1-z)]).reshape(1,-1)
    
def inv_stereo(v):
    x = float(v[0])
    y = float(v[1])
    return preprocessing.normalize(np.asarray([(2*x)/(1+x**2+y**2), (2*y)/(1+x**2+y**2), (x**2+y**2-1)/(1+x**2+y**2)]).reshape(1, -1), norm='l2')[0]
   
print("Done clustering")


g = pydotplus.graph_from_dot_file("test.dot")
Gc = nx.from_pydot(g)

f = open("clustered.dot", "r")
f.readline()
l = f.readlines()
cluster_values = []
cluster = []
pt = []
type_prev = ''
unproj_vals = []

ma = 0
mi = 1000

colors = []

for x in l:
    values = x.split()
    for a in values:
        if(a == '\\'):
            pass
        elif(a == 'c' or a == 'C'):
            if(type_prev == 'poly y'):
                if(len(cluster) > 0):
                    new_cluster = []
                    cluster = toCounterClockwise(cluster)
                    for i in cluster:
                        new_cluster.append(inv_stereo(i))
                    cluster_values.append(new_cluster)
                    unproj_vals.append(cluster)
                    cluster = []
            type_prev = 'col'
        elif(a == 'P'):
            if(type_prev == 'poly y'):
                if(len(cluster)> 0):
                    new_cluster = []
                    cluster = toCounterClockwise(cluster)
                    for i in cluster:
                        new_cluster.append(inv_stereo(i))
                    cluster_values.append(new_cluster)
                    unproj_vals.append(cluster)
                    cluster = []
            type_prev = 'poly1'
        elif(a == 'L'):
            type_prev = ''
        elif(type_prev == 'poly1'):
            type_prev = 'poly y'
        elif(type_prev == 'col'):
            type_prev = 'col1'
        elif(type_prev == 'col1'):
            if(a == '-#\\'):
                type_prev = 'linebreakColor'
            else:
                colors.append(a[1:])
        elif(type_prev == 'linebreakColor'):
            colors.append('#'+a)
        elif(type_prev == 'poly y'):
            if(float(a) > ma):
                ma = float(a)
            if(float(a) < mi):
                mi = float(a)
            pt.append(a)
            type_prev = 'poly x'
        elif(type_prev == "poly x"):
            if(float(a) > ma):
                ma = float(a)
            if(float(a) < mi):
                mi = float(a)
            pt.append(a)
#             pt = inv_stereo(toCounterClockwise(pt))
            cluster.append(pt)
            pt = []
            type_prev = 'poly y'
f.close()

colors = colors[::2]
colors = colors[:len(cluster_values)]
with open(folder+'colors.txt', 'w') as f:
    f.write(str(colors))
f.close()

# for i in range(len(cluster_values)):
#     for j in range(len(cluster_values[i])):
#         cluster_values[i][j] = cluster_values[i][j]/np.linalg.norm(cluster_values[i][j])

#Print Cluster Values
final_str = "["

for x in cluster_values:
    if(x < 0.00000001):
        print(x)
    final_str = final_str+'['
    for j in x:
        final_str = final_str + "[" + str(j[0]) + "," + str(j[1]) + "," + str(j[2]) + "],"
    final_str = final_str + "],\n"
final_str = final_str+"]"
with open(folder+"clusters.txt","w") as f:
    f.write(final_str)
f.close()

#Print Edge Values
final_str = "["

for x in Gc.edges():
    final_str = final_str + "{from: "+str(Gc.node[x[0]]['id'])+", to: "+str(Gc.node[x[1]]['id'])+"},"

final_str = final_str + ']'

with open(folder+"edges.txt", 'w') as f:
    f.write(final_str)
    
f.close()
    
# Print Label and Node location Values
a = "["

b = "["

for x in range(len(Gc.nodes())):
    # if(test_coords[x][0] < 0.00000001):
    #     print(test_coords[x])
    # if(test_coords[x][1] < 0.00000001):
    #     print(test_coords[x])  
    pos_vals =  str(Gc.node[Gc.nodes()[x]]['pos3d'][1:-1]).split(',')
    b = b + '{label: "' + str(Gc.node[Gc.nodes()[x]]['label']) + '", pos: ['+pos_vals[0] + "," + pos_vals[1] + ',' + pos_vals[2]+']' + "},"
    a = a + "["+pos_vals[0] + "," + pos_vals[1] + ',' +pos_vals[2]+'],'
a = a + ']'
b = b + ']'


with open(folder+"node_pos.txt", 'w') as f:
    f.write(a)
f.close()

with open(folder+"labels.txt", 'w') as f:
    f.write(b)
f.close()




