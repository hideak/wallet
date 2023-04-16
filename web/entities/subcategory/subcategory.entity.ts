import { Color } from "../color/color.enum";
import { Icon } from "../icon/icon.enum";

export class Subcategory {
    id?: number;
    name: string;
    color: Color;
    icon: Icon;
    categoryId: number;

    private constructor(subcategory: Subcategory) {
        this.id = subcategory.id;
        this.name = subcategory.name;
        this.color = subcategory.color
        this.icon = subcategory.icon;
        this.categoryId = subcategory.categoryId;
    }
}
