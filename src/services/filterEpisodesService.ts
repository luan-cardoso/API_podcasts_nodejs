import { repositoryPodcast } from "../repositories/podcastsRepository"

export const serviceFilterEpisodes = async (podcastName:string) => {
    const data = await repositoryPodcast(podcastName)
    return data;
}