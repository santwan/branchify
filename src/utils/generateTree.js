const initialNodes = [];
const initialEdges = [];
let idCounter = 1;

const X_SPACING = 400;
const Y_SPACING = 300;

const nextXAtLevel = new Map();
function allocX(level) {
  const col = nextXAtLevel.get(level) ?? 0;
  nextXAtLevel.set(level, col + 1);
  return col * X_SPACING;
}

function processEntry(key, value, parentId, level) {
  const nodeId = `n${idCounter++}`;
  const isObj = value !== null && typeof value === "object";
  const isArr = Array.isArray(value);
  const label = isArr ? `${key}[]` : isObj ? key : `${key}: ${value}`;
  const x = allocX(level);
  const y = level * Y_SPACING;

  initialNodes.push({ id: nodeId, position: { x, y }, data: { label } });

  if (parentId) {
    initialEdges.push({ id: `${parentId}-${nodeId}`, source: parentId, target: nodeId });
  }

  if (isObj || isArr) {
    const entries = isArr ? value.entries() : Object.entries(value);
    for (const [k, v] of entries) {
      const childKey = isArr ? `[${k}]` : k;
      processEntry(childKey, v, nodeId, level + 1);
    }
  }

  return nodeId; 
}

export function generateTree(json, rootLabel = "root") {
  idCounter = 1;
  nextXAtLevel.clear();
  initialNodes.length = 0;
  initialEdges.length = 0;

  // create single root on top
  const rootId = `n${idCounter++}`;
  const rootNode = { id: rootId, position: { x: 0, y: 0 }, data: { label: rootLabel } };
  initialNodes.push(rootNode);
  allocX(0); // reserve a column at level 0

  if (json === null || typeof json !== "object") return;

  const isArr = Array.isArray(json);
  const entries = isArr ? json.entries() : Object.entries(json);

  const childIds = [];
  for (const [k, v] of entries) {
    const key = isArr ? `[${k}]` : k;
    const childId = processEntry(key, v, rootId, 1);
    childIds.push(childId);
  }

  // center root above its first and last child
  if (childIds.length) {
    const xs = childIds.map(id => initialNodes.find(n => n.id === id).position.x);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    rootNode.position.x = (minX + maxX) / 2;
  }

    localStorage.setItem('nodes', JSON.stringify(initialNodes));
  localStorage.setItem('edges', JSON.stringify(initialEdges));
  console.log('Generated Nodes:', initialNodes);
  console.log('Generated Edges:', initialEdges);
}


