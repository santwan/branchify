import { useState, useCallback } from 'react';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
 
const initialNodes = JSON.parse(localStorage.getItem('nodes')) || [];

const initialEdges = JSON.parse(localStorage.getItem('edges')) || [];

export default function JsonEditor({jsonInput}) {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
 
  const onNodesChange = useCallback(
    (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );

  return (
    // Main Container
    <div className="flex w-full mt-4 h-[80vh]">
      
      {/* --- LEFT PANE --- */}
      <div className="w-2/6 p-5 border-r border-gray-300 box-border flex flex-col">
        <h3 className="text-lg font-semibold mb-3">Paste or type JSON data</h3>
        <textarea
          // value={jsonString}
          // onChange={(e) => setJsonString(e.target.value)}
          className="w-full h-[500px] font-mono text-sm border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          // onClick={handleGenerateTree}
          className="py-2 px-5 text-base mt-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Generate Tree
        </button>
      </div>

      {/* --- RIGHT PANE --- */}
      <div className="w-4/6 h-full flex flex-col">
        
        {/* Search Bar */}
        <div className="p-5 flex border-b border-gray-300">
          <input 
            type="text" 
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for node..."
            className="grow p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            // onClick={handleSearch}
            className="py-2 px-5 ml-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Search
          </button>
        </div>

        {/* React Flow Canvas */}
        <div className="grow bg-amber-100 h-full">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView 
          >
            {/* <Controls /> */}
            {/* <Background /> */}
          </ReactFlow>
        </div>

      </div>
    </div>
  );
}