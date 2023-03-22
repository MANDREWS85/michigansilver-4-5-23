import React, { useState } from 'react';
import * as go from 'gojs';
import { ReactDiagram } from 'gojs-react';

function initDiagram() {
  const $ = go.GraphObject.make;
  const diagram =
    $(go.Diagram,
      {
        'undoManager.isEnabled': true,
        'clickCreatingTool.archetypeNodeData': { text: 'new node', color: 'lightblue' },
        model: new go.GraphLinksModel(
          {
            linkKeyProperty: 'key'
          })
      });

  diagram.nodeTemplate =
    $(go.Node, 'Auto',
      new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
      $(go.Shape, 'RoundedRectangle',
        { name: 'SHAPE', fill: 'white', strokeWidth: 0 },
        new go.Binding('fill', 'color')),
      $(go.TextBlock,
        { margin: 8, editable: true },
        new go.Binding('text').makeTwoWay()
      )
    );

  return diagram;
}

export default function GoJSTemplate() {
  const [selectedNode, setSelectedNode] = useState(null);

  function handleModelChange(changes) {
    console.log('GoJS model changed!' + changes);
  }

  function handleDiagramClick(e) {
    const clickedPart = e.subject.part;
    if (clickedPart instanceof go.Node) {
      setSelectedNode({ name: clickedPart.data.text, x: clickedPart.location.x, y: clickedPart.location.y });
    } else {
      setSelectedNode(null);
    }
  }

  return (
    <div>
      <div><h3>GoJS Template</h3></div>
      <div id="selected-node">{selectedNode ? `Name: ${selectedNode.name}, X: ${selectedNode.x}, Y: ${selectedNode.y}` : 'Click on a node to select it'}</div>

      <ReactDiagram
        initDiagram={initDiagram}
        divClassName='diagram-component'
        nodeDataArray={[
          { key: 0, text: 'Alpha', color: 'lightblue', loc: '0 0' },
          { key: 1, text: 'Beta', color: 'orange', loc: '150 0' },
          { key: 2, text: 'Gamma', color: 'lightgreen', loc: '0 150' },
          { key: 3, text: 'Delta', color: 'pink', loc: '150 150' }
        ]}
        linkDataArray={[
          { key: -1, from: 0, to: 1 },
          { key: -2, from: 0, to: 2 },
          { key: -3, from: 1, to: 1 },
          { key: -4, from: 2, to: 3 },
          { key: -5, from: 3, to: 0 }
        ]}
        onModelChange={handleModelChange}
        onDiagramClick={handleDiagramClick}
      />
    </div>
  );
}
