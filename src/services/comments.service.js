import { constants } from '../constants';

export const CommentsService = {
    getAllComments: () => fetch(constants.apiUrl + 'comments').then(value => value.json())
}