import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcastsController"

const server = http.createServer(
    async (request:http.IncomingMessage, response:http.ServerResponse) => {

        //queryString
        const [baseURL, queryString] = request.url?.split("?") ?? ["", ""];


        //listar podcasts
        if(request.method === "GET" && baseURL === "/api/list"){
           await getListEpisodes(request, response);
        }

        if(request.method === "GET" && baseURL === "/api/episode"){
            await getFilterEpisodes(request, response);
        }
    }
)

const port = process.env.PORT

server.listen(port, () => {
    console.log(`server iniciado port ${port}`);
})