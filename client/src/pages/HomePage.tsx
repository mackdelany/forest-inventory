import React, { memo, useState, useEffect } from "react";
import { Form, Dropdown, DropdownButton } from "react-bootstrap";
import ForestCard from "../components/ForestCard";
import apiService from "../apis/ApiService";
import ForestData from "../models/forest";

const HomePage: React.FC = memo(() => {
  const [forestryInventory, setForestryInventory] = useState<
    ForestData[] | undefined
  >();

  useEffect(() => {
    (async (): Promise<void> => {
      const forests = await apiService.getAllForests();
      setForestryInventory(forests);
    })();
  }, []);

  const [forestTypeFilter, setforestTypeFilter] = useState("Forest filter (coming soon)");
  const handleSelect = (e: any) => {
    debugger;
    setforestTypeFilter(e);
  };

  return (
    <div>
      <div className="home-header">
        <Form>
          <Form.Control type="text" placeholder="Search (coming soon)" />
        </Form>
        <DropdownButton
          id="dropdown-basic-button"
          title={forestTypeFilter}
          onSelect={handleSelect}
        >
          <Dropdown.Item eventKey="Forest filter (coming soon)">Forest filter (coming soon)</Dropdown.Item>
          <Dropdown.Item eventKey="Conservation">Conservation</Dropdown.Item>
          <Dropdown.Item eventKey="Restoration">Reforestation</Dropdown.Item>
        </DropdownButton>
      </div>
      <p style={{'textAlign': 'center'}}>🌳 🌲 ⛰️ 🌳 🌲 ⛰️ 🌳 These forests are near and dear to my heart, click one to find out more! 🌳 🌲 ⛰️ 🌳 ⛰️ 🌲 🌳</p>
      <div className="forest-card-container">
        {forestryInventory
          ? forestryInventory.map((f) => <ForestCard {...f} />)
          : "Nothing to see here folks"}
      </div>
    </div>
  );
});

export default HomePage;
