import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

const DatePickerFormWithLocalization = ({ apiParams, setApiParams }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
        mb: 3,
        mt: 3,
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            label="Start Date"
            value={apiParams?.startDate}
            onChange={(newDate) => {
              setApiParams({ ...apiParams, startDate: newDate });
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker
            label="End Date"
            value={apiParams?.endDate}
            onChange={(newDate) => {
              setApiParams({ ...apiParams, endDate: newDate });
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <TextField
            id="outlined-basic"
            label="Page url"
            variant="outlined"
            fullWidth
            value={apiParams?.pageUrl}
            onChange={(e) => {
              setApiParams({ ...apiParams, pageUrl: e.target.value });
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
};
DatePickerFormWithLocalization.propTypes = {
  apiParams: PropTypes.shape({
    startDate: PropTypes.object.isRequired,
    endDate: PropTypes.object.isRequired,
    pageUrl: PropTypes.string.isRequired,
  }).isRequired,
  setApiParams: PropTypes.func.isRequired,
};
export default DatePickerFormWithLocalization;
