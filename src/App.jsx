import { Box } from "@mui/material";
import React, { useState, useRef } from "react";
import CategoryFilter from "./components/CategoryFilter";
import Header from "./components/Header";
import Map from "./components/Map";
import ResourceList from "./components/ResourceList";

import resourceData from "./lib/resourceData.json";

// global state
// selected result uses state
//

// data parsing---------------------------------------------------------

// getting the categories from the JSON file
function getCategories() {
  var allCategories = [];
  for (let resource of resourceData) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    //
    for (let category of resource?.categories) {
      //if the array doesn't already have a category, push it into the array
      if (!allCategories.includes(category)) {
        allCategories.push(category);
      }
    }
  }
  return allCategories;
}

// commented out code is part of the pin feature I didn't get to work
const App = () => {
  const categories = getCategories();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedResource, setSelectedResource] = useState("");

  let filteredList = [];
  if (selectedCategories.length > 0) {
    // filter method for determinig whether the resouece is included or not
    filteredList = resourceData.filter((resource) => {
      for (const category of selectedCategories) {
        // If the current resource's categories array doesn't include the current category in the selectedCategories array,
        // the function returns false & current resource should be excluded from the filteredList
        if (!resource.categories.includes(category)) {
          return false;
        }
      }
      // else the resource should have that category and should be included
      return true;
    });
  } else {
    // show every resource if no category is selected
    filteredList = resourceData;
  }

  // for scrolling into view

  return (
    <Box display={"flex"} flexDirection="column" height="100vh">
      <Header />
      <Box
        display={"flex"}
        flexDirection="row"
        height="100%"
        position="relative"
      >
        <Box display={"flex"} flexDirection="column" flex={1} height="100%">
          <CategoryFilter
            categories={categories}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
          <ResourceList
            resources={filteredList}
            selectedResource={selectedResource}
            setSelectedResource={setSelectedResource}
          />
        </Box>
        <Map
          resources={filteredList}
          selectedResource={selectedResource}
          setSelectedResource={setSelectedResource}
        />
      </Box>
    </Box>
  );
};

export default App;
