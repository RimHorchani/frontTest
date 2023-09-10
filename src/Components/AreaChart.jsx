import {
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

const AreaChartResponsive = ({ data }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: { xs: "100%", sm: "80%" },
      }}
    >
      <ResponsiveContainer width="100%" height={500}>
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="Date" />
          <YAxis yAxisId={"left"} />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="DepthRate"
            yAxisId={"left"}
            stroke="#0096FF"
            strokeWidth={3}
            fill="#F0FFFF	"
            activeDot={{ r: 8 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};
AreaChartResponsive.propTypes = {
  data: PropTypes.array.isRequired,
};
export default AreaChartResponsive;
