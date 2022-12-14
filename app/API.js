import { Modal } from "./Modal.js";

export class API {
   /*   static #route = 'https://6308db71722029d9ddda1ab7.mockapi.io/users/';*/
   static #route = 'https://62d4f182cd960e45d45df2e7.mockapi.io/todos/';

    static async getUsers() {
        const response = await fetch(API.#route);
        if (response.ok) {
            const todos = await response.json();
            return todos;
        } else {
            throw new Error(response.statusText);
        }
    }

    static async getUser(id) {
        Modal.addLoaderLayout();

        const response = await fetch(API.#route + id);
        if (response.ok) {
            const user = await response.json();
            setTimeout(Modal.removeLoaderLayout, 1000);

            return user;
        } else {
            throw new Error(response.statusText);
        }
    }

    static async putUser(id, body) {
        const bodyContent = JSON.stringify(body);

        const headersList = {
            "Content-Type": "application/json"
        }
        
        const options = {
            method: 'PUT',
            body: bodyContent,
            headers: headersList
        }
        
        const response = await fetch(API.#route + id, options);
        
        if (response.ok) {
            const user = await response.json();
            return user;
        } else {
            throw new Error(response.statusText);
        }
    }
}