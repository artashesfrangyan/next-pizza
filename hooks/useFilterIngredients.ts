import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import { useEffect, useState } from "react";
import { useSet } from "react-use";

interface ReturnProps {
    ingredients: Ingredient[];
    loading: boolean;
    selectedIds: Set<string>;
    onAdd: (id: string) => void;
}

export const useFilterIngredients = (): ReturnProps => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

const [selectedIds, { toggle }] = useSet(new Set<string>([]));    

    useEffect(() => {
        Api.ingredients.getAll()
            .then(setIngredients)
            .catch(console.log)
            .finally(() => setLoading(false));
    }, [])

    return {
        ingredients,
        loading
    }
};