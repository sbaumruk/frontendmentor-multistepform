import { writable, type Writable } from "svelte/store";

export const selectedAddons: Writable<string[]> = writable([])