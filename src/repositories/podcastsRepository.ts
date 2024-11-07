import fs from 'fs'
import path from 'path'

interface Podcast {
    podcastName:string;
    episode:string;
    videoId:string;
    categories:string[]
}

const pathData = path.join(__dirname, "../repositories/podcasts.json")

export const repositoryPodcast = async (podcastName?:string): Promise<Podcast[]> => {
    const data = fs.readFileSync(pathData, 'utf-8')
    let jsonFile = JSON.parse(data)

    //filtro por nome
    if(podcastName){
        jsonFile = jsonFile.filter((podcast:Podcast) => podcast.podcastName === podcastName)
    }

    return jsonFile;
};