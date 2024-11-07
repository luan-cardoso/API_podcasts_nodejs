import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/listEpisodesService';
import { serviceFilterEpisodes } from '../services/filterEpisodesService';

//lista de todos
export const getListEpisodes = async (request:IncomingMessage, response:ServerResponse) => {
    
    const content = await serviceListEpisodes();

    response.writeHead(200, {"content-type": "application/json"});
    response.end(JSON.stringify(content));
};

//lista filtrado 
export const getFilterEpisodes = async (
    request: IncomingMessage,
    response: ServerResponse
) => {

    const queryString = request.url?.split("?p=")[1] || "";

    const content = await serviceFilterEpisodes(queryString);

    response.writeHead(200, {"content-type": "application/json"});
    response.end(JSON.stringify(content));
};