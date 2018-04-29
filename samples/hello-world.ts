import * as _ from 'lodash';
import {buildEntity} from "./buildEntityData";


const colors = ["Orange", "Black", "White"];

const firstColor = _.first(colors);

console.log(firstColor);

const partialAddress = ["Street Name",
    "Street Number", "Po Box"];

const firstName = 'Carlos',
    lastName = 'Calderon';

const personData = {
    firstName,
    lastName
};

const address = [...partialAddress, 'ATT Stadium'];

console.log(buildEntity(personData, address));

