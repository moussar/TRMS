import { schema } from "normalizr";

export const cards = new schema.Entity("cards");
export const lists = new schema.Entity("lists", { cards: [cards] });
