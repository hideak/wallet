import { Color } from "../color/color";
import { Icon } from "../icon/icon";
import { CategoryType } from "./category-type";

export class Category {
    id?: number;
    name: string;
    type: CategoryType;
    color: Color;
    icon: Icon;
    userId: number;

    private constructor(category: Category) {
        this.id = category.id;
        this.name = category.name;
        this.type = category.type;
        this.color = category.color
        this.icon = category.icon;
        this.userId = category.userId;
    }
}
