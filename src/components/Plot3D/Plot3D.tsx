import Plot from "react-plotly.js";

export const Plot3D = () => {
    return (
    <Plot
        data={[
          {
            x: [1, 2, 3, 5, 5.1],
            y: [2, 6, 3, 6, 6],
            z: [1, 3, 12, 1, 1],
            type: "scatter3d",
            mode: "lines",
            marker: { color: "red" },
            opacity: 1,
          },
        ]}
        layout={{
          dragmode: "lasso",
          uirevision: 1,
          // font: { family: "var(--fo-fontFamily-body)", size: 24 },
          showlegend: false,
          width: 600, 
          height: 600,
          hovermode: false,
          xaxis: { showgrid: true, zeroline: false, visible: false },
          yaxis: {
            showgrid: false,
            zeroline: false,
            visible: false,
          },
          autosize: true,
          margin: { t: 40, l: 0, b: 40, r: 0, pad: 0 },
          paper_bgcolor: "rgba(0,0,0,0)",
          plot_bgcolor: "rgba(0,0,0,0)",
        }}
      />
    );
};