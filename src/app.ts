import "dotenv/config";
import express from "express";
import { router } from "./routes";

const app = express();
app.use(express.json())
app.use(router);

app.set('port', process.env.PORT || 4000);
app.set('host', process.env.HOST || 'localhost');

app.listen(app.get('port'), () => console.log(`🚀 Server is running at http://${app.get('host')}:${app.get('port')}`));