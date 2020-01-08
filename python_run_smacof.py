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


def stereo(v):
#     R = np.linalg.norm([x,y,z])
#     x,y,z = preprocessing.normalize(np.asarray(v).reshape(1, -1), norm='l2')[0]
    x,y,z = np.asarray(v)
    return np.asarray([x/(1-z), y/(1-z)]).reshape(1,-1)
    
def inv_stereo(v):
    x = float(v[0])
    y = float(v[1])
    return preprocessing.normalize(np.asarray([(2*x)/(1+x**2+y**2), (2*y)/(1+x**2+y**2), (x**2+y**2-1)/(1+x**2+y**2)]).reshape(1, -1), norm='l2')[0]

#     return [(2*x)/(1+x**2+y**2), (2*y)/(1+x**2+y**2), (x**2+y**2-1)/(1+x**2+y**2)]


def rotate_x(v,t):
    x = v[0]
    y = v[1]*cos(t) - v[2]*sin(t)
    z = v[1]*sin(t) + v[2]*cos(t)
    return (x,y,z)
def rotate_y(v,t):
    x = v[0]*cos(t) - v[2]*sin(t)
    y = v[1]
    z = v[0]*sin(t) + v[2]*cos(t)
    return (x,y,z)
def rotate_z(v,t):
    x = v[0]*cos(t) - v[1]*sin(t)
    y = v[0]*sin(t) + v[1]*cos(t)
    z = v[2]
    return(x,y,z)
def rotate(l):
    tx = np.random.uniform(low = 0, high = 2*np.pi)
    ty = np.random.uniform(low = 0, high = 2*np.pi)
    tz = np.random.uniform(low = 0, high = 2*np.pi)
    for x in range(len(l)):
        l[x] = rotate_z(rotate_y(rotate_x(l[x],tx),ty),tz)
    return l

g = pydotplus.graph_from_dot_file("lastfm_graph70.dot")
nx_graph = nx.from_pydot(g)
Gc = max(nx.connected_component_subgraphs(nx_graph), key=len)


n_list = Gc.nodes()
g_mat = np.ones(shape=(len(Gc.nodes()),len(Gc.nodes())))
g_mat = 100*g_mat
# Gc = max(nx.connected_component_subgraphs(dot_graph), key=len)
# gmat = nx.algorithms.shortest_paths.unweighted.all_pairs_shortest_path(Gc)
g_mat = np.ones(shape=(len(Gc.nodes()),len(Gc.nodes())))
g_mat = 100*g_mat
n_list = list(Gc.nodes())
for e in Gc.edges():
    try:
        #Graph is weighted
        g_mat[n_list.index(e[0])][n_list.index(e[1])] = float(Gc.get_edge_data(e[0],e[1])[0]['weight'])
        g_mat[n_list.index(e[1])][n_list.index(e[0])] = float(Gc.get_edge_data(e[1],e[0])[0]['weight'])
    except:
        #Graph is unweighted
        g_mat[n_list.index(e[0])][n_list.index(e[1])] = 1.0
        g_mat[n_list.index(e[1])][n_list.index(e[0])] = 1.0
g_mat = np.asarray(g_mat)
g_mat = 1.1 - g_mat/np.max(g_mat)



# gmat = 1.1 - (g_mat/float(np.max(g_mat)))
# print(np.max(gmat), np.min(gmat), np.mean(gmat))
g_mat = dijkstra(g_mat)
# for x in g_mat:
#     print(x)
# end = 1 - (g_mat/np.max(g_mat))
end = g_mat
np.fill_diagonal(end, 0)
end = (end + end.T)/2

res = smacofSphere.smacofSphere(end, itmax = 5000)


coords = res[0]
for i in range(len(coords)):
    coords[i] = coords[i]/np.linalg.norm(coords[i])



coords = rotate(coords)

coords2d = np.zeros([len(coords),2])

for x in range(len(coords)):
        coords2d[x] = stereo(coords[x])
#         print(np.linalg.norm(coords2d[x]))


pos_vals = {}
h_vals = {}
w_vals = {}
id_vals = {}
pos_vals3d = {}
label = {}
for i in range(len(coords2d)):
    # print("NEXT THING i")
    # print(Gc.nodes(data=True)[i][1]['label'])
    id_vals[Gc.nodes(data=True)[i][0]] = i
    label[Gc.nodes(data=True)[i][0]] = str(Gc.nodes(data=True)[i][1]['label'][1:-1])
    pos_vals[Gc.nodes(data=True)[i][0]] = str(coords2d[i][0])+","+str(coords2d[i][1])
    pos_vals3d[Gc.nodes(data=True)[i][0]] = str(coords[i][0])+","+str(coords[i][1])+","+str(coords[i][2])
    h_vals[Gc.nodes(data=True)[i][0]] = 0.001
    w_vals[Gc.nodes(data=True)[i][0]] = 0.001
nx.set_node_attributes(Gc, values = pos_vals, name = 'pos')
nx.set_node_attributes(Gc, values = h_vals, name = 'height')
nx.set_node_attributes(Gc, values = w_vals, name = 'width')
nx.set_node_attributes(Gc, values = id_vals, name = "id")
nx.set_node_attributes(Gc, values = pos_vals3d, name = 'dim3pos')
nx.set_node_attributes(Gc, values = label, name = 'label')


nx.drawing.nx_agraph.write_dot(Gc, "test.dot")


print("Finished running smacof (Check test.dot)")
