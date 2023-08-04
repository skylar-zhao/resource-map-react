import { Divider, List } from "@mui/material";
import ResourceListItem from "./ResourceListItem";

const ResourceList = (props) => {
  const { resources, selectedResource, setSelectedResource } = props;
  return (
    <List sx={{ maxHeight: "100%", overflowY: "scroll", overflowX: "none" }}>
      {resources.map((resource, i) => (
        <>
          <Divider />
          <ResourceListItem
            resource={resource}
            key={resource.name}
            selectedListItem={selectedResource === resource.name}
            setSelectedResource={setSelectedResource}
          />
        </>
      ))}
    </List>
  );
};

export default ResourceList;
