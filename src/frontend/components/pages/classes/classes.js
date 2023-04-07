import React from 'react';
import { Table } from '@mui/material';
import { Button } from '@mui/material';


function Classes() {
  return (<div>
	<h1 align="center">Your Class Details</h1>

<div style={{display: 'flex'}}>
<Table style={{position:"relative", width:"513px"}} class="container" border="5">
  <thead>
	<tr>
	  <th width="244px">Time</th>
	  <th>Saturday</th>
	</tr>
  </thead>
  <tbody>
	<tr>
	  <td>08.30am-10.30am</td>
	  <td> <Button variant="outlined">Nethsara & Pahasara</Button></td>
	</tr>
	<tr>
	  <td>11.00am-01.00pm</td>
	  <td> <Button variant="outlined">Hiruni Medagama</Button></td>
	</tr>
	<tr>
	  <td>02.00pm-04.00pm</td>
	  <td> <Button variant="contained">Available</Button> </td>
	</tr>
	<tr>
	  <td>04.00pm-06.00pm</td>
	  <td> <Button variant="outlined">Sagarika</Button></td>
	</tr>
  </tbody>
</Table>
<div style={{display: 'flex'}}>
<Table style={{position:"relative", width:"513px",right:"159px"}}  class="container" border="5">
  <thead>
	<tr>
	  <th width="244px">Time</th>
	  <th>Sunday</th>
	</tr>
  </thead>
  <tbody>
	<tr>
	  <td>08.30am-10.30am</td>
	  <td> <Button variant="contained">Available</Button> </td>	</tr>
	<tr>
	  <td>10.30am-12.30pm</td>
	  <td> <Button variant="outlined">Sithum </Button></td>
	</tr>
	<tr>
	  <td>02.00pm-04.00pm</td>
	  <td> <Button variant="outlined">Tharushi </Button></td>

	</tr>
	<tr>
	  <td>04.00pm-06.00pm</td>
	  <td><Button variant="contained">Available</Button></td>
	</tr>
  </tbody>
</Table>
</div>
</div>
  </div>

  );
}

export default Classes;
