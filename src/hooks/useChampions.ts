import { ChampionObject } from "../types/championListTypes";
import { useMemo } from "react";

export const useChampions = (champions: ChampionObject[], query: string, sort: string): ChampionObject[] => {

    const sortedChampions = useSortedChampions(champions, sort)
    const sortedAndSearchedChampions = useMemo(() => {
        return sortedChampions.filter(ch => ch.name.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedChampions])
    return sortedAndSearchedChampions
}

const useSortedChampions = (champions: ChampionObject[], sort: string) => {
    const classSortedChampions: any[] = useChampionsClassSorted(champions, sort)
    const sortedChampions = useMemo(() => {
        if(sort){
            return [...classSortedChampions].sort((a, b) => a.name.localeCompare(b.name))
        } else {
            return [...classSortedChampions].sort((a, b) => a.name.localeCompare(b.name))
        }
    }, [champions, sort])
    return sortedChampions
}

const useChampionsClassSorted = (champions: ChampionObject[], sort: string) => {
    const useSortedChampionsByClass = useMemo(() => {
        const champArray: ChampionObject[] = []
        champions.map(ch => {
            if(sort == ''){champArray.push(ch)} else {
                if(ch.role == sort){
                    champArray.push(ch)
                }
            }
        })
        return champArray
    }, [champions, sort])
    return useSortedChampionsByClass
}