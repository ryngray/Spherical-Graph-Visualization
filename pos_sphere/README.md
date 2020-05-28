To run the code, simply use
> ./pipeline.sh file.dot [0,1]

file.dot is the dot file associated with the graph.  Please note that if it is a weighted graph, the weights must be under the variable name 'weight' or it will assume an unweighted graph.

The second argument determines whether or not similarities or dissimilarities are stored.  If it is similarities, use 1, if it is disimilarities use 0.

The command will run 'python_run_smacof.py', the clustering (currently modularity), and then 'out.py'.  This will output files in SphereTest19 as 'output.js'.  From there, the visualization can be seen using index.html.

> python_run_smacof.py

This file runs smacof to find the positions of the nodes on the sphere, projects these points down to the plane using a stereographic projection, and then saves this in a file called 'test.dot'

> out.py

This file takes the output of the clustering and outputs txt files for use in the visualization.  This is a formatting file above anything else.  It outputs 'colors.txt' which contains the colors for each node (necessary when a non-contiguous clustering algorithm is used), 'clusters.txt' which contains the cluster values in 3d (these should all be counterclockwise), 'clusters2d.txt' which contains the clusters in 2 dimensions for debugging purposes, 'edges.txt' which contains the edges in the proper format, 'node_pos.txt' which contains just the node positions (for debugging purposes), and 'labels.txt' which contains the nodes including labels, 2d positions, 3d positions, and potentially any useful metadata.

> smacofSphere.py

This contains the implementation of smacof in python.  It was originally implemented in R, details can be found here: https://escholarship.org/uc/item/9z64v481, in the paper titled "Multidimensional Scaling Using Majorization: SMACOF in R"
