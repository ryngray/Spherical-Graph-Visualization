
#Run the inital layout (points on a sphere and projecting down)
python python_run_smacof.py $1 $2

#Running clustering and finding cluster edge points
./eba/kmeans -action=clustering -C=modularity test.dot > out2

# gvmap -e -s -4 -m -10 out2 > clustered.dot

gvmap -t=100 -m -10 out2 > clustered.dot

#Converting to usable output
python out.py $1

