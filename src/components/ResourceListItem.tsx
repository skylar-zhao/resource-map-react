import PinDropIcon from "@mui/icons-material/PinDrop";

import {
  Chip,
  IconButton,
  Link,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Resource } from "../lib/types";

// ResourceListItem is

// Props:
// - resource: a Resource object containing

// * commented out code is part of the pin feature I didn't get to work

interface ResourceListItemProps {
  resource: Resource;
  isSelected: boolean;
  setSelectedResource: (name: string) => void;
}

const ResourceListItem: React.FC<ResourceListItemProps> = (props) => {
  const { resource, isSelected, setSelectedResource } = props;

  function onClickPinHandler(_event: React.MouseEvent<SVGSVGElement>) {
    setSelectedResource(resource.name);
    // console.log(resource);
  }

  return (
    <ListItem
      key={resource.name}
      id={resource.name}
      secondaryAction={
        <IconButton edge="end">
          <PinDropIcon fontSize="large" onClick={onClickPinHandler} />
        </IconButton>
      }
    >
      <ListItemText
        primary={resource.name + (isSelected ? "selected" : "")}
        secondary={
          <>
            <Typography variant="body2">{resource.address}</Typography>
            <Typography variant="body2">{resource.hours}</Typography>
            <Typography variant="body2">
              <Link variant="body2" href={"tel:" + resource.phone}>
                {resource.phone}
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link variant="body2" href={resource.website}>
                {resource.website}
              </Link>
            </Typography>
            <Typography variant="body2">{resource.description}</Typography>
            {/* maps each category the resource has as a chip */}
            {resource.categories.map((category) => (
              <Chip label={category} size="small"></Chip>
            ))}
          </>
        }
      />
    </ListItem>
  );
};

export default ResourceListItem;
