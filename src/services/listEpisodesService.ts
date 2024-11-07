import { repositoryPodcast } from "../repositories/podcastsRepository";

export const serviceListEpisodes = async () => {
    const data = await repositoryPodcast();
    return data;
}