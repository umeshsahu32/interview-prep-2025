import { useState } from "react";
import { checkboxData } from "../../utils/checkboxData";

const Checkbox = ({ checkboxData: data, checkedNode, setCheckedNode }) => {
  const handleChange = (isChecked, node) => {
    setCheckedNode((prev) => {
      const newState = { ...prev, [node.id]: isChecked };
      // {1:true, 2:true, 3:false, 8:true}

      // updateChildren will make sure if we click on any node and that node have any children, then all children node will be checked
      const updateChildren = (node) => {
        node?.children?.forEach((child) => {
          newState[child.id] = isChecked;
          child.children && updateChildren(child);
        });
      };
      updateChildren(node);

      // verifyChecked will validate if we unchecked any children node then parent node will be unchecked || if all children nodes are checked, parent node will also be checked
      const verifyChecked = (node) => {
        if (!node.children) return newState[node.id] || false;

        const allChildrenChecked = node?.children?.every((child) =>
          verifyChecked(child)
        );
        newState[node.id] = allChildrenChecked;
        return allChildrenChecked;
      };
      checkboxData.forEach((node) => verifyChecked(node));
      return newState;
    });
  };

  console.log("checkedNode", checkedNode);

  return (
    <div>
      {data.map((node) => {
        return (
          <div key={node.id} className="pl-5">
            <input
              id={node.name}
              type="checkbox"
              checked={checkedNode[node.id] || false}
              onChange={(e) => handleChange(e.target.checked, node)}
            />
            <label htmlFor={node.name}>{node.name}</label>
            {node?.children && (
              <Checkbox
                checkboxData={node.children}
                checkedNode={checkedNode}
                setCheckedNode={setCheckedNode}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

const NestedCheckbox = () => {
  const [checkedNode, setCheckedNode] = useState({});
  return (
    <div>
      <h1 className="text-4xl font-bold text-sky-700 mb-10">Nested Checkbox</h1>
      <Checkbox
        checkboxData={checkboxData}
        checkedNode={checkedNode}
        setCheckedNode={setCheckedNode}
      />
    </div>
  );
};

export default NestedCheckbox;
