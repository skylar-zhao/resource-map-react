import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface CategoryFilterProps {
  categories: string[];
  selectedCategories: string[];
  setSelectedCategories: (selectedCategories: string[]) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = (props) => {
  const { categories, selectedCategories, setSelectedCategories } = props;

  function onClickCheckboxHandler(
    event: React.SyntheticEvent<Element, Event>,
    checked: boolean
  ) {
    if (checked) {
      const newCategories = selectedCategories.concat([
        (event.target as HTMLInputElement).name,
      ]);
      setSelectedCategories(newCategories);
    } else {
      const newCategories = selectedCategories.filter(
        (category) => category !== (event.target as HTMLInputElement).name
      );
      setSelectedCategories(newCategories);
    }
  }
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Filters</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <Grid container spacing={1}>
            {categories.map((category) => (
              <Grid item xs={12} sm={6} md={4}>
                <FormControlLabel
                  sx={{ marginRight: 4 }}
                  control={<Checkbox />}
                  label={category}
                  name={category}
                  onChange={onClickCheckboxHandler}
                ></FormControlLabel>
              </Grid>
            ))}
          </Grid>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
export default CategoryFilter;
