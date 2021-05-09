import React from 'react';
import { PieChart, Pie, Tooltip} from "recharts";

function GraficasGeneral(props) {
    const data =[
        {name: 'Total de ventas', value: 1000},
        {name: 'Ultimo mes', value:100},
        {name: 'Ultimo año', value:500},
      ]
      return (
        <div className="App">
          <PieChart width={400} height={400}>
         <Pie 
           dataKey="value"
           isAnimationActive={false}
           data={data}
           cx={200}
           cy={200}
           outerRadius={120}
           fill="#8484d8"
           label
           />  
         <Tooltip/>
          </PieChart>
        </div>
      );
}

export default GraficasGeneral;