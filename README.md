# Spherical-Graph-Visualization
Adding functionality to GMap to visualize graphs on a sphere

SphereTest16_goodOne folder contains all the code uploaded to web site: http://masonsunyin.pythonanywhere.com/polls/

SphereTestBaby folder is the code that uses the baby step data (Test4Nodes), which we can run to see the issues.

SphereTest18 uses the latest data (not the baby steps data). Run to visually check the issues in clusters.

LastFMforPaper has all scenarios of plot. Each is a independent project. The SphereLastFMFinal is the the formal one.


To run the code, simply use
> ./pipeline.sh

This runs 'python_run_smacof.py', the clustering (currently modularity), and then 'out.py'

Some current issues are that this does not take into account which file you would like to run, this must be changed in 'python_run_smacof.py' and 'out.py'.  


> python_run_smacof.py

This file runs smacof to find the positions of the nodes on the sphere, projects these points down to the plane using a stereographic projection, and then saves this in a file called 'test.dot'

> out.py

This file takes the output of the clustering and outputs txt files for use in the visualization.  This is a formatting file above anything else.  It outputs 'colors.txt' which contains the colors for each node (necessary when a non-contiguous clustering algorithm is used), 'clusters.txt' which contains the cluster values in 3d (these should all be counterclockwise), 'clusters2d.txt' which contains the clusters in 2 dimensions for debugging purposes, 'edges.txt' which contains the edges in the proper format, 'node_pos.txt' which contains just the node positions (for debugging purposes), and 'labels.txt' which contains the nodes including labels, 2d positions, 3d positions, and potentially any useful metadata.

> smacofSphere.py

This contains the implementation of smacof in python.  It was originally implemented in R, details can be found here: https://escholarship.org/uc/item/9z64v481, in the paper titled "Multidimensional Scaling Using Majorization: SMACOF in R"
