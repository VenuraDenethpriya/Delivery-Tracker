// Create express instance
import express from 'express';
import { shipmentRouter } from './api/shipments.js';
import { carrierRouter } from './api/carriers.js';
import { MatrixRouter } from './api/matrix.js';
// Initiate the express
const app = express();
// Middleware to parse JSON request bodies
app.use(express.json());
// CRUD operations for shipments
app.use('/api/shipments', shipmentRouter);
// CRUD operations for carriers
app.use('/api/carriers', carrierRouter);
// CRUD operations for matrix
app.get('/api/matrix', MatrixRouter);
app.listen(8000, () => console.log(`Server is running on port ${8000}`));
//# sourceMappingURL=index.js.map