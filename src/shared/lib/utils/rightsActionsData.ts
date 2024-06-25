import {IRights, rightsActionsMap, RightsTypes} from "@/shared/lib";
import { rightsActionsData as actions } from "@/entities/admin/rightAction";

export const rightsActionsData = (data: any) => {
    if (!data) {
        return actions;
    }

    const values: IRights[] = Object.entries(data)
        .reduce<IRights[]>((acc, [key, value]) => {
            const title = rightsActionsMap[key as keyof RightsTypes];
            if (title) {
                acc.push({ name: key, title: title, value: value as string });
            }
            return acc
        }, []);

    return values
};