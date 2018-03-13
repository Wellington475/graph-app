import Graph from './models/graph';
import loadJson from './utils/loadJson';

loadJson('./graph.json', data => {
    window.gr = new Graph(data);
    window._Graph = Graph;
    window._loadJson = loadJson;
});
