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
import sys


def stereo(v):
#     R = np.linalg.norm([x,y,z])
#     x,y,z = preprocessing.normalize(np.asarray(v).reshape(1, -1), norm='l2')[0]
    x,y,z = np.asarray(v)
    R = np.linalg.norm([x,y,z])
    x = x/R
    y = y/R
    z = z/R
    return np.asarray([x/(1-z), y/(1-z)])
    
def inv_stereo(v):
    x = float(v[0])
    y = float(v[1])
    return np.asarray([(2*x)/(1+x**2+y**2), (2*y)/(1+x**2+y**2), (x**2+y**2-1)/(1+x**2+y**2)])

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
if(len(sys.argv) < 3):
    print("Usage: pipeline.sh filename similarity")
    sys.exit(0)

g = pydotplus.graph_from_dot_file(sys.argv[1])
sim = sys.argv[2]
graph=""
nx_graph = nx.from_pydot(g)
Gc = max(nx.connected_component_subgraphs(nx_graph), key=len)


g_mat = np.ones(shape=(len(Gc.nodes()),len(Gc.nodes())))
if(not sim):
    print("Dissimilarity Matrix")
    g_mat = 1000*g_mat
n_list = list(Gc.nodes())
for e in Gc.edges():
    try:
        #Graph is weighted
        val = float(Gc.get_edge_data(e[0],e[1])[0]['weight'])
        g_mat[n_list.index(e[0])][n_list.index(e[1])] = val
        g_mat[n_list.index(e[1])][n_list.index(e[0])] = val
    except:
        #Graph is unweighted
        print("Found unweighted graph.  If graph is weighted, make sure weights are called 'weight' in dot file.")
        g_mat[n_list.index(e[0])][n_list.index(e[1])] = 1.0
        g_mat[n_list.index(e[1])][n_list.index(e[0])] = 1.0

g_mat = np.asarray(g_mat)

if(sim):
    print("Similarity Matrix")
    g_mat = g_mat/np.max(g_mat)
    g_mat = 1.1 - g_mat
    g_mat[g_mat > 1] = 1



# gmat = 1.1 - (g_mat/float(np.max(g_mat)))

g_mat = dijkstra(g_mat)
g_mat = g_mat/np.max(g_mat)


end = g_mat
np.fill_diagonal(end, 0)
end = (end + end.T)/2

stress = []
minstress = 100
coords = []
# end = 100*end
for i in range(1):
    res = smacofSphere.smacofSphere(end, itmax = 50000, init="random")
    print("Run:", i, "  Stress: ", res[1])
    ax = plt.axes(projection='3d')
    ax.scatter(np.real(res[0][:,0]),np.real(res[0][:,1]),np.real(res[0][:,2]))
    plt.savefig(str(i)+".png")
    stress.append(res[1])
    if(minstress > res[1]):
        minstress = res[1]
        coords = res[0]



size = 100

for i in range(1000):

    coords = rotate(coords)

    coords2d = np.zeros([len(coords),2])

    for x in range(len(coords)):
            coords2d[x] = stereo(coords[x])
    #         print(np.linalg.norm(coords2d[x]))
    xy_sizes = np.amax(coords2d, 0 ) - np.amin(coords2d, 0)
    if(xy_sizes[0]*xy_sizes[1] < size):
        size = xy_sizes[0]*xy_sizes[1]
        print(size)
        best_coords = coords2d.copy()




pos_vals = {}
h_vals = {}
w_vals = {}
id_vals = {}
pos_vals3d = {}
label = {}
col = {}
fcol = {}
fname = {}
style = {}
pos_gmap = {}


#Test hole graph
cluster = {}

gmap_output = False


for i in range(len(best_coords)):
    id_vals[Gc.nodes(data=True)[i][0]] = i
    if(graph == "lastfm"):
        ltemp = str(Gc.nodes(data=True)[i][1]['label'])
    else:
        ltemp = Gc.nodes()[i]
    if(ltemp[0] == '"'):
        ltemp = ltemp[1:-1]
    label[Gc.nodes(data=True)[i][0]] = ltemp
    if(gmap_output):
        pos_vals[Gc.nodes(data=True)[i][0]] = str(100*best_coords[i][0])+","+str(100*best_coords[i][1])#str(coords2d[i][0])+","+str(coords2d[i][1])
        pos_vals3d[Gc.nodes(data=True)[i][0]] = str(100*coords[i][0])+","+str(100*coords[i][1])+","+str(100*coords[i][2])#str(coords[i][0])+","+str(coords[i][1])+","+str(coords[i][2])
        h_vals[Gc.nodes(data=True)[i][0]] = 1
        w_vals[Gc.nodes(data=True)[i][0]] = 1
    else:
        curr_node = Gc.nodes(data=True)[i][0]
        pos_vals[curr_node] = str(best_coords[i][0])+","+str(best_coords[i][1])#str(coords2d[i][0])+","+str(coords2d[i][1])
        pos_vals3d[Gc.nodes(data=True)[i][0]] = str(coords[i][0])+","+str(coords[i][1])+","+str(coords[i][2])#str(coords[i][0])+","+str(coords[i][1])+","+str(coords[i][2])
        h_vals[Gc.nodes(data=True)[i][0]] = 0.001
        w_vals[Gc.nodes(data=True)[i][0]] = 0.001
        try:
            cluster[curr_node] = Gc.nodes(data=True)[i][1]['cluster'][1:-1]
        except:
            pass
    curr_node = Gc.nodes(data=True)[i][0]

    try:
        pos_gmap[Gc.nodes(data=True)[i][0]] = str(100*best_coords[i][0])+","+str(100*best_coords[i][1])
    except:
        pass
    try:
        col[curr_node] = Gc.nodes(data=True)[i][1]['color'][1:-1]
    except:
        pass
    try:
        fcol[curr_node] = Gc.nodes(data=True)[i][1]['fontcolor'][1:-1]
    except:
        pass
    try:
        fname[curr_node] = Gc.nodes(data=True)[i][1]['fontname'][1:-1]
    except:
        pass
    try:
        style[curr_node] = Gc.nodes(data=True)[i][1]['style'][1:-1]
    except:
        pass
nx.set_node_attributes(Gc, values = pos_vals, name = 'pos')
nx.set_node_attributes(Gc, values = h_vals, name = 'height')
nx.set_node_attributes(Gc, values = w_vals, name = 'width')
nx.set_node_attributes(Gc, values = id_vals, name = "id")
nx.set_node_attributes(Gc, values = pos_vals3d, name = 'dim3pos')
nx.set_node_attributes(Gc, values = label, name = 'label')
try:
    nx.set_node_attributes(Gc, values = col, name = "color")
    nx.set_node_attributes(Gc, values = fcol, name = 'fontcolor')
    nx.set_node_attributes(Gc, values = fname, name = 'fontname')
    nx.set_node_attributes(Gc, values = style, name =  'style')
    nx.set_node_attributes(Gc, values = pos_gmap, name = 'pos_gmap')
except:
    pass


nx.drawing.nx_agraph.write_dot(Gc, "test.dot")


print("Finished running smacof (Check test.dot)")
