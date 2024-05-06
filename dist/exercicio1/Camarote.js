"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ingresso_1 = __importDefault(require("./Ingresso"));
class Camarote extends Ingresso_1.default {
    constructor(valorAdicional, valorIngresso) {
        super(valorIngresso);
        this.valorAdicional = valorAdicional;
    }
    imprimeValor() {
        console.log(this.valorAdicional + this.valor);
    }
}
exports.default = Camarote;
