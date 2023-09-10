import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

import dayjs from "dayjs";

import NoData from "./Components/NoData";
import AreaChartResponsive from "./Components/AreaChart";
import DatePickerFormWithLocalization from "./Components/DatePickerFormWithLocalization";

const App = () => {
  const [data, setData] = useState([]);
  const [apiParams, setApiParams] = useState({
    startDate: dayjs("2022-12-14"),
    endDate: dayjs("2022-12-30"),
    pageUrl: "www.example.com/fr",
  });
  const formattedStartDate = apiParams.startDate.format("YYYY-MM-DD");
  const formattedEndDate = apiParams.endDate.format("YYYY-MM-DD");
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/depth-rate?startDate=${formattedStartDate}&endDate=${formattedEndDate}&pageUrl=${apiParams?.pageUrl}`
      )
      .then((response) => {
        // Handle the response data here
        setData(response.data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error:", error);
      });
  }, [apiParams]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <DatePickerFormWithLocalization
        apiParams={apiParams}
        setApiParams={setApiParams}
      />

      {data?.length > 0 ? <AreaChartResponsive data={data} /> : <NoData />}
    </Box>
  );
};

export default App;
